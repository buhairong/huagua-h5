(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-guarantor-verifyCode"],{"1da1":function(t,e,n){"use strict";function r(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,o)}n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))}},n("d3b7")},"28ac":function(t,e,n){"use strict";n.r(e);var r=n("4355"),o=n("a155");for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("60cf");var a=n("f0c5"),c=Object(a["a"])(o["default"],r["b"],r["c"],!1,null,"7d6a8b30",null,!1,r["a"],void 0);e["default"]=c.exports},4355:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page"},[n("v-uni-view",{staticClass:"title"},[t._v("输入验证码")]),n("v-uni-view",{staticClass:"sub-title"},[t._v("验证码已发送至 "+t._s(t.hideMobile))]),n("v-uni-view",{staticClass:"phone_code_single"},[n("v-uni-input",{staticClass:"phone_code_single_cinput",attrs:{"adjust-position":"false","auto-blur":"true",focus:t.focus,type:"number",maxlength:"4"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.codeNumBlurFun.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.codeNumInputFun.apply(void 0,arguments)}},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),n("v-uni-view",{staticClass:"phone_code_single_codeinput"},t._l(4,(function(e,r){return n("v-uni-view",{key:r,staticClass:"code_box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.codefocusFun(r)}}},[t._v(t._s(t.code[r]))])})),1)],1),n("v-uni-view",{staticClass:"send-code-wrap"},[t.isSms?n("v-uni-view",{staticClass:"send-code",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getVerifyCode.apply(void 0,arguments)}}},[t._v("重新获取")]):n("v-uni-view",[t._v("重新获取 "+t._s(t.sms)+"s")])],1)],1)},o=[]},5037:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.api=void 0;e.api={guarantorAgreeOrRefuse:"app/app/depositFreeApply/check",getIdentifyingCode:"app/app/xcx/getIdentifyingCode",checkVerifyCode:"app/app/checkMobile",ocrIdcard:"app/app/audit/user/ocrIdcard",faceAudit:"app/app/audit/user/faceAudit"}},"60cf":function(t,e,n){"use strict";var r=n("fbca"),o=n.n(r);o.a},"93fc":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,".page[data-v-7d6a8b30]{width:100vw;padding:%?32?% %?32?% %?80?%}.title[data-v-7d6a8b30]{height:%?72?%;font-size:%?56?%;font-weight:500;line-height:%?72?%;color:#0a0f2d}.title1[data-v-7d6a8b30]{margin-top:%?8?%;height:%?44?%;font-size:%?28?%;line-height:%?44?%;color:rgba(10,15,45,.5)}.mobile[data-v-7d6a8b30]{margin-top:%?80?%;padding-left:%?32?%;width:100%;height:%?112?%;line-height:%?112?%;border-radius:%?16?%;background:rgba(10,15,45,.04)}.send-code-wrap[data-v-7d6a8b30]{height:%?44?%;font-size:%?28?%;line-height:%?44?%;color:rgba(10,15,45,.3)}.send-code[data-v-7d6a8b30]{color:#0a0f2d}.phone_code_single[data-v-7d6a8b30]{margin:%?80?% 0}.phone_code_single_cinput[data-v-7d6a8b30]{position:fixed;left:%?-100?%;width:%?50?%;height:%?50?%}.phone_code_single_codeinput[data-v-7d6a8b30]{display:flex;justify-content:space-between}.code_box[data-v-7d6a8b30]{width:%?136?%;height:%?152?%;border-radius:%?16?%;background:rgba(10,15,45,.04);font-size:%?56?%;color:#000;display:flex;justify-content:center;align-items:center}",""]),t.exports=e},a155:function(t,e,n){"use strict";n.r(e);var r=n("eb84"),o=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},a486:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.formatTenThousandNumber=void 0,e.formatThousandNumber=r,e.getDeposit=function(t){return t?"￥".concat(r(t)):0===t?"减免保证金":"-"},e.getImageInfo=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.75;return new Promise((function(n){uni.getImageInfo({src:t,success:function(r){console.log("getImageInfo",r);var o=t;if(r.height>r.width){var i=r.width,a=Math.floor(r.width*e),c=Math.floor((r.height-a)/2);o="".concat(t,"?x-oss-process=image/crop,x_").concat(0,",y_").concat(c,",w_").concat(i,",h_").concat(a)}console.log("getImageInfo",o),n(o)},fail:function(t){console.log(t),n("")}})}))},e.hideMobile=function(t){var e=t.replace(/(\d{3})(\d{4})(\d{4})/,"$1****$3");return e},e.toChinesNum=void 0,n("d401"),n("d3b7"),n("25f0"),n("26e9"),n("13d5"),n("99af"),n("e25e"),n("159b"),n("3c65"),n("14d9"),n("ac1f"),n("5319");function r(t){t=Math.floor(t);var e=t.toString(),n=e.split("").reverse();return n.reduce((function(t,e,n){return n%3===0?t?e+","+t:e:e+t}),"")}e.formatTenThousandNumber=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"万",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r="";return(t||0==t)&&(r=t<1e4?t+n:t%1e4===0?t/1e4+e:t%1e3===0?(t/1e4).toFixed(1)+e:(t/1e4).toFixed(2)+e),r};e.toChinesNum=function(t){var e=["零","一","二","三","四","五","六","七","八","九"],n=["","十","百","千","万"];t=parseInt(t);var r=function(t){var r=t.toString().split("").reverse(),o="",i=[];r.forEach((function(t,r){i.unshift("0"===t?e[t]:e[t]+n[r])}));var a=[];return i.forEach((function(t,e){"零"!==t&&a.push(e)})),i.length>1?i.forEach((function(t,e){"零"===i[i.length-1]?e<=a[a.length-1]&&(o+=t):o+=t})):o=i[0],o},o=Math.floor(t/1e4),i=t%1e4;return i.toString().length<4&&(i="0"+i),o?r(o)+"万"+r(i):r(t)}},b636:function(t,e,n){var r=n("e065");r("asyncIterator")},c7eb:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
e.default=function(){return t};var t={},n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(M){f=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),c=new I(r||[]);return i(a,"_invoke",{value:L(t,n,c)}),a}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(M){return{type:"throw",arg:M}}}t.wrap=l;var h={};function v(){}function p(){}function g(){}var y={};f(y,c,(function(){return this}));var m=Object.getPrototypeOf,b=m&&m(m(j([])));b&&b!==n&&o.call(b,c)&&(y=b);var w=g.prototype=v.prototype=Object.create(y);function _(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){var n;i(this,"_invoke",{value:function(i,a){function c(){return new e((function(n,c){(function n(i,a,c,u){var s=d(t[i],t,a);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==(0,r.default)(l)&&o.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(l).then((function(t){f.value=t,c(f)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)})(i,a,n,c)}))}return n=n?n.then(c,c):c()}})}function L(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return k()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=E(a,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=d(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function E(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator["return"]&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var o=d(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function j(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=g,i(w,"constructor",{value:g,configurable:!0}),i(g,"constructor",{value:p,configurable:!0}),p.displayName=f(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,f(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},_(x.prototype),f(x.prototype,u,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new x(l(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(w),f(w,s,"Generator"),f(w,c,(function(){return this})),f(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=j,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t},n("7a82"),n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("b636"),n("944a"),n("0c47"),n("23dc"),n("3410"),n("d9e2"),n("d401"),n("14d9"),n("159b"),n("131a"),n("26e9"),n("fb6a");var r=function(t){return t&&t.__esModule?t:{default:t}}(n("53ca"))},eb84:function(t,e,n){"use strict";n("7a82");var r=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("d3b7");var o=r(n("c7eb")),i=r(n("1da1")),a=n("a486"),c=n("5037"),u={data:function(){return{mobile:"",hideMobile:"",isSms:!0,sms:60,code:"",focus:!0}},onLoad:function(t){this.mobile=t.mobile,this.hideMobile=(0,a.hideMobile)(t.mobile),this.getVerifyCode()},methods:{getVerifyCode:function(){var t=this;return(0,i.default)((0,o.default)().mark((function e(){var n;return(0,o.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isSms=!1,t.timer=setInterval((function(){--t.sms<=0&&(t.sms=60,t.isSms=!0,clearInterval(t.timer))}),1e3),uni.showLoading({title:"正在发送"}),e.next=5,t.$getRequest(c.api.getIdentifyingCode,"POST",{mobile:t.mobile});case 5:n=e.sent,uni.hideLoading(),0!=n.code?uni.showToast({title:"验证码获取失败，请重试",icon:"none",duration:1500}):uni.showToast({title:"验证码已发送",icon:"none",duration:1500});case 8:case"end":return e.stop()}}),e)})))()},codeNumInputFun:function(t){var e=t.detail.value;this.code=e,4===e.length&&this.finishCode()},codeNumBlurFun:function(t){var e=t.detail.value;this.focus=!1,4===e.length&&this.finishCode()},codefocusFun:function(t){this.focus=!0},finishCode:function(){var t=this;uni.showLoading({title:"正在发送"});var e={mobile:this.mobile,identifyingCode:this.code};this.$getRequest(c.api.checkVerifyCode,"POST",e).then((function(t){0==t.code?uni.reLaunch({url:"/pages/guarantor/uploadIdCard"}):uni.showToast({title:t.msg,duration:2e3,icon:"none"})})).finally((function(){uni.hideLoading(),t.isSms=!0,t.sms=60,clearInterval(t.timer)}))},goVerifyCodePage:function(){uni.navigateTo({url:"/pages/guarantor/verifyCode?mobile=".concat(this.mobile)})}}};e.default=u},fbca:function(t,e,n){var r=n("93fc");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("4f06").default;o("ca240666",r,!0,{sourceMap:!1,shadowMode:!1})}}]);