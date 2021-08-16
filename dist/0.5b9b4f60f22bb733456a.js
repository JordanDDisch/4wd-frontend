/*!
 * @version 6c13c21-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{aNnB:function(e,t,r){"use strict"
var n={}
r.r(n),r.d(n,"addTrackers",(function(){return addTrackers})),r.d(n,"initialize",(function(){return initialize})),r.d(n,"ga",(function(){return ga})),r.d(n,"set",(function(){return set})),r.d(n,"send",(function(){return send})),r.d(n,"pageview",(function(){return pageview})),r.d(n,"modalview",(function(){return modalview})),r.d(n,"timing",(function(){return timing})),r.d(n,"event",(function(){return core_event})),r.d(n,"exception",(function(){return exception})),r.d(n,"plugin",(function(){return h})),r.d(n,"outboundLink",(function(){return outboundLink})),r.d(n,"testModeAPI",(function(){return _})),r.d(n,"default",(function(){return w}))
var o=r("q1tI"),i=r.n(o),a=r("17x9"),c=r.n(a)
function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ownKeys(e,t){var r=Object.keys(e)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e)
t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{}
t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _objectWithoutProperties(e,t){if(null==e)return{}
var r,n,o=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{}
var r,n,o={},i=Object.keys(e)
for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r])
return o}(e,t)
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function _createSuperInternal(){var r,n=_getPrototypeOf(e)
if(t){var o=_getPrototypeOf(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return _possibleConstructorReturn(this,r)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=function(e){!function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(OutboundLink,e)
var t=_createSuper(OutboundLink)
function OutboundLink(){var e
_classCallCheck(this,OutboundLink)
for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o]
return _defineProperty(_assertThisInitialized(e=t.call.apply(t,[this].concat(n))),"handleClick",(function(t){var r=e.props,n=r.target,o=r.eventLabel,i=r.to,a=r.onClick,c=r.trackerNames,u={label:o},f="_blank"!==n,l=!(t.ctrlKey||t.shiftKey||t.metaKey||1===t.button)
f&&l?(t.preventDefault(),OutboundLink.trackLink(u,(function(){window.location.href=i}),c)):OutboundLink.trackLink(u,(function(){}),c),a&&a(t)})),e}return function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(OutboundLink,[{key:"render",value:function render(){var e=this.props,t=e.to,r=e.target,n=_objectSpread(_objectSpread({},_objectWithoutProperties(e,["to","target"])),{},{target:r,href:t,onClick:this.handleClick})
return"_blank"===r&&(n.rel="".concat(n.rel?n.rel:""," noopener noreferrer").trim()),delete n.eventLabel,delete n.trackerNames,i.a.createElement("a",n)}}]),OutboundLink}(o.Component)
_defineProperty(u,"trackLink",(function(){})),u.propTypes={eventLabel:c.a.string.isRequired,target:c.a.string,to:c.a.string,onClick:c.a.func,trackerNames:c.a.arrayOf(c.a.string)},u.defaultProps={target:null,to:null,onClick:null,trackerNames:null}
function redactEmail(e){return function mightBeEmail(e){return"string"==typeof e&&-1!==e.indexOf("@")}(e)?"REDACTED (Potential Email Address)":e}function trim(e){return e&&e.toString().replace(/^\s+|\s+$/g,"")}var f=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i
function toTitleCase(e){return trim(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,(function(e,t,r){return t>0&&t+e.length!==r.length&&e.search(f)>-1&&":"!==r.charAt(t-2)&&("-"!==r.charAt(t+e.length)||"-"===r.charAt(t-1))&&r.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)}))}var l=!1
var s=[],p={calls:s,ga:function ga(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
s.push([].concat(t))},resetCalls:function resetCalls(){s.length=0}}
function core_objectWithoutProperties(e,t){if(null==e)return{}
var r,n,o=function core_objectWithoutPropertiesLoose(e,t){if(null==e)return{}
var r,n,o={},i=Object.keys(e)
for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r])
return o}(e,t)
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function core_ownKeys(e,t){var r=Object.keys(e)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e)
t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function core_defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function core_typeof(e){return(core_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _toConsumableArray(e){return function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}(e)||function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function _unsupportedIterableToArray(e,t){if(!e)return
if("string"==typeof e)return _arrayLikeToArray(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(e,t)}(e)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}var y="undefined"==typeof window||"undefined"==typeof document,b=!1,d=!0,g=!1,m=!0,v=!0,O=function internalGa(){var e
return g?p.ga.apply(p,arguments):!y&&(window.ga?(e=window).ga.apply(e,arguments):void 0)}
function _format(e){return function format(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=e||""
return t&&(n=toTitleCase(e)),r&&(n=redactEmail(n)),n}(e,d,v)}function _gaCommand(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n]
var o=r[0]
"string"==typeof o&&(!m&&Array.isArray(e)||O.apply(void 0,r),Array.isArray(e)&&e.forEach((function(e){O.apply(void 0,_toConsumableArray(["".concat(e,".").concat(o)].concat(r.slice(1))))})))}function _initialize(e,t){e&&(t&&(t.debug&&!0===t.debug&&(b=!0),!1===t.titleCase&&(d=!1),!1===t.redactEmail&&(v=!1),t.useExistingGa)||(t&&t.gaOptions?O("create",e,t.gaOptions):O("create",e,"auto")))}function addTrackers(e,t){return Array.isArray(e)?e.forEach((function(e){"object"===core_typeof(e)&&_initialize(e.trackingId,e)})):_initialize(e,t),!0}function initialize(e,t){if(t&&!0===t.testMode)g=!0
else{if(y)return
t&&!0===t.standardImplementation||function(e){if(!l){l=!0
var t="https://www.google-analytics.com/analytics.js"
e&&e.gaAddress?t=e.gaAddress:e&&e.debug&&(t="https://www.google-analytics.com/analytics_debug.js")
var r,n,o,i,a,c,u,f=e&&e.onerror
r=window,n=document,o="script",i=t,a="ga",r.GoogleAnalyticsObject=a,r.ga=r.ga||function(){(r.ga.q=r.ga.q||[]).push(arguments)},r.ga.l=1*new Date,c=n.createElement(o),u=n.getElementsByTagName(o)[0],c.async=1,c.src=i,c.onerror=f,u.parentNode.insertBefore(c,u)}}(t)}m=!t||"boolean"!=typeof t.alwaysSendToDefaultTracker||t.alwaysSendToDefaultTracker,addTrackers(e,t)}function ga(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
return t.length>0&&(O.apply(void 0,t),b&&"with arguments: ".concat(JSON.stringify(t))),window.ga}function set(e,t){e&&"object"===core_typeof(e)&&(Object.keys(e).length,_gaCommand(t,"set",e),b&&"with fieldsObject: ".concat(JSON.stringify(e)))}function send(e,t){_gaCommand(t,"send",e),b&&("with fieldObject: ".concat(JSON.stringify(e)),"with trackers: ".concat(JSON.stringify(t)))}function pageview(e,t,r){if(e){var n=trim(e)
if(""!==n){var o={}
if(r&&(o.title=r),_gaCommand(t,"send",function core_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{}
t%2?core_ownKeys(Object(r),!0).forEach((function(t){core_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):core_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({hitType:"pageview",page:n},o)),b){var i=""
r&&(i=" and title: ".concat(r)),"with path: ".concat(n).concat(i)}}}}function modalview(e,t){if(e){var r=function removeLeadingSlash(e){return"/"===e.substring(0,1)?e.substring(1):e}(trim(e))
if(""!==r){var n="/modal/".concat(r)
_gaCommand(t,"send","pageview",n),b&&"with path: ".concat(n)}}}function timing(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,r=e.variable,n=e.value,o=e.label,i=arguments.length>1?arguments[1]:void 0
if(t&&r&&"number"==typeof n){var a={hitType:"timing",timingCategory:_format(t),timingVar:_format(r),timingValue:n}
o&&(a.timingLabel=_format(o)),send(a,i)}}function core_event(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,r=e.action,n=e.label,o=e.value,i=e.nonInteraction,a=e.transport,c=core_objectWithoutProperties(e,["category","action","label","value","nonInteraction","transport"]),u=arguments.length>1?arguments[1]:void 0
if(t&&r){var f={hitType:"event",eventCategory:_format(t),eventAction:_format(r)}
n&&(f.eventLabel=_format(n)),void 0!==o&&("number"!=typeof o||(f.eventValue=o)),void 0!==i&&("boolean"!=typeof i||(f.nonInteraction=i)),void 0!==a&&("string"!=typeof a||(["beacon","xhr","image"].indexOf(a),f.transport=a)),Object.keys(c).filter((function(e){return"dimension"===e.substr(0,"dimension".length)})).forEach((function(e){f[e]=c[e]})),Object.keys(c).filter((function(e){return"metric"===e.substr(0,"metric".length)})).forEach((function(e){f[e]=c[e]})),send(f,u)}}function exception(e,t){var r=e.description,n=e.fatal,o={hitType:"exception"}
r&&(o.exDescription=_format(r)),void 0!==n&&("boolean"!=typeof n||(o.exFatal=n)),send(o,t)}var h={require:function require(e,t,r){if(e){var n=trim(e)
if(""!==n){var o=r?"".concat(r,".require"):"require"
if(t){if("object"!==core_typeof(t))return
Object.keys(t).length,ga(o,n,t),b&&"called ga('require', '".concat(n,"', ").concat(JSON.stringify(t))}else ga(o,n),b&&"called ga('require', '".concat(n,"');")}}},execute:function execute(e,t){for(var r,n,o=arguments.length,i=new Array(o>2?o-2:0),a=2;a<o;a++)i[a-2]=arguments[a]
if(1===i.length?r=i[0]:(n=i[0],r=i[1]),"string"!=typeof e);else if("string"!=typeof t);else{var c="".concat(e,":").concat(t)
r=r||null,n&&r?(ga(c,n,r),b&&("called ga('".concat(c,"');"),'actionType: "'.concat(n,'" with payload: ').concat(JSON.stringify(r)))):r?(ga(c,r),b&&("called ga('".concat(c,"');"),"with payload: ".concat(JSON.stringify(r)))):(ga(c),b&&"called ga('".concat(c,"');"))}}}
function outboundLink(e,t,r){if("function"==typeof t&&e&&e.label){var n={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:_format(e.label)},o=!1,i=setTimeout((function safetyCallback(){o=!0,t()}),250)
n.hitCallback=function clearableCallbackForGA(){clearTimeout(i),o||t()},send(n,r)}}var _=p,w={initialize,ga,set,send,pageview,modalview,timing,event:core_event,exception,plugin:h,outboundLink,testModeAPI:p}
function esm_ownKeys(e,t){var r=Object.keys(e)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e)
t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function esm_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{}
t%2?esm_ownKeys(Object(r),!0).forEach((function(t){esm_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):esm_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function esm_defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}u.origTrackLink=u.trackLink,u.trackLink=outboundLink
var j=u,k=esm_objectSpread(esm_objectSpread({},n),{},{OutboundLink:j}),P=r("Ty5D")
t.a=function UserAnalytics(e){var t=e.title,r=e.children,n=Object(P.h)()
return Object(o.useEffect)((function(){n&&t&&(k.set({page:n.pathname,title:t}),k.pageview(n.pathname))}),[n,t]),r||null}}}])
