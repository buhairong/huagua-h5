(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-guarantor-uploadCompanyInfo"],{1142:function(t,e,n){"use strict";var r=n("d26a"),a=n.n(r);a.a},"1da1":function(t,e,n){"use strict";function r(t,e,n,r,a,i,o){try{var c=t[i](o),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,a)}n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(a,i){var o=t.apply(e,n);function c(t){r(o,a,i,c,u,"next",t)}function u(t){r(o,a,i,c,u,"throw",t)}c(void 0)}))}},n("d3b7")},3803:function(t,e,n){"use strict";n("7a82");var r=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("14d9"),n("a434"),n("99af");var a=r(n("5530")),i=r(n("c7eb")),o=r(n("b85c")),c=r(n("1da1")),u=n("5037"),s={data:function(){return{form:{companyName:"",imageUrl:[],params:{}},idcard:"",name:""}},computed:{disabled:function(){var t=!0;return this.form.companyName&&this.form.imageUrl.length&&(t=!1),t}},onLoad:function(t){this.idcard=t.idcard,this.name=t.name},methods:{uploadImg:function(){var t=this;uni.chooseImage({success:function(){var e=(0,c.default)((0,i.default)().mark((function e(n){var r,a,c,u,s;return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:uni.showLoading({title:"上传中"}),r=n.tempFilePaths,a=(0,o.default)(r),e.prev=3,a.s();case 5:if((c=a.n()).done){e.next=13;break}return u=c.value,e.next=9,t.$getFileUpload(u);case 9:s=e.sent,0===s.code&&t.form.imageUrl.push(s.data.src);case 11:e.next=5;break;case 13:e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](3),a.e(e.t0);case 18:return e.prev=18,a.f(),e.finish(18);case 21:uni.hideLoading();case 22:case"end":return e.stop()}}),e,null,[[3,15,18,21]])})));return function(t){return e.apply(this,arguments)}}()})},delImg:function(t){var e=this;uni.showModal({title:"提示",content:"确定要删除这张图片吗？",success:function(n){n.confirm&&e.form.imageUrl.splice(t,1)}})},goNextPage:function(){uni.setStorageSync("guarantorCompanyInfo",this.form),uni.navigateTo({url:"/pages/guarantor/face-identity-tip?idcard=".concat(this.idcard,"&name=").concat(this.name)})},save:function(){var t=this;return(0,c.default)((0,i.default)().mark((function e(){var n,r,o,c,s;return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=uni.getStorageSync("guarantorIndexOptions"),n&&(t.params=(0,a.default)((0,a.default)({},t.params),n)),r=uni.getStorageSync("guarantorIdCardInfo"),r&&(t.params=(0,a.default)((0,a.default)({},t.params),r)),o=uni.getStorageSync("guarantorCompanyInfo"),o&&(t.params=(0,a.default)((0,a.default)({},t.params),o)),c=(0,a.default)({isAgree:1},t.params),e.next=9,t.$getRequest(u.api.guarantorAgreeOrRefuse,"POST",c);case 9:s=e.sent,0===s.code?uni.reLaunch({url:"/pages/guarantor/result?isAgree=1&name=".concat(t.params.applicantName)}):uni.showToast({title:s.msg,duration:2e3,icon:"none"});case 11:case"end":return e.stop()}}),e)})))()}}};e.default=s},"47aa":function(t,e,n){"use strict";n.r(e);var r=n("3803"),a=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},5037:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.api=void 0;e.api={guarantorAgreeOrRefuse:"app/app/depositFreeApply/check",getIdentifyingCode:"app/app/xcx/getIdentifyingCode",checkVerifyCode:"app/app/checkMobile",ocrIdcard:"app/app/audit/user/ocrIdcard",faceAudit:"app/app/audit/user/faceAudit"}},b636:function(t,e,n){var r=n("e065");r("asyncIterator")},b85c:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=(0,r.default)(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var a=0,i=function(){};return{s:i,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){u=!0,o=t},f:function(){try{c||null==n["return"]||n["return"]()}finally{if(u)throw o}}}},n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("d9e2"),n("d401");var r=function(t){return t&&t.__esModule?t:{default:t}}(n("06c5"))},c0fd:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,".page[data-v-1a964c06]{width:100vw;height:calc(100vh - %?88?%);padding:%?32?% %?32?% %?80?%;display:flex;flex-direction:column;justify-content:space-between}.title[data-v-1a964c06]{height:%?72?%;font-size:%?56?%;font-weight:500;line-height:%?72?%;color:#0a0f2d}.page-card[data-v-1a964c06]{margin-top:%?48?%}.input-wrap[data-v-1a964c06]{width:100%;height:%?104?%;display:flex;justify-content:space-between;align-items:center;font-size:%?30?%;color:rgba(10,15,45,.5);border-bottom:%?2?% solid #e6e6e6}.input-wrap .label[data-v-1a964c06]{padding-right:%?32?%}.input-wrap .input[data-v-1a964c06]{flex:1;text-align:right}.tip1[data-v-1a964c06]{margin-top:%?24?%;height:%?44?%;font-size:%?28?%;line-height:%?44?%;color:rgba(10,15,45,.8)}.tip2[data-v-1a964c06]{height:%?44?%;font-size:%?20?%;line-height:%?44?%;color:#767676}.img-wrap[data-v-1a964c06]{display:flex;flex-wrap:wrap;justify-content:space-between}.img-box[data-v-1a964c06]{margin-top:%?24?%;width:%?296?%;height:%?240?%;border-radius:%?8?%;overflow:hidden;position:relative}.img-box .img[data-v-1a964c06]{width:100%;height:100%}.img-box .del-icon[data-v-1a964c06]{position:absolute;top:%?20?%;right:%?20?%;width:%?40?%;height:%?40?%;z-index:100}.img-box1[data-v-1a964c06]{background:#0a0f2d;display:flex;flex-direction:column;justify-content:center;align-items:center}.img-box1 .camera-img[data-v-1a964c06]{width:%?48?%;height:%?48?%}.img-box1 .img-tip[data-v-1a964c06]{margin-top:%?24?%;height:%?40?%;font-size:%?28?%;line-height:%?40?%;color:#fff}",""]),t.exports=e},c7eb:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
e.default=function(){return t};var t={},n=Object.prototype,a=n.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},c=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(S){l=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var a=e&&e.prototype instanceof h?e:h,o=Object.create(a.prototype),c=new k(r||[]);return i(o,"_invoke",{value:L(t,n,c)}),o}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(S){return{type:"throw",arg:S}}}t.wrap=f;var p={};function h(){}function v(){}function g(){}var m={};l(m,c,(function(){return this}));var y=Object.getPrototypeOf,w=y&&y(y(C([])));w&&w!==n&&a.call(w,c)&&(m=w);var b=g.prototype=h.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){var n;i(this,"_invoke",{value:function(i,o){function c(){return new e((function(n,c){(function n(i,o,c,u){var s=d(t[i],t,o);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==(0,r.default)(f)&&a.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)})(i,o,n,c)}))}return n=n?n.then(c,c):c()}})}function L(t,e,n){var r="suspendedStart";return function(a,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw i;return I()}for(n.method=a,n.arg=i;;){var o=n.delegate;if(o){var c=E(o,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=d(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function E(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator["return"]&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var a=d(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,p;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function C(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(a.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:I}}function I(){return{value:void 0,done:!0}}return v.prototype=g,i(b,"constructor",{value:g,configurable:!0}),i(g,"constructor",{value:v,configurable:!0}),v.displayName=l(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(_.prototype),l(_.prototype,u,(function(){return this})),t.AsyncIterator=_,t.async=function(e,n,r,a,i){void 0===i&&(i=Promise);var o=new _(f(e,n,r,a),i);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},x(b),l(b,s,"Generator"),l(b,c,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=C,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return o.type="throw",o.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;j(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:C(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},t},n("7a82"),n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("b636"),n("944a"),n("0c47"),n("23dc"),n("3410"),n("d9e2"),n("d401"),n("14d9"),n("159b"),n("131a"),n("26e9"),n("fb6a");var r=function(t){return t&&t.__esModule?t:{default:t}}(n("53ca"))},d26a:function(t,e,n){var r=n("c0fd");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("4f06").default;a("77b260fc",r,!0,{sourceMap:!1,shadowMode:!1})},d9a7:function(t,e,n){"use strict";n.r(e);var r=n("e066"),a=n("47aa");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("1142");var o=n("f0c5"),c=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"1a964c06",null,!1,r["a"],void 0);e["default"]=c.exports},e066:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page"},[n("v-uni-view",{staticClass:"top"},[n("v-uni-view",{staticClass:"title"},[t._v("工作信息")]),n("v-uni-view",{staticClass:"page-card"},[n("v-uni-view",{staticClass:"input-wrap"},[n("v-uni-view",{staticClass:"label"},[t._v("所在单位名称")]),n("v-uni-input",{staticClass:"input",attrs:{placeholder:"请输入所在单位全称"},model:{value:t.form.companyName,callback:function(e){t.$set(t.form,"companyName",e)},expression:"form.companyName"}})],1),n("v-uni-view",{staticClass:"tip1"},[t._v("请上传所在单位的相关证明照片")]),n("v-uni-view",{staticClass:"tip2"},[t._v("( 例如 社保缴纳记录、银行流水证明、明信片、工作证等 )")]),n("v-uni-view",{staticClass:"img-wrap"},[t._l(t.form.imageUrl,(function(e,r){return n("v-uni-view",{key:r,staticClass:"img-box"},[n("v-uni-image",{staticClass:"img",attrs:{mode:"aspectFill",src:e}}),n("v-uni-image",{staticClass:"del-icon",attrs:{src:"/static/close.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.delImg(r)}}})],1)})),n("v-uni-view",{staticClass:"img-box img-box1",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.uploadImg.apply(void 0,arguments)}}},[n("v-uni-image",{staticClass:"camera-img",attrs:{src:"/static/guarantor/camera.png"}}),n("v-uni-view",{staticClass:"img-tip"},[t._v("上传相关证明")])],1)],2)],1)],1),n("v-uni-button",{staticClass:"buttom-disabled-btn",attrs:{disabled:t.disabled},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goNextPage.apply(void 0,arguments)}}},[t._v("立即认证")])],1)},a=[]}}]);