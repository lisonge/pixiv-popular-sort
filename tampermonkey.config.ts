/*
 * @Date: 2021-03-14 14:16:30
 * @LastEditors: lisonge
 * @Author: lisonge
 * @LastEditTime: 2021-05-05 00:32:35
 */
import { Options } from 'tampermonkey-webpack-plugin';

export default {
  minAlignSpace: 4,
  header: {
    author: 'lisonge',
    name: [
      'pixiv-热度排序',
      ['en', 'pixiv-popular-sort-hot'],
      ['zh', 'pixiv-热度排序'],
    ],
    description: [
      '让非会员也能搜索结果按热度排序',
      ['en', 'non premium menber use "Sort by popularity"'],
      ['zh', '让非会员也能搜索结果按热度排序'],
    ],
    namespace: 'https://dev.songe.li/',
    icon: 'https://www.pixiv.net/favicon.ico',
    version: '1.0.1',
    match: ['https://www.pixiv.net/*'],
    grant: null,
    source: 'https://github.com/lisonge/pixiv-popular-sort.git',
    'run-at': 'document-start',
  },
  devServer: {
    proxyUserJsFileName: 'dev-server-proxy.user.js',
  },
} as Options;
