(self["webpackChunkcelenganku_app"]=self["webpackChunkcelenganku_app"]||[]).push([[111],{599:()=>{function e(r){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){e=function e(r){return typeof r}}else{e=function e(r){return r&&typeof Symbol==="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r}}return e(r)}function r(e,r){if(!(e instanceof r)){throw new TypeError("Cannot call a class as a function")}}function t(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function n(e,r,n){if(r)t(e.prototype,r);if(n)t(e,n);return e}function a(e,r){if(typeof r!=="function"&&r!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:true,configurable:true}});if(r)f(e,r)}function o(e){var r=l();return function t(){var n=h(e),a;if(r){var o=h(this).constructor;a=Reflect.construct(n,arguments,o)}else{a=n.apply(this,arguments)}return u(this,a)}}function u(r,t){if(t&&(e(t)==="object"||typeof t==="function")){return t}return i(r)}function i(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function s(e){var r=typeof Map==="function"?new Map:undefined;s=function e(t){if(t===null||!p(t))return t;if(typeof t!=="function"){throw new TypeError("Super expression must either be null or a function")}if(typeof r!=="undefined"){if(r.has(t))return r.get(t);r.set(t,n)}function n(){return c(t,arguments,h(this).constructor)}n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:false,writable:true,configurable:true}});return f(n,t)};return s(e)}function c(e,r,t){if(l()){c=Reflect.construct}else{c=function e(r,t,n){var a=[null];a.push.apply(a,t);var o=Function.bind.apply(r,a);var u=new o;if(n)f(u,n.prototype);return u}}return c.apply(null,arguments)}function l(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return true}catch(e){return false}}function p(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function f(e,r){f=Object.setPrototypeOf||function e(r,t){r.__proto__=t;return r};return f(e,r)}function h(e){h=Object.setPrototypeOf?Object.getPrototypeOf:function e(r){return r.__proto__||Object.getPrototypeOf(r)};return h(e)}var v=function(e){a(u,e);var t=o(u);function u(){r(this,u);return t.apply(this,arguments)}n(u,[{key:"_bgColor",value:function e(){var r="md:bg-primary";if(this._role==="admin"){r="md:bg-secondary"}return r}},{key:"_renderLinksByRole",value:function e(){var r=this._role;var t="";if(r==="user"){t='\n        <a href="#/profile" class="flex px-4 py-3 text-sm font-normal text-gray-700 hover:bg-gray-100 hover:text-gray-900"\n          role="menuitem">\n          <i class="text-primary flex"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />\n          </svg></i>\n          <p class="flex ml-2 leading-relaxed">Lihat Profil</p>\n        </a>\n        <a href="https://github.com/shamahdotid/celenganku-app/blob/main/README.md" target="_blank" rel="noopener" rel="noreferrer" class="flex px-4 py-3 text-sm font-normal text-gray-700 hover:bg-gray-100 hover:text-gray-900"\n          role="menuitem">\n          <i class="text-primary flex"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />\n          </svg></i>\n          <p class="flex ml-2 leading-relaxed">Tentang Celenganku</p>\n        </a>\n        <a href="/api/logout" class="flex px-4 py-3 text-sm font-normal text-gray-700 hover:bg-gray-100 hover:text-gray-900"\n          role="menuitem">\n          <i class="text-primary flex"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />\n          </svg></i>\n          <p class="flex ml-2 leading-relaxed">Keluar</p>\n        </a>\n        '}else{t='\n      <a href="https://github.com/shamahdotid/celenganku/blob/main/README.md" target="_blank" rel="noopener" rel="noreferrer" class="flex px-4 py-3 text-sm font-normal text-gray-700 hover:bg-gray-100 hover:text-gray-900"\n      role="menuitem">\n      <i class="text-secondary flex"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />\n      </svg></i>\n      <p class="flex ml-2 leading-relaxed">Tentang Celenganku</p>\n    </a>\n    <a href="/api/logout" class="flex px-4 py-3 text-sm font-normal text-gray-700 hover:bg-gray-100 hover:text-gray-900"\n      role="menuitem">\n      <i class="text-secondary flex"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />\n      </svg></i>\n      <p class="flex ml-2 leading-relaxed">Keluar</p>\n    </a>'}return t}},{key:"_render",value:function e(){var r=this._name||"Teman";var t=this._avatar||"http://ui-avatars.com/api/?name=".concat(r,"&background=fff");this.className="".concat(this._bgColor()," print:hidden z-50 sticky top-0 bg-white rounded-b-lg flex flex-wrap items-center md:rounded-bl-none md:h-16 pt-2 pb-2 md:justify-end");this.innerHTML='\n          <div class="flex w-full p-4 md:p-0 md:w-auto">\n            <div class="flex relative w-10 h-10 justify-center items-center m-1 mr-2 text-xl rounded-full text-white">\n              <img class="w-10 h-10 rounded-full object-cover" src="'.concat(t,'">\n            </div>\n            <div class="flex flex-col leading-tight mt-1 md:text-white px-1">\n              <p class="font-light">Halo,</p>\n              <p class="font-light" id="greeting-username">').concat(r,'</p>\n            </div>\n            <button id="settings" class="h-12 w-12 p-3 mr-3 md:text-white ml-auto md:ml-0">\n              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />\n              </svg>\n            </button>\n            <div id="settings-dropdown" class="hidden origin-top-right absolute right-0 mt-10 mr-5 w-56 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">\n              <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">\n                ').concat(this._renderLinksByRole(),"\n              </div>\n            </div>\n          </div>")}},{key:"role",set:function e(r){this._role=r;this._render()}},{key:"name",set:function e(r){this._name=r;this._render()}},{key:"avatar",set:function e(r){this._avatar=r;this._render()}}]);return u}(s(HTMLElement));customElements.define("app-bar",v)},1400:()=>{function e(r){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){e=function e(r){return typeof r}}else{e=function e(r){return r&&typeof Symbol==="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r}}return e(r)}function r(e,r){if(!(e instanceof r)){throw new TypeError("Cannot call a class as a function")}}function t(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function n(e,r,n){if(r)t(e.prototype,r);if(n)t(e,n);return e}function a(e,r){if(typeof r!=="function"&&r!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:true,configurable:true}});if(r)f(e,r)}function o(e){var r=l();return function t(){var n=h(e),a;if(r){var o=h(this).constructor;a=Reflect.construct(n,arguments,o)}else{a=n.apply(this,arguments)}return u(this,a)}}function u(r,t){if(t&&(e(t)==="object"||typeof t==="function")){return t}return i(r)}function i(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function s(e){var r=typeof Map==="function"?new Map:undefined;s=function e(t){if(t===null||!p(t))return t;if(typeof t!=="function"){throw new TypeError("Super expression must either be null or a function")}if(typeof r!=="undefined"){if(r.has(t))return r.get(t);r.set(t,n)}function n(){return c(t,arguments,h(this).constructor)}n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:false,writable:true,configurable:true}});return f(n,t)};return s(e)}function c(e,r,t){if(l()){c=Reflect.construct}else{c=function e(r,t,n){var a=[null];a.push.apply(a,t);var o=Function.bind.apply(r,a);var u=new o;if(n)f(u,n.prototype);return u}}return c.apply(null,arguments)}function l(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return true}catch(e){return false}}function p(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function f(e,r){f=Object.setPrototypeOf||function e(r,t){r.__proto__=t;return r};return f(e,r)}function h(e){h=Object.setPrototypeOf?Object.getPrototypeOf:function e(r){return r.__proto__||Object.getPrototypeOf(r)};return h(e)}var v=function(e){a(u,e);var t=o(u);function u(){r(this,u);return t.apply(this,arguments)}n(u,[{key:"_bgColor",value:function e(){var r="bg-primary";if(this._role==="admin"){r="bg-secondary"}return r}},{key:"_renderNavsByRole",value:function e(){var r=this._role;var t="";if(r==="admin"){t='<a class="btn-nav rounded-b-lg md:rounded-none md:rounded-l-lg" href="#">\n            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" \n                d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />\n            </svg>\n        </a>\n        <a class="btn-nav rounded-b-lg md:rounded-none md:rounded-l-lg" href="#/list">\n        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>\n        </a>'}else{t='\n        <a class="btn-nav rounded-b-lg md:rounded-none md:rounded-l-lg" href="#">\n        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />\n        </svg>\n        </a>\n        <a class="btn-nav rounded-b-lg md:rounded-none md:rounded-l-lg" href="#/transaction">\n        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>\n        </a>\n        <a class="btn-nav rounded-b-lg md:rounded-none md:rounded-l-lg" href="#/report">\n          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>\n        </a>\n        <a class="btn-nav rounded-b-lg md:rounded-none md:rounded-l-lg" href="#/profile">\n          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\n              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />\n          </svg>\n        </a>\n        '}return t}},{key:"_render",value:function e(){this.className="".concat(this._bgColor()," print:hidden z-50 fixed bottom-0 w-full md:relative md:w-auto md:h-auto md:min-h-screen");this.innerHTML='\n    <div id="navs" class="sticky top-0 flex flex-row justify-evenly md:flex-col">\n        <p class="h-16 w-16 p-4 text-white">\n            <img src="./images/app-icon.png">\n            <g stroke="null">\n                <ellipse stroke="#000" ry="4.54353" rx="4.54353" id="svg_2" cy="12" cx="5.51189" stroke-width="0" fill="#ffffff"/>\n                <ellipse stroke="#000" ry="4.54353" rx="4.54353" id="svg_3" cy="12" cx="18.48811" stroke-width="0" fill="#ffffff"/>\n            </g>\n            </svg>\n        </p>\n        '.concat(this._renderNavsByRole(),"\n    </div>")}},{key:"role",set:function e(r){this._role=r;this._render()}}]);return u}(s(HTMLElement));customElements.define("side-bar",v)},9907:(e,r,t)=>{"use strict";t.d(r,{Z:()=>p});var n=t(199);var a=t(194);function o(e,r,t,n,a,o,u){try{var i=e[o](u);var s=i.value}catch(e){t(e);return}if(i.done){r(s)}else{Promise.resolve(s).then(n,a)}}function u(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var u=e.apply(r,t);function i(e){o(u,n,a,i,s,"next",e)}function s(e){o(u,n,a,i,s,"throw",e)}i(undefined)}))}}function i(e,r){if(!(e instanceof r)){throw new TypeError("Cannot call a class as a function")}}function s(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function c(e,r,t){if(r)s(e.prototype,r);if(t)s(e,t);return e}var l=function(){function e(){i(this,e)}c(e,null,[{key:"retrieveUser",value:function(){var e=u(regeneratorRuntime.mark((function e(){var r,t;return regeneratorRuntime.wrap((function e(o){while(1){switch(o.prev=o.next){case 0:o.prev=0;o.next=3;return fetch(a.Z.TOKEN);case 3:r=o.sent;o.next=6;return r.json();case 6:t=o.sent;o.next=9;return(0,n.Z)(t.response);case 9:t=o.sent;return o.abrupt("return",t);case 13:o.prev=13;o.t0=o["catch"](0);return o.abrupt("return",{id:null,role:"unauthorized",error:true,message:o.t0});case 16:case"end":return o.stop()}}}),e,null,[[0,13]])})));function r(){return e.apply(this,arguments)}return r}()},{key:"loginAdmin",value:function(){var e=u(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function e(n){while(1){switch(n.prev=n.next){case 0:n.prev=0;n.next=3;return fetch(a.Z.ADMIN.LOGIN,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 3:t=n.sent;return n.abrupt("return",t.json());case 7:n.prev=7;n.t0=n["catch"](0);return n.abrupt("return",{status:"error",message:n.t0});case 10:case"end":return n.stop()}}}),e,null,[[0,7]])})));function r(r){return e.apply(this,arguments)}return r}()},{key:"loginUser",value:function(){var e=u(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function e(n){while(1){switch(n.prev=n.next){case 0:n.prev=0;n.next=3;return fetch(a.Z.SISWA.LOGIN,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 3:t=n.sent;return n.abrupt("return",t.json());case 7:n.prev=7;n.t0=n["catch"](0);return n.abrupt("return",{status:"error",message:n.t0});case 10:case"end":return n.stop()}}}),e,null,[[0,7]])})));function r(r){return e.apply(this,arguments)}return r}()},{key:"registerUser",value:function(){var e=u(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function e(n){while(1){switch(n.prev=n.next){case 0:n.prev=0;n.next=3;return fetch(a.Z.SISWA.REGISTER,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 3:t=n.sent;return n.abrupt("return",t.json());case 7:n.prev=7;n.t0=n["catch"](0);return n.abrupt("return",{error:true,message:n.t0});case 10:case"end":return n.stop()}}}),e,null,[[0,7]])})));function r(r){return e.apply(this,arguments)}return r}()},{key:"createDataSiswa",value:function(){var e=u(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function e(n){while(1){switch(n.prev=n.next){case 0:n.prev=0;n.next=3;return fetch(a.Z.SISWA.LIST_DATA,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 3:t=n.sent;return n.abrupt("return",t.json());case 7:n.prev=7;n.t0=n["catch"](0);return n.abrupt("return",{error:true,message:n.t0});case 10:case"end":return n.stop()}}}),e,null,[[0,7]])})));function r(r){return e.apply(this,arguments)}return r}()},{key:"getMidtransToken",value:function(){var e=u(regeneratorRuntime.mark((function e(r){var t,n,o;return regeneratorRuntime.wrap((function e(u){while(1){switch(u.prev=u.next){case 0:u.prev=0;t="SB-Mid-server-XmFoI8_j9MpEyaNvbE1-sQiN:";n=btoa(t);u.next=5;return fetch(a.Z.MIDTRANS,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Basic ".concat(n)},body:JSON.stringify(r)});case 5:o=u.sent;return u.abrupt("return",o.json());case 9:u.prev=9;u.t0=u["catch"](0);return u.abrupt("return",u.t0);case 12:case"end":return u.stop()}}}),e,null,[[0,9]])})));function r(r){return e.apply(this,arguments)}return r}()},{key:"createTransaction",value:function(){var e=u(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function e(n){while(1){switch(n.prev=n.next){case 0:n.prev=0;n.next=3;return fetch(a.Z.TRANSAKSI.CREATE,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 3:t=n.sent;return n.abrupt("return",t.json());case 7:n.prev=7;n.t0=n["catch"](0);console.log(n.t0);return n.abrupt("return",n.t0);case 11:case"end":return n.stop()}}}),e,null,[[0,7]])})));function r(r){return e.apply(this,arguments)}return r}()},{key:"updateTransaction",value:function(){var e=u(regeneratorRuntime.mark((function e(r,t){var n;return regeneratorRuntime.wrap((function e(o){while(1){switch(o.prev=o.next){case 0:o.prev=0;o.next=3;return fetch(a.Z.TRANSAKSI.ID(r),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:n=o.sent;return o.abrupt("return",n.json());case 7:o.prev=7;o.t0=o["catch"](0);console.log(o.t0);return o.abrupt("return",o.t0);case 11:case"end":return o.stop()}}}),e,null,[[0,7]])})));function r(r,t){return e.apply(this,arguments)}return r}()},{key:"uploadFile",value:function(){var e=u(regeneratorRuntime.mark((function e(r){var t,n;return regeneratorRuntime.wrap((function e(o){while(1){switch(o.prev=o.next){case 0:o.prev=0;t=new FormData;t.append("avatar",r);console.log(t);o.next=6;return fetch(a.Z.UPLOAD_FILE,{method:"POST",body:t});case 6:n=o.sent;return o.abrupt("return",n.json());case 10:o.prev=10;o.t0=o["catch"](0);return o.abrupt("return",{});case 13:case"end":return o.stop()}}}),e,null,[[0,10]])})));function r(r){return e.apply(this,arguments)}return r}()},{key:"deleteFile",value:function(){var e=u(regeneratorRuntime.mark((function e(r){var t,n,o,u,i;return regeneratorRuntime.wrap((function e(s){while(1){switch(s.prev=s.next){case 0:s.prev=0;t=r.search("%2F");n=r.search("alt");o=r.slice(t+3,n-1);u={url:r,name:o};s.next=7;return fetch(a.Z.DELETE_FILE,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)});case 7:i=s.sent;return s.abrupt("return",i.json());case 11:s.prev=11;s.t0=s["catch"](0);return s.abrupt("return",{});case 14:case"end":return s.stop()}}}),e,null,[[0,11]])})));function r(r){return e.apply(this,arguments)}return r}()},{key:"getAllDataSiswa",value:function(){var e=u(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function e(t){while(1){switch(t.prev=t.next){case 0:t.prev=0;t.next=3;return fetch(a.Z.SISWA.LIST_DATA);case 3:r=t.sent;return t.abrupt("return",r.json());case 7:t.prev=7;t.t0=t["catch"](0);return t.abrupt("return",{});case 10:case"end":return t.stop()}}}),e,null,[[0,7]])})));function r(){return e.apply(this,arguments)}return r}()},{key:"getAllProfilSiswa",value:function(){var e=u(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function e(t){while(1){switch(t.prev=t.next){case 0:t.prev=0;t.next=3;return fetch(a.Z.SISWA.LIST_PROFIL);case 3:r=t.sent;return t.abrupt("return",r.json());case 7:t.prev=7;t.t0=t["catch"](0);return t.abrupt("return",{});case 10:case"end":return t.stop()}}}),e,null,[[0,7]])})));function r(){return e.apply(this,arguments)}return r}()},{key:"getAllAkunSiswa",value:function(){var e=u(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function e(t){while(1){switch(t.prev=t.next){case 0:t.prev=0;t.next=3;return fetch(a.Z.SISWA.LIST);case 3:r=t.sent;return t.abrupt("return",r.json());case 7:t.prev=7;t.t0=t["catch"](0);return t.abrupt("return",{});case 10:case"end":return t.stop()}}}),e,null,[[0,7]])})));function r(){return e.apply(this,arguments)}return r}()},{key:"getDataSiswa",value:function(){var e=u(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function e(n){while(1){switch(n.prev=n.next){case 0:n.prev=0;n.next=3;return fetch(a.Z.SISWA.DATA(r));case 3:t=n.sent;return n.abrupt("return",t.json());case 7:n.prev=7;n.t0=n["catch"](0);return n.abrupt("return",{});case 10:case"end":return n.stop()}}}),e,null,[[0,7]])})));function r(r){return e.apply(this,arguments)}return r}()},{key:"getProfilSiswa",value:function(){var e=u(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function e(n){while(1){switch(n.prev=n.next){case 0:n.prev=0;n.next=3;return fetch(a.Z.SISWA.PROFIL(r));case 3:t=n.sent;return n.abrupt("return",t.json());case 7:n.prev=7;n.t0=n["catch"](0);return n.abrupt("return",{});case 10:case"end":return n.stop()}}}),e,null,[[0,7]])})));function r(r){return e.apply(this,arguments)}return r}()},{key:"getAkunSiswa",value:function(){var e=u(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function e(n){while(1){switch(n.prev=n.next){case 0:n.prev=0;n.next=3;return fetch(a.Z.SISWA.AKUN(r));case 3:t=n.sent;return n.abrupt("return",t.json());case 7:n.prev=7;n.t0=n["catch"](0);return n.abrupt("return",{});case 10:case"end":return n.stop()}}}),e,null,[[0,7]])})));function r(r){return e.apply(this,arguments)}return r}()},{key:"updateSaldo",value:function(){var e=u(regeneratorRuntime.mark((function e(r,t,n){var o,u;return regeneratorRuntime.wrap((function e(i){while(1){switch(i.prev=i.next){case 0:o={saldo:t,jenis:n};i.prev=1;i.next=4;return fetch(a.Z.SISWA.SALDO(r),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});case 4:u=i.sent;return i.abrupt("return",u.json());case 8:i.prev=8;i.t0=i["catch"](1);console.log(i.t0);return i.abrupt("return",i.t0);case 12:case"end":return i.stop()}}}),e,null,[[1,8]])})));function r(r,t,n){return e.apply(this,arguments)}return r}()},{key:"getTransaksiSiswa",value:function(){var e=u(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function e(n){while(1){switch(n.prev=n.next){case 0:n.prev=0;n.next=3;return fetch(a.Z.SISWA.TRANSAKSI(r));case 3:t=n.sent;return n.abrupt("return",t.json());case 7:n.prev=7;n.t0=n["catch"](0);return n.abrupt("return",{});case 10:case"end":return n.stop()}}}),e,null,[[0,7]])})));function r(r){return e.apply(this,arguments)}return r}()},{key:"getTransaksiAdmin",value:function(){var e=u(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function e(n){while(1){switch(n.prev=n.next){case 0:n.prev=0;n.next=3;return fetch(a.Z.ADMIN.TRANSAKSI(r));case 3:t=n.sent;return n.abrupt("return",t.json());case 7:n.prev=7;n.t0=n["catch"](0);return n.abrupt("return",{});case 10:case"end":return n.stop()}}}),e,null,[[0,7]])})));function r(r){return e.apply(this,arguments)}return r}()},{key:"getTransaction",value:function(){var e=u(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function e(n){while(1){switch(n.prev=n.next){case 0:n.prev=0;n.next=3;return fetch(a.Z.TRANSAKSI.ID(r));case 3:t=n.sent;return n.abrupt("return",t.json());case 7:n.prev=7;n.t0=n["catch"](0);return n.abrupt("return",{});case 10:case"end":return n.stop()}}}),e,null,[[0,7]])})));function r(r){return e.apply(this,arguments)}return r}()},{key:"deleteTransaksiSiswa",value:function(){var e=u(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function e(n){while(1){switch(n.prev=n.next){case 0:n.prev=0;n.next=3;return fetch(a.Z.TRANSAKSI.ID(r),{method:"DELETE"});case 3:t=n.sent;return n.abrupt("return",t.json());case 7:n.prev=7;n.t0=n["catch"](0);return n.abrupt("return",n.t0);case 10:case"end":return n.stop()}}}),e,null,[[0,7]])})));function r(r){return e.apply(this,arguments)}return r}()},{key:"deleteSiswa",value:function(){var e=u(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function e(n){while(1){switch(n.prev=n.next){case 0:n.prev=0;n.next=3;return fetch(a.Z.SISWA.AKUN(r),{method:"DELETE"});case 3:t=n.sent;return n.abrupt("return",t.json());case 7:n.prev=7;n.t0=n["catch"](0);return n.abrupt("return",n.t0);case 10:case"end":return n.stop()}}}),e,null,[[0,7]])})));function r(r){return e.apply(this,arguments)}return r}()},{key:"deleteDataSiswa",value:function(){var e=u(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function e(n){while(1){switch(n.prev=n.next){case 0:n.prev=0;n.next=3;return fetch(a.Z.SISWA.DATA(r),{method:"DELETE"});case 3:t=n.sent;return n.abrupt("return",t.json());case 7:n.prev=7;n.t0=n["catch"](0);return n.abrupt("return",n.t0);case 10:case"end":return n.stop()}}}),e,null,[[0,7]])})));function r(r){return e.apply(this,arguments)}return r}()},{key:"updateAkunSiswa",value:function(){var e=u(regeneratorRuntime.mark((function e(r,t){var n;return regeneratorRuntime.wrap((function e(o){while(1){switch(o.prev=o.next){case 0:o.prev=0;o.next=3;return fetch(a.Z.SISWA.AKUN(r),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:n=o.sent;return o.abrupt("return",n.json());case 7:o.prev=7;o.t0=o["catch"](0);return o.abrupt("return",{});case 10:case"end":return o.stop()}}}),e,null,[[0,7]])})));function r(r,t){return e.apply(this,arguments)}return r}()},{key:"updateDataSiswa",value:function(){var e=u(regeneratorRuntime.mark((function e(r,t){var n;return regeneratorRuntime.wrap((function e(o){while(1){switch(o.prev=o.next){case 0:o.prev=0;o.next=3;return fetch(a.Z.SISWA.DATA(r),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:n=o.sent;return o.abrupt("return",n.json());case 7:o.prev=7;o.t0=o["catch"](0);return o.abrupt("return",{});case 10:case"end":return o.stop()}}}),e,null,[[0,7]])})));function r(r,t){return e.apply(this,arguments)}return r}()},{key:"getAdmin",value:function(){var e=u(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function e(n){while(1){switch(n.prev=n.next){case 0:n.prev=0;n.next=3;return fetch(a.Z.ADMIN.ID(r));case 3:t=n.sent;return n.abrupt("return",t.json());case 7:n.prev=7;n.t0=n["catch"](0);return n.abrupt("return",{});case 10:case"end":return n.stop()}}}),e,null,[[0,7]])})));function r(r){return e.apply(this,arguments)}return r}()}]);return e}();const p=l}}]);
//# sourceMappingURL=main.49ea73a0.js.map