(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{hk7L:function(e,t,a){"use strict";a.r(t);var i=a("dI71"),r=a("q1tI"),s=a.n(r),n=a("Bl7J"),l=a("qhky"),c=a("Wbzz"),o=a("JV2w"),m=function(e){function t(t){return e.call(this,t)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e=this.props.article;this.props.siteMetadata;return s.a.createElement("article",{className:"article-preview box"},s.a.createElement(c.Link,{to:"/articles/"+e.slug,hrefLang:"en",style:{color:"#363636"}},s.a.createElement(o.a,{image:e.heroImage.gatsbyImageData,alt:e.heroImage.title,title:e.heroImage.title}),s.a.createElement("hr",null),s.a.createElement("h3",{className:"title is-size-5"},e.title),s.a.createElement("p",{className:"is-size-7"},e.body.childMarkdownRemark.excerpt)))},t}(s.a.Component),p=a("vrFN"),d=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e=this,t=this.props.data.site.siteMetadata.title,a=this.props.data.allContentfulBlogPost.edges;return s.a.createElement(n.a,null,s.a.createElement("div",{className:"content-section"},s.a.createElement(l.a,{title:t+" | Articles"}),s.a.createElement(p.a,{pageSEO:!0,pagePath:"articles",postNode:{title:"Articles",description:{internal:{content:"A list of articles and press releases from Loop Architectural Materials listed in the order they were created."}}},siteMetadata:this.props.data.site.siteMetadata,location:this.props.location}),s.a.createElement("section",{className:"section"},s.a.createElement("div",{className:"container"},s.a.createElement("h1",{className:"title is-size-4"},"Articles"),s.a.createElement("div",{className:"article-list columns is-multiline"},a.map((function(t){var a=t.node;return s.a.createElement("div",{key:a.slug,className:"column is-one-third"},s.a.createElement(m,{article:a,siteMetadata:e.props.data.site.siteMetadata}))})))))))},t}(s.a.Component);t.default=d}}]);
//# sourceMappingURL=component---src-pages-articles-js-3b81fbb06579d1ed8837.js.map