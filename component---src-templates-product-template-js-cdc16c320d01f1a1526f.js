(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"5s8l":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a("q1tI"),a("qhky");var r=a("JV2w");function n(e,t,a){return{"@context":"http://schema.org","@type":"Product",name:e.frontmatter.title,image:[""+a.siteUrl+Object(r.k)(e.frontmatter.image_primary.childImageSharp.gatsbyImageData)],description:""+(unescape(e.frontmatter.description)||e.frontmatter.manufacturer+" - "+e.frontmatter.title||""),sku:""+e.id,mpn:""+e.id,review:{"@type":"Review",reviewRating:{"@type":"Rating",ratingValue:"5",bestRating:"5"},author:{"@type":"Person",name:a.publisher,url:a.siteUrl}},aggregateRating:{"@type":"AggregateRating",ratingValue:"5",reviewCount:"1"},brand:{"@type":"Brand",name:t.title,logo:"https:"+Object(r.k)(t.logoImageDark.gatsbyImageData)},offers:{"@type":"Offer",price:"1.00",priceCurrency:"USD",priceValidUntil:"2020-01-01",availability:"InStock",url:""+a.siteUrl+e.frontmatter.slug}}}},ZGp8:function(e,t,a){"use strict";a.r(t);var r=a("dI71"),n=a("q1tI"),i=a.n(n),s=a("JV2w"),l=a("qhky"),c=a("Bl7J"),m=a("5s8l"),o=a("vrFN"),u=function(e){function t(t){var a;a=e.call(this,t)||this;var r=t.data,n=r.markdownRemark,s=r.contentfulManufacturer,l=r.site,c=n.frontmatter;return a.tagList=c.tags.map((function(e,t){return i.a.createElement("li",{className:"tag",key:t},e)})),a.jsonLD=Object(m.a)(n,s,l.siteMetadata),a}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark.frontmatter,t=this.props.data.site,a=this.props.data.contentfulManufacturer,r=this.tagList,n=this.jsonLD;return i.a.createElement(c.a,null,i.a.createElement(l.a,{title:e.manufacturer+" "+e.title+" | "+t.siteMetadata.title}),i.a.createElement(o.a,{productSEO:!0,pagePath:"manufacturers/"+a.slug,siteMetadata:t.siteMetadata,postNode:a,location:this.props.location,product:e}),i.a.createElement(l.a,null,i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(n))),i.a.createElement("div",{className:"article content-section"},i.a.createElement("div",{className:"section"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"content"},i.a.createElement("h1",{className:"title is-size-2 is-size-4-mobile",style:{marginBottom:0}},e.manufacturer," - ",e.title),i.a.createElement("h2",{className:"has-text-weight-light is-size-4 is-size-5-mobile",style:{marginTop:0}},e.subtitle,"null"!==e.designer&&i.a.createElement("span",null," by ",e.designer)),i.a.createElement(s.a,{image:e.image_primary.childImageSharp.gatsbyImageData,alt:e.title+" Image 1"}),e.image_secondary&&i.a.createElement(s.a,{image:e.image_secondary.childImageSharp.gatsbyImageData,alt:e.title+" Image 2"}),"null"!==e.description&&i.a.createElement("p",null,unescape(unescape(e.description)))),i.a.createElement("p",{className:"control no-print",style:{marginBottom:"1rem"}},i.a.createElement("a",{href:e.href,target:"_blank",className:"button is-primary",rel:"noopener"},i.a.createElement("span",null,"View on ",e.manufacturer))),i.a.createElement("ul",{className:"tags"},r)))))},t}(i.a.Component);t.default=u}}]);
//# sourceMappingURL=component---src-templates-product-template-js-cdc16c320d01f1a1526f.js.map