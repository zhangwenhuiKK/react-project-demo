(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0+NZ":function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a);t.a=function(e){return i.a.createElement("span",null,"ArticleTag")}},"1qua":function(e,t,n){(e.exports=n("JPst")(!1)).push([e.i,".app-article {\n  min-height: 10vh;\n}\n.app-article .post-header {\n  text-align: center;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #e8e8e8;\n}\n.app-article .post-header .post-title {\n  color: #0d1a26;\n  font-size: 1.7em;\n  font-weight: 400;\n  margin-top: 0;\n}\n.app-article .post-header .others {\n  vertical-align: middle;\n  margin-top: 10px;\n  color: rgba(0, 0, 0, 0.45);\n}\n.app-article .post-header .others a {\n  color: inherit;\n}\n.app-article .article-navigation {\n  position: fixed;\n  width: 246px;\n  top: 104px;\n  right: 20px;\n}\n.app-article .article-navigation .ant-anchor {\n  padding-left: 0;\n}\n.app-article .article-navigation .ant-anchor .ant-anchor-link-active::before {\n  display: block;\n  content: '';\n  height: 18px;\n  width: 2px;\n  background-color: #1890ff;\n  position: absolute;\n  left: 0px;\n}\n.app-article .drawer-btn {\n  position: fixed;\n  width: 41px;\n  height: 41px;\n  top: 20vh;\n  right: 0;\n  cursor: pointer;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);\n  border-radius: 4px 0 0 4px;\n  text-align: center;\n  line-height: 41px;\n  z-index: 999;\n  background: #fff;\n}\n.app-article .right-navigation {\n  margin-left: -20px;\n}\n.app-article .right-navigation .ant-anchor-ink::before {\n  content: '';\n  display: none;\n}\n",""])},"7Qib":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));var a=function(e){var t=e.length;return e.forEach((function(e){t+=e.replies.length})),t},i=function(e){var t={};return e.replace(/\.*\?/,"").split("&").forEach((function(e){var n=e.split("=");n[1]&&n[0]&&(t[n[0]]=n[1])})),t}},M1QH:function(e,t,n){var a=n("LboF"),i=n("1qua");"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1},c=(a(i,r),i.locals?i.locals:{});e.exports=c},weOE:function(e,t,n){"use strict";n.r(t);n("04bd");var a=n("W9HT"),i=(n("Re5i"),n("/wGt")),r=(n("2oDE"),n("CtXQ")),c=(n("qNb/"),n("PArb")),o=n("J4zp"),l=n.n(o),s=n("q1tI"),p=n.n(s),u=n("s/Ur"),m=(n("mJp1"),n("JsLm")),d=m.a.Link;function h(e){var t=[];return e.replace(/<(h[1-6])[\s\S]+?(?=<\/\1>)/g,(function(e,n){var a=e.replace(/.*?>/,""),i=e.indexOf('"'),r=e.indexOf('">'),c="#".concat(e.slice(i+1,r));!function e(t,n){var a=t[t.length-1];a&&a.tag!==n.tag?e(a.children,n):t.push(n)}(t,{tag:n,title:a,href:c,children:[]})})),t}var g=function(e){var t=h(e.content);return p.a.createElement(m.a,{affix:!1},t.map((function e(t){var n=t.href,a=t.title,i=t.children;return p.a.createElement(d,{key:n,href:n,title:a},i.length>0&&i.map((function(t){return e(t)})))})))},f=n("0+NZ"),v=n("7Qib"),b=(n("M1QH"),{createdAt:"2020-03-12 14:12:57",updatedAt:"2020-03-18 19:50:03",id:92,title:"置顶文",content:"This is some content of the article",viewCount:1029,tags:[],categories:[],comments:[]});t.default=function(e){var t=Object(s.useState)(!1),n=l()(t,2),o=n[0],m=(n[1],Object(s.useState)({title:"",content:"",tags:[],categories:[],comments:[],createdAt:"",viewCount:0})),d=l()(m,2),h=d[0],x=d[1],E=Object(s.useState)(!1),w=l()(E,2),y=w[0],N=w[1],k=h.title,O=h.content,q=h.tags,C=h.categories,L=h.comments,j=h.createdAt,A=h.viewCount,J=(parseInt(e.match.params.id),Object(u.useMediaQuery)({query:"(max-width: 1300px)"}));return Object(s.useEffect)((function(){e.match.params.id,x(b)}),[e.match.params.id]),p.a.createElement(a.a,{tip:"Loading...",spinning:o},p.a.createElement("div",{className:"app-article",style:{paddingRight:J?0:275}},p.a.createElement("div",{className:"post-header"},p.a.createElement("h1",{className:"post-title"},"文章ID ",e.match.params.id),p.a.createElement("div",{className:"article-desc"},p.a.createElement("span",{className:"post-time"},"  Posted on  ",p.a.createElement("span",null,j.slice(0,10))),p.a.createElement(f.a,{tagList:q,categoryList:C}),p.a.createElement(c.a,{type:"vertical"}),p.a.createElement("a",{className:"comment-count",href:"#discuss",style:{color:"inherit"}},p.a.createElement("span",{style:{marginRight:5}}," ",Object(v.a)(L))),p.a.createElement("span",null,A))),p.a.createElement("div",{className:"article-detail",dangerouslySetInnerHTML:{__html:O}}),J?p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"drawer-btn",onClick:function(e){return N(!0)}},p.a.createElement(r.a,{type:"menu-o",className:"nav-phone-icon"})),p.a.createElement(i.a,{title:k,placement:"right",closable:!1,onClose:function(e){return N(!1)},visible:y,getContainer:function(){return document.querySelector(".app-article")}},p.a.createElement("div",{className:"right-navigation"},p.a.createElement(g,{content:O})))):p.a.createElement("div",{className:"article-navigation"},p.a.createElement(g,{content:O}))))}}}]);