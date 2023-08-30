/*! paywallModals master; build: #42 */!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s=1)}([function(e,n){e.exports=function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}},function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r);function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}if(!window.paywallModal){var c=document.currentScript?document.currentScript.src:document.querySelector('script[src*="paywallModal.js"]').src,l={show:function(){var e=document.createElement("div");e.setAttribute("id","paywallModalLoader"),e.innerHTML='\n        <style type="text/css">\n        .loader {\n          display: block;\n          position: fixed;\n          top: 50%;\n          left: 50%;\n          z-index: 1000;\n          margin: -30px 0 0 -30px;\n          width: 60px;\n          height: 60px;\n          font-size: 0;\n          animation: rotation 900ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n        }\n  \n        .loader.is-active {\n          display: block;\n        }\n  \n        @keyframes rotation {\n          from {\n            transform: rotate(0deg);\n          }\n          \n          to {\n            transform: rotate(360deg);\n          }\n        }\n        </style>\n        <div class="loader">\n          <svg id="colored--48--loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100%" height="100%">\n            <g fill="none" fillRule="evenodd">\n              <path d="M48 24c0 13.255-10.745 24-24 24S0 37.255 0 24 10.745 0 24 0s24 10.745 24 24" />\n              <path fill="#F68F1E" d="M17.573 45.171c-2.08-.622-4.09-1.504-5.938-2.672A24.675 24.675 0 0 1 6.7 38.193a24.41 24.41 0 0 1-3.491-5.583c-.88-2.03-1.427-4.192-1.727-6.393a24.985 24.985 0 0 1 .202-6.654c.43-2.191 1.124-4.339 2.139-6.346A25.274 25.274 0 0 1 7.73 7.736a25.444 25.444 0 0 1 5.363-4.129c1.989-1.1 4.144-1.887 6.366-2.408C21.698.734 23.995.596 26.285.74c2.282.224 4.549.711 6.703 1.551a25.525 25.525 0 0 1 5.994 3.448 26.054 26.054 0 0 1 4.758 5.066c1.319 1.925 2.348 4.044 3.1 6.265.714 2.239 1.063 4.578 1.155 6.93a2.001 2.001 0 0 1-3.998.157 7.124 7.124 0 0 1-.002-.157c-.01-1.965-.218-3.935-.744-5.842-.564-1.891-1.36-3.72-2.42-5.406a22.689 22.689 0 0 0-3.912-4.502 22.48 22.48 0 0 0-5.08-3.188c-1.848-.803-3.815-1.304-5.821-1.584a22.966 22.966 0 0 0-6.072.173c-1.997.392-3.956 1.017-5.79 1.94a23.274 23.274 0 0 0-5.01 3.56 23.401 23.401 0 0 0-3.78 4.892c-1.008 1.816-1.727 3.782-2.21 5.811-.427 2.043-.556 4.145-.43 6.242.205 2.087.643 4.16 1.407 6.131a23.568 23.568 0 0 0 3.147 5.49 24.022 24.022 0 0 0 4.633 4.366c1.762 1.21 3.7 2.154 5.732 2.848 2.049.656 4.19.977 6.35 1.069-2.16-.009-4.326-.247-6.422-.829z" />\n              <path fill="#F68F1E" d="M17.573 45.171c-2.08-.622-4.09-1.504-5.938-2.672A24.675 24.675 0 0 1 6.7 38.193a24.41 24.41 0 0 1-3.491-5.583c-.88-2.03-1.427-4.192-1.727-6.393a24.985 24.985 0 0 1 .202-6.654c.43-2.191 1.124-4.339 2.139-6.346A25.274 25.274 0 0 1 7.73 7.736a25.444 25.444 0 0 1 5.363-4.129c1.989-1.1 4.144-1.887 6.366-2.408C21.698.734 23.995.596 26.285.74c2.282.224 4.549.711 6.703 1.551a25.525 25.525 0 0 1 5.994 3.448 26.054 26.054 0 0 1 4.758 5.066c1.319 1.925 2.348 4.044 3.1 6.265.714 2.239 1.063 4.578 1.155 6.93a2.001 2.001 0 0 1-3.998.157 7.124 7.124 0 0 1-.002-.157c-.01-1.965-.218-3.935-.744-5.842-.564-1.891-1.36-3.72-2.42-5.406a22.689 22.689 0 0 0-3.912-4.502 22.48 22.48 0 0 0-5.08-3.188c-1.848-.803-3.815-1.304-5.821-1.584a22.966 22.966 0 0 0-6.072.173c-1.997.392-3.956 1.017-5.79 1.94a23.274 23.274 0 0 0-5.01 3.56 23.401 23.401 0 0 0-3.78 4.892c-1.008 1.816-1.727 3.782-2.21 5.811-.427 2.043-.556 4.145-.43 6.242.205 2.087.643 4.16 1.407 6.131a23.568 23.568 0 0 0 3.147 5.49 24.022 24.022 0 0 0 4.633 4.366c1.762 1.21 3.7 2.154 5.732 2.848 2.049.656 4.19.977 6.35 1.069-2.16-.009-4.326-.247-6.422-.829z" />\n            </g>\n          </svg>\n        </div>\n      ',document.body.appendChild(e)},hide:function(){var e=document.getElementById("paywallModalLoader");e&&e.parentNode.removeChild(e)}};window.paywallModal={_getScriptPath:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e.indexOf("http")>-1)return e;var n=c.replace(/\/paywallModal[a-zA-Z]*\.js.*/,"");return"".concat(n).concat(e)},setConfig:function(e){return this._config=e,!0},open:function(e){var n=this;if(this._modalPromise)return this._modalPromise.promise;var t=new Promise((function(t,r){if(!n._config)return r(new Error("Please provide config by call window.paywallModal.setConfig before open modal."));n._modalPromise={resolve:t,reject:r};var o=e.showLoader,a=void 0===o||o;a&&l.show();var d,s=/\?.+/g,u=window.React&&window.React.version.split(".")[0]>15?"paywallModalsGeneral":"paywallModalsReactIncluded",f=c.search(s)>-1?c.match(s)[0]:"",p=n._getScriptPath("/".concat(u,".js").concat(f)),w=n._config.userId;(d={src:p},new Promise((function(e,n){var t=document.createElement("script");t.type="text/javascript",t.async=!0,Object.assign(t,d);var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(t,r),t.addEventListener("load",(function(){e(t)})),t.addEventListener("error",(function(){n(new Error("".concat(d.src," failed to load.")))}))}))).then((function(){return window.paywallModal.mount(n._config)})).then((function(){delete window.paywallModal.mount,delete window.paywallModal._config,delete window.paywallModal._modalPromise,window.paywallModal.setConfig=function(){return!1},window.paywallModal.open(i(i({},e),{},{showLoader:a,userId:w}))})).catch(r).finally((function(){a&&l.hide()}))}));return this._modalPromise&&(this._modalPromise.promise=t),t},runDefaultManager:function(e){return this.open(i(i({},e),{},{modalType:"defaultManager"}))}}}}]);
//# sourceMappingURL=https://ppf-static-source-maps-20201028070046695300000001.s3.amazonaws.com/paywallModals/42/paywallModal.js.map