!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,(function(){return function(e){function t(t){for(var r,c,a=t[0],s=t[1],l=t[2],u=0,j=[];u<a.length;u++)c=a[u],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&j.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(d&&d(t);j.length;)j.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={0:0},i=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var d=s;return i.push([96,1]),n()}({95:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n(0),i=n.n(o),c=n(17),a=n.n(c),s=n(36),l=n(8),d="/",u="/login",j=n(119),v=Object(o.createContext)({loading:!1,showLoader:function(){},hideLoader:function(){}}),p=function(){var e=this;this.isLogged=function(){return e.logged},this.getUser=function(){return{name:e.name,logged:e.logged}},this.login=function(t){t.user,t.password,e.name="Prueba",e.logged=!0},this.name="",this.logged=!1},f=null,b=function(){return{getInstance:function(){return f||(f=new p),f}}},h=Object(o.createContext)({login:b().getInstance()}),O=n(124),g=n(117),x=n(118),m=n(120),y=n(121),w=n(55),P=n.n(w),N=function(){return(N=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var L=function(){var e=Object(o.useContext)(h).login;return Object(r.jsx)("header",{children:Object(r.jsx)("div",N({className:"header-root"},{children:Object(r.jsx)(O.a,N({position:"static"},{children:Object(r.jsxs)(g.a,N({className:"container"},{children:[(null==e?void 0:e.isLogged())?Object(r.jsx)(x.a,N({className:"title",variant:"h6",noWrap:!0},{children:null==e?void 0:e.getUser().name}),void 0):Object(r.jsx)("div",N({className:"login-button"},{children:Object(r.jsx)(m.a,N({color:"inherit"},{children:"Login"}),void 0)}),void 0),Object(r.jsxs)("div",N({className:"search"},{children:[Object(r.jsx)("div",N({className:"search-icon"},{children:Object(r.jsx)(P.a,{},void 0)}),void 0),Object(r.jsx)(y.a,{placeholder:"Search…",classes:{root:"input-root",input:"input-input"},inputProps:{"aria-label":"search"}},void 0)]}),void 0)]}),void 0)}),void 0)}),void 0)},void 0)},S=n(122),C=function(){return(C=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var k=function(e){var t=e.children,n=Object(o.useContext)(v).loading;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(L,{},void 0),Object(r.jsxs)("div",C({className:"container"},{children:[n&&Object(r.jsx)(S.a,C({style:{zIndex:1},open:n},{children:Object(r.jsx)(j.a,{color:"primary",size:70},void 0)}),void 0),t]}),void 0)]},void 0)};var _=function(){return Object(r.jsx)(k,{children:Object(r.jsx)("div",{children:"Login"},void 0)},void 0)},I=n(57),M=n.n(I),U="/api/getmovies",R=n.p+"static/media/images/black-widow.151abba1.jpg",z=n(123),E=function(){return(E=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var J=function(e){e.imageURL;var t=e.name,n=void 0===t?"":t,o=e.description,i=void 0===o?"":o,c=e.rating,a=void 0===c?0:c;return Object(r.jsx)("div",E({className:"moviecard-wrapper"},{children:Object(r.jsxs)("div",E({className:"moviecard"},{children:[Object(r.jsx)("div",E({className:"text-center"},{children:Object(r.jsx)(z.a,{name:"read-only",value:a,readOnly:!1},void 0)}),void 0),Object(r.jsx)("img",{src:R,className:"img-fluid img-thumbnail",alt:n},void 0),Object(r.jsxs)("div",E({className:"card-body"},{children:[Object(r.jsx)("h4",{children:n},void 0),Object(r.jsx)("p",E({className:"card-text"},{children:i}),void 0)]}),void 0)]}),void 0)}),void 0)},T=function(){return(T=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var B=function(){var e=Object(o.useState)(null),t=e[0],n=e[1],i=Object(o.useContext)(v),c=i.showLoader,a=i.hideLoader;return Object(o.useEffect)((function(){null==t&&(c(),M.a.post(U,{}).then((function(e){var t=e.data;a(),n(t)})).catch((function(e){return a()})))}),[]),Object(r.jsx)(k,{children:Object(r.jsx)("div",T({className:"movies-wrapper"},{children:t&&t.map((function(e,t){var n=e.imageURL,o=e.name,i=e.sortDescription,c=e.rating;return Object(r.jsx)(J,{imageURL:n,name:o,description:i,rating:c},t)}))}),void 0)},void 0)},D=function(){return(D=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},F=function(){return Object(r.jsx)(o.Suspense,D({fallback:Object(r.jsx)(j.a,{},void 0)},{children:Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{exact:!0,path:d,component:B},void 0),Object(r.jsx)(l.a,{exact:!0,path:u,component:_},void 0)]},void 0)}),void 0)},W=(n(95),function(){return(W=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)});function q(e){var t=e.children,n=b().getInstance();return Object(r.jsx)(h.Provider,W({value:{login:n}},{children:t}),void 0)}var A=function(){var e=Object(o.useState)(!1),t=e[0],n=e[1];return{loading:t,showLoader:i.a.useCallback((function(){n(!0)}),[]),hideLoader:i.a.useCallback((function(){n(!1)}),[])}},G=function(){return(G=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function H(e){var t=e.children,n=A();return Object(r.jsx)(v.Provider,G({value:n},{children:t}),void 0)}var K=function(){return Object(r.jsx)(q,{children:Object(r.jsx)(H,{children:Object(r.jsx)(s.a,{children:Object(r.jsx)(F,{},void 0)},void 0)},void 0)},void 0)};a.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(K,{},void 0)},void 0),document.getElementById("root"))}})}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Sb3V0ZXIvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9jb250ZXh0L2JhY2tkcm9wQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvbG9naW5fc2VydmljZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2NvbnRleHQvY29yZUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9Mb2dpbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2VuZHBvaW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9ibGFjay13aWRvdy5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9ucy9Nb3ZpZUNhcmQvTW92aWVDYXJkLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL01vdmllcy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2F4aW9zX3NlcnZpY2UvbW92aWVzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Sb3V0ZXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9wcm92aWRlcnMvY29yZUNvbnRleHRQcm92aWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2hvb2tzL3VzZUxvYWRpbmcudHN4Iiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9wcm92aWRlcnMvYmFja2Ryb3BDb250ZXh0UHJvdmlkZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvQXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHN4Il0sIm5hbWVzIjpbInJvb3QiLCJmYWN0b3J5IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmluZSIsImFtZCIsImEiLCJpIiwid2luZG93Iiwid2VicGFja0pzb25wQ2FsbGJhY2siLCJkYXRhIiwibW9kdWxlSWQiLCJjaHVua0lkIiwiY2h1bmtJZHMiLCJtb3JlTW9kdWxlcyIsImV4ZWN1dGVNb2R1bGVzIiwicmVzb2x2ZXMiLCJsZW5ndGgiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpbnN0YWxsZWRDaHVua3MiLCJwdXNoIiwibW9kdWxlcyIsInBhcmVudEpzb25wRnVuY3Rpb24iLCJzaGlmdCIsImRlZmVycmVkTW9kdWxlcyIsImFwcGx5IiwiY2hlY2tEZWZlcnJlZE1vZHVsZXMiLCJyZXN1bHQiLCJkZWZlcnJlZE1vZHVsZSIsImZ1bGZpbGxlZCIsImoiLCJkZXBJZCIsInNwbGljZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJzIiwiaW5zdGFsbGVkTW9kdWxlcyIsIjAiLCJsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInAiLCJqc29ucEFycmF5Iiwib2xkSnNvbnBGdW5jdGlvbiIsInNsaWNlIiwiUk9VVEVSX1BBR0VTIiwiQmFja2Ryb3BDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImxvYWRpbmciLCJzaG93TG9hZGVyIiwiaGlkZUxvYWRlciIsImlzTG9nZ2VkIiwibG9nZ2VkIiwiZ2V0VXNlciIsImxvZ2luIiwidGhpcyIsImluc3RhbmNlIiwiZ2V0SW5zdGFuY2UiLCJMb2dpblNlcnZpY2UiLCJDb3JlQ29udGV4dCIsImNsYXNzTmFtZSIsIkFwcEJhciIsInBvc2l0aW9uIiwiVG9vbGJhciIsIlR5cG9ncmFwaHkiLCJ2YXJpYW50Iiwibm9XcmFwIiwiQnV0dG9uIiwiY29sb3IiLCJJbnB1dEJhc2UiLCJwbGFjZWhvbGRlciIsImNsYXNzZXMiLCJpbnB1dCIsImlucHV0UHJvcHMiLCJjaGlsZHJlbiIsIkJhY2tkcm9wIiwic3R5bGUiLCJ6SW5kZXgiLCJvcGVuIiwiQ2lyY3VsYXJQcm9ncmVzcyIsInNpemUiLCJFTkRQT0lOVFMiLCJpbWFnZVVSTCIsImRlc2NyaXB0aW9uIiwicmF0aW5nIiwiUmF0aW5nIiwicmVhZE9ubHkiLCJzcmMiLCJhbHQiLCJtb3ZpZXMiLCJzZXRNb3ZpZXMiLCJwb3N0IiwidGhlbiIsImNhdGNoIiwiZXJyIiwibWFwIiwiaW5kZXgiLCJzb3J0RGVzY3JpcHRpb24iLCJmYWxsYmFjayIsImV4YWN0IiwicGF0aCIsImNvbXBvbmVudCIsIkNvcmVDb250ZXh0UHJvdmlkZXIiLCJQcm92aWRlciIsInNldExvYWRpbmciLCJ1c2VDYWxsYmFjayIsIkJhY2tkcm9wQ29udGV4dFByb3ZpZGVyIiwibG9hZGVyIiwicmVuZGVyIiwiU3RyaWN0TW9kZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiJDQUFBLFNBQTJDQSxFQUFNQyxHQUNoRCxHQUFzQixpQkFBWkMsU0FBMEMsaUJBQVhDLE9BQ3hDQSxPQUFPRCxRQUFVRCxTQUNiLEdBQXFCLG1CQUFYRyxRQUF5QkEsT0FBT0MsSUFDOUNELE9BQU8sR0FBSUgsT0FDUCxDQUNKLElBQUlLLEVBQUlMLElBQ1IsSUFBSSxJQUFJTSxLQUFLRCxHQUF1QixpQkFBWkosUUFBdUJBLFFBQVVGLEdBQU1PLEdBQUtELEVBQUVDLElBUHhFLENBU0dDLFFBQVEsV0FDWCxPLFlDVEUsU0FBU0MsRUFBcUJDLEdBUTdCLElBUEEsSUFNSUMsRUFBVUMsRUFOVkMsRUFBV0gsRUFB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QndELFVBQVcsUUFBTSxHQUN2RCxjQUFDLElBQUssQ0FBQ0YsT0FBSyxFQUFDQyxLQUFNdkQsRUFBb0J3RCxVQUFXLFFBQUssVUFBSSxVQUNwRCxJLHVOQ1JBLFNBQVNDLEVBQW9CLEcsSUFBRTVCLEVBQVEsV0FDOUNwQixFQUFRLElBQWVHLGNBQzdCLE9BQU8sY0FBQ0UsRUFBWTRDLFNBQVEsR0FBQ3pFLE1BQU8sQ0FBRXdCLE1BQU9BLElBQU8sVUFBR29CLFNBQVEsR0NMakUsSUFrQmUsRUFsQkksV0FDWCxNQUF3QixvQkFBa0IsR0FBekMxQixFQUFPLEtBQUV3RCxFQUFVLEtBVTFCLE1BQU8sQ0FDTHhELFFBQU8sRUFDUEMsV0FWaUIsSUFBTXdELGFBQVksV0FDbkNELEdBQVcsS0FDVixJQVNEdEQsV0FQaUIsSUFBTXVELGFBQVksV0FDbkNELEdBQVcsS0FDVixNLCtNQ05VLFNBQVNFLEVBQXdCLEcsSUFBRWhDLEVBQVEsV0FDbERpQyxFQUFTLElBQ2YsT0FBTyxjQUFDN0QsRUFBZ0J5RCxTQUFRLEdBQUN6RSxNQUFPNkUsR0FBTSxVQUFHakMsU0FBUSxHQ2E1QyxNQVpmLFdBQ0UsT0FDRSxhQURLLENBQ0o0QixFQUFtQixVQUNsQixjQUFDLEVBQWUsVUFDZCxjQUFDLElBQU0sVUFDTCxjQUFDLEVBQU0saUJBQUcsU0FDSCxTQUNPLElDWHhCLElBQVNNLE9BQ1AsY0FBQyxJQUFNQyxXQUFVLFVBQ2YsY0FBQyxFQUFHLGlCQUFHLEdBRVRDLFNBQVNDLGVBQWUiLCJmaWxlIjoic3RhdGljL2pzL2J1bmRsZS5mYjRmNzNjMC5jaHVuay5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0MDogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzk2LDFdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiZXhwb3J0IGNvbnN0IFJPVVRFUl9QQUdFUyA9IHtcbiAgSE9NRTogJy8nLFxuICBMT0dJTjogJy9sb2dpbicsXG4gIE5PVF9GT1VORDogJy8qJyxcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBCYWNrZHJvcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHsgbG9hZGluZzogZmFsc2UsIHNob3dMb2FkZXI6ICgpID0+IHt9LCBoaWRlTG9hZGVyOiAoKSA9PiB7fSB9KTtcclxuIiwiaW1wb3J0IHsgSUVVc2VyLCBJRUxvZ2luTW9kZWwgfSBmcm9tICdpbnRlcmZhY2VzL2xvZ2luX3NlcnZpY2UnO1xuXG5jbGFzcyBMb2dpblNlcnZpY2Uge1xuICBwcml2YXRlIG5hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBsb2dnZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5uYW1lID0gJyc7XG4gICAgdGhpcy5sb2dnZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGlzTG9nZ2VkID0gKCk6IGJvb2xlYW4gPT4ge1xuICAgIHJldHVybiB0aGlzLmxvZ2dlZDtcbiAgfTtcblxuICBnZXRVc2VyID0gKCk6IElFVXNlciA9PiB7XG4gICAgcmV0dXJuIHsgbmFtZTogdGhpcy5uYW1lLCBsb2dnZWQ6IHRoaXMubG9nZ2VkIH07XG4gIH07XG5cbiAgbG9naW4gPSAoeyB1c2VyLCBwYXNzd29yZCB9OiBJRUxvZ2luTW9kZWwpID0+IHtcbiAgICB0aGlzLm5hbWUgPSAnUHJ1ZWJhJztcbiAgICB0aGlzLmxvZ2dlZCA9IHRydWU7XG4gIH07XG59XG5cbmxldCBpbnN0YW5jZTogYW55ID0gbnVsbDtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBmdW5jdGlvbiBnZXRJbnN0YW5jZSgpIHtcbiAgICBpZiAoIWluc3RhbmNlKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBMb2dpblNlcnZpY2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRJbnN0YW5jZTogZ2V0SW5zdGFuY2UsXG4gIH07XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMb2dpblNlcnZpY2UgZnJvbSAnLi4vbG9naW5fc2VydmljZS9pbmRleC50c3gnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvcmVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7IGxvZ2luOiBMb2dpblNlcnZpY2UoKS5nZXRJbnN0YW5jZSgpIH0pO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvcmVDb250ZXh0IH0gZnJvbSAnc2VydmljZXMvY29udGV4dC9jb3JlQ29udGV4dC5qcyc7XG5pbXBvcnQgeyBBcHBCYXIsIFRvb2xiYXIsIEJ1dHRvbiwgSWNvbkJ1dHRvbiwgVHlwb2dyYXBoeSwgSW5wdXRCYXNlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51JztcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZWFyY2gnO1xuXG5mdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IHsgbG9naW4gfSA9IHVzZUNvbnRleHQoQ29yZUNvbnRleHQpO1xuICByZXR1cm4gKFxuICAgIDxoZWFkZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1yb290XCI+XG4gICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIj5cbiAgICAgICAgICA8VG9vbGJhciBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIHsvKiA8SWNvbkJ1dHRvbiBlZGdlPVwic3RhcnRcIiBjbGFzc05hbWU9XCJtZW51LWJ1dHRvblwiIGNvbG9yPVwiaW5oZXJpdFwiIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiPlxuICAgICAgICAgICAgICA8TWVudUljb24gLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj4gKi99XG4gICAgICAgICAgICB7bG9naW4/LmlzTG9nZ2VkKCkgPyAoXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT1cInRpdGxlXCIgdmFyaWFudD1cImg2XCIgbm9XcmFwPlxuICAgICAgICAgICAgICAgIHtsb2dpbj8uZ2V0VXNlcigpLm5hbWV9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIj5Mb2dpbjwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1pY29uXCI+XG4gICAgICAgICAgICAgICAgPFNlYXJjaEljb24gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxJbnB1dEJhc2VcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaOKAplwiXG4gICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xuICAgICAgICAgICAgICAgICAgcm9vdDogJ2lucHV0LXJvb3QnLFxuICAgICAgICAgICAgICAgICAgaW5wdXQ6ICdpbnB1dC1pbnB1dCcsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7ICdhcmlhLWxhYmVsJzogJ3NlYXJjaCcgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvVG9vbGJhcj5cbiAgICAgICAgPC9BcHBCYXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJ2ludGVyZmFjZXMvY29tbW9ucyc7XG5pbXBvcnQgeyBCYWNrZHJvcENvbnRleHQgfSBmcm9tICdzZXJ2aWNlcy9jb250ZXh0L2JhY2tkcm9wQ29udGV4dCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCB7IEJhY2tkcm9wLCBDaXJjdWxhclByb2dyZXNzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuXG5mdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9OiBQcm9wcykge1xuICBjb25zdCB7IGxvYWRpbmcgfSA9IHVzZUNvbnRleHQoQmFja2Ryb3BDb250ZXh0KTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAge2xvYWRpbmcgJiYgKFxuICAgICAgICAgIDxCYWNrZHJvcCBzdHlsZT17eyB6SW5kZXg6IDEgfX0gb3Blbj17bG9hZGluZ30+XG4gICAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyBjb2xvcj1cInByaW1hcnlcIiBzaXplPXs3MH0gLz5cbiAgICAgICAgICA8L0JhY2tkcm9wPlxuICAgICAgICApfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0JztcblxuZnVuY3Rpb24gTG9naW4oKSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXY+TG9naW48L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4iLCJleHBvcnQgY29uc3QgRU5EUE9JTlRTID0geyBHRVRfTU9WSUVTOiAnL2FwaS9nZXRtb3ZpZXMnIH07XHJcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvaW1hZ2VzL2JsYWNrLXdpZG93LjE1MWFiYmExLmpwZ1wiOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNb3ZpZVByb3BzIH0gZnJvbSAnaW50ZXJmYWNlcy9tb3ZpZWNhcmQnO1xuaW1wb3J0IGltYWdlbiBmcm9tICdhc3NldHMvaW1hZ2VzL2JsYWNrLXdpZG93LmpwZyc7XG5pbXBvcnQgUmF0aW5nIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvUmF0aW5nJztcblxuZnVuY3Rpb24gTW92aWVDYXJkKHsgaW1hZ2VVUkwgPSAnJywgbmFtZSA9ICcnLCBkZXNjcmlwdGlvbiA9ICcnLCByYXRpbmcgPSAwIH06IE1vdmllUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllY2FyZC13cmFwcGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllY2FyZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPFJhdGluZyBuYW1lPVwicmVhZC1vbmx5XCIgdmFsdWU9e3JhdGluZ30gcmVhZE9ubHk9e2ZhbHNlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGltZyBzcmM9e2ltYWdlbn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZy10aHVtYm5haWxcIiBhbHQ9e25hbWV9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgPGg0PntuYW1lfTwvaDQ+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW92aWVDYXJkO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRNb3ZpZXMgfSBmcm9tICdzZXJ2aWNlcy9heGlvc19zZXJ2aWNlL21vdmllcyc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJ2NvbXBvbmVudHMvTGF5b3V0L0xheW91dCc7XG5pbXBvcnQgTW92aWVDYXJkIGZyb20gJ2NvbXBvbmVudHMvY29tbW9ucy9Nb3ZpZUNhcmQvTW92aWVDYXJkJztcbmltcG9ydCB7IEJhY2tkcm9wQ29udGV4dCB9IGZyb20gJ3NlcnZpY2VzL2NvbnRleHQvYmFja2Ryb3BDb250ZXh0JztcblxuaW1wb3J0IHsgTW92aWVQcm9wcyB9IGZyb20gJ2ludGVyZmFjZXMvbW92aWVjYXJkJztcblxuZnVuY3Rpb24gTW92aWVzKCkge1xuICBjb25zdCBbbW92aWVzLCBzZXRNb3ZpZXNdID0gdXNlU3RhdGU8W10gfCBhbnk+KG51bGwpO1xuICBjb25zdCB7IHNob3dMb2FkZXIsIGhpZGVMb2FkZXIgfSA9IHVzZUNvbnRleHQoQmFja2Ryb3BDb250ZXh0KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChtb3ZpZXMgPT0gbnVsbCkge1xuICAgICAgc2hvd0xvYWRlcigpO1xuICAgICAgZ2V0TW92aWVzKClcbiAgICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgaGlkZUxvYWRlcigpO1xuICAgICAgICAgIHNldE1vdmllcyhkYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGhpZGVMb2FkZXIoKSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZXMtd3JhcHBlclwiPlxuICAgICAgICB7bW92aWVzICYmXG4gICAgICAgICAgbW92aWVzLm1hcCgoeyBpbWFnZVVSTCwgbmFtZSwgc29ydERlc2NyaXB0aW9uLCByYXRpbmcgfTogTW92aWVQcm9wcywgaW5kZXg6IG51bWJlcikgPT4gKFxuICAgICAgICAgICAgPE1vdmllQ2FyZCBrZXk9e2luZGV4fSBpbWFnZVVSTD17aW1hZ2VVUkx9IG5hbWU9e25hbWV9IGRlc2NyaXB0aW9uPXtzb3J0RGVzY3JpcHRpb259IHJhdGluZz17cmF0aW5nfSAvPlxuICAgICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllcztcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEVORFBPSU5UUyB9IGZyb20gJ3V0aWxzL2VuZHBvaW50cy5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TW92aWVzID0gKCkgPT4ge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KEVORFBPSU5UUy5HRVRfTU9WSUVTLCB7fSk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyBTdXNwZW5zZSwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBTd2l0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFJPVVRFUl9QQUdFUyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3MnO1xuaW1wb3J0IExvZ2luIGZyb20gJ2FwcC9wYWdlcy9Mb2dpbic7XG5pbXBvcnQgTW92aWVzIGZyb20gJ2FwcC9wYWdlcy9Nb3ZpZXMnO1xuXG5jb25zdCBSb3V0ZXMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8Q2lyY3VsYXJQcm9ncmVzcyAvPn0+XG4gICAgICA8U3dpdGNoPlxuICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD17Uk9VVEVSX1BBR0VTLkhPTUV9IGNvbXBvbmVudD17TW92aWVzfSAvPlxuICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD17Uk9VVEVSX1BBR0VTLkxPR0lOfSBjb21wb25lbnQ9e0xvZ2lufSAvPlxuICAgICAgPC9Td2l0Y2g+XG4gICAgPC9TdXNwZW5zZT5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBSb3V0ZXM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29yZUNvbnRleHQgfSBmcm9tICdzZXJ2aWNlcy9jb250ZXh0L2NvcmVDb250ZXh0LmpzJztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnaW50ZXJmYWNlcy9jb21tb25zJztcbmltcG9ydCBMb2dpblNlcnZpY2UgZnJvbSAnc2VydmljZXMvbG9naW5fc2VydmljZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvcmVDb250ZXh0UHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBQcm9wcykge1xuICBjb25zdCBsb2dpbiA9IExvZ2luU2VydmljZSgpLmdldEluc3RhbmNlKCk7XG4gIHJldHVybiA8Q29yZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgbG9naW46IGxvZ2luIH19PntjaGlsZHJlbn08L0NvcmVDb250ZXh0LlByb3ZpZGVyPjtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IHVzZUxvYWRpbmcgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICBjb25zdCBzaG93TG9hZGVyID0gUmVhY3QudXNlQ2FsbGJhY2soKCk6IHZvaWQgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhpZGVMb2FkZXIgPSBSZWFjdC51c2VDYWxsYmFjaygoKTogdm9pZCA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBsb2FkaW5nLFxyXG4gICAgc2hvd0xvYWRlcixcclxuICAgIGhpZGVMb2FkZXIsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUxvYWRpbmc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJ2ludGVyZmFjZXMvY29tbW9ucyc7XG5pbXBvcnQgeyBCYWNrZHJvcENvbnRleHQgfSBmcm9tICdzZXJ2aWNlcy9jb250ZXh0L2JhY2tkcm9wQ29udGV4dC5qcyc7XG5pbXBvcnQgdXNlTG9hZGluZyBmcm9tICdob29rcy91c2VMb2FkaW5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFja2Ryb3BDb250ZXh0UHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBQcm9wcykge1xuICBjb25zdCBsb2FkZXIgPSB1c2VMb2FkaW5nKCk7XG4gIHJldHVybiA8QmFja2Ryb3BDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtsb2FkZXJ9PntjaGlsZHJlbn08L0JhY2tkcm9wQ29udGV4dC5Qcm92aWRlcj47XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0JztcbmltcG9ydCBSb3V0ZXMgZnJvbSAnY29tcG9uZW50cy9Sb3V0ZXInO1xuaW1wb3J0ICdzdHlsZXNoZWV0cy9tYWluLnNjc3MnO1xuaW1wb3J0IENvcmVDb250ZXh0UHJvdmlkZXIgZnJvbSAnc2VydmljZXMvcHJvdmlkZXJzL2NvcmVDb250ZXh0UHJvdmlkZXInO1xuaW1wb3J0IEJhY2tkcm9wQ29udGV4dCBmcm9tICdzZXJ2aWNlcy9wcm92aWRlcnMvYmFja2Ryb3BDb250ZXh0UHJvdmlkZXInO1xuXG5mdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPENvcmVDb250ZXh0UHJvdmlkZXI+XG4gICAgICA8QmFja2Ryb3BDb250ZXh0PlxuICAgICAgICA8Um91dGVyPlxuICAgICAgICAgIDxSb3V0ZXMgLz5cbiAgICAgICAgPC9Sb3V0ZXI+XG4gICAgICA8L0JhY2tkcm9wQ29udGV4dD5cbiAgICA8L0NvcmVDb250ZXh0UHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBBcHAgZnJvbSAnYXBwL0FwcCc7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPFJlYWN0LlN0cmljdE1vZGU+XG4gICAgPEFwcCAvPlxuICA8L1JlYWN0LlN0cmljdE1vZGU+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==