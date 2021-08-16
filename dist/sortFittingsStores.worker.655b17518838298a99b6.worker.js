/*!
 * @version 6c13c21-dev
 * 
 */
!function(t){var a={}
function __webpack_require__(n){if(a[n])return a[n].exports
var o=a[n]={i:n,l:!1,exports:{}},e=!0
try{t[n].call(o.exports,o,o.exports,__webpack_require__),e=!1}finally{e&&delete a[n]}return o.l=!0,o.exports}__webpack_require__.m=t,__webpack_require__.c=a,__webpack_require__.d=function(t,a,n){__webpack_require__.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:n})},__webpack_require__.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},__webpack_require__.t=function(t,a){if(1&a&&(t=__webpack_require__(t)),8&a)return t
if(4&a&&"object"==typeof t&&t&&t.__esModule)return t
var n=Object.create(null)
if(__webpack_require__.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var o in t)__webpack_require__.d(n,o,function(a){return t[a]}.bind(null,o))
return n},__webpack_require__.n=function(t){var a=t&&t.__esModule?function getDefault(){return t.default}:function getModuleExports(){return t}
return __webpack_require__.d(a,"a",a),a},__webpack_require__.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},__webpack_require__.p="/",__webpack_require__(__webpack_require__.s="2qRe")}({"1CWa":function(t,a,n){"use strict"
if(t.exports)var o=n("wiYu")
function LatLon(t,a){if(!(this instanceof LatLon))return new LatLon(t,a)
this.lat=Number(t),this.lon=Number(a)}LatLon.prototype.distanceTo=function(t,a){if(!(t instanceof LatLon))throw new TypeError("point is not LatLon object")
var n=a=void 0===a?6371e3:Number(a),o=this.lat.toRadians(),e=this.lon.toRadians(),r=t.lat.toRadians(),i=r-o,s=t.lon.toRadians()-e,h=Math.sin(i/2)*Math.sin(i/2)+Math.cos(o)*Math.cos(r)*Math.sin(s/2)*Math.sin(s/2)
return n*(2*Math.atan2(Math.sqrt(h),Math.sqrt(1-h)))},LatLon.prototype.bearingTo=function(t){if(!(t instanceof LatLon))throw new TypeError("point is not LatLon object")
var a=this.lat.toRadians(),n=t.lat.toRadians(),o=(t.lon-this.lon).toRadians(),e=Math.sin(o)*Math.cos(n),r=Math.cos(a)*Math.sin(n)-Math.sin(a)*Math.cos(n)*Math.cos(o)
return(Math.atan2(e,r).toDegrees()+360)%360},LatLon.prototype.finalBearingTo=function(t){if(!(t instanceof LatLon))throw new TypeError("point is not LatLon object")
return(t.bearingTo(this)+180)%360},LatLon.prototype.midpointTo=function(t){if(!(t instanceof LatLon))throw new TypeError("point is not LatLon object")
var a=this.lat.toRadians(),n=this.lon.toRadians(),o=t.lat.toRadians(),e=(t.lon-this.lon).toRadians(),r=Math.cos(o)*Math.cos(e),i=Math.cos(o)*Math.sin(e),s=Math.sqrt((Math.cos(a)+r)*(Math.cos(a)+r)+i*i),h=Math.sin(a)+Math.sin(o),M=Math.atan2(h,s),c=n+Math.atan2(i,Math.cos(a)+r)
return new LatLon(M.toDegrees(),(c.toDegrees()+540)%360-180)},LatLon.prototype.intermediatePointTo=function(t,a){if(!(t instanceof LatLon))throw new TypeError("point is not LatLon object")
var n=this.lat.toRadians(),o=this.lon.toRadians(),e=t.lat.toRadians(),r=t.lon.toRadians(),i=Math.sin(n),s=Math.cos(n),h=Math.sin(o),M=Math.cos(o),c=Math.sin(e),u=Math.cos(e),l=Math.sin(r),p=Math.cos(r),d=e-n,L=r-o,f=Math.sin(d/2)*Math.sin(d/2)+Math.cos(n)*Math.cos(e)*Math.sin(L/2)*Math.sin(L/2),b=2*Math.atan2(Math.sqrt(f),Math.sqrt(1-f)),_=Math.sin((1-a)*b)/Math.sin(b),g=Math.sin(a*b)/Math.sin(b),w=_*s*M+g*u*p,v=_*s*h+g*u*l,R=_*i+g*c,m=Math.atan2(R,Math.sqrt(w*w+v*v)),y=Math.atan2(v,w)
return new LatLon(m.toDegrees(),(y.toDegrees()+540)%360-180)},LatLon.prototype.destinationPoint=function(t,a,n){n=void 0===n?6371e3:n
var o=Number(t)/Number(n),e=Number(a).toRadians(),r=this.lat.toRadians(),i=this.lon.toRadians(),s=Math.sin(r),h=Math.cos(r),M=Math.sin(o),c=Math.cos(o),u=Math.sin(e),l=s*c+h*M*Math.cos(e),p=Math.asin(l),d=u*M*h,L=c-s*l,f=i+Math.atan2(d,L)
return new LatLon(p.toDegrees(),(f.toDegrees()+540)%360-180)},LatLon.intersection=function(t,a,n,o){if(!(t instanceof LatLon))throw new TypeError("p1 is not LatLon object")
if(!(n instanceof LatLon))throw new TypeError("p2 is not LatLon object")
var e=t.lat.toRadians(),r=t.lon.toRadians(),i=n.lat.toRadians(),s=n.lon.toRadians(),h=Number(a).toRadians(),M=Number(o).toRadians(),c=i-e,u=s-r,l=2*Math.asin(Math.sqrt(Math.sin(c/2)*Math.sin(c/2)+Math.cos(e)*Math.cos(i)*Math.sin(u/2)*Math.sin(u/2)))
if(0==l)return null
var p=Math.acos((Math.sin(i)-Math.sin(e)*Math.cos(l))/(Math.sin(l)*Math.cos(e)))
isNaN(p)&&(p=0)
var d=Math.acos((Math.sin(e)-Math.sin(i)*Math.cos(l))/(Math.sin(l)*Math.cos(i))),L=h-(Math.sin(s-r)>0?p:2*Math.PI-p),f=(Math.sin(s-r)>0?2*Math.PI-d:d)-M
if(0==Math.sin(L)&&0==Math.sin(f))return null
if(Math.sin(L)*Math.sin(f)<0)return null
var b=-Math.cos(L)*Math.cos(f)+Math.sin(L)*Math.sin(f)*Math.cos(l),_=Math.atan2(Math.sin(l)*Math.sin(L)*Math.sin(f),Math.cos(f)+Math.cos(L)*b),g=Math.asin(Math.sin(e)*Math.cos(_)+Math.cos(e)*Math.sin(_)*Math.cos(h)),w=r+Math.atan2(Math.sin(h)*Math.sin(_)*Math.cos(e),Math.cos(_)-Math.sin(e)*Math.sin(g))
return new LatLon(g.toDegrees(),(w.toDegrees()+540)%360-180)},LatLon.prototype.crossTrackDistanceTo=function(t,a,n){if(!(t instanceof LatLon))throw new TypeError("‘pathStart’ is not LatLon object")
if(!(a instanceof LatLon))throw new TypeError("‘pathEnd’ is not LatLon object")
var o=void 0===n?6371e3:Number(n),e=t.distanceTo(this,o)/o,r=t.bearingTo(this).toRadians(),i=t.bearingTo(a).toRadians()
return Math.asin(Math.sin(e)*Math.sin(r-i))*o},LatLon.prototype.alongTrackDistanceTo=function(t,a,n){if(!(t instanceof LatLon))throw new TypeError("‘pathStart’ is not LatLon object")
if(!(a instanceof LatLon))throw new TypeError("‘pathEnd’ is not LatLon object")
var o=void 0===n?6371e3:n,e=t.distanceTo(this,o)/o,r=t.bearingTo(this).toRadians(),i=t.bearingTo(a).toRadians(),s=Math.asin(Math.sin(e)*Math.sin(r-i))
return Math.acos(Math.cos(e)/Math.abs(Math.cos(s)))*Math.sign(Math.cos(i-r))*o},LatLon.prototype.maxLatitude=function(t){var a=Number(t).toRadians(),n=this.lat.toRadians()
return Math.acos(Math.abs(Math.sin(a)*Math.cos(n))).toDegrees()},LatLon.crossingParallels=function(t,a,n){var o=Number(n).toRadians(),e=t.lat.toRadians(),r=t.lon.toRadians(),i=a.lat.toRadians(),s=a.lon.toRadians()-r,h=Math.sin(e)*Math.cos(i)*Math.cos(o)*Math.sin(s),M=Math.sin(e)*Math.cos(i)*Math.cos(o)*Math.cos(s)-Math.cos(e)*Math.sin(i)*Math.cos(o),c=Math.cos(e)*Math.cos(i)*Math.sin(o)*Math.sin(s)
if(c*c>h*h+M*M)return null
var u=Math.atan2(-M,h),l=Math.acos(c/Math.sqrt(h*h+M*M)),p=r+u+l
return{lon1:((r+u-l).toDegrees()+540)%360-180,lon2:(p.toDegrees()+540)%360-180}},LatLon.prototype.rhumbDistanceTo=function(t,a){if(!(t instanceof LatLon))throw new TypeError("point is not LatLon object")
var n=a=void 0===a?6371e3:Number(a),o=this.lat.toRadians(),e=t.lat.toRadians(),r=e-o,i=Math.abs(t.lon-this.lon).toRadians()
i>Math.PI&&(i-=2*Math.PI)
var s=Math.log(Math.tan(e/2+Math.PI/4)/Math.tan(o/2+Math.PI/4)),h=Math.abs(s)>1e-11?r/s:Math.cos(o)
return Math.sqrt(r*r+h*h*i*i)*n},LatLon.prototype.rhumbBearingTo=function(t){if(!(t instanceof LatLon))throw new TypeError("point is not LatLon object")
var a=this.lat.toRadians(),n=t.lat.toRadians(),o=(t.lon-this.lon).toRadians()
o>Math.PI&&(o-=2*Math.PI),o<-Math.PI&&(o+=2*Math.PI)
var e=Math.log(Math.tan(n/2+Math.PI/4)/Math.tan(a/2+Math.PI/4))
return(Math.atan2(o,e).toDegrees()+360)%360},LatLon.prototype.rhumbDestinationPoint=function(t,a,n){n=void 0===n?6371e3:n
var o=this.lat.toRadians(),e=this.lon.toRadians(),r=Number(a).toRadians(),i=t/n,s=i*Math.cos(r),h=o+s
Math.abs(h)>Math.PI/2&&(h=h>0?Math.PI-h:-Math.PI-h)
var M=Math.log(Math.tan(h/2+Math.PI/4)/Math.tan(o/2+Math.PI/4)),c=Math.abs(M)>1e-11?s/M:Math.cos(o),u=e+i*Math.sin(r)/c
return new LatLon(h.toDegrees(),(u.toDegrees()+540)%360-180)},LatLon.prototype.rhumbMidpointTo=function(t){if(!(t instanceof LatLon))throw new TypeError("point is not LatLon object")
var a=this.lat.toRadians(),n=this.lon.toRadians(),o=t.lat.toRadians(),e=t.lon.toRadians()
Math.abs(e-n)>Math.PI&&(n+=2*Math.PI)
var r=(a+o)/2,i=Math.tan(Math.PI/4+a/2),s=Math.tan(Math.PI/4+o/2),h=Math.tan(Math.PI/4+r/2),M=((e-n)*Math.log(h)+n*Math.log(s)-e*Math.log(i))/Math.log(s/i)
return isFinite(M)||(M=(n+e)/2),LatLon(r.toDegrees(),(M.toDegrees()+540)%360-180)},LatLon.areaOf=function(t,a){var n=void 0===a?6371e3:Number(a),o=t[0].equals(t[t.length-1])
o||t.push(t[0])
for(var e=t.length-1,r=0,i=0;i<e;i++){var s=t[i].lat.toRadians(),h=t[i+1].lat.toRadians(),M=(t[i+1].lon-t[i].lon).toRadians()
r+=2*Math.atan2(Math.tan(M/2)*(Math.tan(s/2)+Math.tan(h/2)),1+Math.tan(s/2)*Math.tan(h/2))}(function isPoleEnclosedBy(t){for(var a=0,n=t[0].bearingTo(t[1]),o=0;o<t.length-1;o++){var e=t[o].bearingTo(t[o+1]),r=t[o].finalBearingTo(t[o+1])
a+=(e-n+540)%360-180,a+=(r-e+540)%360-180,n=r}e=t[0].bearingTo(t[1])
return a+=(e-n+540)%360-180,Math.abs(a)<90})(t)&&(r=Math.abs(r)-2*Math.PI)
var c=Math.abs(r*n*n)
return o||t.pop(),c},LatLon.prototype.equals=function(t){if(!(t instanceof LatLon))throw new TypeError("point is not LatLon object")
return this.lat==t.lat&&this.lon==t.lon},LatLon.prototype.toString=function(t,a){return o.toLat(this.lat,t,a)+", "+o.toLon(this.lon,t,a)},void 0===Number.prototype.toRadians&&(Number.prototype.toRadians=function(){return this*Math.PI/180}),void 0===Number.prototype.toDegrees&&(Number.prototype.toDegrees=function(){return 180*this/Math.PI}),t.exports&&(t.exports=LatLon)},"2qRe":function(t,a,n){"use strict"
n.r(a)
var o=n("1CWa"),e=n.n(o)
onmessage=t=>{const{data:a}=t,{fittingsStores:n,userLocationGeo:o}=a,r=new e.a(o.lat,o.lng),i=[...n].sort((t,a)=>r.distanceTo(new e.a(Number(t.latitude),Number(t.longitude)))-r.distanceTo(new e.a(Number(a.latitude),Number(a.longitude))))
postMessage({sortedFittingStores:i})}},wiYu:function(t,a,n){"use strict"
var o={parseDMS:function(t){if("number"==typeof t&&isFinite(t))return Number(t)
var a,n=String(t).trim().replace(/^-/,"").replace(/[NSEW]$/i,"").split(/[^0-9.,]+/)
if(""==n[n.length-1]&&n.splice(n.length-1),""==n)return NaN
switch(n.length){case 3:a=n[0]/1+n[1]/60+n[2]/3600
break
case 2:a=n[0]/1+n[1]/60
break
case 1:a=n[0]
break
default:return NaN}return/^-|[WS]$/i.test(t.trim())&&(a=-a),Number(a)},separator:"",toDMS:function(t,a,n){if(isNaN(t))return null
if(void 0===a&&(a="dms"),void 0===n)switch(a){case"d":case"deg":n=4
break
case"dm":case"deg+min":n=2
break
case"dms":case"deg+min+sec":n=0
break
default:a="dms",n=0}var e,r,i,s
switch(t=Math.abs(t),a){default:case"d":case"deg":(r=t.toFixed(n))<100&&(r="0"+r),r<10&&(r="0"+r),e=r+"°"
break
case"dm":case"deg+min":r=Math.floor(t),60==(i=(60*t%60).toFixed(n))&&(i=0,r++),i<10&&(i="0"+i),e=(r=("000"+r).slice(-3))+"°"+o.separator+i+"′"
break
case"dms":case"deg+min+sec":r=Math.floor(t),i=Math.floor(3600*t/60)%60,60==(s=(3600*t%60).toFixed(n))&&(s=(0).toFixed(n),i++),60==i&&(i=0,r++),r=("000"+r).slice(-3),i=("00"+i).slice(-2),s<10&&(s="0"+s),e=r+"°"+o.separator+i+"′"+o.separator+s+"″"}return e},toLat:function(t,a,n){var e=o.toDMS(t,a,n)
return null===e?"–":e.slice(1)+o.separator+(t<0?"S":"N")},toLon:function(t,a,n){var e=o.toDMS(t,a,n)
return null===e?"–":e+o.separator+(t<0?"W":"E")},toBrng:function(t,a,n){t=(Number(t)+360)%360
var e=o.toDMS(t,a,n)
return null===e?"–":e.replace("360","0")},compassPoint:function(t,a){void 0===a&&(a=3),t=(t%360+360)%360
var n=4*Math.pow(2,a-1)
return["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"][Math.round(t*n/360)%n*16/n]}}
t.exports&&(t.exports=o)}})
