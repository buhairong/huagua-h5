(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-guarantor-face-identity"],{"1be7":function(t,e,r){var n=r("9fd8");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=r("4f06").default;a("7e571b12",n,!0,{sourceMap:!1,shadowMode:!1})},"1da1":function(t,e,r){"use strict";function n(t,e,r,n,a,i,o){try{var c=t[i](o),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,a)}r("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(a,i){var o=t.apply(e,r);function c(t){n(o,a,i,c,u,"next",t)}function u(t){n(o,a,i,c,u,"throw",t)}c(void 0)}))}},r("d3b7")},5037:function(t,e,r){"use strict";r("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.api=void 0;e.api={guarantorAgreeOrRefuse:"app/app/depositFreeApply/check",getIdentifyingCode:"app/app/xcx/getIdentifyingCode",checkVerifyCode:"app/app/checkMobile",ocrIdcard:"app/app/audit/user/ocrIdcard",faceAudit:"app/app/audit/user/faceAudit"}},8386:function(t,e,r){"use strict";r.r(e);var n=r("d2db"),a=r("c4c4");for(var i in a)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return a[t]}))}(i);r("883d");var o=r("f0c5"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"421f827a",null,!1,n["a"],void 0);e["default"]=c.exports},"883d":function(t,e,r){"use strict";var n=r("1be7"),a=r.n(n);a.a},"9fd8":function(t,e,r){var n=r("24fb");e=n(!1),e.push([t.i,".wrap[data-v-421f827a]{padding:40px %?20?%;display:flex;flex-direction:column;align-items:center}.tip[data-v-421f827a]{margin-top:16px;font-size:16px;line-height:%?44?%;color:rgba(10,15,45,.5)}.video-wrap[data-v-421f827a]{width:200px;height:200px;border-radius:50%;overflow:hidden;-webkit-backface-visibility:hidden;-webkit-transform:translateZ(0);background:#000}#video[data-v-421f827a]{width:100%;height:100%;border-radius:50%;-webkit-backface-visibility:hidden;-webkit-transform:translateZ(0)}#canvas[data-v-421f827a]{position:absolute;left:-10000px}",""]),t.exports=e},a550:function(t,e,r){"use strict";r("7a82");var n=r("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(r("5530")),i=n(r("c7eb")),o=n(r("1da1")),c=r("5037"),u={video:{width:{min:300,ideal:1920,max:500},height:{min:250,ideal:1080,max:400},facingMode:"user"}},s={data:function(){return{tip:"拍摄实际用车人人脸，请确保正对手机且光线充足",timer:null,idcard:"",name:"",myVideo:null,canvas:null,videoStream:null,error:"",src:"",info:"",tempFilePaths:"",canvasW:0,canvasH:0,params:{}}},onLoad:function(t){this.idcard=t.idcard,this.name=t.name},onReady:function(){this.init()},onUnload:function(){this.clearTimer()},methods:{init:function(){var t=this;return(0,o.default)((0,i.default)().mark((function e(){return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t.myVideo=document.querySelector(".uni-video-video"),!("mediaDevices"in window.navigator)||!("getUserMedia"in window.navigator.mediaDevices)){e.next=11;break}return e.next=5,window.navigator.mediaDevices.getUserMedia(u);case 5:t.videoStream=e.sent,t.myVideo.srcObject=t.videoStream,t.myVideo.play(),t.screenshot(),e.next=12;break;case 11:t.error="手机不支持";case 12:e.next=18;break;case 14:e.prev=14,e.t0=e["catch"](0),t.error="init: ".concat(e.t0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})))()},screenshot:function(){var t=this;try{var e=document.querySelector("#canvas canvas");this.timer=setTimeout((function(){e.width=3*t.myVideo.videoWidth,e.height=3*t.myVideo.videoHeight,e.getContext("2d").drawImage(t.myVideo,0,0),t.tempFilePaths=e.toDataURL("image/jpeg"),t.$getFileUpload(t.tempFilePaths).then((function(e){0==e.code?(t.src=e.data.src,t.$getRequest(c.api.faceAudit,"POST",{imageUrl:t.src,idNum:t.idcard,name:t.name}).then((function(e){if(0==e.code&&e.data.pass){e.data.reason.split("(");t.tip="认证通过",t.save()}else t.tip="抱歉，没有认出您",t.screenshot()}))):t.screenshot()}))}),1e3)}catch(r){this.error="screenshot: ".concat(r),console.log(r)}},save:function(){var t=this;return(0,o.default)((0,i.default)().mark((function e(){var r,n,o,u,s;return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=uni.getStorageSync("guarantorIndexOptions"),r&&(t.params=(0,a.default)((0,a.default)({},t.params),r)),n=uni.getStorageSync("guarantorIdCardInfo"),n&&(t.params=(0,a.default)((0,a.default)({},t.params),n)),o=uni.getStorageSync("guarantorCompanyInfo"),o&&(t.params=(0,a.default)((0,a.default)({},t.params),o)),u=(0,a.default)({isAgree:1},t.params),e.next=9,t.$getRequest(c.api.guarantorAgreeOrRefuse,"POST",u);case 9:s=e.sent,0===s.code?(t.info=7,uni.reLaunch({url:"/pages/guarantor/result?isAgree=1&name=".concat(t.params.applicantName)})):uni.showToast({title:s.msg,duration:2e3,icon:"none"});case 11:case"end":return e.stop()}}),e)})))()},clearTimer:function(){clearTimeout(this.timer),this.timer=null}}};e.default=s},b636:function(t,e,r){var n=r("e065");n("asyncIterator")},c4c4:function(t,e,r){"use strict";r.r(e);var n=r("a550"),a=r.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e["default"]=a.a},c7eb:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
e.default=function(){return t};var t={},r=Object.prototype,a=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},c=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function d(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(I){d=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var a=e&&e.prototype instanceof p?e:p,o=Object.create(a.prototype),c=new j(n||[]);return i(o,"_invoke",{value:_(t,r,c)}),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(I){return{type:"throw",arg:I}}}t.wrap=f;var h={};function p(){}function v(){}function g(){}var y={};d(y,c,(function(){return this}));var m=Object.getPrototypeOf,w=m&&m(m(S([])));w&&w!==r&&a.call(w,c)&&(y=w);var b=g.prototype=p.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){var r;i(this,"_invoke",{value:function(i,o){function c(){return new e((function(r,c){(function r(i,o,c,u){var s=l(t[i],t,o);if("throw"!==s.type){var d=s.arg,f=d.value;return f&&"object"==(0,n.default)(f)&&a.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(f).then((function(t){d.value=t,c(d)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)})(i,o,r,c)}))}return r=r?r.then(c,c):c()}})}function _(t,e,r){var n="suspendedStart";return function(a,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw i;return P()}for(r.method=a,r.arg=i;;){var o=r.delegate;if(o){var c=O(o,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function O(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator["return"]&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var a=l(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,h;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function S(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(a.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:P}}function P(){return{value:void 0,done:!0}}return v.prototype=g,i(b,"constructor",{value:g,configurable:!0}),i(g,"constructor",{value:v,configurable:!0}),v.displayName=d(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,d(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(L.prototype),d(L.prototype,u,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,a,i){void 0===i&&(i=Promise);var o=new L(f(e,r,n,a),i);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},x(b),d(b,s,"Generator"),d(b,c,(function(){return this})),d(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=S,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return o.type="throw",o.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],o=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;E(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t},r("7a82"),r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("b636"),r("944a"),r("0c47"),r("23dc"),r("3410"),r("d9e2"),r("d401"),r("14d9"),r("159b"),r("131a"),r("26e9"),r("fb6a");var n=function(t){return t&&t.__esModule?t:{default:t}}(r("53ca"))},d2db:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return a})),r.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"wrap"},[e("v-uni-view",{staticClass:"video-wrap"},[e("v-uni-video",{attrs:{id:"video",controls:!1}})],1),e("v-uni-canvas",{attrs:{id:"canvas"}}),e("v-uni-view",{staticClass:"tip"},[this._v(this._s(this.tip))])],1)},a=[]}}]);