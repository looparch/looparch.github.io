(self.webpackChunkloop_gatsby=self.webpackChunkloop_gatsby||[]).push([[116],{126:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#FFFFFF","images":{"fallback":{"src":"/static/0cf3ea1610a17ac88ca53040903ea4a5/97ab8/loop-signature%404x.png","srcSet":"/static/0cf3ea1610a17ac88ca53040903ea4a5/20682/loop-signature%404x.png 68w,\\n/static/0cf3ea1610a17ac88ca53040903ea4a5/2f16f/loop-signature%404x.png 136w,\\n/static/0cf3ea1610a17ac88ca53040903ea4a5/97ab8/loop-signature%404x.png 271w,\\n/static/0cf3ea1610a17ac88ca53040903ea4a5/21a46/loop-signature%404x.png 542w","sizes":"(min-width: 271px) 271px, 100vw"},"sources":[{"srcSet":"/static/0cf3ea1610a17ac88ca53040903ea4a5/e5420/loop-signature%404x.webp 68w,\\n/static/0cf3ea1610a17ac88ca53040903ea4a5/311eb/loop-signature%404x.webp 136w,\\n/static/0cf3ea1610a17ac88ca53040903ea4a5/4d89a/loop-signature%404x.webp 271w,\\n/static/0cf3ea1610a17ac88ca53040903ea4a5/f4cba/loop-signature%404x.webp 542w","type":"image/webp","sizes":"(min-width: 271px) 271px, 100vw"}]},"width":271,"height":28}')},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function u(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var o,c,s,l;if(Array.isArray(e)){if((o=e.length)!=i.length)return!1;for(c=o;0!=c--;)if(!u(e[c],i[c]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(l=e.entries();!(c=l.next()).done;)if(!i.has(c.value[0]))return!1;for(l=e.entries();!(c=l.next()).done;)if(!u(c.value[1],i.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(l=e.entries();!(c=l.next()).done;)if(!i.has(c.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((o=e.length)!=i.length)return!1;for(c=o;0!=c--;)if(e[c]!==i[c])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((o=(s=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(c=o;0!=c--;)if(!Object.prototype.hasOwnProperty.call(i,s[c]))return!1;if(t&&e instanceof Element)return!1;for(c=o;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!e.$$typeof)&&!u(e[s[c]],i[s[c]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return u(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},5414:function(e,t,n){"use strict";n.d(t,{q:function(){return Ee}});var r,a,u,i,o=n(5697),c=n.n(o),s=n(4839),l=n.n(s),f=n(2993),d=n.n(f),p=n(7294),m=n(6494),E=n.n(m),h="bodyAttributes",g="htmlAttributes",b="titleAttributes",y={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(y).map((function(e){return y[e]})),"charset"),w="cssText",A="href",T="http-equiv",x="innerHTML",C="itemprop",N="name",F="property",_="rel",O="src",S="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",R="defer",M="encodeSpecialCharacters",k="onChangeClientState",D="titleTemplate",I=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),j=[y.NOSCRIPT,y.SCRIPT,y.STYLE],B="data-react-helmet",G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},X=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},z=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},q=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},U=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=J(e,y.TITLE),n=J(e,D);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=J(e,P);return t||r||void 0},$=function(e){return J(e,k)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return H({},e,t)}),{})},Z=function(e,t){return t.filter((function(e){return void 0!==e[y.BASE]})).map((function(e){return e[y.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var u=r[a].toLowerCase();if(-1!==e.indexOf(u)&&n[u])return t.concat(n)}return t}),[])},K=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+G(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,u=Object.keys(e),i=0;i<u.length;i++){var o=u[i],c=o.toLowerCase();-1===t.indexOf(c)||n===_&&"canonical"===e[n].toLowerCase()||c===_&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(o)||o!==x&&o!==w&&o!==C||(n=o)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var u=Object.keys(a),i=0;i<u.length;i++){var o=u[i],c=E()({},r[o],a[o]);r[o]=c}return e}),[]).reverse()},J=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Q=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Q(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:n.g.requestAnimationFrame||Q,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ue=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,u=e.linkTags,i=e.metaTags,o=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,d=e.titleAttributes;ce(y.BODY,r),ce(y.HTML,a),oe(f,d);var p={baseTag:se(y.BASE,n),linkTags:se(y.LINK,u),metaTags:se(y.META,i),noscriptTags:se(y.NOSCRIPT,o),scriptTags:se(y.SCRIPT,s),styleTags:se(y.STYLE,l)},m={},E={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(E[e]=p[e].oldTags)})),t&&t(),c(e,m,E)},ie=function(e){return Array.isArray(e)?e.join(""):e},oe=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ce(y.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(B),a=r?r.split(","):[],u=[].concat(a),i=Object.keys(t),o=0;o<i.length;o++){var c=i[o],s=t[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===a.indexOf(c)&&a.push(c);var l=u.indexOf(c);-1!==l&&u.splice(l,1)}for(var f=u.length-1;f>=0;f--)n.removeAttribute(u[f]);a.length===u.length?n.removeAttribute(B):n.getAttribute(B)!==i.join(",")&&n.setAttribute(B,i.join(","))}},se=function(e,t){var n=document.head||document.querySelector(y.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),u=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===x)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var o=void 0===t[r]?"":t[r];n.setAttribute(r,o)}n.setAttribute(B,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):u.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),u.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:u}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case y.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[B]=!0,a=fe(n,r),[p.createElement(y.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=le(n),u=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+U(u,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+U(u,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case h:case g:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[B]=!0,r);return Object.keys(t).forEach((function(e){var n=L[e]||e;if(n===x||n===w){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),p.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===x||e===w)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+U(r[t],n)+'"';return e?e+" "+a:a}),""),u=r.innerHTML||r.cssText||"",i=-1===j.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+u+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,u=e.linkTags,i=e.metaTags,o=e.noscriptTags,c=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,d=e.titleAttributes;return{base:de(y.BASE,t,r),bodyAttributes:de(h,n,r),htmlAttributes:de(g,a,r),link:de(y.LINK,u,r),meta:de(y.META,i,r),noscript:de(y.NOSCRIPT,o,r),script:de(y.SCRIPT,c,r),style:de(y.STYLE,s,r),title:de(y.TITLE,{title:f,titleAttributes:d},r)}},me=l()((function(e){return{baseTag:Z([A,S],e),bodyAttributes:V(h,e),defer:J(e,R),encode:J(e,M),htmlAttributes:V(g,e),linkTags:K(y.LINK,[_,A],e),metaTags:K(y.META,[N,v,T,F,C],e),noscriptTags:K(y.NOSCRIPT,[x],e),onChangeClientState:$(e),scriptTags:K(y.SCRIPT,[O,x],e),styleTags:K(y.STYLE,[w],e),title:W(e),titleAttributes:V(b,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){ue(e,(function(){ae=null}))})):(ue(e),ae=null)}),pe)((function(){return null})),Ee=(a=me,i=u=function(e){function t(){return X(this,t),Y(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case y.SCRIPT:case y.NOSCRIPT:return{innerHTML:t};case y.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,u=e.nestedChildren;return H({},r,((t={})[n.type]=[].concat(r[n.type]||[],[H({},a,this.mapNestedChildrenToProps(n,u))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,u=e.newChildProps,i=e.nestedChildren;switch(r.type){case y.TITLE:return H({},a,((t={})[r.type]=i,t.titleAttributes=H({},u),t));case y.BODY:return H({},a,{bodyAttributes:H({},u)});case y.HTML:return H({},a,{htmlAttributes:H({},u)})}return H({},a,((n={})[r.type]=H({},u),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=H({},t);return Object.keys(e).forEach((function(t){var r;n=H({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return p.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,u=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[I[n]||n]=e[n],t}),t)}(q(a,["children"]));switch(n.warnOnInvalidChildren(e,u),e.type){case y.LINK:case y.META:case y.NOSCRIPT:case y.SCRIPT:case y.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:u});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:u})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=q(e,["children"]),r=H({},n);return t&&(r=this.mapChildrenToProps(t,r)),p.createElement(a,r)},z(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(p.Component),u.propTypes={base:c().object,bodyAttributes:c().object,children:c().oneOfType([c().arrayOf(c().node),c().node]),defaultTitle:c().string,defer:c().bool,encodeSpecialCharacters:c().bool,htmlAttributes:c().object,link:c().arrayOf(c().object),meta:c().arrayOf(c().object),noscript:c().arrayOf(c().object),onChangeClientState:c().func,script:c().arrayOf(c().object),style:c().arrayOf(c().object),title:c().string,titleAttributes:c().object,titleTemplate:c().string},u.defaultProps={defer:!0,encodeSpecialCharacters:!0},u.peek=a.peek,u.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);Ee.renderStatic=Ee.rewind},4839:function(e,t,n){"use strict";var r,a=n(7294),u=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function l(){c=e(s.map((function(e){return e.props}))),f.canUseDOM?t(c):n&&(c=n(c))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),l()},i.componentDidUpdate=function(){l()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},i.render=function(){return u.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",o),f}}},3959:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return null==e},e.exports=t.default},3187:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=t.digit="\\d",r=t.whitespace="\\s\\uFEFF\\xA0",a=t.highSurrogate="\\uD800-\\uDBFF",u=t.lowSurrogate="\\uDC00-\\uDFFF",i=t.diacriticalMark="\\u0300-\\u036F\\u1AB0-\\u1AFF\\u1DC0-\\u1DFF\\u20D0-\\u20FF\\uFE20-\\uFE2F",o=t.base="\\0-\\u02FF\\u0370-\\u1AAF\\u1B00-\\u1DBF\\u1E00-\\u20CF\\u2100-\\uD7FF\\uE000-\\uFE1F\\uFE30-\\uFFFF";t.REGEXP_COMBINING_MARKS=new RegExp("(["+o+"]|["+a+"]["+u+"]|["+a+"](?!["+u+"])|(?:[^"+a+"]|^)["+u+"])(["+i+"]+)","g"),t.REGEXP_SURROGATE_PAIRS=new RegExp("(["+a+"])(["+u+"])","g"),t.REGEXP_UNICODE_CHARACTER=new RegExp("((?:["+o+"]|["+a+"]["+u+"]|["+a+"](?!["+u+"])|(?:[^"+a+"]|^)["+u+"])(?:["+i+"]+))|(["+a+"]["+u+"])|([\\n\\r\\u2028\\u2029])|(.)","g"),t.REGEXP_WHITESPACE=new RegExp("["+r+"]"),t.REGEXP_TRIM_LEFT=new RegExp("^["+r+"]+"),t.REGEXP_TRIM_RIGHT=new RegExp("["+r+"]+$"),t.REGEXP_DIGIT=new RegExp("^"+n+"+$"),t.REGEXP_SPECIAL_CHARACTERS=/[-[\]{}()*+!<=:?./\\^$|#,]/g,t.REGEXP_NON_LATIN=/[^A-Za-z0-9]/g,t.REGEXP_HTML_SPECIAL_CHARACTERS=/[<>&"'`]/g,t.REGEXP_CONVERSION_SPECIFICATION=/(%{1,2})(?:(\d+)\$)?(\+)?([ 0]|'.{1})?(-)?(\d+)?(?:\.(\d+))?([bcdiouxXeEfgGs])?/g,t.REGEXP_TRAILING_ZEROS=/\.?0+$/g,t.REGEXP_FLAGS=/[gimuy]*$/,t.REGEXP_TAG_LIST=/<([A-Za-z0-9]+)>/g},99:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.REGEXP_EXTENDED_ASCII=t.REGEXP_ALPHA_DIGIT=t.REGEXP_ALPHA=t.REGEXP_LATIN_WORD=t.REGEXP_WORD=void 0;var r=n(3187),a="a-z\\xB5\\xDF-\\xF6\\xF8-\\xFF\\u0101\\u0103\\u0105\\u0107\\u0109\\u010B\\u010D\\u010F\\u0111\\u0113\\u0115\\u0117\\u0119\\u011B\\u011D\\u011F\\u0121\\u0123\\u0125\\u0127\\u0129\\u012B\\u012D\\u012F\\u0131\\u0133\\u0135\\u0137\\u0138\\u013A\\u013C\\u013E\\u0140\\u0142\\u0144\\u0146\\u0148\\u0149\\u014B\\u014D\\u014F\\u0151\\u0153\\u0155\\u0157\\u0159\\u015B\\u015D\\u015F\\u0161\\u0163\\u0165\\u0167\\u0169\\u016B\\u016D\\u016F\\u0171\\u0173\\u0175\\u0177\\u017A\\u017C\\u017E-\\u0180\\u0183\\u0185\\u0188\\u018C\\u018D\\u0192\\u0195\\u0199-\\u019B\\u019E\\u01A1\\u01A3\\u01A5\\u01A8\\u01AA\\u01AB\\u01AD\\u01B0\\u01B4\\u01B6\\u01B9\\u01BA\\u01BD-\\u01BF\\u01C6\\u01C9\\u01CC\\u01CE\\u01D0\\u01D2\\u01D4\\u01D6\\u01D8\\u01DA\\u01DC\\u01DD\\u01DF\\u01E1\\u01E3\\u01E5\\u01E7\\u01E9\\u01EB\\u01ED\\u01EF\\u01F0\\u01F3\\u01F5\\u01F9\\u01FB\\u01FD\\u01FF\\u0201\\u0203\\u0205\\u0207\\u0209\\u020B\\u020D\\u020F\\u0211\\u0213\\u0215\\u0217\\u0219\\u021B\\u021D\\u021F\\u0221\\u0223\\u0225\\u0227\\u0229\\u022B\\u022D\\u022F\\u0231\\u0233-\\u0239\\u023C\\u023F\\u0240\\u0242\\u0247\\u0249\\u024B\\u024D\\u024F",u="\\x41-\\x5a\\xc0-\\xd6\\xd8-\\xde\\u0100\\u0102\\u0104\\u0106\\u0108\\u010a\\u010c\\u010e\\u0110\\u0112\\u0114\\u0116\\u0118\\u011a\\u011c\\u011e\\u0120\\u0122\\u0124\\u0126\\u0128\\u012a\\u012c\\u012e\\u0130\\u0132\\u0134\\u0136\\u0139\\u013b\\u013d\\u013f\\u0141\\u0143\\u0145\\u0147\\u014a\\u014c\\u014e\\u0150\\u0152\\u0154\\u0156\\u0158\\u015a\\u015c\\u015e\\u0160\\u0162\\u0164\\u0166\\u0168\\u016a\\u016c\\u016e\\u0170\\u0172\\u0174\\u0176\\u0178\\u0179\\u017b\\u017d\\u0181\\u0182\\u0184\\u0186\\u0187\\u0189-\\u018b\\u018e-\\u0191\\u0193\\u0194\\u0196-\\u0198\\u019c\\u019d\\u019f\\u01a0\\u01a2\\u01a4\\u01a6\\u01a7\\u01a9\\u01ac\\u01ae\\u01af\\u01b1-\\u01b3\\u01b5\\u01b7\\u01b8\\u01bc\\u01c4\\u01c5\\u01c7\\u01c8\\u01ca\\u01cb\\u01cd\\u01cf\\u01d1\\u01d3\\u01d5\\u01d7\\u01d9\\u01db\\u01de\\u01e0\\u01e2\\u01e4\\u01e6\\u01e8\\u01ea\\u01ec\\u01ee\\u01f1\\u01f2\\u01f4\\u01f6-\\u01f8\\u01fa\\u01fc\\u01fe\\u0200\\u0202\\u0204\\u0206\\u0208\\u020a\\u020c\\u020e\\u0210\\u0212\\u0214\\u0216\\u0218\\u021a\\u021c\\u021e\\u0220\\u0222\\u0224\\u0226\\u0228\\u022a\\u022c\\u022e\\u0230\\u0232\\u023a\\u023b\\u023d\\u023e\\u0241\\u0243-\\u0246\\u0248\\u024a\\u024c\\u024e";t.REGEXP_WORD=new RegExp("(?:["+u+"]["+r.diacriticalMark+"]*)?(?:["+a+"]["+r.diacriticalMark+"]*)+|(?:["+u+"]["+r.diacriticalMark+"]*)+(?!["+a+"])|["+r.digit+"]+|[\\u2700-\\u27BF]|[^\\x00-\\x2F\\x3A-\\x40\\x5B-\\x60\\x7b-\\xBF\\xD7\\xF7\\u2000-\\u206F"+r.whitespace+"]+","g"),t.REGEXP_LATIN_WORD=/[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g,t.REGEXP_ALPHA=new RegExp("^(?:["+a+u+"]["+r.diacriticalMark+"]*)+$"),t.REGEXP_ALPHA_DIGIT=new RegExp("^((?:["+a+u+"]["+r.diacriticalMark+"]*)|["+r.digit+"])+$"),t.REGEXP_EXTENDED_ASCII=/^[\x01-\xFF]*$/},7228:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if((0,r.default)(e))return t;if((0,a.default)(e))return e;return String(e)};var r=u(n(3959)),a=u(n(8548));function u(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},7778:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if((0,r.default)(e))return null;if((0,a.default)(e))return e;return String(e)};var r=u(n(3959)),a=u(n(8548));function u(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},3499:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return null==e?t:e},e.exports=t.default},8548:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return"string"==typeof e},e.exports=t.default},7537:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=(0,r.default)(e);if(""===t)return"";return(0,u.default)(t).map(a.default).join("-")};var r=i(n(7228)),a=i(n(914)),u=i(n(9405));function i(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},914:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,u.default)(e,"").toLowerCase()};var r,a=n(7228),u=(r=a)&&r.__esModule?r:{default:r};e.exports=t.default},9405:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var c=(0,a.default)(e),s=void 0;if((0,u.default)(t))s=r.REGEXP_EXTENDED_ASCII.test(c)?r.REGEXP_LATIN_WORD:r.REGEXP_WORD;else if(t instanceof RegExp)s=t;else{var l=(0,o.default)((0,i.default)(n,""));s=new RegExp((0,o.default)(t),l)}return(0,i.default)(c.match(s),[])};var r=n(99),a=c(n(7228)),u=c(n(3959)),i=c(n(3499)),o=c(n(7778));function c(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},2333:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(7294),a=n(5414),u=n(5444),i=n(3552),o=n(6802),c=(n(7537),function(e){function t(){return e.apply(this,arguments)||this}(0,i.Z)(t,e);var a=t.prototype;return a.toggleNav=function(){var e=document.getElementById("LoopNavMenu"),t=document.querySelectorAll(".navbar-burger")[0];e.classList.toggle("is-active"),t.classList.toggle("is-active")},a.render=function(){return r.createElement(r.Fragment,null,r.createElement("nav",{className:"navbar loop-navbar is-fixed-top",role:"navigation","aria-label":"main navigation",style:{borderBottom:"1px solid #EEEEEE"}},r.createElement("div",{className:"container"},r.createElement("div",{className:"navbar-brand"},r.createElement(u.Link,{className:"navbar-item",to:"/",hrefLang:"en"},r.createElement(o.S,{src:"../../images/loop-signature@4x.png",alt:"Loop Architectural Materials Logo",placeholder:"none",width:271,height:28,quality:100,backgroundColor:"#FFFFFF",__imageData:n(126)}),r.createElement("span",{className:"is-sr-only"},"Loop Architectural Materials")),r.createElement("a",{role:"button",className:"navbar-burger no-print","aria-label":"menu","aria-expanded":"false","data-target":"LoopNavMenu",onClick:this.toggleNav},r.createElement("span",{"aria-hidden":"true"}),r.createElement("span",{"aria-hidden":"true"}),r.createElement("span",{"aria-hidden":"true"}))),r.createElement("div",{id:"LoopNavMenu",className:"navbar-menu"},r.createElement("div",{className:"navbar-end"},r.createElement("div",{className:"navbar-item has-dropdown is-hoverable navbar-smaller"},r.createElement(u.Link,{to:"/manufacturers/",className:"navbar-link",onClick:this.toggleNav,hrefLang:"en"},"Manufacturers"),r.createElement("div",{id:"ManufacturersDropdown",className:"navbar-dropdown is-right",onClick:this.toggleNav},this.props.manufacturers.map((function(e){var t=e.node;e.index;return r.createElement(u.Link,{key:t.id,to:"/manufacturers/"+t.slug,className:"navbar-item",hrefLang:"en"},t.title)})))),r.createElement(u.Link,{to:"/categories/",className:"navbar-item navbar-smaller",hrefLang:"en"},"Categories"),r.createElement(u.Link,{to:"/contact/",className:"navbar-item navbar-smaller",hrefLang:"en"},"Contact Us"),r.createElement(u.Link,{to:"/search/",className:"navbar-item navbar-smaller",hrefLang:"en",title:"Search"},r.createElement("span",{className:"icon is-large"},r.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"search",className:"svg-inline--fa fa-search fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",style:{position:"absolute",maxWidth:"1rem",maxHeight:"1rem"}},r.createElement("path",{fill:"currentColor",d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"})))))))))},t}(r.Component)),s=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={},n}return(0,i.Z)(t,e),t.prototype.render=function(){return r.createElement("div",{id:"mc_embed_signup"},r.createElement("form",{action:"https://looparch.us18.list-manage.com/subscribe/post?u=6236ae131b11b8506326eed86&id=a7bb0e0ce6",method:"POST",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",className:"validate",target:"_blank"},r.createElement("div",{id:"mc_embed_signup_scroll"},r.createElement("h2",{className:"title is-size-5"},"Mailing List"),r.createElement("div",{className:"field"},r.createElement("label",{className:"label is-sr-only",htmlFor:"mce-EMAIL"},"Email Address ",r.createElement("span",{className:"asterisk"},"*")),r.createElement("div",{className:"control"},r.createElement("input",{type:"email",name:"EMAIL",className:"required email input",id:"mce-EMAIL",autoComplete:"email",placeholder:"Email Address*"}))),r.createElement("div",{className:"field"},r.createElement("label",{className:"label is-sr-only",htmlFor:"mce-FNAME"},"First Name"),r.createElement("div",{className:"control"},r.createElement("input",{type:"text",name:"FNAME",className:"input",id:"mce-FNAME",autoComplete:"given-name",placeholder:"First Name"}))),r.createElement("div",{className:"field"},r.createElement("div",{className:"control"},r.createElement("label",{className:"label is-sr-only",htmlFor:"mce-LNAME"},"Last Name"),r.createElement("input",{type:"text",name:"LNAME",className:"input",id:"mce-LNAME",autoComplete:"family-name",placeholder:"Last Name"}))),r.createElement("div",{id:"mce-responses",className:"clear"},r.createElement("div",{className:"response",id:"mce-error-response"}),r.createElement("div",{className:"response",id:"mce-success-response"})),r.createElement("div",{"aria-hidden":"true",className:"is-hidden"},r.createElement("input",{type:"text",name:"b_6236ae131b11b8506326eed86_a7bb0e0ce6",tabIndex:"-1",defaultValue:""})),r.createElement("div",{className:"clear"},r.createElement("input",{type:"submit",value:"Subscribe",name:"subscribe",id:"mc-embedded-subscribe",className:"button is-primary"})))))},t}(r.Component),l={maxWidth:"25px",maxHeight:"25px"},f=function(e){function t(t){return e.call(this,t)||this}return(0,i.Z)(t,e),t.prototype.render=function(){var e=this.props.manufacturers,t=this.props.articles;return r.createElement("footer",{className:"footer"},r.createElement("div",{className:"container"},r.createElement("div",{className:"columns"},r.createElement("div",{className:"column is-one-third no-print"},r.createElement(s,null)),r.createElement("div",{className:"column is-one-third"},r.createElement("h2",{className:"title is-size-5"},"Our Manufacturers"),r.createElement("ul",{className:"tags"},e.map((function(e){var t=e.node;e.index;return r.createElement("li",{key:t.slug,className:"tag"},r.createElement(u.Link,{to:"/manufacturers/"+t.slug,hrefLang:"en"},t.title))})))),r.createElement("div",{className:"column is-one-third no-print"},r.createElement("h2",{className:"title is-size-5"},"Recent Articles"),r.createElement("ul",{className:"tags"},t.map((function(e){var t=e.node;e.index;return r.createElement("li",{key:t.slug,className:"tag"},r.createElement(u.Link,{to:"/articles/"+t.slug,hrefLang:"en"},t.title))})),r.createElement("li",{className:"tag"},r.createElement(u.Link,{to:"/articles/"},"More..."))))),r.createElement("div",{className:"content has-text-centered"},r.createElement("p",{className:"is-size-4 social-links"},r.createElement("a",{href:"https://www.pinterest.com/looparchitecturalmaterials/",target:"_blank",hrefLang:"en",rel:"noopener"},r.createElement("span",{className:"logotype m-4"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",style:l},r.createElement("path",{d:"M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"}))),r.createElement("span",{className:"is-sr-only"},"Pinterest")),r.createElement("a",{href:"https://www.instagram.com/looparchitecturalmaterials/",target:"_blank",hrefLang:"en",rel:"noopener"},r.createElement("span",{className:"logotype m-4"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",style:l},r.createElement("path",{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}))),r.createElement("span",{className:"is-sr-only"},"Instagram")),r.createElement("a",{href:"https://www.linkedin.com/company/loop-architectural-materials/",target:"_blank",hrefLang:"en",rel:"noopener"},r.createElement("span",{className:"logotype m-4"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",style:l},r.createElement("path",{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"}))),r.createElement("span",{className:"is-sr-only"},"LinkedIn")))),r.createElement("div",{className:"content has-text-centered"},r.createElement("p",{className:"is-size-7"},"© Loop Architectural Materials or by permission of our manufacturers."))))},t}(r.Component),d=function(e){var t=e.children;return r.createElement(u.StaticQuery,{query:"2696595895",render:function(e){return r.createElement(r.Fragment,null,r.createElement(a.q,null,r.createElement("link",{rel:"preconnect",href:"https://images.ctfassets.net"}),r.createElement("link",{rel:"dns-prefetch",href:"https://images.ctfassets.net"}),r.createElement("script",{defer:!0,src:"https://static.cloudflareinsights.com/beacon.min.js","data-cf-beacon":'{"token": "3e787d44c8c64595bf7ec72585e2fe0c"}'}),r.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-3GR7L59SYP"}),r.createElement("script",null,"\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', 'G-3GR7L59SYP');\n          "),r.createElement("html",{className:"has-navbar-fixed-top",lang:"en"}),r.createElement("meta",{name:"p:domain_verify",content:"166b8bf16af4de614dccd2ea61cb0dc6"})),r.createElement(c,{manufacturers:e.allContentfulManufacturer.edges,categories:e.categories.distinct}),r.createElement("div",null,t),r.createElement(f,{manufacturers:e.allContentfulManufacturer.edges,articles:e.allContentfulBlogPost.edges}))}})}}}]);
//# sourceMappingURL=27e940dad3d285fa147e27b472e33e41e59f3409-184c0d257db5c77816f3.js.map