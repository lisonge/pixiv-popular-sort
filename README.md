<!--
 * @Date: 2021-03-14 17:01:02
 * @LastEditors: lisonge
 * @Author: lisonge
 * @LastEditTime: 2021-05-05 01:01:11
-->

# pixiv-popular

非高级会员也能使用按热度排序

[安装插件](https://greasyfork.org/zh-CN/scripts/423826)，安装完毕后刷新一下 pixiv 的页面

然后搜索任意关键词，你会发现返回的结果是已经按热度排序好的

如果后端接口支持，则可以拦截任意按热度排序接口

## bug

实际使用过程中发现会员 api 接口会出现以下 bug

- cloudflare 次数用完，北京时间 `08:00/24小时制` 次数重置，可正常使用

- 返回的结果是未排序的，概率复现，后端接口问题，我无法解决

- 返回的结果显示不正确的请求，概率复现，后端接口问题，我无法解决

## thanks

感谢此仓库 <https://github.com/zhuzemin/pixiv_sort_by_popularity.git> 提供的**高级会员api**
