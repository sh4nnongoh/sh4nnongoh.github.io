(this.webpackJsonppwa=this.webpackJsonppwa||[]).push([[0],{118:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},141:function(e,t,n){e.exports=n(285)},146:function(e,t,n){},147:function(e,t,n){},150:function(e,t,n){},285:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(25),i=n.n(r),c=(n(146),n(118)),l=n.n(c),s=(n(147),n(148),n(149),n(60)),u=n(293),d=n(295),m=n(294),p=n(296),g=n(291),f=n(297),v=n(292),h=n(17),w=n.n(h),E=(n(150),n(119)),b=n.n(E),k=n(120),y=n.n(k),A=n(121),x=n.n(A);delete w.a.Icon.Default.prototype._getIconUrl,w.a.Icon.Default.mergeOptions({iconRetinaUrl:b.a,iconUrl:y.a,shadowUrl:x.a});var W=function(){var e=Object(a.useState)({popUpText:"Latitude: 1.2796562, Longitude: 103.8164022",center:[1.2796562,103.8164022]}),t=Object(s.a)(e,2),n=t[0],r=t[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(v.a,{onClick:function(){navigator.geolocation.getCurrentPosition((function(e){console.log(e),r({popUpText:"Latitude: ".concat(e.coords.latitude,", Longitude: ").concat(e.coords.longitude),center:[e.coords.latitude,e.coords.longitude]})}),(function(e){return console.log(e.message)}),{enableHighAccuracy:!0,timeout:2e4,maximumAge:1e3})}},"Get My Location"),o.a.createElement("div",{"data-testid":"map"},o.a.createElement(m.a,{center:n.center,zoom:15},o.a.createElement(p.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),o.a.createElement(g.a,{position:n.center},o.a.createElement(f.a,null,n.popUpText)))))},C=function(){var e=Object(a.useState)("readme"),t=Object(s.a)(e,2),n=t[0],r=t[1],i=function(e,t){var n=t.name;r(n)};return o.a.createElement("div",null,o.a.createElement(u.a,{"data-testid":"examples",attached:"top",tabular:!0},o.a.createElement(u.a.Item,{name:"readme",active:"readme"===n,onClick:i}),o.a.createElement(u.a.Item,{name:"geolocation",active:"geolocation"===n,onClick:i}),o.a.createElement(u.a.Item,{name:"camera",active:"camera"===n,onClick:i}),o.a.createElement(u.a.Item,{name:"notifications",active:"notifications"===n,onClick:i})),o.a.createElement(d.a,{attached:"bottom"},"readme"===n&&"readme","geolocation"===n&&o.a.createElement("div",null,"geolocation",o.a.createElement(W,null)),"camera"===n&&"camera","notifications"===n&&"notifications"))};var U=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("div",{"data-testid":"rotating-react-icon"},o.a.createElement("img",{src:l.a,className:"App-logo",alt:"logo"})),o.a.createElement("p",null,"This project builds on top of Create-React-App to demonstrate how Web Apps can create native mobile experiences.")),o.a.createElement(C,null))},I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),console.log("Attempting to unregister existing service worker, do refresh page if it doesn't work."),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(U,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");I?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):j(t,e)}))}}()}},[[141,1,2]]]);
//# sourceMappingURL=main.7fa5ffe5.chunk.js.map