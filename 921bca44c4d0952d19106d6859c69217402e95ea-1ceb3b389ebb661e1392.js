(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8+s/":function(e,t,a){"use strict";var n,r=a("q1tI"),i=(n=r)&&"object"==typeof n&&"default"in n?n.default:n;function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,a){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==a&&"function"!=typeof a)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function u(){s=e(l.map((function(e){return e.props}))),m.canUseDOM?t(s):a&&(s=a(s))}var m=function(e){var t,a;function r(){return e.apply(this,arguments)||this}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.peek=function(){return s},r.rewind=function(){if(r.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var o=r.prototype;return o.UNSAFE_componentWillMount=function(){l.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},o.render=function(){return i.createElement(n,this.props)},r}(r.PureComponent);return o(m,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),o(m,"canUseDOM",c),m}}},Bl7J:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("qhky"),o=a("Wbzz"),c=a("dI71"),s=a("JV2w"),l=(a("J2xl"),function(e){function t(){return e.apply(this,arguments)||this}Object(c.a)(t,e);var n=t.prototype;return n.toggleNav=function(){var e=document.getElementById("LoopNavMenu"),t=document.querySelectorAll(".navbar-burger")[0];e.classList.toggle("is-active"),t.classList.toggle("is-active")},n.render=function(){return r.a.createElement("nav",{className:"navbar loop-navbar is-fixed-top",role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(o.Link,{className:"navbar-item",to:"/",hrefLang:"en"},r.a.createElement(s.e,{src:"../images/loop-signature@4x.png",alt:"Loop Architectural Materials Logo",placeholder:"none",width:271,height:28,quality:100,backgroundColor:"#FFFFFF",__imageData:a("uqFQ")}),r.a.createElement("span",{className:"is-sr-only"},"Loop Architectural Materials")),r.a.createElement("a",{role:"button",className:"navbar-burger no-print","aria-label":"menu","aria-expanded":"false","data-target":"LoopNavMenu",onClick:this.toggleNav},r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}))),r.a.createElement("div",{id:"LoopNavMenu",className:"navbar-menu"},r.a.createElement("div",{className:"navbar-end"},r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable navbar-smaller"},r.a.createElement(o.Link,{to:"/manufacturers/",className:"navbar-link",onClick:this.toggleNav,hrefLang:"en"},"Manufacturers"),r.a.createElement("div",{id:"ManufacturersDropdown",className:"navbar-dropdown is-right",onClick:this.toggleNav},this.props.manufacturers.map((function(e){var t=e.node;e.index;return r.a.createElement(o.Link,{key:t.id,to:"/manufacturers/"+t.slug,className:"navbar-item",hrefLang:"en"},t.title)})))),r.a.createElement(o.Link,{to:"/contact/",className:"navbar-item navbar-smaller",hrefLang:"en"},"Contact Us"),r.a.createElement(o.Link,{to:"/search/",className:"navbar-item navbar-smaller",hrefLang:"en",title:"Search"},r.a.createElement("span",{className:"icon is-large"},r.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"search",className:"svg-inline--fa fa-search fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",style:{position:"absolute",maxWidth:"1rem",maxHeight:"1rem"}},r.a.createElement("path",{fill:"currentColor",d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}))))))))},t}(r.a.Component)),u=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={},a}return Object(c.a)(t,e),t.prototype.render=function(){return r.a.createElement("div",{id:"mc_embed_signup"},r.a.createElement("form",{action:"https://looparch.us18.list-manage.com/subscribe/post?u=6236ae131b11b8506326eed86&id=a7bb0e0ce6",method:"POST",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",className:"validate",target:"_blank"},r.a.createElement("div",{id:"mc_embed_signup_scroll"},r.a.createElement("h2",{className:"title is-size-5"},"Subscribe to our mailing list"),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label is-sr-only",htmlFor:"mce-EMAIL"},"Email Address ",r.a.createElement("span",{className:"asterisk"},"*")),r.a.createElement("div",{className:"control"},r.a.createElement("input",{type:"email",name:"EMAIL",className:"required email input",id:"mce-EMAIL",autoComplete:"email",placeholder:"Email Address*"}))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label is-sr-only",htmlFor:"mce-FNAME"},"First Name"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{type:"text",name:"FNAME",className:"input",id:"mce-FNAME",autoComplete:"given-name",placeholder:"First Name"}))),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("label",{className:"label is-sr-only",htmlFor:"mce-LNAME"},"Last Name"),r.a.createElement("input",{type:"text",name:"LNAME",className:"input",id:"mce-LNAME",autoComplete:"family-name",placeholder:"Last Name"}))),r.a.createElement("div",{id:"mce-responses",className:"clear"},r.a.createElement("div",{className:"response",id:"mce-error-response"}),r.a.createElement("div",{className:"response",id:"mce-success-response"})),r.a.createElement("div",{"aria-hidden":"true",className:"is-hidden"},r.a.createElement("input",{type:"text",name:"b_6236ae131b11b8506326eed86_a7bb0e0ce6",tabIndex:"-1",defaultValue:""})),r.a.createElement("div",{className:"clear"},r.a.createElement("input",{type:"submit",value:"Subscribe",name:"subscribe",id:"mc-embedded-subscribe",className:"button is-primary"})))))},t}(r.a.Component),m=(a("u1WH"),function(e){function t(t){return e.call(this,t)||this}return Object(c.a)(t,e),t.prototype.render=function(){var e=this.props.manufacturers,t=this.props.articles;return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-one-third no-print"},r.a.createElement(u,null)),r.a.createElement("div",{className:"column is-one-third"},r.a.createElement("h2",{className:"title is-size-5"},"Our Manufacturers"),r.a.createElement("ul",{className:"tags"},e.map((function(e){var t=e.node;e.index;return r.a.createElement("li",{key:t.slug,className:"tag"},r.a.createElement(o.Link,{to:"/manufacturers/"+t.slug,hrefLang:"en"},t.title))})))),r.a.createElement("div",{className:"column is-one-third no-print"},r.a.createElement("h2",{className:"title is-size-5"},"Recent Articles"),r.a.createElement("ul",{className:"tags"},t.map((function(e){var t=e.node;e.index;return r.a.createElement("li",{key:t.slug,className:"tag"},r.a.createElement(o.Link,{to:"/articles/"+t.slug,hrefLang:"en"},t.title))})),r.a.createElement("li",{className:"tag"},r.a.createElement(o.Link,{to:"/articles/"},"More..."))))),r.a.createElement("div",{className:"content has-text-centered"},r.a.createElement("p",{className:"is-size-4 social-links"},r.a.createElement("a",{href:"https://www.pinterest.com/looparchitecturalmaterials/",target:"_blank",hrefLang:"en",rel:"noopener"},r.a.createElement("span",{className:"logotype"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},r.a.createElement("path",{d:"M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"}))),r.a.createElement("span",{className:"is-sr-only"},"Pinterest")),r.a.createElement("a",{href:"https://www.instagram.com/looparchitecturalmaterials/",target:"_blank",hrefLang:"en",rel:"noopener"},r.a.createElement("span",{className:"logotype"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},r.a.createElement("path",{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}))),r.a.createElement("span",{className:"is-sr-only"},"Instagram")),r.a.createElement("a",{href:"https://www.linkedin.com/company/loop-architectural-materials/",target:"_blank",hrefLang:"en",rel:"noopener"},r.a.createElement("span",{className:"logotype"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},r.a.createElement("path",{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"}))),r.a.createElement("span",{className:"is-sr-only"},"LinkedIn")))),r.a.createElement("div",{className:"content has-text-centered"},r.a.createElement("p",{className:"is-size-7"},"© Loop Architectural Materials or by permission of our manufacturers."))))},t}(r.a.Component));a("Wacd"),t.a=function(e){var t=e.children;return r.a.createElement(o.StaticQuery,{query:"4108882475",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement("html",{className:"has-navbar-fixed-top",lang:"en"}),r.a.createElement("meta",{name:"p:domain_verify",content:"166b8bf16af4de614dccd2ea61cb0dc6"}),r.a.createElement("meta",{name:"description",content:e.site.siteMetadata.description}),r.a.createElement("meta",{property:"og:title",content:e.site.siteMetadata.title}),r.a.createElement("meta",{property:"og:url",content:e.site.siteMetadata.siteUrl}),r.a.createElement("meta",{property:"og:locale",content:"en_US"}),r.a.createElement("meta",{property:"og:site_name",content:e.site.siteMetadata.title})),r.a.createElement(l,{manufacturers:e.allContentfulManufacturer.edges}),r.a.createElement("div",null,t),r.a.createElement(m,{manufacturers:e.allContentfulManufacturer.edges,articles:e.allContentfulBlogPost.edges}))}})}},J2xl:function(e,t,a){},Wacd:function(e,t,a){},bmMU:function(e,t){var a="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,o){if(t===o)return!0;if(t&&o&&"object"==typeof t&&"object"==typeof o){if(t.constructor!==o.constructor)return!1;var c,s,l,u;if(Array.isArray(t)){if((c=t.length)!=o.length)return!1;for(s=c;0!=s--;)if(!e(t[s],o[s]))return!1;return!0}if(n&&t instanceof Map&&o instanceof Map){if(t.size!==o.size)return!1;for(u=t.entries();!(s=u.next()).done;)if(!o.has(s.value[0]))return!1;for(u=t.entries();!(s=u.next()).done;)if(!e(s.value[1],o.get(s.value[0])))return!1;return!0}if(r&&t instanceof Set&&o instanceof Set){if(t.size!==o.size)return!1;for(u=t.entries();!(s=u.next()).done;)if(!o.has(s.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(o)){if((c=t.length)!=o.length)return!1;for(s=c;0!=s--;)if(t[s]!==o[s])return!1;return!0}if(t.constructor===RegExp)return t.source===o.source&&t.flags===o.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===o.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===o.toString();if((c=(l=Object.keys(t)).length)!==Object.keys(o).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(o,l[s]))return!1;if(a&&t instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==l[s]&&"__v"!==l[s]&&"__o"!==l[s]||!t.$$typeof)&&!e(t[l[s]],o[l[s]]))return!1;return!0}return t!=t&&o!=o}(e,t)}catch(o){if((o.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw o}}},qhky:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return he}));var n,r,i,o,c=a("17x9"),s=a.n(c),l=a("8+s/"),u=a.n(l),m=a("bmMU"),p=a.n(m),f=a("q1tI"),d=a.n(f),h=a("YVoz"),b=a.n(h),y="bodyAttributes",g="htmlAttributes",v="titleAttributes",E={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(E).map((function(e){return E[e]})),"charset"),T="cssText",N="href",A="http-equiv",C="innerHTML",O="itemprop",S="name",x="property",L="rel",k="src",M="target",j={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",P="defer",F="encodeSpecialCharacters",_="onChangeClientState",z="titleTemplate",q=Object.keys(j).reduce((function(e,t){return e[j[t]]=t,e}),{}),R=[E.NOSCRIPT,E.SCRIPT,E.STYLE],B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},D=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},Y=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a},V=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},J=function(e){var t=X(e,E.TITLE),a=X(e,z);if(a&&t)return a.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=X(e,I);return t||n||void 0},K=function(e){return X(e,_)||function(){}},Q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[E.BASE]})).map((function(e){return e[E.BASE]})).reverse().reduce((function(t,a){if(!t.length)for(var n=Object.keys(a),r=0;r<n.length;r++){var i=n[r].toLowerCase();if(-1!==e.indexOf(i)&&a[i])return t.concat(a)}return t}),[])},G=function(e,t,a){var n={};return a.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+B(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,a){var r={};a.filter((function(e){for(var a=void 0,i=Object.keys(e),o=0;o<i.length;o++){var c=i[o],s=c.toLowerCase();-1===t.indexOf(s)||a===L&&"canonical"===e[a].toLowerCase()||s===L&&"stylesheet"===e[s].toLowerCase()||(a=s),-1===t.indexOf(c)||c!==C&&c!==T&&c!==O||(a=c)}if(!a||!e[a])return!1;var l=e[a].toLowerCase();return n[a]||(n[a]={}),r[a]||(r[a]={}),!n[a][l]&&(r[a][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(r),o=0;o<i.length;o++){var c=i[o],s=b()({},n[c],r[c]);n[c]=s}return e}),[]).reverse()},X=function(e,t){for(var a=e.length-1;a>=0;a--){var n=e[a];if(n.hasOwnProperty(t))return n[t]}return null},Z=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){Z(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Z:e.requestAnimationFrame||Z,ae="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},re=null,ie=function(e,t){var a=e.baseTag,n=e.bodyAttributes,r=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,m=e.title,p=e.titleAttributes;se(E.BODY,n),se(E.HTML,r),ce(m,p);var f={baseTag:le(E.BASE,a),linkTags:le(E.LINK,i),metaTags:le(E.META,o),noscriptTags:le(E.NOSCRIPT,c),scriptTags:le(E.SCRIPT,l),styleTags:le(E.STYLE,u)},d={},h={};Object.keys(f).forEach((function(e){var t=f[e],a=t.newTags,n=t.oldTags;a.length&&(d[e]=a),n.length&&(h[e]=f[e].oldTags)})),t&&t(),s(e,d,h)},oe=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),se(E.TITLE,t)},se=function(e,t){var a=document.getElementsByTagName(e)[0];if(a){for(var n=a.getAttribute("data-react-helmet"),r=n?n.split(","):[],i=[].concat(r),o=Object.keys(t),c=0;c<o.length;c++){var s=o[c],l=t[s]||"";a.getAttribute(s)!==l&&a.setAttribute(s,l),-1===r.indexOf(s)&&r.push(s);var u=i.indexOf(s);-1!==u&&i.splice(u,1)}for(var m=i.length-1;m>=0;m--)a.removeAttribute(i[m]);r.length===i.length?a.removeAttribute("data-react-helmet"):a.getAttribute("data-react-helmet")!==o.join(",")&&a.setAttribute("data-react-helmet",o.join(","))}},le=function(e,t){var a=document.head||document.querySelector(E.HEAD),n=a.querySelectorAll(e+"[data-react-helmet]"),r=Array.prototype.slice.call(n),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var a=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===C)a.innerHTML=t.innerHTML;else if(n===T)a.styleSheet?a.styleSheet.cssText=t.cssText:a.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];a.setAttribute(n,c)}a.setAttribute("data-react-helmet","true"),r.some((function(e,t){return o=t,a.isEqualNode(e)}))?r.splice(o,1):i.push(a)})),r.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return a.appendChild(e)})),{oldTags:r,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,a){var n=void 0!==e[a]?a+'="'+e[a]+'"':""+a;return t?t+" "+n:n}),"")},me=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,a){return t[j[a]||a]=e[a],t}),t)},pe=function(e,t,a){switch(e){case E.TITLE:return{toComponent:function(){return e=t.title,a=t.titleAttributes,(n={key:e})["data-react-helmet"]=!0,r=me(a,n),[d.a.createElement(E.TITLE,r,e)];var e,a,n,r},toString:function(){return function(e,t,a,n){var r=ue(a),i=oe(t);return r?"<"+e+' data-react-helmet="true" '+r+">"+W(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,a)}};case y:case g:return{toComponent:function(){return me(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,a){var n,r=((n={key:a})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var a=j[e]||e;if(a===C||a===T){var n=t.innerHTML||t.cssText;r.dangerouslySetInnerHTML={__html:n}}else r[a]=t[e]})),d.a.createElement(e,r)}))}(e,t)},toString:function(){return function(e,t,a){return t.reduce((function(t,n){var r=Object.keys(n).filter((function(e){return!(e===C||e===T)})).reduce((function(e,t){var r=void 0===n[t]?t:t+'="'+W(n[t],a)+'"';return e?e+" "+r:r}),""),i=n.innerHTML||n.cssText||"",o=-1===R.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+r+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,a)}}}},fe=function(e){var t=e.baseTag,a=e.bodyAttributes,n=e.encode,r=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,u=e.title,m=void 0===u?"":u,p=e.titleAttributes;return{base:pe(E.BASE,t,n),bodyAttributes:pe(y,a,n),htmlAttributes:pe(g,r,n),link:pe(E.LINK,i,n),meta:pe(E.META,o,n),noscript:pe(E.NOSCRIPT,c,n),script:pe(E.SCRIPT,s,n),style:pe(E.STYLE,l,n),title:pe(E.TITLE,{title:m,titleAttributes:p},n)}},de=u()((function(e){return{baseTag:$([N,M],e),bodyAttributes:Q(y,e),defer:X(e,P),encode:X(e,F),htmlAttributes:Q(g,e),linkTags:G(E.LINK,[L,N],e),metaTags:G(E.META,[S,w,A,x,O],e),noscriptTags:G(E.NOSCRIPT,[C],e),onChangeClientState:K(e),scriptTags:G(E.SCRIPT,[k,C],e),styleTags:G(E.STYLE,[T],e),title:J(e),titleAttributes:Q(v,e)}}),(function(e){re&&ae(re),e.defer?re=te((function(){ie(e,(function(){re=null}))})):(ie(e),re=null)}),fe)((function(){return null})),he=(r=de,o=i=function(e){function t(){return H(this,t),V(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case E.SCRIPT:case E.NOSCRIPT:return{innerHTML:t};case E.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,a=e.child,n=e.arrayTypeChildren,r=e.newChildProps,i=e.nestedChildren;return U({},n,((t={})[a.type]=[].concat(n[a.type]||[],[U({},r,this.mapNestedChildrenToProps(a,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,a,n=e.child,r=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(n.type){case E.TITLE:return U({},r,((t={})[n.type]=o,t.titleAttributes=U({},i),t));case E.BODY:return U({},r,{bodyAttributes:U({},i)});case E.HTML:return U({},r,{htmlAttributes:U({},i)})}return U({},r,((a={})[n.type]=U({},i),a))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var a=U({},t);return Object.keys(e).forEach((function(t){var n;a=U({},a,((n={})[t]=e[t],n))})),a},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var a=this,n={};return d.a.Children.forEach(e,(function(e){if(e&&e.props){var r=e.props,i=r.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,a){return t[q[a]||a]=e[a],t}),t)}(Y(r,["children"]));switch(a.warnOnInvalidChildren(e,i),e.type){case E.LINK:case E.META:case E.NOSCRIPT:case E.SCRIPT:case E.STYLE:n=a.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:o,nestedChildren:i});break;default:t=a.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,a=Y(e,["children"]),n=U({},a);return t&&(n=this.mapChildrenToProps(t,n)),d.a.createElement(r,n)},D(t,null,[{key:"canUseDOM",set:function(e){r.canUseDOM=e}}]),t}(d.a.Component),i.propTypes={base:s.a.object,bodyAttributes:s.a.object,children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),defaultTitle:s.a.string,defer:s.a.bool,encodeSpecialCharacters:s.a.bool,htmlAttributes:s.a.object,link:s.a.arrayOf(s.a.object),meta:s.a.arrayOf(s.a.object),noscript:s.a.arrayOf(s.a.object),onChangeClientState:s.a.func,script:s.a.arrayOf(s.a.object),style:s.a.arrayOf(s.a.object),title:s.a.string,titleAttributes:s.a.object,titleTemplate:s.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=r.peek,i.rewind=function(){var e=r.rewind();return e||(e=fe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);he.renderStatic=he.rewind}).call(this,a("yLpj"))},u1WH:function(e,t,a){},uqFQ:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#FFFFFF","images":{"fallback":{"src":"/static/0cf3ea1610a17ac88ca53040903ea4a5/97ab8/loop-signature%404x.png","srcSet":"/static/0cf3ea1610a17ac88ca53040903ea4a5/20682/loop-signature%404x.png 68w,\\n/static/0cf3ea1610a17ac88ca53040903ea4a5/2f16f/loop-signature%404x.png 136w,\\n/static/0cf3ea1610a17ac88ca53040903ea4a5/97ab8/loop-signature%404x.png 271w,\\n/static/0cf3ea1610a17ac88ca53040903ea4a5/21a46/loop-signature%404x.png 542w","sizes":"(min-width: 271px) 271px, 100vw"},"sources":[{"srcSet":"/static/0cf3ea1610a17ac88ca53040903ea4a5/e5420/loop-signature%404x.webp 68w,\\n/static/0cf3ea1610a17ac88ca53040903ea4a5/311eb/loop-signature%404x.webp 136w,\\n/static/0cf3ea1610a17ac88ca53040903ea4a5/4d89a/loop-signature%404x.webp 271w,\\n/static/0cf3ea1610a17ac88ca53040903ea4a5/f4cba/loop-signature%404x.webp 542w","type":"image/webp","sizes":"(min-width: 271px) 271px, 100vw"}]},"width":271,"height":28}')},yLpj:function(e,t){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(n){"object"==typeof window&&(a=window)}e.exports=a}}]);
//# sourceMappingURL=921bca44c4d0952d19106d6859c69217402e95ea-1ceb3b389ebb661e1392.js.map