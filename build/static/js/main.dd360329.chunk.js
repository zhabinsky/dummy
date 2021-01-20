(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var r=t(1),i=t(0),a=t.n(i),c=t(14),u=t.n(c),s=(t(24),t(2)),o=t(5),d=t(3),l=t(4),b=t(10),v=t(7),j=t.n(v);function f(){var e=Object(s.a)([""]);return f=function(){return e},e}function h(){var e=Object(s.a)(["\n  user-select: none;\n  padding: 12px 25px;\n  border-radius: 20px;\n  border: 1px solid yellow;\n  background: transparent;\n  color: yellow;\n\n  :focus {\n    outline: none;\n  }\n\n  cursor: pointer;\n"]);return h=function(){return e},e}var O=function(e){e.value,e.suit;var n=e.disabled,t=e.className,i=e.children,a=e.onClick,c=Object(b.a)(e,["value","suit","disabled","className","children","onClick"]);return Object(r.jsx)(x,Object(l.a)(Object(l.a)({},c),{},{className:j()(t,{disabled:n}),onClick:n?void 0:a,children:Object(r.jsx)(p,{children:i})}))},x=d.a.button(h()),p=d.a.div(f()),g=t(18);function m(){var e=Object(s.a)(['\n  width: 100%;\n  height: 100%;\n  content: " ";\n  background-image: url(',");\n  background-size: contain;\n  border-radius: 3px;\n  overflow: hidden;\n  filter: drop-shadow(0 0 2px black);\n  background-repeat: no-repeat;\n"]);return m=function(){return e},e}function w(){var e=Object(s.a)([""]);return w=function(){return e},e}var k=function(e){var n=e.value,t=e.suit,i=(e.children,Object(b.a)(e,["value","suit","children"]));return Object(r.jsx)(y,Object(l.a)(Object(l.a)({},i),{},{children:Object(r.jsx)(C,{src:"/cards/".concat(n,"-").concat(t,".svg"),alt:""})}))},y=d.a.div(w()),C=d.a.div(m(),(function(e){return e.src})),S=function(){return[window.innerWidth,window.innerHeight]},z=function(){var e=Object(i.useState)(S()),n=Object(o.a)(e,2),t=n[0],r=n[1];return Object(i.useEffect)((function(){var e=function(){return r(S())};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),t},N=Object(i.createContext)(0),I=function(e){var n=e.children;return Object(r.jsx)(N.Provider,{value:z(),children:n})};function E(){var e=Object(s.a)(["\n  position: absolute;\n  transition: all 0.4s, z-index 0.2s;\n  transition-function: ease-out;\n  bottom: 0;\n  transform-origin: center bottom;\n"]);return E=function(){return e},e}function J(){var e=Object(s.a)(["\n  position: relative;\n  height: 100%;\n"]);return J=function(){return e},e}function M(){var e=Object(s.a)(["\n  position: absolute;\n  bottom: 0px;\n  left: 50vw;\n  transform: translateX(-50%);\n  z-index: 9999;\n  transition: opacity 0.3s;\n"]);return M=function(){return e},e}function L(){var e=Object(s.a)(["\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  height: ","px;\n"]);return L=function(){return e},e}function B(e){var n=e.cards,t=void 0===n?[]:n,a=(e.onSelectedCards,Object(i.useState)([])),c=Object(o.a)(a,2),u=c[0],s=c[1],d=Object(i.useContext)(N),b=Object(o.a)(d,2),v=b[0],f=b[1],h=Math.min(f/4,400),O=Math.min(220,.34*v),x=1*O/.68,p=.35*O,m=.25*x,w=O+3*p,k=u.length>0,y=function(e,n){var t=n.selectedCards,r=n.lineCapacity,i=0,a={};return e.map((function(e,n){var c=e.suit+"/"+e.value,u=t.indexOf(c),s=-1!==u,o=n%r;return n>0&&0===o&&a[i]>0&&i++,a[i]||(a[i]=0),s||a[i]++,Object(l.a)(Object(l.a)({},e),{},{selectedIndex:u,isSelected:s,x:o,y:i,id:c})}))}(t,{selectedCards:u,lineCapacity:4});return Object(r.jsxs)(H,{height:h,children:[Object(r.jsxs)(P,{disabled:0===u.length,style:{bottom:1.5*h+m,opacity:u.length?1:0},children:["Throw ",u.length," ",X(u.length)]}),Object(r.jsxs)(T,{children:[y.map((function(e){var n=e.suit,t=e.value,i=e.id,a=e.isSelected,c=(e.x,e.y),o=0,d=y.reduce((function(e,n){return n.isSelected||n.y!==c?e:(n.id===i&&(o=e),e+1)}),0),l=m*c-.6*x,b=o*p,f=k&&!a,h=6*(o-d/2);return Object(r.jsx)(W,{suit:n,value:t,onClick:function(){window.navigator.vibrate(200),a||s([].concat(Object(g.a)(u),[i]))},style:{height:x,width:O,left:v/2-w/2,transform:a?"translate(".concat(b,"px, 50vh) rotate(0deg)"):"translate(".concat(b,"px, ").concat(-l,"px) rotate(").concat(h,"deg)"),zIndex:100-c},className:j()({blurred:f})},i)})),y.map((function(e){var n=e.suit,t=e.value,i=e.id,a=e.isSelected,c=e.selectedIndex,o=k&&!a;return Object(r.jsx)(W,{suit:n,value:t,onClick:function(){window.navigator.vibrate(200),s(u.filter((function(e){return e!==i})))},style:{height:.6*x,width:.6*O,top:50,left:a?50+20*c:"100vw",zIndex:c,position:"fixed"},className:j()({blurred:o})},i)}))]})]})}var H=d.a.div(L(),(function(e){return e.height})),P=Object(d.a)(O)(M()),T=d.a.div(J()),W=Object(d.a)(k)(E()),X=function(e){return 1===e?"card":"cards"};function q(){var e=Object(s.a)(["\n  z-index: 9999;\n"]);return q=function(){return e},e}var A=function(){var e=Object(i.useState)([{suit:"clubs",value:"king"},{suit:"hearts",value:"king"},{suit:"spades",value:"king"},{suit:"diamonds",value:"king"},{suit:"clubs",value:"ace"},{suit:"hearts",value:"ace"},{suit:"spades",value:"ace"},{suit:"diamonds",value:"ace"},{suit:"clubs",value:"4"},{suit:"hearts",value:"4"},{suit:"spades",value:"4"},{suit:"diamonds",value:"4"},{suit:"clubs",value:"3"},{suit:"hearts",value:"3"},{suit:"spades",value:"3"},{suit:"diamonds",value:"3"}]),n=Object(o.a)(e,2),t=n[0];return n[1],Object(r.jsxs)(D,{children:[Object(r.jsx)("pre",{children:JSON.stringify(t,null,3)}),Object(r.jsx)(B,{cards:t}),Object(r.jsx)("div",{children:Object(r.jsx)(O,{children:"setCards"})})]})},D=d.a.div(q());var F=function(){return Object(r.jsx)(I,{children:Object(r.jsx)(A,{})})};u.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(F,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.dd360329.chunk.js.map