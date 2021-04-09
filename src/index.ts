/*
 * @Date: 2021-03-14 14:15:52
 * @LastEditors: lisonge
 * @Author: lisonge
 * @LastEditTime: 2021-04-04 22:36:32
 */
// 此代码必须在使用 fetch/xhr 之前运行
const matchSearch = (target: string) => {
  return [
    /^\/ajax\/search\/(artworks|illustrations|manga|novels|top)\/(.*)/,
    /^\/ajax\/contest\/(\w+)\/entries(.*)/,
  ].some((r) => r.test(target));
};

const mockFetch = window.fetch;
window.fetch = function (input, init?) {
  if (typeof input === 'string' && matchSearch(input)) {
    const u = new URL(location.origin + input);
    u.searchParams.set('order', 'popular_d');
    input = `https://proud-surf-e590.zhuzemin.workers.dev/ajax/${u.href}`;
  }
  return mockFetch(input, init);
};

const mockXhrOpen = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function (
  method: string,
  url: string,
  async: boolean = true,
  username?: string | null,
  password?: string | null
) {
  if (matchSearch(url)) {
    const u = new URL(location.origin + url);
    u.searchParams.set('order', 'popular_d');
    url = `https://proud-surf-e590.zhuzemin.workers.dev/ajax/${u.href}`;
  }
  return mockXhrOpen(method, url, async, username, password);
};
