/*
 * @Date: 2021-03-14 14:15:52
 * @LastEditors: lisonge
 * @Author: lisonge
 * @LastEditTime: 2021-03-23 15:10:38
 */
// 此代码必须在使用 fetch 之前运行
const constantMock = window.fetch;
const matchSearch = (target: string) => {
  return /\/ajax\/search\/(artworks|illustrations|manga|novels|top)\/(.*)/.test(
    target
  );
};
window.fetch = function (input, init?) {
  if (typeof input === 'string' && matchSearch(input)) {
    const url = new URL(location.origin + input);
    url.searchParams.set('order', 'popular_d');
    input = `https://proud-surf-e590.zhuzemin.workers.dev/ajax/${url.href}`;
  }
  return constantMock(input, init);
};
