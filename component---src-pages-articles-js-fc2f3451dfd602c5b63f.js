(self.webpackChunkloop_gatsby=self.webpackChunkloop_gatsby||[]).push([[374],{9379:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=(0,i.default)(e),n=(0,r.default)(t);if(""===a)return"";n&&(a=a.toLowerCase());return a.substr(0,1).toUpperCase()+a.substr(1)};var r=n(a(1614)),i=n(a(7228));function n(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},1614:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if((0,n.default)(e))return t;return Boolean(e)};var r,i=a(3959),n=(r=i)&&r.__esModule?r:{default:r};e.exports=t.default},7800:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=(0,n.default)(e),o=Array.isArray(t)?t:[],s=r.REGEXP_EXTENDED_ASCII.test(a)?r.REGEXP_LATIN_WORD:r.REGEXP_WORD;return a.replace(s,(function(e,t){return t>0&&o.indexOf(a[t-1])>=0?e.toLowerCase():(0,i.default)(e,!0)}))};var r=a(99),i=o(a(9379)),n=o(a(7228));function o(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},7523:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var r=a(3552),i=a(7294),n=a(5414),o=a(6802),s=a(7800),c=a.n(s),l=function(e){function t(t){return e.call(this,t)||this}(0,r.Z)(t,e);var a=t.prototype;return a.getBreadcrumbsFromLocation=function(e){if("/"!==e.pathname){var t=e.pathname.split("/"),a={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[]};return t.forEach((function(t,r){var i="";""!==t&&(i=i+"/"+t,a.itemListElement.push({"@type":"ListItem",position:r,item:{"@id":e.origin+"/"+i,name:c()(t.replace(/\-/g," "))}}))})),a}},a.render=function(){var e,t,a,r,s,c,l=this.props,m=l.postNode,p=l.pagePath,u=l.postSEO,d=l.pageSEO,h=l.productSEO,g=l.articleSEO,f=l.customTitle,y=l.siteMetadata,E=l.location,b=l.product,w=""+y.siteUrl+y.shareImage,_=new Date,v=[m.title].concat(m.tags);e=y.title,t=y.description,a=""+y.siteUrl+y.shareImage,r=y.shareImageWidth,s=y.shareImageHeight,c=y.siteUrl;var I=this.getBreadcrumbsFromLocation(E);f&&(e=m.title,c=y.siteUrl+"/"+p+"/"),(u||d)&&(e=m.title,t=m.description.internal.content,c=p.length>1?y.siteUrl+"/"+p+"/":y.siteUrl+"/"),(u||g)&&(a="https:"+(0,o.e)(m.heroImage.gatsbyImageData),r=m.heroImage.gatsbyImageData.width,s=m.heroImage.gatsbyImageData.height,_=m.publishDate,c=y.siteUrl+"/"+p+"/"),h&&(t=""===b.description?b.manufacturer+" product":b.description,a=""+y.siteUrl+(0,o.e)(b.image_primary.childImageSharp.gatsbyImageData),r=b.image_primary.childImageSharp.gatsbyImageData.width,s=b.image_primary.childImageSharp.gatsbyImageData.height,_=m.publishDate,c=""+y.siteUrl+b.slug,e=b.manufacturer+" - "+b.title);var A=[{"@context":"http://schema.org","@type":"WebSite",url:y.siteUrl,name:y.title,alternateName:y.title,potentialAction:{"@type":"SearchAction",target:"https://looparch.com/search/?s={search_term_string}","query-input":"required name=search_term_string"}},{"@context":"http://schema.org","@type":"Organization",name:y.title,legalName:y.title+", LLC",url:y.siteUrl,logo:w,foundingDate:"2009",address:{"@type":"PostalAddress",streetAddress:"3110 N 16th Street",addressLocality:"Phoenix",addressRegion:"AZ",postalCode:"85016",addressCountry:"USA"},contactPoint:{"@type":"ContactPoint",contactType:"sales",email:"info@looparch.com",url:y.siteUrl+"/contact/"},sameAs:["https://www.instagram.com/looparchitecturalmaterials/","https://www.facebook.com/looparch/"]},{"@context":"http://schema.org","@type":"LocalBusiness",address:{"@type":"PostalAddress",streetAddress:"3110 N 16th Street",addressLocality:"Phoenix",addressRegion:"AZ",postalCode:"85016",addressCountry:"USA"},telephone:"602-810-1502",image:w,priceRange:"$$$",description:""+y.description,name:y.title,openingHours:"Mo,Tu,We,Th,Fr 09:00-17:00",geo:{"@type":"GeoCoordinates",latitude:"33.484319",longitude:"-112.047970"},sameAs:["https://www.instagram.com/looparchitecturalmaterials/","https://www.facebook.com/looparch/","https://www.pinterest.com/looparchitecturalmaterials"]}];return u&&A.push({"@context":"http://schema.org","@type":"NewsArticle",mainEntityOfPage:{"@type":"WebPage",url:c},headline:e,image:[a],datePublished:m.publishDate,dateModified:_,author:{"@type":"Person",name:y.publisher,url:y.siteUrl},publisher:{"@type":"Organization",name:y.publisher,url:y.siteUrl,logo:{"@type":"ImageObject",name:"Loop Architectural Materials Logo",width:"600",height:"60",url:""+y.siteUrl+y.shareImage}},description:m.description.childMarkdownRemark.html}),d&&A.push({"@context":"http://schema.org","@type":"WebPage",url:E.href,name:e,description:t}),I&&A.push(I),i.createElement(n.q,null,i.createElement("meta",{name:"keywords",content:v.join(",")}),i.createElement("meta",{name:"image",content:a}),i.createElement("meta",{name:"description",content:t}),i.createElement("meta",{name:"application-name",content:"Loop Architectural Materials"}),i.createElement("script",{type:"application/ld+json"},JSON.stringify(A)),i.createElement("script",{async:!0,src:"https://chimpstatic.com/mcjs-connected/js/users/6236ae131b11b8506326eed86/943d564cd0b36996e264a468a.js"}),i.createElement("meta",{property:"og:title",content:e}),i.createElement("meta",{property:"og:type",content:"article"}),i.createElement("meta",{property:"article:author",content:"Loop Architectural Materials"}),i.createElement("meta",{property:"article:published_time",content:m.publishDate}),i.createElement("meta",{property:"og:url",content:c}),i.createElement("meta",{property:"og:image",content:a}),i.createElement("meta",{property:"og:image:width",content:r}),i.createElement("meta",{property:"og:image:height",content:s}),i.createElement("meta",{property:"og:description",content:t}),i.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.createElement("meta",{name:"twitter:creator",content:y.userTwitter?y.userTwitter:""}),i.createElement("meta",{name:"twitter:title",content:e}),i.createElement("meta",{name:"twitter:image",content:a}),i.createElement("meta",{name:"twitter:description",content:t}))},t}(i.Component)},7258:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return p}});var r=a(3552),i=a(7294),n=a(5414),o=a(2333),s=a(5444),c=a(6802),l=function(e){function t(t){return e.call(this,t)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this.props.article;this.props.siteMetadata;return i.createElement("article",{className:"article-preview box"},i.createElement(s.Link,{to:"/articles/"+e.slug,hrefLang:"en",style:{color:"#363636"}},i.createElement(c.G,{image:e.heroImage.gatsbyImageData,alt:e.heroImage.title,title:e.heroImage.title}),i.createElement("hr",null),i.createElement("h3",{className:"title is-size-5"},e.title),i.createElement("p",{className:"is-size-7"},e.body.childMarkdownRemark.excerpt)))},t}(i.Component),m=a(7523),p=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this,t=this.props.data.site.siteMetadata.title,a=this.props.data.allContentfulBlogPost.edges;return i.createElement(o.Z,null,i.createElement("div",{className:"content-section"},i.createElement(n.q,{title:t+" | Articles"}),i.createElement(m.Z,{pageSEO:!0,pagePath:"articles",postNode:{title:"Articles",description:{internal:{content:"A list of articles and press releases from Loop Architectural Materials listed in the order they were created."}}},siteMetadata:this.props.data.site.siteMetadata,location:this.props.location}),i.createElement("section",{className:"section"},i.createElement("div",{className:"container"},i.createElement("h1",{className:"title is-size-4"},"Articles"),i.createElement("div",{className:"article-list columns is-multiline"},a.map((function(t){var a=t.node;return i.createElement("div",{key:a.slug,className:"column is-one-third"},i.createElement(l,{article:a,siteMetadata:e.props.data.site.siteMetadata}))})))))))},t}(i.Component)}}]);
//# sourceMappingURL=component---src-pages-articles-js-fc2f3451dfd602c5b63f.js.map