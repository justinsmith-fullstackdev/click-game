"use strict";var precacheConfig=[["/click-game/index.html","539e11c7c70b190b676c1ae652065fe4"],["/click-game/static/css/main.687272f5.css","f6524080b67d9e0c38aac4742242b133"],["/click-game/static/js/main.3431913d.js","f1616212671ca0539b21679883e9e609"],["/click-game/static/media/balrog.16230ba3.gif","16230ba3d9ef063e308ffd458d04c2dc"],["/click-game/static/media/chunli.5c706203.gif","5c70620334a77b2d6f8e1f73fcce1ec0"],["/click-game/static/media/dhalsim.6d59809e.gif","6d59809ed6e58cdd571b328d75687d48"],["/click-game/static/media/ehonda.417b222d.gif","417b222d9c1a93563c42163b9499f478"],["/click-game/static/media/guile.d523bbbf.gif","d523bbbfeab7742157a2002a3dcb2ec0"],["/click-game/static/media/ken.822b2b7f.gif","822b2b7faf3ddfd8543313cfe223afd5"],["/click-game/static/media/mbison.b017d6da.gif","b017d6da0d1fe4ffa2e45461e62f80a8"],["/click-game/static/media/ryu.8f989fd6.gif","8f989fd61e2ecb9b755239af3304a149"],["/click-game/static/media/sagat.117c6a03.gif","117c6a034a0f52078cf9f82ecbd53144"],["/click-game/static/media/vega.74cf94a2.gif","74cf94a2709548697c9cda08d0a31ce3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var c="/click-game/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(c,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});