(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"2HkZ":function(e,t,a){"use strict";a.r(t);var r=a("KQm4"),n=a("dI71"),l=a("q1tI"),i=a.n(l),s=a("qhky"),o=a("JV2w"),c=a("olB8"),m=a("Wbzz"),u=(a("Iua+"),function(e){function t(t){return e.call(this,t)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.product,t=this.props.post,a=e.description||e.title,r=i.a.createElement(o.a,{image:e.image_primary.childImageSharp.gatsbyImageData,alt:a,title:t.title+" "+e.title,className:"image product-preview-image fluid"});return i.a.createElement("article",{className:"product-preview "+t.slug,id:e.title},i.a.createElement(m.Link,{to:e.slug,hrefLang:"en",rel:"help"},i.a.createElement("div",null,r),i.a.createElement("h3",{className:"is-size-6"},Object(c.truncate)(e.title,22))))},t}(i.a.Component)),p=a("TmZ3"),d=a("Bl7J"),g=a("vrFN"),f=a("5s8l"),h=(a("GgaC"),function(e){function t(t){var a,n=(a=e.call(this,t)||this).props.data.allMarkdownRemark.groupedProducts,l=n.slice(0,1),i=[],s=[];return n.map((function(e){var t=Object(c.titleCase)(e.fieldValue.replace(/\-/g," "));i.push({name:t,anchor:e.fieldValue}),s=Object(r.a)(new Set(i))})),a.state={windowHeight:1e3,productGroups:s,iterableGroups:l,groupedProducts:n},a}Object(n.a)(t,e);var a=t.prototype;return a.scrollToId=function(e,t){console.log(e),t.stopPropagation();var a=document.getElementById(e);console.log(a.height),window.scrollTo(a.offsetLeft,a.offsetTop+a.offsetHeight)},a.componentDidMount=function(){this.setState({iterableGroups:this.state.groupedProducts})},a.render=function(){var e=this,t=this.props.data.site.siteMetadata,a=t.title,r=this.props.data.contentfulManufacturer,n=(this.props.data.allMarkdownRemark.groupedProducts,this.props.data.allContentfulManufacturer||{edges:[]});return i.a.createElement(d.a,null,i.a.createElement(s.a,{title:r.title+" | "+a}),i.a.createElement(g.a,{pageSEO:!0,pagePath:"manufacturers/"+r.slug,siteMetadata:t,postNode:r,location:this.props.location}),i.a.createElement("h1",{className:"is-sr-only"},r.title+" | "+a),i.a.createElement("section",{className:"section",id:"manufacturer-post"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"columns is-multiline is-variable is-6"},i.a.createElement("div",{className:"column is-one-third"},i.a.createElement(o.a,{image:r.logoImageDark.gatsbyImageData,alt:r.logoImageDark.title,title:r.logoImageDark.title,className:"image"}),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(o.a,{image:r.heroImage.gatsbyImageData,alt:r.heroImage.title,title:r.heroImage.title,className:"image"}),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:r.description.childMarkdownRemark.html}}),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"field is-grouped"},i.a.createElement("p",{className:"control no-print"},i.a.createElement("a",{href:r.url,target:"_blank",className:"button is-primary",rel:"noopener"},i.a.createElement("span",null,"Visit ",r.title))),i.a.createElement("p",{className:"control no-print"},i.a.createElement("a",{href:"#inquiry",className:"button is-secondary"},i.a.createElement("span",null,"Inquire")))),i.a.createElement("br",null),i.a.createElement("div",{className:"tags"},this.state.productGroups.map((function(t,a){return i.a.createElement("span",{className:"tag",key:a,onClick:function(a){return e.scrollToId(t.anchor,a)}},i.a.createElement("a",null,t.name))}))))),i.a.createElement("div",{className:"column is-marginless"},this.state.iterableGroups.map((function(a,n){var l=Object(c.titleCase)(a.fieldValue.replace(/\-/g," "));return i.a.createElement("div",{key:n},i.a.createElement("div",{id:a.fieldValue,className:"column is-full is-marginless",style:{position:"sticky",top:"65px",background:"#FFF",zIndex:"25",display:"block"}},i.a.createElement("h2",{className:"title is-size-4",style:{background:"#FFF",display:"block"}},l)),a.nodes.map((function(a){var n=a.frontmatter;Object(f.a)(a,r,t);return i.a.createElement("div",{key:a.id,className:"column is-inline-block is-one-third-desktop is-half-tablet is-half-mobile",style:{zIndex:"500"}},i.a.createElement(u,{product:n,post:r,siteMetadata:t,path:e.props.location.pathname}))})))})),i.a.createElement("section",{id:"inquiry",className:"column is-full inquiry-section no-print"},i.a.createElement("div",{style:{position:"sticky",top:"65px",background:"#FFF",zIndex:"25",display:"block",padding:"0.75rem 0.75rem 0.75rem 0"}},i.a.createElement("h3",{className:"title is-size-4"},r.title," Inquiries")),i.a.createElement(p.a,{section:r.title,manufacturers:n,recaptchaKey:t.recaptchaKey})))))))},t}(i.a.Component));t.default=h},"5s8l":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a("q1tI"),a("qhky");var r=a("JV2w");function n(e,t,a){return{"@context":"http://schema.org","@type":"Product",name:e.frontmatter.title,image:[""+a.siteUrl+Object(r.k)(e.frontmatter.image_primary.childImageSharp.gatsbyImageData)],description:""+(unescape(e.frontmatter.description)||e.frontmatter.manufacturer+" - "+e.frontmatter.title||""),sku:""+e.id,mpn:""+e.id,review:{"@type":"Review",reviewRating:{"@type":"Rating",ratingValue:"5",bestRating:"5"},author:{"@type":"Person",name:a.publisher,url:a.siteUrl}},aggregateRating:{"@type":"AggregateRating",ratingValue:"5",reviewCount:"1"},brand:{"@type":"Brand",name:t.title,logo:"https:"+Object(r.k)(t.logoImageDark.gatsbyImageData)},offers:{"@type":"Offer",price:"1.00",priceCurrency:"USD",priceValidUntil:"2020-01-01",availability:"InStock",url:""+a.siteUrl+e.frontmatter.slug}}}},GgaC:function(e,t,a){},"Iua+":function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-manufacturer-post-js-83ce3f9270cb85c286f6.js.map