/*!
 * @version 6c13c21-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Df3V:function(e,n,r){(n=e.exports=r("JPst")(!1)).push([e.i,".banner-root-1lO {\n}\na.banner-link-35K {\n    text-decoration: none;\n}\n.banner-wrapper-1H1 {\n    background-clip: padding-box;\n    border-radius: inherit;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n    overflow: hidden;\n}\n.banner-overlay-26F {\n    padding: 30px;\n    transition: background-color 500ms ease;\n    align-items: center;\n    display: flex;\n    flex-wrap: wrap;\n    position: relative;\n}\n\n.banner-videoOverlay-3Bp {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 0;\n}\n\n.banner-viewportElement-3d8 {\n    height: 100%;\n    width: 1px;\n    position: absolute;\n    left: var(--leftViewportElement);\n    top: 0;\n    z-index: -100;\n    -webkit-transform: translate3d(0, 0, 0);\n}\n\n.banner-content-26J {\n    min-height: 50px;\n    width: 100%;\n}\n.banner-button-X4s {\n    margin: 20px 0 0 0;\n    max-width: 100%;\n    text-align: inherit;\n    transition: opacity 500ms ease;\n    word-break: break-word;\n    width: 100%;\n}\n.banner-root-1lO:hover .banner-buttonHover-1Iu {\n    opacity: 1;\n}\n.banner-buttonHover-1Iu {\n    opacity: 0;\n}\n.banner-posterOverlay-Kjh {\n    align-content: center;\n    justify-content: center;\n}\n.banner-posterOverlayHover-1QO {\n    background-color: transparent !important;\n}\n.banner-collageLeftOverlay-3ZB {\n    margin-right: auto;\n    max-width: 540px;\n}\n.banner-collageLeftOverlayHover-2Y0 {\n    background-color: transparent !important;\n}\n.banner-collageCenteredOverlay-2PY {\n    margin-right: auto;\n    margin-left: auto;\n    max-width: 540px;\n}\n.banner-collageCenteredOverlayHover-27g {\n    background-color: transparent !important;\n}\n.banner-collageRightOverlay-19t {\n    margin-left: auto;\n    max-width: 540px;\n}\n.banner-collageRightOverlayHover-317 {\n    background-color: transparent !important;\n}\n\n.banner-root-1lO [id*='jarallax-container'] video,\n.banner-root-1lO [id*='jarallax-container'] iframe,\n.banner-root-1lO [id*='jarallax-container'] img {\n    margin: auto !important;\n    transform: none !important;\n}\n",""]),n.locals={root:"banner-root-1lO",link:"banner-link-35K",wrapper:"banner-wrapper-1H1",overlay:"banner-overlay-26F",videoOverlay:"banner-videoOverlay-3Bp",viewportElement:"banner-viewportElement-3d8",content:"banner-content-26J",button:"banner-button-X4s",buttonHover:"banner-buttonHover-1Iu banner-button-X4s",posterOverlay:"banner-posterOverlay-Kjh banner-overlay-26F",posterOverlayHover:"banner-posterOverlayHover-1QO banner-posterOverlay-Kjh banner-overlay-26F",collageLeftOverlay:"banner-collageLeftOverlay-3ZB banner-overlay-26F",collageLeftOverlayHover:"banner-collageLeftOverlayHover-2Y0 banner-collageLeftOverlay-3ZB banner-overlay-26F",collageCenteredOverlay:"banner-collageCenteredOverlay-2PY banner-overlay-26F",collageCenteredOverlayHover:"banner-collageCenteredOverlayHover-27g banner-collageCenteredOverlay-2PY banner-overlay-26F",collageRightOverlay:"banner-collageRightOverlay-19t banner-overlay-26F",collageRightOverlayHover:"banner-collageRightOverlayHover-317 banner-collageRightOverlay-19t banner-overlay-26F"}},Pbq8:function(e,n,r){"use strict"
r.r(n),r.d(n,"default",(function(){return k}))
var a=r("RIqP"),t=r.n(a),o=r("pVnL"),l=r.n(o),i=r("J4zp"),g=r.n(i),d=r("q1tI"),c=r.n(d),s=r("n+YS"),v=r.n(s),b=r("iBQN"),p=r("17x9"),y=r("ACyH"),u=r("206z"),m=r("KQw/"),O=r("55Ip"),h=function toHTML(e){return{__html:e}},f=function handleDragStart(e){return e.preventDefault()},w=function Banner(e){var n=Object(d.useRef)(null),a=Object(d.useRef)(null),o=Object(b.b)(v.a,e.classes),i=Object(d.useState)(!1),s=g()(i,2),p=s[0],w=s[1],k=function toggleHover(){return w(!p)},x=e.appearance,H=void 0===x?"poster":x,L=e.minHeight,j=e.backgroundColor,R=e.desktopImage,C=e.mobileImage,T=e.backgroundSize,E=e.backgroundPosition,B=e.backgroundAttachment,I=e.backgroundRepeat,S=e.textAlign,F=e.border,P=e.borderColor,N=e.borderWidth,z=e.borderRadius,V=e.content,A=e.showButton,J=e.buttonType,Y=e.buttonText,K=e.link,M=e.openInNewTab,q=void 0!==M&&M,D=e.showOverlay,_=e.overlayColor,Q=e.marginTop,W=e.marginRight,X=e.marginBottom,Z=e.marginLeft,$=e.paddingTop,G=e.paddingRight,U=e.paddingBottom,ee=e.paddingLeft,ne=e.cssClasses,re=void 0===ne?[]:ne,ae=e.backgroundType,te=e.videoSrc,oe=e.videoFallbackSrc,le=e.videoLoop,ie=e.videoPlayOnlyVisible,ge=e.videoLazyLoading,de=e.videoOverlayColor,ce=e.getParallax,se=void 0===ce?function(){}:ce,ve=R
C&&window.matchMedia("(max-width: 768px)").matches&&(ve=C)
var be={marginTop:Q,marginRight:W,marginBottom:X,marginLeft:Z},pe={backgroundColor:j,border:F,borderColor:P,borderWidth:N,borderRadius:z,textAlign:S},ye={backgroundColor:"never"!==D?_:null},ue={},me={backgroundColor:de}
if(Object(d.useEffect)((function(){var e,t
if("video"===ae){var o={speed:1,imgSrc:oe?Object(m.a)(oe,{type:"image-wysiwyg",quality:85}):null,elementInViewport:a.current,videoSrc:te,videoLoop:le,videoPlayOnlyVisible:ie,videoLazyLoading:ge}
e=n.current
var l=r("JOgF")
t=l.jarallax,(0,l.jarallaxVideo)(),t(e,o),e.jarallax.video&&e.jarallax.video.on("started",(function(){var n=e.jarallax
n.$video&&(n.$video.style.visibility="visible")})),se(e,o)}return function(){e&&"video"===ae&&t(e,"destroy")}}),[ae,te,oe,le,ie,ge]),ve){var Oe=Object(m.a)(ve,{type:"image-wysiwyg",quality:85})
pe.backgroundImage="url(".concat(Oe,")"),pe.backgroundSize=T,pe.backgroundPosition=E,pe.backgroundAttachment=B,pe.backgroundRepeat=I?"repeat":"no-repeat"}"poster"===H?(pe.minHeight=L,ye.minHeight=L,ye.paddingTop=$,ye.paddingRight=G,ye.paddingBottom=U,ye.paddingLeft=ee,ue.width="100%"):(pe.minHeight=L,pe.paddingTop=$,pe.paddingRight=G,pe.paddingBottom=U,pe.paddingLeft=ee)
var he,fe={poster:o.posterOverlay,"collage-left":o.collageLeftOverlay,"collage-centered":o.collageCenteredOverlay,"collage-right":o.collageRightOverlay},we={poster:o.posterOverlayHover,"collage-left":o.collageLeftOverlayHover,"collage-centered":o.collageCenteredOverlayHover,"collage-right":o.collageRightOverlayHover}
if("never"!==A){var ke="hover"===A?o.buttonHover:o.button
he=c.a.createElement("div",{className:ke},c.a.createElement(y.a,{priority:{primary:"high",secondary:"normal",link:"low"}[J],type:"button"},Y))}var xe=de?c.a.createElement("div",{className:o.videoOverlay,style:me}):null,He="video"===ae?c.a.createElement("div",{ref:a,className:o.viewportElement}):null,Le="hover"!==D||p?fe[H]:we[H],je=c.a.createElement("div",{className:o.wrapper,style:pe,ref:n},xe,c.a.createElement("div",{className:Le,style:ye},c.a.createElement("div",{className:o.content,style:ue,dangerouslySetInnerHTML:h(V)}),he),He)
if("string"==typeof K){var Re=Object(u.a)(K),Ce=Re.to?O.b:"a"
je=c.a.createElement(Ce,l()({className:o.link},Re,q?{target:"_blank"}:"",{onDragStart:f}),je)}return c.a.createElement("div",{className:[o.root].concat(t()(re)).join(" "),style:be,onMouseEnter:k,onMouseLeave:k},je)}
w.propTypes={classes:Object(p.shape)({root:p.string,link:p.string,wrapper:p.string,overlay:p.string,content:p.string,button:p.string,buttonHover:p.string,posterOverlay:p.string,posterOverlayHover:p.string,collageLeftOverlay:p.string,collageLeftOverlayHover:p.string,collageCenteredOverlay:p.string,collageCenteredOverlayHover:p.string,collageRightOverlay:p.string,collageRightOverlayHover:p.string,videoOverlay:p.string,viewportElement:p.string}),appearance:Object(p.oneOf)(["poster","collage-left","collage-centered","collage-right"]),minHeight:p.string,backgroundColor:p.string,desktopImage:p.string,mobileImage:p.string,backgroundSize:p.string,backgroundPosition:p.string,backgroundAttachment:p.string,backgroundRepeat:p.bool,content:p.string,link:p.string,linkType:Object(p.oneOf)(["default","product","category","page"]),openInNewTab:p.bool,showButton:Object(p.oneOf)(["always","hover","never"]),buttonText:p.string,buttonType:Object(p.oneOf)(["primary","secondary","link"]),showOverlay:Object(p.oneOf)(["always","hover","never"]),overlayColor:p.string,textAlign:p.string,border:p.string,borderColor:p.string,borderWidth:p.string,borderRadius:p.string,marginTop:p.string,marginRight:p.string,marginBottom:p.string,marginLeft:p.string,paddingTop:p.string,paddingRight:p.string,paddingBottom:p.string,cssClasses:Object(p.arrayOf)(p.string),backgroundType:p.string,videoSrc:p.string,videoFallbackSrc:p.string,videoLoop:p.bool,videoPlayOnlyVisible:p.bool,videoLazyLoading:p.bool,videoOverlayColor:p.string,getParallax:p.func}
var k=w},"n+YS":function(e,n,r){var a=r("LboF"),t=r("Df3V")
"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[e.i,t,""]])
var o={insert:"head",singleton:!1}
a(t,o)
e.exports=t.locals||{}}}])
