/*! For license information please see ae123a3c0170bf5cf53cabb23e7b6321c8cc068e-29eec59f71726ab5c1ab.js.LICENSE.txt */
(self.webpackChunkloop_gatsby=self.webpackChunkloop_gatsby||[]).push([[401],{5706:function(e,t,r){"use strict";var a=r(8812),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function s(e){return a.isMemo(e)?i:c[e.$$typeof]||n}c[a.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[a.Memo]=i;var l=Object.defineProperty,p=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,r,a){if("string"!=typeof r){if(h){var n=m(r);n&&n!==h&&e(t,n,a)}var i=p(r);d&&(i=i.concat(d(r)));for(var c=s(t),f=s(r),g=0;g<i.length;++g){var y=i[g];if(!(o[y]||a&&a[y]||f&&f[y]||c&&c[y])){var b=u(r,y);try{l(t,y,b)}catch(v){}}}}return t}},165:function(e,t){"use strict";var r="function"==typeof Symbol&&Symbol.for,a=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,o=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,p=r?Symbol.for("react.async_mode"):60111,d=r?Symbol.for("react.concurrent_mode"):60111,u=r?Symbol.for("react.forward_ref"):60112,m=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.suspense_list"):60120,f=r?Symbol.for("react.memo"):60115,g=r?Symbol.for("react.lazy"):60116,y=r?Symbol.for("react.block"):60121,b=r?Symbol.for("react.fundamental"):60117,v=r?Symbol.for("react.responder"):60118,E=r?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case p:case d:case o:case c:case i:case m:return e;default:switch(e=e&&e.$$typeof){case l:case u:case g:case f:case s:return e;default:return t}}case n:return t}}}function _(e){return w(e)===d}t.AsyncMode=p,t.ConcurrentMode=d,t.ContextConsumer=l,t.ContextProvider=s,t.Element=a,t.ForwardRef=u,t.Fragment=o,t.Lazy=g,t.Memo=f,t.Portal=n,t.Profiler=c,t.StrictMode=i,t.Suspense=m,t.isAsyncMode=function(e){return _(e)||w(e)===p},t.isConcurrentMode=_,t.isContextConsumer=function(e){return w(e)===l},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===a},t.isForwardRef=function(e){return w(e)===u},t.isFragment=function(e){return w(e)===o},t.isLazy=function(e){return w(e)===g},t.isMemo=function(e){return w(e)===f},t.isPortal=function(e){return w(e)===n},t.isProfiler=function(e){return w(e)===c},t.isStrictMode=function(e){return w(e)===i},t.isSuspense=function(e){return w(e)===m},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===d||e===c||e===i||e===m||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===f||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===b||e.$$typeof===v||e.$$typeof===E||e.$$typeof===y)},t.typeOf=w},8812:function(e,t,r){"use strict";e.exports=r(165)},9379:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=(0,n.default)(e),o=(0,a.default)(t);if(""===r)return"";o&&(r=r.toLowerCase());return r.substr(0,1).toUpperCase()+r.substr(1)};var a=o(r(1614)),n=o(r(7228));function o(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},1614:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if((0,o.default)(e))return t;return Boolean(e)};var a,n=r(3959),o=(a=n)&&a.__esModule?a:{default:a};e.exports=t.default},7800:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=(0,o.default)(e),i=Array.isArray(t)?t:[],c=a.REGEXP_EXTENDED_ASCII.test(r)?a.REGEXP_LATIN_WORD:a.REGEXP_WORD;return r.replace(c,(function(e,t){return t>0&&i.indexOf(r[t-1])>=0?e.toLowerCase():(0,n.default)(e,!0)}))};var a=r(99),n=i(r(9379)),o=i(r(7228));function i(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},8565:function(e,t,r){"use strict";r.d(t,{Z:function(){return E}});var a=r(3552),n=r(7294),o=r(5444);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var s=function(e){var t,r;function a(){var t;return(t=e.call(this)||this).handleExpired=t.handleExpired.bind(c(t)),t.handleErrored=t.handleErrored.bind(c(t)),t.handleChange=t.handleChange.bind(c(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(c(t)),t}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var o=a.prototype;return o.getValue=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this.props.grecaptcha.getResponse(this._widgetId):null},o.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},o.execute=function(){var e=this.props.grecaptcha;if(e&&void 0!==this._widgetId)return e.execute(this._widgetId);this._executeRequested=!0},o.executeAsync=function(){var e=this;return new Promise((function(t,r){e.executionResolve=t,e.executionReject=r,e.execute()}))},o.reset=function(){this.props.grecaptcha&&void 0!==this._widgetId&&this.props.grecaptcha.reset(this._widgetId)},o.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},o.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},o.handleChange=function(e){this.props.onChange&&this.props.onChange(e),this.executionResolve&&(this.executionResolve(e),delete this.executionReject,delete this.executionResolve)},o.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&void 0===this._widgetId){var e=document.createElement("div");this._widgetId=this.props.grecaptcha.render(e,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge}),this.captcha.appendChild(e)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},o.componentDidMount=function(){this.explicitRender()},o.componentDidUpdate=function(){this.explicitRender()},o.componentWillUnmount=function(){void 0!==this._widgetId&&(this.delayOfCaptchaIframeRemoving(),this.reset())},o.delayOfCaptchaIframeRemoving=function(){var e=document.createElement("div");for(document.body.appendChild(e),e.style.display="none";this.captcha.firstChild;)e.appendChild(this.captcha.firstChild);setTimeout((function(){document.body.removeChild(e)}),5e3)},o.handleRecaptchaRef=function(e){this.captcha=e},o.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl"]));return n.createElement("div",i({},t,{ref:this.handleRecaptchaRef}))},a}(n.Component);s.displayName="ReCAPTCHA",s.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var l=r(5697),p=r.n(l),d=r(5706),u=r.n(d);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var h={},f=0;var g="onloadcallback";var y,b,v=(y=function(){return"https://"+(("undefined"!=typeof window&&window.recaptchaOptions||{}).useRecaptchaNet?"recaptcha.net":"www.google.com")+"/recaptcha/api.js?onload="+g+"&render=explicit"},b=(b={callbackName:g,globalName:"grecaptcha"})||{},function(e){var t=e.displayName||e.name||"Component",r=function(t){var r,a;function o(e,r){var a;return(a=t.call(this,e,r)||this).state={},a.__scriptURL="",a}a=t,(r=o).prototype=Object.create(a.prototype),r.prototype.constructor=r,r.__proto__=a;var i=o.prototype;return i.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+f++),this.__scriptLoaderID},i.setupScriptURL=function(){return this.__scriptURL="function"==typeof y?y():y,this.__scriptURL},i.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,(function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)}))},i.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=h[this.__scriptURL];if(!e||!e.loaded)throw new Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[b.callbackName]},i.componentDidMount=function(){var e=this,t=this.setupScriptURL(),r=this.asyncScriptLoaderGetScriptLoaderID(),a=b,n=a.globalName,o=a.callbackName,i=a.scriptId;if(n&&void 0!==window[n]&&(h[t]={loaded:!0,observers:{}}),h[t]){var c=h[t];return c&&(c.loaded||c.errored)?void this.asyncScriptLoaderHandleLoad(c):void(c.observers[r]=function(t){return e.asyncScriptLoaderHandleLoad(t)})}var s={};s[r]=function(t){return e.asyncScriptLoaderHandleLoad(t)},h[t]={loaded:!1,observers:s};var l=document.createElement("script");for(var p in l.src=t,l.async=!0,b.attributes)l.setAttribute(p,b.attributes[p]);i&&(l.id=i);var d=function(e){if(h[t]){var r=h[t].observers;for(var a in r)e(r[a])&&delete r[a]}};o&&"undefined"!=typeof window&&(window[o]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),l.onload=function(){var e=h[t];e&&(e.loaded=!0,d((function(t){return!o&&(t(e),!0)})))},l.onerror=function(){var e=h[t];e&&(e.errored=!0,d((function(t){return t(e),!0})))},document.body.appendChild(l)},i.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===b.removeOnUnmount)for(var t=document.getElementsByTagName("script"),r=0;r<t.length;r+=1)t[r].src.indexOf(e)>-1&&t[r].parentNode&&t[r].parentNode.removeChild(t[r]);var a=h[e];a&&(delete a.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===b.removeOnUnmount&&delete h[e])},i.render=function(){var t=b.globalName,r=this.props,a=(r.asyncScriptOnLoad,r.forwardedRef),o=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(r,["asyncScriptOnLoad","forwardedRef"]);return t&&"undefined"!=typeof window&&(o[t]=void 0!==window[t]?window[t]:void 0),o.ref=a,(0,n.createElement)(e,o)},o}(n.Component),a=(0,n.forwardRef)((function(e,t){return(0,n.createElement)(r,m({},e,{forwardedRef:t}))}));return a.displayName="AsyncScriptLoader("+t+")",a.propTypes={asyncScriptOnLoad:p().func},u()(a,e)})(s);var E=function(e){function t(t){var r;return(r=e.call(this,t)||this).handleChange=function(e){var t;r.setState(((t={})[e.target.name]=e.target.value,t))},r.handleRecaptcha=function(e){r.setState({"g-recaptcha-response":e}),document.getElementById("recapchta-message").classList.add("is-hidden")},r.handleSubmit=function(e){var t,a=e.target;if(e.preventDefault(),!r.state["g-recaptcha-response"])return document.getElementById("recapchta-message").classList.remove("is-hidden");fetch("https://looparch.com/contact-form/",{method:"POST",headers:{Accept:"application/json"},redirect:"follow",data:(t=Object.assign({},r.state),Object.keys(t).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"))}).then((function(e){(0,o.navigate)(a.getAttribute("action"))})).catch((function(e){return console.log(e)}))},r.state={name:"",eml:"",manufacturer:r.props.section||"Contact Us",message:"","g-recaptcha-response":null},r}(0,a.Z)(t,e);var r=t.prototype;return r.componentDidMount=function(){this.setState({manufacturer:this.props.section||"Contact Us"})},r.render=function(){var e=this.props.section||"Contact Us",t=this.props.manufacturers.edges,r=this.props.recaptchaKey;return n.createElement("form",{name:"contact",method:"POST",action:"/thanks","data-netlify":"true","data-netlify-recaptcha":"true",onSubmit:this.handleSubmit},n.createElement("div",{className:"field"},n.createElement("label",{className:"label",htmlFor:"name"},"Your Name*:"),n.createElement("div",{className:"control"},n.createElement("input",{id:"name",className:"input",type:"text",name:"name",autoComplete:"name",onChange:this.handleChange,required:!0}))),n.createElement("div",{className:"field"},n.createElement("label",{className:"label",htmlFor:"email"},"Your Email*:"),n.createElement("div",{className:"control"},n.createElement("input",{id:"email",className:"input",type:"email",name:"eml",autoComplete:"email",onChange:this.handleChange,required:!0}))),n.createElement("div",{className:"field"},n.createElement("label",{className:"label",htmlFor:"manufacturer"},"Manufacturer:"),n.createElement("div",{className:"control"},n.createElement("span",{className:"select"},n.createElement("select",{id:"manufacturer",name:"manufacturer",defaultValue:e,onChange:this.handleChange},t.map((function(e){var t=e.node;return n.createElement("option",{key:t.id,value:t.title},t.title)})))))),n.createElement("div",{className:"field"},n.createElement("label",{className:"label",htmlFor:"message"},"Message:"),n.createElement("div",{className:"control"},n.createElement("textarea",{id:"message",className:"textarea",name:"message",onChange:this.handleChange,placeholder:"Your message..."}))),n.createElement("div",{className:"field"},n.createElement("label",{className:"label",htmlFor:"project_name"},"Project Name (if applicable):"),n.createElement("div",{className:"control"},n.createElement("input",{id:"project_name",className:"input",type:"text",name:"project_name",onChange:this.handleChange}))),n.createElement("div",{className:"field"},n.createElement("label",{className:"label",htmlFor:"project_specifier"},"Project Specifier (if applicable):"),n.createElement("div",{className:"control"},n.createElement("input",{id:"project_specifier",className:"input",type:"text",name:"project_specifier",onChange:this.handleChange}))),n.createElement("div",{className:"field"},n.createElement(v,{ref:"recaptcha",sitekey:r,onChange:this.handleRecaptcha,required:!0}),n.createElement("div",{className:"is-hidden is-inline-block notification is-danger",id:"recapchta-message"},"Recaptcha is required.")),n.createElement("div",{className:"field"},n.createElement("div",{className:"control"},n.createElement("button",{type:"submit",className:"button is-link"},"Send"))))},t}(n.Component)},6179:function(e,t,r){"use strict";var a=r(3552),n=r(7294),o=r(5414),i=r(6253),c=r(7800),s=r.n(c),l=function(e){function t(t){return e.call(this,t)||this}(0,a.Z)(t,e);var r=t.prototype;return r.getBreadcrumbsFromLocation=function(e){if("/"!==e.pathname){var t=e.pathname.split("/"),r={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[]};return t.forEach((function(t,a){var n="";""!==t&&(n=n+"/"+t,r.itemListElement.push({"@type":"ListItem",position:a,item:{"@id":e.origin+"/"+n,name:s()(t.replace(/\-/g," "))}}))})),r}},r.render=function(){var e,t,r,a,c,s,l=this.props,p=l.postNode,d=l.pagePath,u=l.postSEO,m=l.pageSEO,h=l.productSEO,f=l.articleSEO,g=l.customTitle,y=l.siteMetadata,b=l.location,v=l.product,E=""+y.siteUrl+y.shareImage,w=new Date,_=[p.title].concat(p.tags);e=y.title,t=y.description,r=""+y.siteUrl+y.shareImage,a=y.shareImageWidth,c=y.shareImageHeight,s=y.siteUrl;var S=this.getBreadcrumbsFromLocation(b);g&&(e=p.title,s=y.siteUrl+"/"+d+"/"),(u||m)&&(e=p.title,t=p.description.internal.content,s=d.length>1?y.siteUrl+"/"+d+"/":y.siteUrl+"/"),(u||f)&&(r="https:"+(0,i.f)(p.heroImage.gatsbyImageData),a=p.heroImage.gatsbyImageData.width,c=p.heroImage.gatsbyImageData.height,w=p.publishDate,s=y.siteUrl+"/"+d+"/"),h&&(t=""===v.description?v.manufacturer+" product":v.description,r=""+y.siteUrl+(0,i.f)(v.image_primary.childImageSharp.gatsbyImageData),a=v.image_primary.childImageSharp.gatsbyImageData.width,c=v.image_primary.childImageSharp.gatsbyImageData.height,w=p.publishDate,s=""+y.siteUrl+v.slug,e=v.manufacturer+" - "+v.title);var C=[{"@context":"http://schema.org","@type":"WebSite",url:y.siteUrl,name:y.title,alternateName:y.title,potentialAction:{"@type":"SearchAction",target:"https://looparch.com/search/?s={search_term_string}","query-input":"required name=search_term_string"}},{"@context":"http://schema.org","@type":"Organization",name:y.title,legalName:y.title+", LLC",url:y.siteUrl,logo:E,foundingDate:"2009",address:{"@type":"PostalAddress",streetAddress:"3110 N 16th Street",addressLocality:"Phoenix",addressRegion:"AZ",postalCode:"85016",addressCountry:"USA"},contactPoint:{"@type":"ContactPoint",contactType:"sales",email:"info@looparch.com",url:y.siteUrl+"/contact/"},sameAs:["https://www.instagram.com/looparchitecturalmaterials/","https://www.facebook.com/looparch/"]},{"@context":"http://schema.org","@type":"LocalBusiness",address:{"@type":"PostalAddress",streetAddress:"3110 N 16th Street",addressLocality:"Phoenix",addressRegion:"AZ",postalCode:"85016",addressCountry:"USA"},telephone:"602-810-1502",image:E,priceRange:"$$$",description:""+y.description,name:y.title,openingHours:"Mo,Tu,We,Th,Fr 09:00-17:00",geo:{"@type":"GeoCoordinates",latitude:"33.484319",longitude:"-112.047970"},sameAs:["https://www.instagram.com/looparchitecturalmaterials/","https://www.facebook.com/looparch/","https://www.pinterest.com/looparchitecturalmaterials"]}];return u&&C.push({"@context":"http://schema.org","@type":"NewsArticle",mainEntityOfPage:{"@type":"WebPage",url:s},headline:e,image:[r],datePublished:p.publishDate,dateModified:w,author:{"@type":"Person",name:y.publisher,url:y.siteUrl},publisher:{"@type":"Organization",name:y.publisher,url:y.siteUrl,logo:{"@type":"ImageObject",name:"Loop Architectural Materials Logo",width:"600",height:"60",url:""+y.siteUrl+y.shareImage}},description:p.description.childMarkdownRemark.html}),m&&C.push({"@context":"http://schema.org","@type":"WebPage",url:b.href,name:e,description:t}),S&&C.push(S),n.createElement(o.q,null,n.createElement("meta",{name:"keywords",content:_.join(",")}),n.createElement("meta",{name:"image",content:r}),n.createElement("meta",{name:"description",content:t}),n.createElement("meta",{name:"application-name",content:"Loop Architectural Materials"}),n.createElement("script",{type:"application/ld+json"},JSON.stringify(C)),n.createElement("script",{async:!0,src:"https://chimpstatic.com/mcjs-connected/js/users/6236ae131b11b8506326eed86/943d564cd0b36996e264a468a.js"}),n.createElement("meta",{property:"og:title",content:e}),n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:author",content:"Loop Architectural Materials"}),n.createElement("meta",{property:"article:published_time",content:p.publishDate}),n.createElement("meta",{property:"og:url",content:s}),n.createElement("meta",{property:"og:image",content:r}),n.createElement("meta",{property:"og:image:width",content:a}),n.createElement("meta",{property:"og:image:height",content:c}),n.createElement("meta",{property:"og:description",content:t}),n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.createElement("meta",{name:"twitter:creator",content:y.userTwitter?y.userTwitter:""}),n.createElement("meta",{name:"twitter:title",content:e}),n.createElement("meta",{name:"twitter:image",content:r}),n.createElement("meta",{name:"twitter:description",content:t}))},t}(n.Component);t.Z=l}}]);
//# sourceMappingURL=ae123a3c0170bf5cf53cabb23e7b6321c8cc068e-29eec59f71726ab5c1ab.js.map