(this.webpackJsonpwestmarches=this.webpackJsonpwestmarches||[]).push([[0],{43:function(n,e,t){n.exports=t(71)},48:function(n,e,t){},71:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(34),i=t.n(o),l=(t(48),t(19)),c=t.n(l),u=t(35),p=t(17),s=t(23),d=t(41),f=t(20),g=t.n(f),h=t(15),x=t(8),b=t(1),v=t(2),m=t(36);function w(){var n=Object(b.a)(["\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 10px;\n  font-weight: bold;\n\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 36px;\n  width: 36px;\n  text-align: right;\n  padding: 2px;\n  border-radius: 0 4px 0 0;\n\n  &.low {\n    background: linear-gradient(45deg, transparent 36px, palegreen 0) bottom\n      left;\n  }\n\n  &.medium {\n    background: linear-gradient(45deg, transparent 36px, khaki 0) bottom left;\n  }\n\n  &.high {\n    background: linear-gradient(45deg, transparent 36px, lightcoral 0) bottom\n      left;\n    color: white;\n  }\n"]);return w=function(){return n},n}function y(){var n=Object(b.a)(["\n  &.__react_component_tooltip.type-light {\n    background: #eee;\n    padding: 0;\n    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n      0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n\n    border-radius: 4px;\n\n    &.place-top::after {\n      display: none;\n    }\n  }\n"]);return y=function(){return n},n}function E(){var n=Object(b.a)(["\n  margin: 0;\n  text-transform: uppercase;\n  font-weight: bold;\n"]);return E=function(){return n},n}function O(){var n=Object(b.a)(["\n  margin: 0;\n  font-size: 10px;\n  color: rgba(0, 0, 0, 0.87);\n"]);return O=function(){return n},n}function j(){var n=Object(b.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  font-size: 10px;\n  line-height: 18px;\n  padding: 0 8px;\n\n  background: #ddd;\n  border-radius: 0 0 4px 4px;\n"]);return j=function(){return n},n}function k(){var n=Object(b.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return k=function(){return n},n}function T(){var n=Object(b.a)(["\n  margin: 0;\n  max-width: 300px;\n  overflow: hidden;\n"]);return T=function(){return n},n}function z(){var n=Object(b.a)(["\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.87);\n  white-space: normal;\n  margin: 8px;\n"]);return z=function(){return n},n}function M(){var n=Object(b.a)(["\n  font-size: 16px;\n  color: black;\n  margin: 8px;\n  margin-right: 28px;\n"]);return M=function(){return n},n}var U=v.a.h2(M()),I=v.a.p(z()),A=v.a.section(T()),C=(v.a.header(k()),v.a.footer(j())),L=v.a.p(O()),N=v.a.p(E()),S=Object(v.a)(m.a)(y()),W=v.a.aside(w());function B(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return n>3?"high":n>1?"medium":"low"}var R=function(n){var e=n.hovered;return a.a.createElement(S,{type:"light"},a.a.createElement(A,null,"TRUE"===e.fogOfWar?a.a.createElement(I,null,"Uncharted territory. Explore at your own risk."):a.a.createElement(a.a.Fragment,null,a.a.createElement(U,null,e.title),e.description.split("\\n").map((function(n){return a.a.createElement(I,{key:n.substring(0,20)},n)}))),(null===e||void 0===e?void 0:e.hexLevel)>0&&"TRUE"!==e.fogOfWar&&a.a.createElement(W,{className:B(e.hexLevel)},e.hexLevel),(e.location||e.terrainType)&&a.a.createElement(C,null,e.terrainType&&a.a.createElement(N,null,"-"===e.terrainType||"TRUE"===e.fogOfWar?"Unknown":e.terrainType),e.location&&a.a.createElement(L,null,e.location[0],", ",e.location[1]))))},P=t(16),D=t.n(P);function J(){var n=Object(b.a)(["\n  margin-left: ","px;\n  margin-bottom: ","px;\n  float: left;\n  margin-top: ","px;\n  width: ","px;\n  height: ","px;\n  background-color: ",';\n  position: relative;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),\n    0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  transition: transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out;\n\n  &.hidden {\n    visibility: hidden;\n  }\n\n  &:hover {\n    z-index: 10;\n    transform: scale(1.4);\n    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),\n      0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);\n  }\n\n  &::before {\n    content: "";\n    width: 0;\n    height: 0;\n    border-bottom: ',"px solid ",";\n    border-left: ","px solid transparent;\n    border-right: ","px solid transparent;\n    position: absolute;\n    top: -",'px;\n  }\n\n  &::after {\n    content: "";\n    width: 0;\n    position: absolute;\n    bottom: -',"px;\n    border-top: ","px solid ",";\n    border-left: ","px solid transparent;\n    border-right: ","px solid transparent;\n  }\n"]);return J=function(){return n},n}function K(){var n=Object(b.a)(["\n  clear: left;\n\n  &.hidden {\n    visibility: hidden;\n  }\n\n  &.odd {\n    margin-left: ","px;\n  }\n"]);return K=function(){return n},n}function _(){var n=Object(b.a)(["\n  width: ","px;\n  transform: perspective(900px) rotateX(60deg) translateY(200px);\n"]);return _=function(){return n},n}var F=v.a.div(_(),580),$=v.a.div(K(),13.75),q=v.a.div(J(),1.5,1.5,7.5,26,15,(function(n){return n.color}),7.5,(function(n){return n.color}),13,13,7.5,7.5,7.5,(function(n){return n.color}),13,13);var G=function(n){var e=n.hexData,t=n.onMouseOver,r=n.onMouseOut,o=n.terrainMapping;return a.a.createElement(F,null,e.map((function(n,e){return a.a.createElement($,{key:e,className:D()({odd:e%2===1})},n.map((function(n,i){var l;return a.a.createElement(q,{key:"".concat(e,"-").concat(i),"data-tip":"React-tooltip","data-row":e,"data-col":i,color:"TRUE"===(null===n||void 0===n?void 0:n.fogOfWar)?"slategray":"-"!==(null===n||void 0===n?void 0:n.color)?n.color:"-"!==(null===n||void 0===n?void 0:n.terrainType)?null===(l=o[n.terrainType])||void 0===l?void 0:l.color:"transparent",onMouseOver:t,onMouseOut:r,className:D()({hidden:!(null===n||void 0===n?void 0:n.title)})})})))})),a.a.createElement($,{odd:!0},Array(20).fill({}).map((function(n,e){return a.a.createElement(q,{key:"bottom-".concat(e),"data-tip":"React-tooltip",color:"#383838",className:D()({hidden:10!==e})})}))))};function H(){var n=Object(b.a)(["\n  display: flex;\n  justify-content: center;\n  text-decoration: none;\n  text-align: center;\n  min-width: 80px;\n  text-transform: uppercase;\n  font-weight: bold;\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 14px;\n  line-height: 50px;\n  height: 50px;\n\n  padding: 0 10px;\n\n  &.active {\n    color: rgba(0, 0, 0, 0.87);\n  }\n\n  &:hover {\n    background: rgba(0, 0, 0, 0.1);\n    color: rgba(0, 0, 0, 0.87);\n  }\n"]);return H=function(){return n},n}function X(){var n=Object(b.a)(["\n  flex: 1 0 auto;\n  padding: 0 10px;\n"]);return X=function(){return n},n}function Y(){var n=Object(b.a)(["\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),\n    0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  display: flex;\n  height: 50px;\n  background: #eee;\n"]);return Y=function(){return n},n}function Q(){var n=Object(b.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n"]);return Q=function(){return n},n}var V=v.a.nav(Q()),Z=v.a.ul(Y()),nn=v.a.li(X()),en=Object(v.a)(h.b)(H());var tn=function(){return a.a.createElement(V,null,a.a.createElement(Z,null,a.a.createElement(nn,null,a.a.createElement(en,{to:"/",exact:!0},"Map")),a.a.createElement(nn,null,a.a.createElement(en,{to:"/players"},"Players")),a.a.createElement(nn,null,a.a.createElement(en,{to:"/pawn"},"Perenolde's Pawn Palace"))))};function rn(){var n=Object(b.a)(["\n  background: lightgray;\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n\n  justify-content: center;\n  align-items: center;\n"]);return rn=function(){return n},n}var an=v.a.main(rn()),on=Array(20).fill(Array(20).fill({})),ln={title:"Westwall",description:"A small but bustling town sitting at the farthest reaches of civilization. Adventurers flock here, seeking fame and fortune in the wilds west of the wall."},cn="https://spreadsheets.google.com/feeds/cells/1-Oc-nzUgM8HB1S7EL9Dgs8i3KpyBC5NUe7G1Fd2KC2I/1/public/full?alt=json",un="https://spreadsheets.google.com/feeds/cells/1-Oc-nzUgM8HB1S7EL9Dgs8i3KpyBC5NUe7G1Fd2KC2I/2/public/full?alt=json";function pn(n,e){if((null===n||void 0===n?void 0:n.length)!==(null===e||void 0===e?void 0:e.length))throw new Error("zip() requires two equal length arrays");var t={};return n.forEach((function(n,r){return t[n]=e[r]})),t}function sn(n){var e=n.reduce((function(n,e){try{var t=e.gs$cell,r=parseInt(null===t||void 0===t?void 0:t.row,10)-1,a=t.$t;return n.length<=r&&n.push([]),n[r].push(a),n}catch(o){throw console.error("Error parsing rows from API"),o}}),[[]]),t=Object(d.a)(e);return{header:t[0],rows:t.slice(1)}}function dn(n){var e=sn(n),t=e.header;return e.rows.map((function(n){return pn(t,n)})).map((function(n){return Object(s.a)({},n,{location:n.location.split(",").map((function(n){return parseInt(n.trim())})),hexLevel:"-"!==n.hexLevel?parseInt(n.hexLevel):0})}))}function fn(n){var e=sn(n),t=e.header;return e.rows.reduce((function(n,e){var r=pn(t,e);return n[r.terrainType]=r,n}),{})}var gn=function(){var n=Object(r.useState)(ln),e=Object(p.a)(n,2),t=e[0],o=e[1],i=Object(r.useState)(on),l=Object(p.a)(i,2),d=l[0],f=l[1],b=Object(r.useState)({}),v=Object(p.a)(b,2),m=v[0],w=v[1];Object(r.useEffect)((function(){function n(){return(n=Object(u.a)(c.a.mark((function n(){var e,t,r,a,o,i,l,u,p;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g()(cn);case 2:return o=n.sent,n.next=5,g()(un);case 5:i=n.sent,l=dn(null===o||void 0===o?void 0:null===(e=o.data)||void 0===e?void 0:null===(t=e.feed)||void 0===t?void 0:t.entry),u=fn(null===i||void 0===i?void 0:null===(r=i.data)||void 0===r?void 0:null===(a=r.feed)||void 0===a?void 0:a.entry),p=JSON.parse(JSON.stringify(on)),l.forEach((function(n){var e=n.location;p[e[0]][e[1]]=n})),f(p),w(u);case 12:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]);var y=Object(r.useCallback)((function(n){var e=n.currentTarget,t=parseInt(e.getAttribute("data-row")),r=parseInt(e.getAttribute("data-col"));o(Object(s.a)({},d[t][r]))}),[d]),E=Object(r.useCallback)((function(){return o(ln)}),[]);return a.a.createElement(h.a,null,a.a.createElement(an,null,a.a.createElement(tn,null),a.a.createElement(x.c,null,a.a.createElement(x.a,{path:"/players"},"Coming soon!"),a.a.createElement(x.a,{path:"/pawn"},"Coming later!"),a.a.createElement(x.a,{path:"/"},a.a.createElement(G,{hexData:d,terrainMapping:m,onMouseOver:y,onMouseOut:E}),a.a.createElement(R,{hovered:t})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(gn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.d581e1d5.chunk.js.map