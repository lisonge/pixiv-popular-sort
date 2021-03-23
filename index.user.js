// ==UserScript==
// @name              pixiv-popular-sort
// @name:zh           pixiv-热度排序
// @description       non premium menber use "Sort by popularity"
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

(()=>{"use strict";const t=window.fetch;window.fetch=function(r,e){if("string"==typeof r&&/\/ajax\/search\/(artworks|illustrations|manga|novels|top)\/(.*)/.test(r)){const t=new URL(location.origin+r);t.searchParams.set("order","popular_d"),r=`https://proud-surf-e590.zhuzemin.workers.dev/ajax/${t.href}`}return t(r,e)}})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YW1wZXJtb25rZXktd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJjb25zdGFudE1vY2siLCJ3aW5kb3ciLCJmZXRjaCIsImlucHV0IiwiaW5pdCIsInRlc3QiLCJ1cmwiLCJVUkwiLCJsb2NhdGlvbiIsIm9yaWdpbiIsInNlYXJjaFBhcmFtcyIsInNldCIsImhyZWYiXSwibWFwcGluZ3MiOiJtQkFPQSxNQUFNQSxFQUFlQyxPQUFPQyxNQU01QkQsT0FBT0MsTUFBUSxTQUFVQyxFQUFPQyxHQUM5QixHQUFxQixpQkFBVkQsR0FMSixrRUFBa0VFLEtBSzVCRixHQUFRLENBQ25ELE1BQU1HLEVBQU0sSUFBSUMsSUFBSUMsU0FBU0MsT0FBU04sR0FDdENHLEVBQUlJLGFBQWFDLElBQUksUUFBUyxhQUM5QlIsRUFBUSxxREFBcURHLEVBQUlNLE9BRW5FLE9BQU9aLEVBQWFHLEVBQU9DLEsiLCJmaWxlIjoiaW5kZXgudXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEBEYXRlOiAyMDIxLTAzLTE0IDE0OjE1OjUyXHJcbiAqIEBMYXN0RWRpdG9yczogbGlzb25nZVxyXG4gKiBAQXV0aG9yOiBsaXNvbmdlXHJcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjEtMDMtMjMgMTU6MTA6MzhcclxuICovXHJcbi8vIOatpOS7o+eggeW/hemhu+WcqOS9v+eUqCBmZXRjaCDkuYvliY3ov5DooYxcclxuY29uc3QgY29uc3RhbnRNb2NrID0gd2luZG93LmZldGNoO1xyXG5jb25zdCBtYXRjaFNlYXJjaCA9ICh0YXJnZXQ6IHN0cmluZykgPT4ge1xyXG4gIHJldHVybiAvXFwvYWpheFxcL3NlYXJjaFxcLyhhcnR3b3Jrc3xpbGx1c3RyYXRpb25zfG1hbmdhfG5vdmVsc3x0b3ApXFwvKC4qKS8udGVzdChcclxuICAgIHRhcmdldFxyXG4gICk7XHJcbn07XHJcbndpbmRvdy5mZXRjaCA9IGZ1bmN0aW9uIChpbnB1dCwgaW5pdD8pIHtcclxuICBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJyAmJiBtYXRjaFNlYXJjaChpbnB1dCkpIHtcclxuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwobG9jYXRpb24ub3JpZ2luICsgaW5wdXQpO1xyXG4gICAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ29yZGVyJywgJ3BvcHVsYXJfZCcpO1xyXG4gICAgaW5wdXQgPSBgaHR0cHM6Ly9wcm91ZC1zdXJmLWU1OTAuemh1emVtaW4ud29ya2Vycy5kZXYvYWpheC8ke3VybC5ocmVmfWA7XHJcbiAgfVxyXG4gIHJldHVybiBjb25zdGFudE1vY2soaW5wdXQsIGluaXQpO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9