(self["webpackChunkcelenganku_app"]=self["webpackChunkcelenganku_app"]||[]).push([[73],{3351:(t,e,n)=>{"use strict";n.d(e,{Z:()=>p});var a=n(7511);var r=n.n(a);var o=n(3078);var s=n(7504);var i=n(7902);var l=n(557);function d(t){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){d=function t(e){return typeof e}}else{d=function t(e){return e&&typeof Symbol==="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}}return d(t)}function c(t,e,n,a,r,o,s){try{var i=t[o](s);var l=i.value}catch(t){n(t);return}if(i.done){e(l)}else{Promise.resolve(l).then(a,r)}}function u(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var o=t.apply(e,n);function s(t){c(o,a,r,s,i,"next",t)}function i(t){c(o,a,r,s,i,"throw",t)}s(undefined)}))}}var m={render:function t(){return u(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function t(e){while(1){switch(e.prev=e.next){case 0:return e.abrupt("return",'\n        <div class="text-center relative print:hidden">\n          <a href="#/report" class="print:hidden -mt-4 w-max absolute left-0 text-primary mx-1 p-4">\n          <svg class="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>\n          </a>\n          <p class="print:hidden text-xl leading-8 font-bold tracking-tight text-gray-800 md:text-2xl md:mt-2">\n            Preview Laporan\n          </p>\n        </div>\n        <div class="flex flex-col w-full pt-0 rounded-lg mx-auto md:mt-4 shadow-lg print:shadow-none text-gray-800 mb-24">\n        <div id="report" class="p-8 md:p-12 rounded-lg flex flex-col">\n          <img class="w-48 mb-10" src="./images/celenganku-logo.png">\n          <p id="name" class="text-2xl font-bold"></p>\n          <p id="nisn"class="mb-2 text-lg"></p>\n          <p id="alamat" class="text-gray-600"><p>\n          <p id="periode" class="mt-4 mb-6 text-sm text-primary"></p>\n          <div class="flex-1 py-0 white rounded-lg">\n          <table id="transaction-table" class="table-auto w-full">\n          <tbody>\n          <tr class="text-left text-gray-700">\n              <th class="font-normal p-5 pr-0 pt-0">Tanggal</th>\n              <th class="font-normal pb-5 pt-0 hidden md:table-cell">Jenis Transaksi</th>\n              <th class="font-normal pb-5 pt-0">Nominal</th>\n              <th class="font-normal pb-5 pt-0 ">Saldo</th>\n          </tr>\n          </tbody>\n        </table>\n          <div class="preloader p-4 flex mt-auto mb-auto mx-auto justify-center">\n            <div class="loader loader-mini ease-linear rounded-full border-8 border-t-8 border-gray-200"></div>\n          </div>\n          </div>\n          <div class="text-right mt-4">\n          <p id="first-balance" class="mb-2 flex">Saldo Awal:</p>\n          <p id="withdraw-text" class="mb-2 flex">Pemasukan Saldo:</p>\n          <p id="deposit-text" class="mb-2 flex">Penarikan Saldo:</p>\n          <p id="last-balance" class="mb-2 flex">Saldo Akhir:</p>\n          </div>\n          </div>\n        </div>\n        <div>\n        <button id="download-button" role="button" class="hidden fixed w-max bg-primary text-white p-4 rounded-full right-0 bottom-0 mb-24 mr-8 md:mr-16 md:mb-16 print:hidden">\n        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>\n        </button>\n        </div>\n      ');case 1:case"end":return e.stop()}}}),t)})))()},afterRender:function t(){var e=this;return u(regeneratorRuntime.mark((function t(){var n,a,r,d,c,u,m,p,h,v,g,f,x,w,b,y,k,_,T,I,E,C;return regeneratorRuntime.wrap((function t(L){while(1){switch(L.prev=L.next){case 0:n=document.querySelectorAll(".preloader");a=l.Z.parseActiveUrlWithoutCombiner();r=i.Z.parseToText(a.id);e._reportTime=r;L.next=6;return o.Z.retrieveUser();case 6:d=L.sent;e._userId=d.id;L.next=10;return o.Z.getAkunSiswa(e._userId);case 10:c=L.sent;L.next=13;return o.Z.getDataSiswa(e._userId);case 13:u=L.sent;e._ballance=c.saldo;e._withdraw=0;e._deposit=0;m=document.getElementById("name");p=document.getElementById("nisn");h=document.getElementById("alamat");v=document.getElementById("periode");g=document.getElementById("first-balance");f=document.getElementById("last-balance");x=document.getElementById("withdraw-text");w=document.getElementById("deposit-text");L.next=27;return e._renderTable(e._reportTime);case 27:b=document.getElementById("download-button");b.addEventListener("click",(function(){window.print()}));m.innerHTML=u.nama;p.innerHTML=u.nisn;h.innerHTML=u.alamat;y=new Date;k=y.getFullYear();_=y.getMonth();T=new Date(k,_,1);I=new Date(k,_+1,0);if(e._reportTime==="Monthly")v.innerHTML="Periode: ".concat(T.toLocaleDateString("id-ID")," s/d ").concat(I.toLocaleDateString("id-ID"));else v.innerHTML="Periode: 1/1/".concat(k," s/d  31/1/").concat(k);E=document.querySelector(".nominal").textContent.replace("RP ","");C=document.querySelector(".saldo").textContent.replace("RP ","");C=s.Z.convertCasttoInt(C)-s.Z.convertCasttoInt(E);g.innerHTML='Saldo Awal: <p class="flex ml-auto">RP '.concat(s.Z.convertToCashFormat(C),"</p>");w.innerHTML='Pemasukan Saldo: <p class="flex ml-auto">RP '.concat(s.Z.convertToCashFormat(e._deposit),"</p>");x.innerHTML='Penarikan Saldo: <p class="flex ml-auto">RP '.concat(s.Z.convertToCashFormat(e._withdraw),"</p>");f.innerHTML='Saldo Akhir: <p class="flex ml-auto font-bold text-primary">'.concat(document.querySelectorAll(".saldo")[document.querySelectorAll(".saldo").length-1].textContent,"</p>");n.forEach((function(t){t.remove()}));b.classList.remove("hidden");case 47:case"end":return L.stop()}}}),t)})))()},_renderTable:function t(e){var n=this;return u(regeneratorRuntime.mark((function t(){var a,i,l,c,u,m,p,h;return regeneratorRuntime.wrap((function t(v){while(1){switch(v.prev=v.next){case 0:a=document.getElementById("transaction-table");i=a.querySelector("tbody");v.next=4;return o.Z.getTransaksiSiswa(n._userId);case 4:l=v.sent;c=r()(l.data,["tenggat_waktu_pembayaran.seconds"]).reverse();u=n._ballance;m=function t(a){Object.keys(a).forEach((function(t){if(d(a[t])==="object"){}else if(t==="nominal"){a[t]=s.Z.convertToCashFormat(a[t])}else{a[t]=a[t].toString().toUpperCase()}}));if(a.status_transaksi.toLowerCase()==="pembayaran")return"";var r=new Date(a.tenggat_waktu_pembayaran.seconds*1e3);if(e==="Monthly"){if(r.getMonth()!==(new Date).getMonth())return""}var o=a.jenis_transaksi;r.setDate(r.getDate()-1);var i=r.toLocaleDateString("id-ID");var l=u;if(o.toLowerCase()==="pemasukan"){u-=s.Z.convertCasttoInt(a.nominal);n._withdraw+=s.Z.convertCasttoInt(a.nominal)}else{u+=s.Z.convertCasttoInt(a.nominal);n._deposit+=s.Z.convertCasttoInt(a.nominal)}return'<tr class="font-bold text-gray-800 mb-5">\n      <td class="p-5 pr-0 text-gray-500 bg-gray-200 rounded-l-lg">'.concat(i.toUpperCase(),'</td>\n      <td class="bg-gray-200 hidden md:table-cell">').concat(a.jenis_transaksi,'</td>\n      <td class="nominal bg-gray-200 ">RP ').concat(a.nominal,'</td>\n      <td class="saldo bg-gray-200 rounded-r-lg">RP ').concat(s.Z.convertToCashFormat(l),'</td>\n      </td>\n    </tr>\n    <tr class="h-4"></tr>')};i.innerHTML='\n    <tr class="text-left text-gray-700">\n      <th class="font-normal p-5 pr-0 pt-0">Tanggal</th>\n      <th class="font-normal pb-5 pt-0 hidden md:table-cell">Jenis Transaksi</th>\n      <th class="font-normal pb-5 pt-0">Nominal</th>\n      <th class="font-normal pb-5 pt-0 ">Saldo</th>\n    </tr>';p=[];h=[];c.forEach((function(t){p.push(m(t))}));h=p.reverse();i.innerHTML+=h.join("");case 14:case"end":return v.stop()}}}),t)})))()}};const p=m},5960:(t,e,n)=>{"use strict";n.d(e,{Z:()=>v});var a=n(538);var r=n.n(a);var o=n(7511);var s=n.n(o);var i=n(7504);var l=n(5978);var d=n(3078);var c=n(3711);function u(t){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){u=function t(e){return typeof e}}else{u=function t(e){return e&&typeof Symbol==="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}}return u(t)}function m(t,e,n,a,r,o,s){try{var i=t[o](s);var l=i.value}catch(t){n(t);return}if(i.done){e(l)}else{Promise.resolve(l).then(a,r)}}function p(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var o=t.apply(e,n);function s(t){m(o,a,r,s,i,"next",t)}function i(t){m(o,a,r,s,i,"throw",t)}s(undefined)}))}}var h={render:function t(){return p(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function t(e){while(1){switch(e.prev=e.next){case 0:return e.abrupt("return",'\n    <div class="text-center">\n    <p class="text-xl leading-8 font-bold tracking-tight text-gray-800 md:text-2xl md:mt-2">\n      Riwayat Transaksi\n    </p>\n    <div class="flex flex-row mt-4 md:mt-6 ">\n      <div class="flex flex-row">\n        <button id="print-report-button" class="w-max bg-primary text-white mx-1 py-3 px-5 rounded-lg disabled:opacity-50">Cetak Laporan</button>\n        <p id="total-transaction" class="hidden md:inline mt-3 ml-4 text-gray-700">Total Transaksi:</p>\n      </div>\n      <div class="flex flex-1 md:flex-initial ml-4 md:ml-auto flex-row ">\n      <input id="search-input" placeholder="Cari tanggal, nominal, dll" value="" type="text" class="text-md block px-5 py-3 rounded-lg w-full bg-gray-200">\n      <svg class="w-8 h-8 mt-auto mb-auto ml-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>\n      </div>\n    </div>\n  </div>\n    <div class="bg-gray-200 gap-5 p-4 rounded-lg flex flex-col mt-6 md:p-8">\n      <div class="flex-1 py-0 white rounded-lg">\n      <table id="transaction-table" class="table-auto w-full">\n      <tbody>\n      <tr class="text-left text-gray-700">\n          <th class="font-normal p-5 pr-0 pt-0">Tanggal</th>\n          <th class="font-normal pb-5 pt-0 hidden lg:table-cell">ID Transaksi</th>\n          <th class="font-normal pb-5 pt-0">Nominal</th>\n          <th class="font-normal pb-5 pt-0 hidden lg:table-cell">Metode</th>\n          <th class="font-normal pb-5 pt-0 hidden lg:table-cell">Jenis</th>\n          <th class="font-normal pb-5 pt-0">Status</th>\n          <th class="font-normal pb-5 pt-0 justify-end"></th>\n        </tr>\n      </tbody>\n    </table>\n      <div class="preloader p-4 flex mt-auto mb-auto mx-auto justify-center">\n        <div class="loader loader-mini ease-linear rounded-full border-8 border-t-8 border-gray-200"></div>\n      </div>\n      </div>\n    </div>\n      ');case 1:case"end":return e.stop()}}}),t)})))()},afterRender:function t(){var e=this;return p(regeneratorRuntime.mark((function t(){var n,a,r,o,s;return regeneratorRuntime.wrap((function t(l){while(1){switch(l.prev=l.next){case 0:e._totalTransaction=0;n=document.getElementById("total-transaction");a=document.querySelectorAll(".preloader");r=document.getElementById("print-report-button");l.next=6;return d.Z.retrieveUser();case 6:o=l.sent;e._userId=o.id;l.next=10;return d.Z.getAkunSiswa(e._userId);case 10:s=l.sent;e._ballance=s.saldo;l.next=14;return e._renderTable();case 14:l.next=16;return e._createPrintEvent(r);case 16:n.innerHTML="Total Transaksi: Rp ".concat(i.Z.convertToCashFormat(e._totalTransaction));a.forEach((function(t){t.remove()}));case 18:case"end":return l.stop()}}}),t)})))()},_createPrintEvent:function t(e){var n=this;return p(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function t(a){while(1){switch(a.prev=a.next){case 0:e.addEventListener("click",(function(){c.Z.init({title:"Laporan",content:'<div class="px-10 py-6">\n          <div id="modal-content">\n            <p class="mt-2 mb-1">Pilih Jangka Waktu</p>\n            <div class="my-4 flex flex-col gap-4 md:flex-row">\n            <button id="monthly-option" class="w-full p-4 border-2 border-primary bg-white shadow-lg rounded-lg focus:outline-none ">\n              <div class="flex flex-1 md:justify-center">\n                <div class="text-white flex flex-1 flex-row">\n                  <div data-option class="mx-2 my-auto text-sm bg-primary text-white p-1 rounded-lg">\n                  <p><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg></p>\n                  </div>\n                  <p class="text-gray-700 mt-1">Bulan Ini</p>\n                </div>\n              </div>\n            </button>\n            <button id="yearly-option" class="w-full p-4 bg-white shadow-lg rounded-lg focus:outline-none ">\n              <div class="flex flex-1 md:justify-center">\n                <div class="text-white flex flex-1 flex-row">\n                  <div data-option class="mx-2 my-auto text-sm bg-gray-300 text-gray-300 p-1 rounded-lg">\n                  <p><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg></p>\n                  </div>\n                  <p class="text-gray-700 mt-1">Tahun Ini</p>\n                </div>\n              </div>\n            </button>\n            </div>\n          </div>\n          <div class="flex justify-end items-center w-100 mt-4">\n            <button role="button" id="next-button" class="w-max bg-primary text-white mx-1 py-3 px-8 rounded-lg disabled:opacity-50">Cetak</button>\n          </div>\n        </div>'});var t=document.getElementById("modal-laporan");n._frequencyOption="monthly";var e=document.querySelectorAll("#monthly-option, #yearly-option");var a=document.getElementById("next-button");e.forEach((function(t){t.addEventListener("click",(function(){n._selectReportOption(e,t.id)}))}));a.addEventListener("click",(function(){window.location.hash="#/report/".concat(n._frequencyOption);t.remove()}))}));case 1:case"end":return a.stop()}}}),t)})))()},_selectReportOption:function t(e,n){var a="mx-2 my-auto text-sm bg-primary text-white p-1 rounded-lg";var r="mx-2 my-auto text-sm bg-gray-200 text-gray-200 p-1 rounded-lg";e.forEach((function(t){var e=t.querySelector("div[data-option]");if(t.id===n){t.classList.add("border-2","border-primary");e.className=a}else{t.classList.remove("border-2","border-primary");e.className=r}}));this._frequencyOption=n.replace("-option","")},_renderTable:function t(){var e=this;return p(regeneratorRuntime.mark((function t(){var n,a,o,m,h;return regeneratorRuntime.wrap((function t(v){while(1){switch(v.prev=v.next){case 0:n=document.getElementById("transaction-table");a=n.querySelector("tbody");v.next=4;return d.Z.getTransaksiSiswa(e._userId);case 4:o=v.sent;m=s()(o.data,["tenggat_waktu_pembayaran.seconds"]).reverse();h=function t(n){Object.keys(n).forEach((function(t){if(u(n[t])==="object"){}else if(t==="nominal"){n[t]=i.Z.convertToCashFormat(n[t])}else{n[t]=n[t].toString().toUpperCase()}}));var a=new Date(n.tenggat_waktu_pembayaran.seconds*1e3);var o=n.jenis_transaksi;var s=new Date;s.setDate(a.getDate());a.setDate(a.getDate()-1);var m=a.toLocaleDateString("id-ID",{year:"numeric",month:"long",day:"numeric"});var h=a.toLocaleDateString("id-ID");if(n.status_transaksi.toLowerCase()==="selesai"){e._totalTransaction+=i.Z.convertCasttoInt(n.nominal)}var v=function t(e){if(e.toLowerCase()==="pemasukan")return"text-success";return"text-failed"};var g=function t(e){if(e.toLowerCase()==="selesai")return"bg-primary text-white";return"bg-primaryDisable text-primary"};var f=function t(e){if(e.toLowerCase()==="selesai")return"M5 13l4 4L19 7";return"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"};var x=function t(e){if(e.toLowerCase()==="selesai"){return'\n          <button id="show-transaction-button-'.concat(n.id_transaksi,'"\n            class="flex w-full flex-1 px-4 py-3 text-sm font-normal text-gray-700 hover:bg-gray-100 hover:text-gray-900"\n            role="menuitem">\n            <i class="text-primary flex">\n            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>\n            </i>\n            <p class="flex ml-2 mt-1 leading-relaxed">Lihat Transaksi</p>\n          </button>')}return'\n        <button id="show-transaction-button-'.concat(n.id_transaksi,'"\n            class="flex w-full flex-1 px-4 py-3 text-sm font-normal text-gray-700 hover:bg-gray-100 hover:text-gray-900"\n            role="menuitem">\n            <i class="text-primary flex">\n            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg>\n            </i>\n            <p class="flex ml-2 mt-1 leading-relaxed">Bayar Transaksi</p>\n          </button>\n          <button id="cancel-transaction-button-').concat(n.id_transaksi,'"\n            class="flex w-full flex-1 px-4 py-3 text-sm font-normal text-gray-700 hover:bg-gray-100 hover:text-gray-900"\n            role="menuitem">\n            <i class="text-primary flex"><svg class="w-8 h-8" fill="none" stroke="currentColor"\n                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\n                  d="M6 18L18 6M6 6l12 12"></path>\n              </svg></i>\n            <p class="flex ml-2 mt-1 leading-relaxed">Batalkan Transaksi</p>\n          </button>')};var w=function t(a){a.addEventListener("click",function(){var t=p(regeneratorRuntime.mark((function t(a){var o,s;return regeneratorRuntime.wrap((function t(i){while(1){switch(i.prev=i.next){case 0:a.stopPropagation();i.next=3;return r().fire({icon:"warning",text:"Tekan pilihan untuk mengkonfirmasi",title:"Apakah benar ingin membatalkan transaksi?",showCancelButton:true,confirmButtonText:"Benar",cancelButtonText:"Tidak",customClass:{popup:"popup-sweetalert",confirmButton:"btn-sweetalert bg-success",cancelButton:"btn-sweetalert bg-failed"},buttonsStyling:false});case 3:o=i.sent;if(!o.isConfirmed){i.next=10;break}i.next=7;return d.Z.deleteTransaksiSiswa(n.id_transaksi);case 7:s=i.sent;console.log(s);e._renderTable();case 10:case"end":return i.stop()}}}),t)})));return function(e){return t.apply(this,arguments)}}());return true};var b=function t(e){e.addEventListener("click",(function(){if(n.metode_pembayaran.toLowerCase()==="daring"&&n.status_transaksi.toLowerCase()==="pembayaran"){snap.pay(n.token.toLowerCase(),{onSuccess:function(){var t=p(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function t(r){while(1){switch(r.prev=r.next){case 0:console.log(e);r.next=3;return d.Z.updateTransaction(n.id_transaksi,{status_transaksi:"selesai"});case 3:a=r.sent;console.log(a);window.dispatchEvent(new HashChangeEvent("hashchange"));case 6:case"end":return r.stop()}}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),onPending:function t(){},onClose:function t(){}});return true}c.Z.init({title:"Kode Transaksi",content:'<div class="px-10 py-6">\n              <div id="modal-content">\n                <p class="mt-2 mb-1">Kode Transaksi kamu adalah</p>\n                <div class="flex flex-row">\n                <p id="id-transaksi" class="my-2 text-3xl select-all font-bold">'.concat(n.id_transaksi,'</p>\n                <button role="button" id="copy-button" class="w-max text-primary ml-2 font-light p-2">\n                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>\n                </button>\n                </div>\n              </div>\n              <div class="flex justify-end items-center w-100 mt-4">\n                <button role="button" id="show-qr-button" class="w-max text-primary mx-1 font-light p-2">\n                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path></svg></button>\n                <button role="button" id="close-button" class="w-max bg-primary text-white mx-1 py-3 px-8 rounded-lg disabled:opacity-50">Tutup</button>\n              </div>\n            </div>')});var t=document.getElementById("modal-kode-transaksi");var e=document.getElementById("modal-content");var a=e.innerHTML;var r='<img class="mx-auto" src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data='.concat(n.id_transaksi,'"></img>');var o=document.getElementById("show-qr-button");var s=document.getElementById("close-button");var i=document.getElementById("copy-button");var l=document.getElementById("id-transaksi");i.addEventListener("click",(function(){EventHelper.copyTextToClipboard(n.id_transaksi);l.focus()}));o.addEventListener("click",(function(t){if(e.innerHTML===a)e.innerHTML=r;else e.innerHTML=a}));s.addEventListener("click",(function(){t.remove()}))}));return true};if(n.status_transaksi.toLowerCase()==="pembayaran"){var y=1e3;setInterval(p(regeneratorRuntime.mark((function t(){var a,r,o,i,c,u,m,p,h;return regeneratorRuntime.wrap((function t(v){while(1){switch(v.prev=v.next){case 0:v.prev=0;a=l.Z.getTimeCounter(s),r=a.distance,o=a.hours,i=a.minutes;c="".concat(o," jam ").concat(i," menit");u='Transaksi ini akan automatis dibatalkan dalam <br><b class="flex mt-3 text-primary">'.concat(c,"</b>");m=document.getElementById("reminder-element-".concat(n.id_transaksi));m.className="p-5 text-sm font-normal text-gray-600";m.innerHTML=u;if(!(r<0)){v.next=11;break}v.next=10;return d.Z.deleteTransaksiSiswa(n.id_transaksi);case 10:e._renderTable();case 11:p=false;while(!p){h=document.getElementById("cancel-transaction-button-".concat(n.id_transaksi));p=w(h);y=6e4}v.next=17;break;case 15:v.prev=15;v.t0=v["catch"](0);case 17:case"end":return v.stop()}}}),t,null,[[0,15]])}))),y)}setInterval((function(){try{var t=false;while(!t){var e=document.getElementById("show-transaction-button-".concat(n.id_transaksi));t=b(e)}}catch(t){}}),1e3);return'<tr class="font-bold text-gray-800 mb-5 hover:shadow-lg">\n      <td class="hidden md:table-cell p-5 pr-0 text-gray-500 bg-white rounded-l-lg">'.concat(m.toUpperCase(),'</td>\n      <td class="table-cell md:hidden p-5 pr-0 text-gray-500 bg-white rounded-l-lg">').concat(h.toUpperCase(),'</td>\n      <td class="bg-white select-all hidden lg:table-cell">').concat(n.id_transaksi,'</td>\n      <td class="bg-white ').concat(v(o),'">RP ').concat(n.nominal,'</td>\n      <td class="bg-white hidden lg:table-cell">').concat(n.metode_pembayaran,'</td>\n      <td class="bg-white hidden lg:table-cell">').concat(o,'</td>\n      <td class="bg-white">\n        <div class="ml-2 md:ml-0 text-sm ').concat(g(n.status_transaksi),' p-1 md:py-2 md:px-6 rounded-lg w-max">\n        <p class="hidden md:inline">').concat(n.status_transaksi,'</p>\n        <p class="inline md:hidden"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="').concat(f(n.status_transaksi),'"></path></svg></p>\n        </div>\n      </td>\n      <td class="bg-white rounded-r-lg justify-end flex p-3 pl-0">\n        <button class="w-8 md:p-2 md:w-12 h-12 text-gray-700" id="settings">\n          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\n              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">\n            </path>\n          </svg>\n        </button>\n        <div id="settings-dropdown"\n          class="hidden absolute mt-10 w-56 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">\n          <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">\n          <p id="reminder-element-').concat(n.id_transaksi,'"></p>\n            ').concat(x(n.status_transaksi),'\n          </div>\n        </div>\n      </td>\n    </tr>\n    <tr class="h-4"></tr>')};a.innerHTML='\n      <tr class="text-left text-gray-700">\n        <th class="font-normal p-5 pr-0 pt-0">Tanggal</th>\n        <th class="font-normal pb-5 pt-0 hidden lg:table-cell">ID Transaksi</th>\n        <th class="font-normal pb-5 pt-0">Nominal</th>\n        <th class="font-normal pb-5 pt-0 hidden lg:table-cell">Metode</th>\n        <th class="font-normal pb-5 pt-0 hidden lg:table-cell">Jenis</th>\n        <th class="font-normal pb-5 pt-0">Status</th>\n        <th class="font-normal pb-5 pt-0 justify-end"></th>\n      </tr>';m.forEach((function(t){a.innerHTML+=h(t)}));e._createTableEvent();case 10:case"end":return v.stop()}}}),t)})))()},_createTableEvent:function t(){return p(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function t(a){while(1){switch(a.prev=a.next){case 0:e=document.getElementById("search-input");n=document.getElementById("transaction-table");e.addEventListener("keyup",(function(t){var e=t.target.value.toUpperCase();var a=n.querySelectorAll('tr[class*="hover:shadow-lg"]');t.preventDefault();a.forEach((function(t){var n=t.querySelectorAll("td");if(n.length){var a=[];n.forEach((function(t){a.push(t.textContent.toUpperCase()||t.innerText.toUpperCase())}));var r=a.toString();if(r.indexOf(e)>-1){t.style.display=""}else{t.style.display="none"}}}))}));case 3:case"end":return a.stop()}}}),t)})))()}};const v=h},3665:(t,e,n)=>{"use strict";n.d(e,{Z:()=>u});var a=n(3078);var r=n(3711);var o=n(2502);var s=n(4115);var i=n(5978);function l(t,e,n,a,r,o,s){try{var i=t[o](s);var l=i.value}catch(t){n(t);return}if(i.done){e(l)}else{Promise.resolve(l).then(a,r)}}function d(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var o=t.apply(e,n);function s(t){l(o,a,r,s,i,"next",t)}function i(t){l(o,a,r,s,i,"throw",t)}s(undefined)}))}}var c={render:function t(){return d(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function t(e){while(1){switch(e.prev=e.next){case 0:return e.abrupt("return",'\n        <div class="text-center">\n          <p class="text-xl leading-8 font-bold tracking-tight text-gray-800 md:text-2xl md:mt-2">\n            Transaksi\n          </p>\n        </div>\n        <div class="flex flex-col w-full md:w-8/12 lg:w-6/12 mx-auto">\n          <div class="bg-gray-200 p-5 rounded-lg flex flex-col mt-4 md:p-8 md:mt-6">\n            <div class="flex flex-row mx-auto mb-4">\n            <button id="pemasukan-option" disabled class="w-max bg-primary text-white py-3 px-10 rounded-lg rounded-r-none disabled:bg-white disabled:text-gray-500 disabled:cursor-default">Isi Saldo</button>\n              <button id="penarikan-option" class="w-max bg-primary text-white py-3 px-10 rounded-lg rounded-l-none disabled:bg-white disabled:text-gray-500 disabled:cursor-default">Tarik Saldo</button>\n            </div>\n            <div class="flex-1 py-0 white rounded-lg">\n            <div class="mb-6">\n              <p class="mb-2">Nominal</p>\n              <input id="input-nominal" name="Nominal" data-rule="required value-more-than-999 multiple-of-1000" value="" type="number" class="block px-5 py-3 rounded-lg w-full bg-white">\n            </div>\n              <div class="flex flex-col gap-6 items-center">\n                <button id="luring-option" class="flex-1 p-5 pb-8 border-2 border-primary bg-white shadow-lg rounded-lg w-full focus:outline-none ">\n                  <div class="flex md:justify-center">\n                    <div class="text-white flex flex-1 flex-row">\n                      <div data-option class="mx-2 my-auto text-sm bg-primary text-white p-1 rounded-lg">\n                      <p><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg></p>\n                      </div>\n                      <div class="flex flex-col flex-1 text-left ml-4">\n                        <p class="md:-mb-2 text-gray-700">Pembayaran secara luring</p>\n                        <p id="monthly-withdraw" class="text-gray-800 text-2xl lg:text-4xl font-bold">Melalui Admin/TU</p>\n                        <p id="weekly-withdraw" class="font-bold text-sm text-gray-400 mt-3" href="">TIDAK DIPUNGUT BIAYA ADMIN</p>\n                      </div>\n                    </div>\n                  </div>\n                </button>\n                <button id="daring-option" class="flex-1 p-5 pb-8 bg-white shadow-lg rounded-lg w-full focus:outline-none ">\n                  <div class="flex md:justify-center">\n                    <div class="text-white flex flex-1 flex-row">\n                      <div data-option class="mx-2 my-auto text-sm bg-gray-200 text-gray-200 p-1 rounded-lg">\n                      <p><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg></p>\n                      </div>\n                      <div class="flex flex-col flex-1 text-left ml-4">\n                        <p class="md:-mb-1 text-gray-700">Pembayaran secara daring</p>\n                        <p id="monthly-withdraw" class="text-gray-800 text-xl md:text-2xl font-bold lg:mr-8">Melalui e-Wallets, Bank, Indomaret, dll</p>\n                        <p id="weekly-withdraw" class="font-bold text-sm text-gray-400 mt-3" href="">TIDAK DIPUNGUT BIAYA TAMBAHAN</p>\n                      </div>\n                    </div>\n                  </div>\n                </button>\n              </div>\n            </div>\n            </div>\n            <button disabled id="next-button" class="disabled:cursor-default w-max bg-primary text-white py-3 px-8 rounded-lg disabled:opacity-50 mx-auto mt-4">Lanjut</button>\n            </div>\n        </div>\n      ');case 1:case"end":return e.stop()}}}),t)})))()},afterRender:function t(){var e=this;return d(regeneratorRuntime.mark((function t(){var n,r,i,l,c,u;return regeneratorRuntime.wrap((function t(m){while(1){switch(m.prev=m.next){case 0:m.next=2;return a.Z.retrieveUser();case 2:n=m.sent;e._userId=n.id;m.next=6;return a.Z.getAkunSiswa(e._userId);case 6:r=m.sent;e._userAccount=r;e._ballance=r.saldo;e._transactionOption="pemasukan";e._paymentOption="luring";i=document.querySelectorAll("#daring-option, #luring-option");l=document.querySelectorAll("#penarikan-option, #pemasukan-option");c=document.getElementById("input-nominal");u=document.getElementById("next-button");o.Z.init({formInputs:c,submitButton:u});l.forEach((function(t){t.addEventListener("click",(function(){e._selectTransactionOption(l,t.id);if(e._transactionOption==="penarikan"){c.dataset.rule+=" cannot-more-than-".concat(e._ballance);e._selectPaymentOption(i,i[0].id);i[1].style.display="none"}else{c.dataset.rule="required value-more-than-999 multiple-of-1000";i[1].style.display=""}s.Z.triggerEvent(c,"keyup")}))}));i.forEach((function(t){t.addEventListener("click",(function(){e._selectPaymentOption(i,t.id)}))}));u.addEventListener("click",d(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function t(o){while(1){switch(o.prev=o.next){case 0:o.prev=0;n={nisn:e._userId,nominal:c.value,jenis_transaksi:e._transactionOption,metode_pembayaran:e._paymentOption};o.next=4;return a.Z.createTransaction(n);case 4:r=o.sent;console.log(r);if(e._paymentOption==="luring")e._adminPaymentInit(r);else e._midtransPaymentInit(r);o.next=12;break;case 9:o.prev=9;o.t0=o["catch"](0);console.log(o.t0);case 12:case"end":return o.stop()}}}),t,null,[[0,9]])}))));case 19:case"end":return m.stop()}}}),t)})))()},_midtransPaymentInit:function t(e){var n=this;return d(regeneratorRuntime.mark((function t(){var r,o,s,i;return regeneratorRuntime.wrap((function t(l){while(1){switch(l.prev=l.next){case 0:snap.show();r=e.response;l.next=4;return a.Z.getDataSiswa(n._userId);case 4:o=l.sent;s={transaction_details:{order_id:r.id_transaksi,gross_amount:r.nominal},item_details:[{id:r.id_transaksi,price:r.nominal,quantity:1,name:"".concat(r.jenis_transaksi.charAt(0).toUpperCase()+r.jenis_transaksi.slice(1)," Saldo"),brand:"Celenganku"}],customer_details:{first_name:o.nama,email:n._userAccount.email},callbacks:{finish:"/"}};l.next=8;return a.Z.getMidtransToken(s);case 8:i=l.sent;l.next=11;return a.Z.updateTransaction(r.id_transaksi,{token:i.token});case 11:snap.pay(i.token,{onSuccess:function(){var t=d(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function t(e){while(1){switch(e.prev=e.next){case 0:e.next=2;return a.Z.updateTransaction(r.id_transaksi,{status_transaksi:"selesai"});case 2:e.next=4;return a.Z.updateSaldo(r.nisn,r.nominal,r.jenis_transaksi);case 4:window.location.hash="#";case 5:case"end":return e.stop()}}}),t)})));function e(){return t.apply(this,arguments)}return e}(),onPending:function t(){window.location.hash="#"},onClose:function t(){window.location.hash="#"}});case 12:case"end":return l.stop()}}}),t)})))()},_selectTransactionOption:function t(e,n){e.forEach((function(t){if(t.id===n){t.disabled=true}else{t.disabled=false}}));this._transactionOption=n.replace("-option","")},_adminPaymentInit:function t(e){var n=this;window.location.hash="#";r.Z.init({title:"Kode Transaksi",content:'<div class="px-10 py-6">\n        <div class="preloader p-4 flex justify-center m-auto">\n          <div class="loader loader-mini ease-linear rounded-full border-8 border-t-8 border-gray-200"></div>\n        </div>\n        <div class="hidden" id="modal-content">\n          <p class="mt-2 mb-1">Kode Transaksi kamu adalah</p>\n          <div class="flex flex-row">\n            <p id="id-transaksi" class="my-2 text-3xl select-all font-bold">'.concat(e.response.id_transaksi,'</p>\n            <button role="button" id="copy-button" class="w-max text-primary ml-2 font-light p-2">\n            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>\n            </button>\n          </div>\n          <p class="mt-4 text-gray-500">Transaksi ini akan automatis dibatalkan dalam</p>\n          <p id="time-count" class="mt-1 text-primary"></p>\n        </div>\n        <div class="flex justify-end items-center w-100 mt-4">\n          <button role="button" id="show-qr-button" class="w-max text-primary mx-1 font-light p-2">\n          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path></svg></button>\n          <button role="button" id="close-button" class="w-max bg-primary text-white mx-1 py-3 px-8 rounded-lg disabled:opacity-50">Tutup</button>\n        </div>\n      </div>')});var a=document.querySelector(".preloader");var o=document.getElementById("modal-kode-transaksi");var l=document.getElementById("modal-content");var d=l.innerHTML;var c='<img class="mx-auto" src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data='.concat(e.response.id_transaksi,'"></img>');var u=document.getElementById("show-qr-button");var m=document.getElementById("close-button");var p=document.getElementById("copy-button");var h=document.getElementById("id-transaksi");p.addEventListener("click",(function(){s.Z.copyTextToClipboard(e.response.id_transaksi);h.focus()}));var v=new Date(e.response.tenggat_waktu_pembayaran.seconds*1e3);var g=setInterval((function(){try{var t=document.getElementById("time-count");var e=i.Z.getTimeCounter(v),n=e.hours,a=e.minutes,r=e.seconds;var o="".concat(n," jam ").concat(a," menit ").concat(r," detik");t.innerHTML=o}catch(t){}}),1e3);this._toggleQR=false;u.addEventListener("click",(function(t){t.stopPropagation();n._toggleQR=!n._toggleQR;if(n._toggleQR)l.innerHTML=c;else l.innerHTML=d}));m.addEventListener("click",(function(){o.remove();clearInterval(g)}));setTimeout((function(){a.remove();l.classList.remove("hidden")}),500)},_selectPaymentOption:function t(e,n){window.scrollTo(0,document.body.scrollHeight);var a="mx-2 my-auto text-sm bg-primary text-white p-1 rounded-lg";var r="mx-2 my-auto text-sm bg-gray-200 text-gray-200 p-1 rounded-lg";e.forEach((function(t){var e=t.querySelector("div[data-option]");if(t.id===n){t.classList.add("border-2","border-primary");e.className=a}else{t.classList.remove("border-2","border-primary");e.className=r}}));this._paymentOption=n.replace("-option","")}};const u=c}}]);
//# sourceMappingURL=main.fabb21b8.js.map