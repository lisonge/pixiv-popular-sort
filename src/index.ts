/*
 * @Date: 2021-03-14 14:15:52
 * @LastEditors: lisonge
 * @Author: lisonge
 * @LastEditTime: 2021-05-05 00:29:59
 */
// 此代码必须在使用 fetch/xhr 之前运行
const matchSearch = (target: string) => {
  const isMatch = [
    /^\/ajax\/search\/(artworks|illustrations|manga|novels|top)\/(.*)/,
    /^\/ajax\/contest\/(\w+)\/entries(.*)/,
    /^\/ajax\/novel\/contest\/(\w+)\/entries(.*)/,
  ].some((r) => r.test(target));
  console.log([isMatch, target]);
  return isMatch;
};

function generateUrl(u: URL): string {
  u.searchParams.set('order', 'popular_d');
  const result = `https://proud-surf-e590.zhuzemin.workers.dev/ajax/${u.href}`;
  return result;
}

const mockFetch = window.fetch;
window.fetch = async function (input, init?): Promise<Response> {
  let input2 = input;
  if (typeof input2 === 'string' && matchSearch(input2)) {
    const u = new URL(location.origin + input2);
    input2 = generateUrl(u);
    const resp = await mockFetch.call(this, input2, init);
    if (!resp.ok) {
      return await mockFetch.call(this, input, init);
    }
    const resp2 = resp.clone();
    try {
      const result = (await resp.json()) as { error: boolean };
      if (result.error === false) {
        return resp2;
      } else {
        console.log(['error', input2, result]);
      }
    } catch (e) {
      console.log(['error', input2, e]);
    }
  }
  return await mockFetch.call(this, input, init);
};

const mockXhrOpen = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function (
  method: string,
  url: string,
  async: boolean = true,
  username?: string | null,
  password?: string | null
) {
  let url2 = url;
  if (matchSearch(url)) {
    const u = new URL(location.origin + url);
    url2 = generateUrl(u);
    try {
      return mockXhrOpen.call(this, method, url2, async, username, password);
    } catch (e) {
      console.log(['error', e]);
    }
  }
  return mockXhrOpen.call(this, method, url, async, username, password);
};

console.log('insert success');
