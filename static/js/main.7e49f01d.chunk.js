(this.webpackJsonppwa=this.webpackJsonppwa||[]).push([[0],{19:function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},28:function(e,n,t){e.exports=t(37)},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(10),i=t.n(o),c=t(5),l=t(6),u=t(19),s=t.n(u),d=(t(33),t(14)),m=t(40),f=t(41),p=t(39),g=t(42),v=t(4),h=t.n(v),w=t(20),b=t.n(w),E=t(21),y=t.n(E),k=t(22),x=t.n(k);delete h.a.Icon.Default.prototype._getIconUrl,h.a.Icon.Default.mergeOptions({iconRetinaUrl:b.a,iconUrl:y.a,shadowUrl:x.a});var j=function(){var e=Object(a.useState)({popUpText:"Latitude: 1.2796562, Longitude: 103.8164022",center:[1.2796562,103.8164022]}),n=Object(d.a)(e,2),t=n[0],o=n[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",onClick:function(){navigator.geolocation.getCurrentPosition((function(e){o({popUpText:"Latitude: ".concat(e.coords.latitude,", Longitude: ").concat(e.coords.longitude),center:[e.coords.latitude,e.coords.longitude]})}),(function(e){return console.log(e.message)}),{enableHighAccuracy:!0,timeout:2e4,maximumAge:1e3})}},"Get My Location"),r.a.createElement("div",{"data-testid":"map"},r.a.createElement(m.a,{center:t.center,zoom:15,minZoom:15,maxZoom:15,zoomControl:!1},r.a.createElement(f.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),r.a.createElement(p.a,{position:t.center},r.a.createElement(g.a,null,t.popUpText)))))};function O(){var e=Object(c.a)(["\n  display: block;\n  font-size: 1rem;\n  font-weight: normal;\n  color: #888;\n  margin: 0.25rem 0 0 0;\n  ",":hover & {\n    background: white;\n  }\n"]);return O=function(){return e},e}function C(){var e=Object(c.a)(["\n  background: none;\n  border: none;\n  margin: 1rem;\n  height: 5rem;\n  width: 15rem;\n  font-size: 1.6rem;\n  max-width: 10rem;\n  font-weight: bold;\n  text-decoration: none;\n  display: block;\n  align-items: flex-start;\n  color: #333;\n  &:hover {\n    background: #ccc;\n    color: purple;\n    &:focus {\n      color: red;\n    }\n  }\n"]);return C=function(){return e},e}function I(){var e=Object(c.a)(["\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  list-style: none;\n"]);return I=function(){return e},e}var A=l.a.ul(I()),L=l.a.button(C()),S=l.a.span(O(),L),U=function(e){var n=e.menuItemList;return r.a.createElement(A,null,n.map((function(e){return r.a.createElement("li",{key:"".concat(e.name)},r.a.createElement(L,{onClick:function(){return e.onClick(e.name.toLowerCase())}},e.name,r.a.createElement(S,null,e.description)))})))};U.defaultProps={menuItemList:[]};var W=U,_=t(17),T=t.n(_),R=t(26);function z(){var e=Object(c.a)(["\n  // display: block;\n  // align-items: center;\n"]);return z=function(){return e},e}function B(){var e=Object(c.a)(["\n  // display: block;\n  // align-items: center;\n"]);return B=function(){return e},e}function N(){var e=Object(c.a)(["\n  // display: flex;\n"]);return N=function(){return e},e}function P(){var e=Object(c.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 60rem;\n"]);return P=function(){return e},e}function D(){var e=Object(c.a)(["\n  display: block;\n  align-items: center;\n"]);return D=function(){return e},e}var M=l.a.div(D()),F=l.a.div(P()),G=l.a.div(N()),J=l.a.video(B()),Z=l.a.button(z()),H=function(){var e;Object(a.useEffect)((function(){var n=navigator.mediaDevices.getUserMedia({video:!0}).then((function(e){return document.getElementById("video").srcObject=e,document.getElementById("video").play(),e})).catch((function(e){console.log(e)}));return(Object(R.a)(T.a.mark((function t(){return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:window.clearInterval(e),n.then((function(e){e.getTracks().forEach((function(e){e.stop()}))})).catch((function(e){console.log(e)}));case 2:case"end":return t.stop()}}),t)}))))}),[]);var n=function(n){var t=n.width,a=(n.height,n.maxNum),o=void 0===a?1:a;return{canvasArray:function(){for(var e=[],n=0;n<o;n+=1)e.push(r.a.createElement(G,{key:"canvas-".concat(n)},r.a.createElement("canvas",{id:"canvas-".concat(n),width:t/10,height:t/10})));return e}(),onSnap:function(){var n=0;e=window.setInterval((function(){var e;n!==o?(e=n,document.getElementById("canvas-".concat(e)).getContext("2d").drawImage(document.getElementById("video"),0,0,t/10,t/10),n+=1):window.clearInterval()}),200)}}}({width:512,height:512,maxNum:100});return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,null,n.canvasArray.map((function(e){return e}))),r.a.createElement(M,null,r.a.createElement(J,{"data-testid":"camera",id:"video",width:"128",height:"96",autoPlay:!0}),r.a.createElement(M,null,r.a.createElement(Z,{id:"snap",type:"button",onClick:n.onSnap},"Snap!"))))};function $(){var e=Object(c.a)(["\n  background: grey;\n  display: block;\n"]);return $=function(){return e},e}function q(){var e=Object(c.a)(["\n  background: red;\n"]);return q=function(){return e},e}var K=l.a.nav(q()),Q=l.a.div($()),V=function(){var e=Object(a.useState)("readme"),n=Object(d.a)(e,2),t=n[0],o=n[1],i=function(e){o(e)},c=[{onClick:i,name:"Readme",description:"Read this for browser support"},{onClick:i,name:"Geolocation",description:"Pinpoint your current location"},{onClick:i,name:"Camera",description:"Say Cheese! __________"},{onClick:i,name:"Notifications",description:"Triggers a push notification"}];return r.a.createElement("div",{"data-testid":"examples",className:"examples"},r.a.createElement(Q,null,"readme"===t&&"readme","geolocation"===t&&r.a.createElement("div",null,"geolocation",r.a.createElement(j,null)),"camera"===t&&r.a.createElement("div",null,"camera",r.a.createElement(H,null)),"notifications"===t&&"notifications"),r.a.createElement(K,null,r.a.createElement(W,{menuItemList:c})))};function X(){var e=Object(c.a)(["\n  height: 40vmin;\n  pointer-events: none;\n  @media (prefers-reduced-motion: no-preference) {\n    animation: App-logo-spin infinite 20s linear;\n  }\n  @keyframes App-logo-spin {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n"]);return X=function(){return e},e}function Y(){var e=Object(c.a)(["\n  text-align: center;\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  /* justify-content: center; */\n  font-size: calc(10px + 2vmin);\n  color: white;\n  .leaflet-container {\n    height: 30rem;\n    width: 100%;\n  }\n"]);return Y=function(){return e},e}var ee=l.a.div(Y()),ne=l.a.img(X()),te=function(){return r.a.createElement("div",null,r.a.createElement(ee,null,r.a.createElement("header",null,r.a.createElement("div",{"data-testid":"rotating-react-icon"},r.a.createElement(ne,{src:s.a,alt:"logo"})),r.a.createElement("p",null,"This project builds on top of Create-React-App to demonstrate how Web Apps can create native mobile experiences.")),r.a.createElement(V,null)))},ae=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function re(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),console.log("Attempting to unregister existing service worker, do refresh page if it doesn't work."),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(te,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");ae?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):re(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):re(n,e)}))}}()}},[[28,1,2]]]);
//# sourceMappingURL=main.7e49f01d.chunk.js.map