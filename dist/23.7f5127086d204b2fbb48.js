/*!
 * @version 6c13c21-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"4Kko":function(e,t,a){var n=a("LboF"),r=a("7Xp8")
"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]])
var c={insert:"head",singleton:!1}
n(r,c)
e.exports=r.locals||{}},"7Xp8":function(e,t,a){(t=e.exports=a("JPst")(!1)).push([e.i,".img-3aH{width:100%;margin-bottom:30px;display:inline-block}.title-2DX{margin-bottom:5px}.subtitle-2uA{margin-bottom:20px;font-size:0.85rem}.articleMain-3Qg p{margin-bottom:10px}\n",""]),t.locals={img:"img-3aH",title:"title-2DX",subtitle:"subtitle-2uA",articleMain:"articleMain-3Qg"}},"8Ufo":function(e,t,a){(t=e.exports=a("JPst")(!1)).push([e.i,".news-XeC{max-width:1200px;margin:40px auto;list-style-type:none;color:#000000}\n",""]),t.locals={news:"news-XeC"}},AumO:function(e,t,a){"use strict"
a.r(t),a.d(t,"default",(function(){return components_News_News}))
var n=a("o0o1"),r=a.n(n),c=a("yXPU"),i=a.n(c),s=a("q1tI"),l=a.n(s),u=a("vDqi"),o=a.n(u),d=a("Ty5D"),p=a("QinI"),f=a.n(p),m=a("RIqP"),h=a.n(m),w=a("J4zp"),b=a.n(w),v=Object(s.createContext)(null),g=v.Provider,x=function StateProvider(e){var t=e.children,a=Object(s.useReducer)((function(e,t){switch(t.type){case"fetchedNews":return{posts:t.payload,mediaList:e.mediaList,authorList:e.authorList,currentArticle:e.currentArticle}
case"fetchedMedia":var a=e.mediaList.map((function(e){return e.id})).includes(t.payload.id)?e.mediaList:[].concat(h()(e.mediaList),[t.payload.data])
return{posts:e.posts,mediaList:a,authorList:e.authorList,currentArticle:e.currentArticle}
case"fetchedAuthor":var n=e.authorList.map((function(e){return e.id})).includes(t.payload.id)?e.authorList:[].concat(h()(e.authorList),[t.payload.data])
return{posts:e.posts,mediaList:e.mediaList,authorList:n,currentArticle:e.currentArticle}
case"setCurrentArticle":return{posts:e.posts,mediaList:e.mediaList,authorList:e.authorList,currentArticle:t.payload.data}
default:return{posts:e.posts,mediaList:e.mediaList,authorList:e.authorList,currentArticle:e.currentArticle}}}),{mediaList:[],authorList:[],currentArticle:null,isFetchingMedia:!1,isFetchingAuthor:!1}),n=b()(a,2),r=n[0],c=n[1]
return l.a.createElement(g,{value:{state:r,dispatch:c}},t)},y=a("55Ip"),L=a("1zJl"),E=a("bV4B"),k=a("d8HC"),_=a.n(k),M=function News(){var e=Object(s.useContext)(v).state.posts,t="News from 4wdsupacentre.com.au",a=function createMarkup(e){return{__html:e}}
return l.a.createElement(s.Fragment,null,l.a.createElement(L.c,null,t),l.a.createElement(L.b,{name:"description",content:t}),e&&e.map((function(e){return l.a.createElement("li",{key:e.id,className:_.a.newsItem},l.a.createElement(y.b,{to:"/news/".concat(e.slug),className:_.a.linkTitle,dangerouslySetInnerHTML:a(e.title.rendered)}),l.a.createElement("div",{className:_.a.excerpt,dangerouslySetInnerHTML:a(e.excerpt.rendered)}),l.a.createElement(y.b,{to:"/news/".concat(e.slug),className:_.a.cta},l.a.createElement(E.a,{appearance:"secondary"},"Read More")))})))},A=a("4Kko"),O=a.n(A),I=function NewsArticle(){var e="https://www.4wdsupacentre.com.au/news/",t="".concat(e,"wp-json/wp/v2/media/"),a="".concat(e,"wp-json/wp/v2/users/"),n=Object(s.useState)({}),c=b()(n,2),u=c[0],d=c[1],p=Object(s.useState)({}),f=b()(p,2),m=f[0],h=f[1],w=Object(s.useContext)(v),g=w.state,x=w.dispatch,y=g.currentArticle,E=g.mediaList,k=g.authorList
Object(s.useEffect)((function(){if(!y)return function(){}
var e;(e=i()(r.a.mark((function _callee(e){var a,n,c
return r.a.wrap((function _callee$(r){for(;;)switch(r.prev=r.next){case 0:if(a=e.featured_media,r.prev=1,!E){r.next=11
break}if(E.map((function(e){return e.id})).includes(a)){r.next=10
break}return n="".concat(t).concat(a),r.next=8,o()(n)
case 8:c=r.sent,x({type:"fetchedMedia",payload:{id:a,data:c.data}})
case 10:!function getCurrentMedia(){if(E&&y.featured_media){var e=E.filter((function(e){return e.id===y.featured_media}))
d(e[0])}}()
case 11:r.next=16
break
case 13:r.prev=13,r.t0=r.catch(1)
case 16:case"end":return r.stop()}}),_callee,null,[[1,13]])}))),function fetchData(t){return e.apply(this,arguments)})(y)}),[y,E,x,t]),Object(s.useEffect)((function(){if(!y)return function(){}
var e;(e=i()(r.a.mark((function _callee2(e){var t,n,c
return r.a.wrap((function _callee2$(r){for(;;)switch(r.prev=r.next){case 0:if(t=e.author,r.prev=1,!k){r.next=12
break}if(k.map((function(e){return e.id})).includes(t)){r.next=10
break}return n="".concat(a).concat(t),r.next=8,o()(n)
case 8:c=r.sent,x({type:"fetchedAuthor",payload:{id:t,data:c.data}})
case 10:!function getCurrentAuthor(){if(k&&y.author){var e=k.filter((function(e){return e.id===y.author}))
h(e[0])}}()
case 12:r.next=17
break
case 14:r.prev=14,r.t0=r.catch(1)
case 17:case"end":return r.stop()}}),_callee2,null,[[1,14]])}))),function fetchMedia(t){return e.apply(this,arguments)})(y)}),[y,k,x,a])
var _=function createMarkup(e){return{__html:e}}
return l.a.createElement("div",{className:O.a.article},l.a.createElement(L.c,null,y&&y.title&&y.title.rendered),l.a.createElement(L.b,{name:"description",content:y&&y.title&&y.title.rendered}),function createMediaElement(){return u&&u.guid?l.a.createElement("img",{src:u.guid.rendered,className:O.a.img,alt:u.title.rendered}):null}(),function createTitleElement(){if(!y)return null
var e=y.title
return e?l.a.createElement("h2",{className:O.a.title,dangerouslySetInnerHTML:_(e.rendered)}):null}(),function createSubtitleElement(){if(!y)return null
var e=y.date?l.a.createElement("span",null,y.date):null,t=m?l.a.createElement("span",null,"| By ",m.name):null
return l.a.createElement("div",{className:O.a.subtitle},e," ",t)}(),function createMainElement(){if(!y||!y.content)return null
var e=y.content
return e&&e.rendered?l.a.createElement("div",{dangerouslySetInnerHTML:_(e.rendered),className:O.a.articleMain}):null}())},N=function News(){var e="".concat("https://www.4wdsupacentre.com.au/news/").concat("wp-json/wp/v2/posts"),t=Object(s.useContext)(v),a=t.state,n=t.dispatch,c=a.posts,u=Object(d.i)().slug,p=(a.posts?a.posts.filter((function(e){return e.slug===u})):[])[0]
Object(s.useEffect)((function(){function _fetchData(){return(_fetchData=i()(r.a.mark((function _callee(){var t,a
return r.a.wrap((function _callee$(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,c){r.next=7
break}return r.next=4,o()(e)
case 4:t=r.sent,a=t.data,n({type:"fetchedNews",payload:a})
case 7:r.next=12
break
case 9:r.prev=9,r.t0=r.catch(0)
case 12:case"end":return r.stop()}}),_callee,null,[[0,9]])})))).apply(this,arguments)}!function fetchData(){return _fetchData.apply(this,arguments)}()}),[n,e,c]),Object(s.useEffect)((function(){!function fetchMedia(){n({type:"setCurrentArticle",payload:{data:p}})}()}),[c,u,n,p])
var m=u?l.a.createElement(I,null):l.a.createElement(M,null)
return l.a.createElement("div",{className:f.a.news},m)},components_News_News=function(){return l.a.createElement(x,null,l.a.createElement(N,null))}},QinI:function(e,t,a){var n=a("LboF"),r=a("8Ufo")
"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]])
var c={insert:"head",singleton:!1}
n(r,c)
e.exports=r.locals||{}},d8HC:function(e,t,a){var n=a("LboF"),r=a("ewZk")
"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]])
var c={insert:"head",singleton:!1}
n(r,c)
e.exports=r.locals||{}},ewZk:function(e,t,a){(t=e.exports=a("JPst")(!1)).push([e.i,".newsItem-1VO{--subscr-form-background-color: var(--supacentre-grey);margin:0;padding:25px 0;border-bottom:1px solid var(--subscr-form-background-color)}.newsItem-1VO .linkTitle-2ZC{font-size:24px;font-weight:var(--supacentre-bold-font-weight);color:#000000}.newsItem-1VO .excerpt-118{margin:4px 0;font-size:14px}.newsItem-1VO .cta-14P{display:block;margin-right:20px;text-align:right}.newsItem-1VO .cta-14P button{display:inline-block;width:auto}\n",""]),t.locals={newsItem:"newsItem-1VO",linkTitle:"linkTitle-2ZC",excerpt:"excerpt-118",cta:"cta-14P"}}}])
