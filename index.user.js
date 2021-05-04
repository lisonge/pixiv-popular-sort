// ==UserScript==
// @name              pixiv-热度排序
// @name:en           pixiv-popular-sort-hot
// @name:zh           pixiv-热度排序
// @description       让非会员也能搜索结果按热度排序
// @description:en    non premium menber use "Sort by popularity"
// @description:zh    让非会员也能搜索结果按热度排序
// @match             https://www.pixiv.net/*
// @grant             none
// @author            lisonge
// @namespace         https://dev.songe.li/
// @icon              https://www.pixiv.net/favicon.ico
// @version           1.0.1
// @source            https://github.com/lisonge/pixiv-popular-sort.git
// @run-at            document-start
// ==/UserScript==

(()=>{"use strict";({55:function(){var t=this&&this.__awaiter||function(t,n,o,e){return new(o||(o=Promise))((function(r,c){function s(t){try{l(e.next(t))}catch(t){c(t)}}function i(t){try{l(e.throw(t))}catch(t){c(t)}}function l(t){var n;t.done?r(t.value):(n=t.value,n instanceof o?n:new o((function(t){t(n)}))).then(s,i)}l((e=e.apply(t,n||[])).next())}))};const n=t=>{const n=[/^\/ajax\/search\/(artworks|illustrations|manga|novels|top)\/(.*)/,/^\/ajax\/contest\/(\w+)\/entries(.*)/,/^\/ajax\/novel\/contest\/(\w+)\/entries(.*)/].some((n=>n.test(t)));return console.log([n,t]),n};function o(t){return t.searchParams.set("order","popular_d"),`https://proud-surf-e590.zhuzemin.workers.dev/ajax/${t.href}`}const e=window.fetch;window.fetch=function(r,c){return t(this,void 0,void 0,(function*(){let t=r;if("string"==typeof t&&n(t)){t=o(new URL(location.origin+t));const n=yield e.call(this,t,c);if(!n.ok)return yield e.call(this,r,c);const s=n.clone();try{const o=yield n.json();if(!1===o.error)return s;console.log(["error",t,o])}catch(n){console.log(["error",t,n])}}return yield e.call(this,r,c)}))};const r=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(t,e,c=!0,s,i){let l=e;if(n(e)){l=o(new URL(location.origin+e));try{return r.call(this,t,l,c,s,i)}catch(t){console.log(["error",t])}}return r.call(this,t,e,c,s,i)},console.log("insert success")}})[55]()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YW1wZXJtb25rZXktd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsibWF0Y2hTZWFyY2giLCJ0YXJnZXQiLCJpc01hdGNoIiwic29tZSIsInIiLCJ0ZXN0IiwiY29uc29sZSIsImxvZyIsImdlbmVyYXRlVXJsIiwidSIsInNlYXJjaFBhcmFtcyIsInNldCIsImhyZWYiLCJtb2NrRmV0Y2giLCJ3aW5kb3ciLCJmZXRjaCIsImlucHV0IiwiaW5pdCIsImlucHV0MiIsIlVSTCIsImxvY2F0aW9uIiwib3JpZ2luIiwicmVzcCIsImNhbGwiLCJ0aGlzIiwib2siLCJyZXNwMiIsImNsb25lIiwicmVzdWx0IiwianNvbiIsImVycm9yIiwiZSIsIm1vY2tYaHJPcGVuIiwiWE1MSHR0cFJlcXVlc3QiLCJwcm90b3R5cGUiLCJvcGVuIiwibWV0aG9kIiwidXJsIiwiYXN5bmMiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidXJsMiJdLCJtYXBwaW5ncyI6Im1XQU9BLE1BQU1BLEVBQWVDLElBQ25CLE1BQU1DLEVBQVUsQ0FDZCxtRUFDQSx1Q0FDQSwrQ0FDQUMsTUFBTUMsR0FBTUEsRUFBRUMsS0FBS0osS0FFckIsT0FEQUssUUFBUUMsSUFBSSxDQUFDTCxFQUFTRCxJQUNmQyxHQUdULFNBQVNNLEVBQVlDLEdBR25CLE9BRkFBLEVBQUVDLGFBQWFDLElBQUksUUFBUyxhQUNiLHFEQUFxREYsRUFBRUcsT0FJeEUsTUFBTUMsRUFBWUMsT0FBT0MsTUFDekJELE9BQU9DLE1BQVEsU0FBZ0JDLEVBQU9DLEcseUNBQ3BDLElBQUlDLEVBQVNGLEVBQ2IsR0FBc0IsaUJBQVhFLEdBQXVCbEIsRUFBWWtCLEdBQVMsQ0FFckRBLEVBQVNWLEVBREMsSUFBSVcsSUFBSUMsU0FBU0MsT0FBU0gsSUFFcEMsTUFBTUksUUFBYVQsRUFBVVUsS0FBS0MsS0FBTU4sRUFBUUQsR0FDaEQsSUFBS0ssRUFBS0csR0FDUixhQUFhWixFQUFVVSxLQUFLQyxLQUFNUixFQUFPQyxHQUUzQyxNQUFNUyxFQUFRSixFQUFLSyxRQUNuQixJQUNFLE1BQU1DLFFBQWdCTixFQUFLTyxPQUMzQixJQUFxQixJQUFqQkQsRUFBT0UsTUFDVCxPQUFPSixFQUVQcEIsUUFBUUMsSUFBSSxDQUFDLFFBQVNXLEVBQVFVLElBRWhDLE1BQU9HLEdBQ1B6QixRQUFRQyxJQUFJLENBQUMsUUFBU1csRUFBUWEsS0FHbEMsYUFBYWxCLEVBQVVVLEtBQUtDLEtBQU1SLEVBQU9DLE9BRzNDLE1BQU1lLEVBQWNDLGVBQWVDLFVBQVVDLEtBQzdDRixlQUFlQyxVQUFVQyxLQUFPLFNBQzlCQyxFQUNBQyxFQUNBQyxHQUFpQixFQUNqQkMsRUFDQUMsR0FFQSxJQUFJQyxFQUFPSixFQUNYLEdBQUlyQyxFQUFZcUMsR0FBTSxDQUVwQkksRUFBT2pDLEVBREcsSUFBSVcsSUFBSUMsU0FBU0MsT0FBU2dCLElBRXBDLElBQ0UsT0FBT0wsRUFBWVQsS0FBS0MsS0FBTVksRUFBUUssRUFBTUgsRUFBT0MsRUFBVUMsR0FDN0QsTUFBT1QsR0FDUHpCLFFBQVFDLElBQUksQ0FBQyxRQUFTd0IsS0FHMUIsT0FBT0MsRUFBWVQsS0FBS0MsS0FBTVksRUFBUUMsRUFBS0MsRUFBT0MsRUFBVUMsSUFHOURsQyxRQUFRQyxJQUFJLHFCQ2pFUSxPIiwiZmlsZSI6ImluZGV4LnVzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBARGF0ZTogMjAyMS0wMy0xNCAxNDoxNTo1MlxyXG4gKiBATGFzdEVkaXRvcnM6IGxpc29uZ2VcclxuICogQEF1dGhvcjogbGlzb25nZVxyXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIxLTA1LTA1IDAwOjI5OjU5XHJcbiAqL1xyXG4vLyDmraTku6PnoIHlv4XpobvlnKjkvb/nlKggZmV0Y2gveGhyIOS5i+WJjei/kOihjFxyXG5jb25zdCBtYXRjaFNlYXJjaCA9ICh0YXJnZXQ6IHN0cmluZykgPT4ge1xyXG4gIGNvbnN0IGlzTWF0Y2ggPSBbXHJcbiAgICAvXlxcL2FqYXhcXC9zZWFyY2hcXC8oYXJ0d29ya3N8aWxsdXN0cmF0aW9uc3xtYW5nYXxub3ZlbHN8dG9wKVxcLyguKikvLFxyXG4gICAgL15cXC9hamF4XFwvY29udGVzdFxcLyhcXHcrKVxcL2VudHJpZXMoLiopLyxcclxuICAgIC9eXFwvYWpheFxcL25vdmVsXFwvY29udGVzdFxcLyhcXHcrKVxcL2VudHJpZXMoLiopLyxcclxuICBdLnNvbWUoKHIpID0+IHIudGVzdCh0YXJnZXQpKTtcclxuICBjb25zb2xlLmxvZyhbaXNNYXRjaCwgdGFyZ2V0XSk7XHJcbiAgcmV0dXJuIGlzTWF0Y2g7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZVVybCh1OiBVUkwpOiBzdHJpbmcge1xyXG4gIHUuc2VhcmNoUGFyYW1zLnNldCgnb3JkZXInLCAncG9wdWxhcl9kJyk7XHJcbiAgY29uc3QgcmVzdWx0ID0gYGh0dHBzOi8vcHJvdWQtc3VyZi1lNTkwLnpodXplbWluLndvcmtlcnMuZGV2L2FqYXgvJHt1LmhyZWZ9YDtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5jb25zdCBtb2NrRmV0Y2ggPSB3aW5kb3cuZmV0Y2g7XHJcbndpbmRvdy5mZXRjaCA9IGFzeW5jIGZ1bmN0aW9uIChpbnB1dCwgaW5pdD8pOiBQcm9taXNlPFJlc3BvbnNlPiB7XHJcbiAgbGV0IGlucHV0MiA9IGlucHV0O1xyXG4gIGlmICh0eXBlb2YgaW5wdXQyID09PSAnc3RyaW5nJyAmJiBtYXRjaFNlYXJjaChpbnB1dDIpKSB7XHJcbiAgICBjb25zdCB1ID0gbmV3IFVSTChsb2NhdGlvbi5vcmlnaW4gKyBpbnB1dDIpO1xyXG4gICAgaW5wdXQyID0gZ2VuZXJhdGVVcmwodSk7XHJcbiAgICBjb25zdCByZXNwID0gYXdhaXQgbW9ja0ZldGNoLmNhbGwodGhpcywgaW5wdXQyLCBpbml0KTtcclxuICAgIGlmICghcmVzcC5vaykge1xyXG4gICAgICByZXR1cm4gYXdhaXQgbW9ja0ZldGNoLmNhbGwodGhpcywgaW5wdXQsIGluaXQpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzcDIgPSByZXNwLmNsb25lKCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSAoYXdhaXQgcmVzcC5qc29uKCkpIGFzIHsgZXJyb3I6IGJvb2xlYW4gfTtcclxuICAgICAgaWYgKHJlc3VsdC5lcnJvciA9PT0gZmFsc2UpIHtcclxuICAgICAgICByZXR1cm4gcmVzcDI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coWydlcnJvcicsIGlucHV0MiwgcmVzdWx0XSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coWydlcnJvcicsIGlucHV0MiwgZV0pO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gYXdhaXQgbW9ja0ZldGNoLmNhbGwodGhpcywgaW5wdXQsIGluaXQpO1xyXG59O1xyXG5cclxuY29uc3QgbW9ja1hock9wZW4gPSBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUub3BlbjtcclxuWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoXHJcbiAgbWV0aG9kOiBzdHJpbmcsXHJcbiAgdXJsOiBzdHJpbmcsXHJcbiAgYXN5bmM6IGJvb2xlYW4gPSB0cnVlLFxyXG4gIHVzZXJuYW1lPzogc3RyaW5nIHwgbnVsbCxcclxuICBwYXNzd29yZD86IHN0cmluZyB8IG51bGxcclxuKSB7XHJcbiAgbGV0IHVybDIgPSB1cmw7XHJcbiAgaWYgKG1hdGNoU2VhcmNoKHVybCkpIHtcclxuICAgIGNvbnN0IHUgPSBuZXcgVVJMKGxvY2F0aW9uLm9yaWdpbiArIHVybCk7XHJcbiAgICB1cmwyID0gZ2VuZXJhdGVVcmwodSk7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gbW9ja1hock9wZW4uY2FsbCh0aGlzLCBtZXRob2QsIHVybDIsIGFzeW5jLCB1c2VybmFtZSwgcGFzc3dvcmQpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhbJ2Vycm9yJywgZV0pO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbW9ja1hock9wZW4uY2FsbCh0aGlzLCBtZXRob2QsIHVybCwgYXN5bmMsIHVzZXJuYW1lLCBwYXNzd29yZCk7XHJcbn07XHJcblxyXG5jb25zb2xlLmxvZygnaW5zZXJ0IHN1Y2Nlc3MnKTtcclxuIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSB7fTtcbl9fd2VicGFja19tb2R1bGVzX19bNTVdKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9
