(self.webpackChunkloop_gatsby=self.webpackChunkloop_gatsby||[]).push([[116],{126:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#FFFFFF","images":{"fallback":{"src":"/static/0cf3ea1610a17ac88ca53040903ea4a5/97ab8/loop-signature%404x.png","srcSet":"/static/0cf3ea1610a17ac88ca53040903ea4a5/20682/loop-signature%404x.png 68w,\\n/static/0cf3ea1610a17ac88ca53040903ea4a5/2f16f/loop-signature%404x.png 136w,\\n/static/0cf3ea1610a17ac88ca53040903ea4a5/97ab8/loop-signature%404x.png 271w,\\n/static/0cf3ea1610a17ac88ca53040903ea4a5/21a46/loop-signature%404x.png 542w","sizes":"(min-width: 271px) 271px, 100vw"},"sources":[{"srcSet":"/static/0cf3ea1610a17ac88ca53040903ea4a5/e5420/loop-signature%404x.webp 68w,\\n/static/0cf3ea1610a17ac88ca53040903ea4a5/311eb/loop-signature%404x.webp 136w,\\n/static/0cf3ea1610a17ac88ca53040903ea4a5/4d89a/loop-signature%404x.webp 271w,\\n/static/0cf3ea1610a17ac88ca53040903ea4a5/f4cba/loop-signature%404x.webp 542w","type":"image/webp","sizes":"(min-width: 271px) 271px, 100vw"}]},"width":271,"height":28}')},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var c,s,l,u;if(Array.isArray(e)){if((c=e.length)!=o.length)return!1;for(s=c;0!=s--;)if(!i(e[s],o[s]))return!1;return!0}if(n&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!o.has(s.value[0]))return!1;for(u=e.entries();!(s=u.next()).done;)if(!i(s.value[1],o.get(s.value[0])))return!1;return!0}if(r&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!o.has(s.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((c=e.length)!=o.length)return!1;for(s=c;0!=s--;)if(e[s]!==o[s])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(o,l[s]))return!1;if(t&&e instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==l[s]&&"__v"!==l[s]&&"__o"!==l[s]||!e.$$typeof)&&!i(e[l[s]],o[l[s]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},5414:function(e,t,n){"use strict";n.d(t,{q:function(){return he}});var r,a,i,o,c=n(5697),s=n.n(c),l=n(4839),u=n.n(l),m=n(2993),f=n.n(m),p=n(7294),d=n(6494),h=n.n(d),g="bodyAttributes",b="htmlAttributes",y="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(v).map((function(e){return v[e]})),"charset"),w="cssText",T="href",N="http-equiv",C="innerHTML",A="itemprop",L="name",S="property",O="rel",x="src",k="target",M={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},j="defaultTitle",P="defer",I="encodeSpecialCharacters",F="onChangeClientState",_="titleTemplate",z=Object.keys(M).reduce((function(e,t){return e[M[t]]=t,e}),{}),R=[v.NOSCRIPT,v.SCRIPT,v.STYLE],B="data-react-helmet",q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},D=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},V=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=Q(e,v.TITLE),n=Q(e,_);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,j);return t||r||void 0},G=function(e){return Q(e,F)||function(){}},Z=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},J=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var c=i[o],s=c.toLowerCase();-1===t.indexOf(s)||n===O&&"canonical"===e[n].toLowerCase()||s===O&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==C&&c!==w&&c!==A||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][l]&&(a[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var c=i[o],s=h()({},r[c],a[c]);r[c]=s}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,m=e.title,f=e.titleAttributes;se(v.BODY,r),se(v.HTML,a),ce(m,f);var p={baseTag:le(v.BASE,n),linkTags:le(v.LINK,i),metaTags:le(v.META,o),noscriptTags:le(v.NOSCRIPT,c),scriptTags:le(v.SCRIPT,l),styleTags:le(v.STYLE,u)},d={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),s(e,d,h)},oe=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),se(v.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(B),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),c=0;c<o.length;c++){var s=o[c],l=t[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),-1===a.indexOf(s)&&a.push(s);var u=i.indexOf(s);-1!==u&&i.splice(u,1)}for(var m=i.length-1;m>=0;m--)n.removeAttribute(i[m]);a.length===i.length?n.removeAttribute(B):n.getAttribute(B)!==o.join(",")&&n.setAttribute(B,o.join(","))}},le=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(B,"true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},me=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[M[n]||n]=e[n],t}),t)},fe=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[B]=!0,a=me(n,r),[p.createElement(v.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=ue(n),i=oe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+K(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case g:case b:return{toComponent:function(){return me(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[B]=!0,r);return Object.keys(t).forEach((function(e){var n=M[e]||e;if(n===C||n===w){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),p.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===C||e===w)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===R.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,u=e.title,m=void 0===u?"":u,f=e.titleAttributes;return{base:fe(v.BASE,t,r),bodyAttributes:fe(g,n,r),htmlAttributes:fe(b,a,r),link:fe(v.LINK,i,r),meta:fe(v.META,o,r),noscript:fe(v.NOSCRIPT,c,r),script:fe(v.SCRIPT,s,r),style:fe(v.STYLE,l,r),title:fe(v.TITLE,{title:m,titleAttributes:f},r)}},de=u()((function(e){return{baseTag:$([T,k],e),bodyAttributes:Z(g,e),defer:Q(e,P),encode:Q(e,I),htmlAttributes:Z(b,e),linkTags:J(v.LINK,[O,T],e),metaTags:J(v.META,[L,E,N,S,A],e),noscriptTags:J(v.NOSCRIPT,[C],e),onChangeClientState:G(e),scriptTags:J(v.SCRIPT,[x,C],e),styleTags:J(v.STYLE,[w],e),title:W(e),titleAttributes:Z(y,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),pe)((function(){return null})),he=(a=de,o=i=function(e){function t(){return H(this,t),V(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return Y({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Y({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(r.type){case v.TITLE:return Y({},a,((t={})[r.type]=o,t.titleAttributes=Y({},i),t));case v.BODY:return Y({},a,{bodyAttributes:Y({},i)});case v.HTML:return Y({},a,{htmlAttributes:Y({},i)})}return Y({},a,((n={})[r.type]=Y({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Y({},t);return Object.keys(e).forEach((function(t){var r;n=Y({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return p.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[z[n]||n]=e[n],t}),t)}(U(a,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=U(e,["children"]),r=Y({},n);return t&&(r=this.mapChildrenToProps(t,r)),p.createElement(a,r)},D(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(p.Component),i.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);he.renderStatic=he.rewind},4839:function(e,t,n){"use strict";var r,a=n(7294),i=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function u(){s=e(l.map((function(e){return e.props}))),m.canUseDOM?t(s):n&&(s=n(s))}var m=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){l.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},o.render=function(){return i.createElement(r,this.props)},a}(a.PureComponent);return o(m,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(m,"canUseDOM",c),m}}},2333:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(7294),a=n(5414),i=n(5444),o=n(3552),c=n(6802),s=function(e){function t(){return e.apply(this,arguments)||this}(0,o.Z)(t,e);var a=t.prototype;return a.toggleNav=function(){var e=document.getElementById("LoopNavMenu"),t=document.querySelectorAll(".navbar-burger")[0];e.classList.toggle("is-active"),t.classList.toggle("is-active")},a.render=function(){return r.createElement(r.Fragment,null,r.createElement("nav",{className:"navbar loop-navbar is-fixed-top",role:"navigation","aria-label":"main navigation",style:{borderBottom:"1px solid #EEEEEE"}},r.createElement("div",{className:"container"},r.createElement("div",{className:"navbar-brand"},r.createElement(i.Link,{className:"navbar-item",to:"/",hrefLang:"en"},r.createElement(c.S,{src:"../../images/loop-signature@4x.png",alt:"Loop Architectural Materials Logo",placeholder:"none",width:271,height:28,quality:100,backgroundColor:"#FFFFFF",__imageData:n(126)}),r.createElement("span",{className:"is-sr-only"},"Loop Architectural Materials")),r.createElement("a",{role:"button",className:"navbar-burger no-print","aria-label":"menu","aria-expanded":"false","data-target":"LoopNavMenu",onClick:this.toggleNav},r.createElement("span",{"aria-hidden":"true"}),r.createElement("span",{"aria-hidden":"true"}),r.createElement("span",{"aria-hidden":"true"}))),r.createElement("div",{id:"LoopNavMenu",className:"navbar-menu"},r.createElement("div",{className:"navbar-end"},r.createElement("div",{className:"navbar-item has-dropdown is-hoverable navbar-smaller"},r.createElement(i.Link,{to:"/manufacturers/",className:"navbar-link",onClick:this.toggleNav,hrefLang:"en"},"Manufacturers"),r.createElement("div",{id:"ManufacturersDropdown",className:"navbar-dropdown is-right",onClick:this.toggleNav},this.props.manufacturers.map((function(e){var t=e.node;e.index;return r.createElement(i.Link,{key:t.id,to:"/manufacturers/"+t.slug,className:"navbar-item",hrefLang:"en"},t.title)})))),r.createElement(i.Link,{to:"/categories/",className:"navbar-item navbar-smaller",hrefLang:"en"},"Categories"),r.createElement(i.Link,{to:"/contact/",className:"navbar-item navbar-smaller",hrefLang:"en"},"Contact Us"),r.createElement(i.Link,{to:"/search/",className:"navbar-item navbar-smaller",hrefLang:"en",title:"Search"},r.createElement("span",{className:"icon is-large"},r.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"search",className:"svg-inline--fa fa-search fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",style:{position:"absolute",maxWidth:"1rem",maxHeight:"1rem"}},r.createElement("path",{fill:"currentColor",d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"})))))))))},t}(r.Component);s.defaultProps={manufacturers:null};var l=s,u=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={},n}return(0,o.Z)(t,e),t.prototype.render=function(){return r.createElement("div",{id:"mc_embed_signup"},r.createElement("form",{action:"https://looparch.us18.list-manage.com/subscribe/post?u=6236ae131b11b8506326eed86&id=a7bb0e0ce6",method:"POST",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",className:"validate",target:"_blank"},r.createElement("div",{id:"mc_embed_signup_scroll"},r.createElement("h2",{className:"title is-size-5"},"Mailing List"),r.createElement("div",{className:"field"},r.createElement("label",{className:"label is-sr-only",htmlFor:"mce-EMAIL"},"Email Address ",r.createElement("span",{className:"asterisk"},"*")),r.createElement("div",{className:"control"},r.createElement("input",{type:"email",name:"EMAIL",className:"required email input",id:"mce-EMAIL",autoComplete:"email",placeholder:"Email Address*"}))),r.createElement("div",{className:"field"},r.createElement("label",{className:"label is-sr-only",htmlFor:"mce-FNAME"},"First Name"),r.createElement("div",{className:"control"},r.createElement("input",{type:"text",name:"FNAME",className:"input",id:"mce-FNAME",autoComplete:"given-name",placeholder:"First Name"}))),r.createElement("div",{className:"field"},r.createElement("div",{className:"control"},r.createElement("label",{className:"label is-sr-only",htmlFor:"mce-LNAME"},"Last Name"),r.createElement("input",{type:"text",name:"LNAME",className:"input",id:"mce-LNAME",autoComplete:"family-name",placeholder:"Last Name"}))),r.createElement("div",{id:"mce-responses",className:"clear"},r.createElement("div",{className:"response",id:"mce-error-response"}),r.createElement("div",{className:"response",id:"mce-success-response"})),r.createElement("div",{"aria-hidden":"true",className:"is-hidden"},r.createElement("input",{type:"text",name:"b_6236ae131b11b8506326eed86_a7bb0e0ce6",tabIndex:"-1",defaultValue:""})),r.createElement("div",{className:"clear"},r.createElement("input",{type:"submit",value:"Subscribe",name:"subscribe",id:"mc-embedded-subscribe",className:"button is-primary"})))))},t}(r.Component),m={maxWidth:"25px",maxHeight:"25px"},f=function(e){function t(t){return e.call(this,t)||this}return(0,o.Z)(t,e),t.prototype.render=function(){var e=this.props.manufacturers,t=this.props.articles;return r.createElement("footer",{className:"footer"},r.createElement("div",{className:"container"},r.createElement("div",{className:"columns"},r.createElement("div",{className:"column is-one-third no-print"},r.createElement(u,null)),r.createElement("div",{className:"column is-one-third"},r.createElement("h2",{className:"title is-size-5"},"Our Manufacturers"),r.createElement("ul",{className:"tags"},e.map((function(e){var t=e.node;e.index;return r.createElement("li",{key:t.slug,className:"tag"},r.createElement(i.Link,{to:"/manufacturers/"+t.slug,hrefLang:"en"},t.title))})))),r.createElement("div",{className:"column is-one-third no-print"},r.createElement("h2",{className:"title is-size-5"},"Recent Articles"),r.createElement("ul",{className:"tags"},t.map((function(e){var t=e.node;e.index;return r.createElement("li",{key:t.slug,className:"tag"},r.createElement(i.Link,{to:"/articles/"+t.slug,hrefLang:"en"},t.title))})),r.createElement("li",{className:"tag"},r.createElement(i.Link,{to:"/articles/"},"More..."))))),r.createElement("div",{className:"content has-text-centered"},r.createElement("p",{className:"is-size-4 social-links"},r.createElement("a",{href:"https://www.pinterest.com/looparchitecturalmaterials/",target:"_blank",hrefLang:"en",rel:"noopener"},r.createElement("span",{className:"logotype m-4"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",style:m},r.createElement("path",{d:"M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"}))),r.createElement("span",{className:"is-sr-only"},"Pinterest")),r.createElement("a",{href:"https://www.instagram.com/looparchitecturalmaterials/",target:"_blank",hrefLang:"en",rel:"noopener"},r.createElement("span",{className:"logotype m-4"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",style:m},r.createElement("path",{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}))),r.createElement("span",{className:"is-sr-only"},"Instagram")),r.createElement("a",{href:"https://www.linkedin.com/company/loop-architectural-materials/",target:"_blank",hrefLang:"en",rel:"noopener"},r.createElement("span",{className:"logotype m-4"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",style:m},r.createElement("path",{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"}))),r.createElement("span",{className:"is-sr-only"},"LinkedIn")))),r.createElement("div",{className:"content has-text-centered"},r.createElement("p",{className:"is-size-7"},"© Loop Architectural Materials or by permission of our manufacturers."))))},t}(r.Component);f.defaultProps={manufacturers:[{}],articles:[{}]};var p=f,d=function(e){var t=e.children;return r.createElement(i.StaticQuery,{query:"2696595895",render:function(e){return r.createElement(r.Fragment,null,r.createElement(a.q,null,r.createElement("link",{rel:"preconnect",href:"https://images.ctfassets.net"}),r.createElement("link",{rel:"dns-prefetch",href:"https://images.ctfassets.net"}),r.createElement("script",{defer:!0,src:"https://static.cloudflareinsights.com/beacon.min.js","data-cf-beacon":'{"token": "3e787d44c8c64595bf7ec72585e2fe0c"}'}),r.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-3GR7L59SYP"}),r.createElement("script",null,"\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', 'G-3GR7L59SYP');\n          "),r.createElement("html",{className:"has-navbar-fixed-top",lang:"en"}),r.createElement("meta",{name:"p:domain_verify",content:"166b8bf16af4de614dccd2ea61cb0dc6"})),r.createElement(l,{manufacturers:e.allContentfulManufacturer.edges,categories:e.categories.distinct}),r.createElement("div",null,t),r.createElement(p,{manufacturers:e.allContentfulManufacturer.edges,articles:e.allContentfulBlogPost.edges}))}})}}}]);
//# sourceMappingURL=27e940dad3d285fa147e27b472e33e41e59f3409-b6cab4ea6dee818991f7.js.map