/*!
 * @version 6c13c21-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"3nHv":function(e,n,t){(n=e.exports=t("JPst")(!1)).push([e.i,".categoryTile-root-29o {\n    display: block;\n    line-height: 1rem;\n    text-align: center;\n    width: 6rem;\n}\n\n.categoryTile-imageContainer-3pz {\n    margin: 0 0.5rem 1rem 0.5rem;\n}\n\n.categoryTile-image-1k7 {\n    border-radius: 50%;\n    box-shadow: 0 0 0 1px rgb(var(--venia-border));\n    display: block;\n    height: 5rem;\n    object-fit: cover;\n    object-position: center;\n}\n\n.categoryTile-image_empty-224 {\n}\n\n.categoryTile-name-3et {\n    display: block;\n}\n",""]),n.locals={root:"categoryTile-root-29o",imageContainer:"categoryTile-imageContainer-3pz",image:"categoryTile-image-1k7",image_empty:"categoryTile-image_empty-224 categoryTile-image-1k7",name:"categoryTile-name-3et"}},Cj5M:function(e,n,t){"use strict"
t.r(n),t.d(n,"default",(function(){return q}))
var a=t("q1tI"),i=t.n(a),r=t("ttZb"),o=t("OYTl"),c=t.n(o),l=t("DUu4"),s=t("STDB"),d=t("17x9"),m=t("cDf5"),u=t.n(m),g=t("lSNA"),p=t.n(g),f=t("iBQN"),v=t("PVkr"),y=t.n(v),h=t("55Ip"),k=t("OlhY"),b=t("n60m"),w=t.n(b),S=function CategoryTile(e){var n=function useCategoryTile(e){var n=e.item,t=n.image,i=n.productImagePreview
return{image:Object(a.useMemo)((function(){var e=i.items[0]
return t?{url:t,type:"image-category",width:480}:e?{url:e.small_image,type:"image-product",width:480}:{url:"",type:"image-category",width:480}}),[t,i]),item:Object(a.useMemo)((function(){return{name:n.name,url:"/".concat(n.url_key).concat(".html")}}),[n])}}({item:e.item}),t=n.image,r=n.item,o=Object(f.b)(w.a,e.classes),c=Object(a.useMemo)((function(){return t.url?i.a.createElement(k.a,{alt:r.name,classes:{image:o.image,root:o.imageContainer},resource:t.url,type:t.type,width:80}):i.a.createElement("span",{className:o.image_empty})}),[o.image,o.image_empty,o.imageContainer,t.type,t.url,r.name])
return i.a.createElement(h.b,{className:o.root,to:r.url},c,i.a.createElement("span",{className:o.name},r.name))}
S.propTypes={item:Object(d.shape)({image:d.string,name:d.string.isRequired,productImagePreview:Object(d.shape)({items:Object(d.arrayOf)(Object(d.shape)({small_image:d.string}))}),url_key:d.string.isRequired}).isRequired,classes:Object(d.shape)({item:d.string,image:d.string,imageContainer:d.string,name:d.string})}
var O=S,N=t("td9M"),E=t.n(N),P=t("GmOe")
function ownKeys(e,n){var t=Object.keys(e)
if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e)
n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function _objectSpread(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{}
n%2?ownKeys(Object(t),!0).forEach((function(n){p()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var j=function mapCategory(e){var n=e.productImagePreview.items
return _objectSpread(_objectSpread({},e),{},{productImagePreview:{items:n.map((function(e){var n=e.small_image
return _objectSpread(_objectSpread({},e),{},{small_image:"object"===u()(n)?n.url:n})}))}})},_=function CategoryList(e){var n,t=e.id,a=e.title,r=Object(P.a)({query:E.a,id:t}),o=r.childCategories,c=r.error,s=r.loading,d=Object(f.b)(y.a,e.classes),m=a?i.a.createElement("div",{className:d.header},i.a.createElement("h2",{className:d.title},i.a.createElement("span",null,a))):null
return c&&(n=i.a.createElement("div",{className:d.fetchError},"Data Fetch Error: ",i.a.createElement("pre",null,c.message))),n=s||!o?l.a:0===o.length?i.a.createElement("div",{className:d.noResults},"No child categories found."):i.a.createElement("div",{className:d.content},o.map((function(e){return i.a.createElement(O,{item:j(e),key:e.url_key})}))),i.a.createElement("div",{className:d.root},m,n)}
_.propTypes={id:d.number,title:d.string,classes:Object(d.shape)({root:d.string,header:d.string,content:d.string})}
var L=_,F=t("1zJl"),T=function trailerExtras(){!function waitForElementToDisplay(e,n,t,a){var i=Date.now()
!function loopSearch(){null==document.querySelector(e)?setTimeout((function(){a&&Date.now()-i>a||loopSearch()}),t):n()}()}(".lp-trailer-pagebuilder-slider",(function(){e()}),500,5e3)
var e=function updatePrice(){var e=11995,n=document.querySelectorAll('input[name^="bundle_option"]'),t=document.querySelector("#canopyprice"),a=document.querySelector("#weeklypay")
n.forEach((function(n){n.checked&&(e+=parseInt(n.value))}))
var i=function calcWeeklyPayment(e,n){var t=n/5200
return e*t*Math.pow(1+t,260)/(Math.pow(1+t,260)-1)}(e,9.99),r=Math.round(100*i)/100
t&&(t.innerHTML=e),a&&(a.innerHTML=r)}
return{updatePrice:e}},D=t("aNnB"),C=function CMSPage(e){var n,t,o=e.id,d=Object(r.d)(c.a,{variables:{id:Number(o),onServer:!1},fetchPolicy:"no-cache"}),m=d.loading,u=d.error,g=d.data
return Object(a.useEffect)((function(){T().updatePrice(),window.updatePrice=T().updatePrice}),[]),u?i.a.createElement("div",null,"Page Fetch Error"):m?l.a:g?(t=g.cmsPage.content&&g.cmsPage.content.length>0&&!g.cmsPage.content.includes("CMS homepage content goes here.")?i.a.createElement(s.a,{html:g.cmsPage.content}):i.a.createElement(L,{title:"Shop by category",id:2}),i.a.createElement(D.a,{title:"".concat(null===(n=g.cmsPage)||void 0===n?void 0:n.title).concat(" , Outdoor Products - Australia")},i.a.createElement(F.b,{name:"description",content:g.cmsPage.meta_description}),t)):null}
C.propTypes={id:d.number}
var q=C},GmOe:function(e,n,t){"use strict"
t.d(n,"a",(function(){return c}))
var a=t("J4zp"),i=t.n(a),r=t("q1tI"),o=t("ttZb"),c=function useCategoryList(e){var n=e.query,t=e.id,a=Object(o.b)(n),c=i()(a,2),l=c[0],s=c[1],d=s.loading,m=s.error,u=s.data
return Object(r.useEffect)((function(){l({variables:{id:t}})}),[t,l]),{childCategories:u&&u.category&&u.category.children||null,error:m,loading:d}}},PVkr:function(e,n,t){var a=t("LboF"),i=t("wY90")
"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]])
var r={insert:"head",singleton:!1}
a(i,r)
e.exports=i.locals||{}},n60m:function(e,n,t){var a=t("LboF"),i=t("3nHv")
"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]])
var r={insert:"head",singleton:!1}
a(i,r)
e.exports=i.locals||{}},td9M:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"categoryList"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"category"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"children"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url_key"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url_path"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"children_count"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"path"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"productImagePreview"},name:{kind:"Name",value:"products"},arguments:[{kind:"Argument",name:{kind:"Name",value:"pageSize"},value:{kind:"IntValue",value:"1"}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"small_image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}}]}}]}}]}}]}}],loc:{start:0,end:524}}
t.loc.source={body:"# TODO: get only active categories from graphql when it is ready\nquery categoryList($id: Int!) {\n    category(id: $id) {\n        id\n        children {\n            id\n            name\n            url_key\n            url_path\n            children_count\n            path\n            image\n            productImagePreview: products(pageSize: 1) {\n                items {\n                    id\n                    small_image {\n                        url\n                    }\n                }\n            }\n        }\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}
var a={}
function findOperation(e,n){for(var t=0;t<e.definitions.length;t++){var a=e.definitions[t]
if(a.name&&a.name.value==n)return a}}!function extractReferences(){t.definitions.forEach((function(e){if(e.name){var n=new Set
!function collectFragmentReferences(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value)
else if("VariableDefinition"===e.kind){var t=e.type
"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){collectFragmentReferences(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){collectFragmentReferences(e,n)})),e.definitions&&e.definitions.forEach((function(e){collectFragmentReferences(e,n)}))}(e,n),a[e.name.value]=n}}))}(),e.exports=t,e.exports.categoryList=function oneQuery(e,n){var t={kind:e.kind,definitions:[findOperation(e,n)]}
e.hasOwnProperty("loc")&&(t.loc=e.loc)
var i=a[n]||new Set,r=new Set,o=new Set
for(i.forEach((function(e){o.add(e)}));o.size>0;){var c=o
o=new Set,c.forEach((function(e){r.has(e)||(r.add(e),(a[e]||new Set).forEach((function(e){o.add(e)})))}))}return r.forEach((function(n){var a=findOperation(e,n)
a&&t.definitions.push(a)})),t}(t,"categoryList")},wY90:function(e,n,t){(n=e.exports=t("JPst")(!1)).push([e.i,".categoryList-root-1FL {\n    padding: 1rem;\n}\n\n.categoryList-header-2W8 {\n    margin-bottom: 2rem;\n    text-align: center;\n}\n\n.categoryList-title-H-g {\n    text-transform: uppercase;\n}\n\n.categoryList-content-PaY {\n    display: grid;\n    grid-gap: 3rem 1rem;\n    grid-template-columns: repeat(auto-fit, 6rem);\n    justify-content: center;\n}\n\n.categoryList-fetchError-z3_ {\n    background-color: rgb(var(--venia-warning-light));\n    color: rgb(var(--venia-warning-dark));\n}\n\n.categoryList-fetchingData-1ew {\n    color: rgb(--venia-grey);\n}\n\n.categoryList-noResults-2Pl {\n}\n",""]),n.locals={root:"categoryList-root-1FL",header:"categoryList-header-2W8",title:"categoryList-title-H-g",content:"categoryList-content-PaY",fetchError:"categoryList-fetchError-z3_",fetchingData:"categoryList-fetchingData-1ew",noResults:"categoryList-noResults-2Pl categoryList-fetchingData-1ew"}}}])