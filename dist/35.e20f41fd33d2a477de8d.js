/*!
 * @version 6c13c21-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{D22O:function(e,a,t){"use strict"
t.r(a),t.d(a,"default",(function(){return b}))
var n=t("q1tI"),r=t.n(n),c=t("Ty5D"),u=t("C5kL"),l=t("3XR5"),p=t("zLHc"),o=t("o0o1"),s=t.n(o),i=t("yXPU"),h=t.n(i),m=t("IOPv"),f=t("jdQt"),y=function PaypalReturn(e){return function usePaypalReturn(){var e=Object(c.h)(),a=Object(c.g)(),t=Object(f.a)().submitPaypalPayment
Object(n.useEffect)((function(){(function(){var n=h()(s.a.mark((function _callee(){var n,r,c,u
return s.a.wrap((function _callee$(l){for(;;)switch(l.prev=l.next){case 0:return n=Object(m.a)("token",e),r=Object(m.a)("PayerID",e),l.next=4,t(n,r)
case 4:c=l.sent,u=c.error?{pathname:"/checkout",search:"?paypalError=true"}:{pathname:"/order-confirmation"},a.push(u)
case 7:case"end":return l.stop()}}),_callee)})))
return function submitPayment(){return n.apply(this,arguments)}})()()}),[])}(),r.a.createElement(p.a,null)},b=function PaypalRoutes(){var e=function usePaypalRoutes(){return{search:Object(c.h)().search}}().search
return r.a.createElement(c.d,null,r.a.createElement(c.b,{path:"/paypal/express/return"},r.a.createElement(y,null)),r.a.createElement(c.b,{path:"/paypal/express/cancel"},r.a.createElement(c.a,{to:{pathname:"/checkout",search:"".concat(e,"&paypalError=true")}})),r.a.createElement(c.b,{path:"/paypal"},r.a.createElement(u.a,{isMasked:!1},r.a.createElement(l.a,null))))}}}])
