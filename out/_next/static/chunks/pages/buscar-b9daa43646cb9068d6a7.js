_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{LB1W:function(e,t,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/buscar",function(){return c("yAZT")}])},yAZT:function(e,t,c){"use strict";c.r(t);var n=c("wx14"),o=c("20a2"),a=c("q1tI"),s=c("/UT2"),r=c("zgwX"),u=c("29xI"),b=c("XIub"),i=c.n(b),d=c("AeFk");var l={name:"1azakc",styles:"text-align:center"};t.default=function(){var e=Object(o.useRouter)().query.q,t=Object(u.a)("votos").productos,c=Object(a.useState)([]),b=c[0],w=c[1],p=i()();return Object(a.useEffect)((function(){if(e&&p){var c=e.toLowerCase(),n=t.filter((function(e){return e.nombre.toLowerCase().includes(c)||e.descripcion.toLowerCase().includes(c)}));w(n)}}),[e,t,p]),Object(d.b)("div",null,Object(d.b)(r.a,null,Object(d.b)("div",{className:"listado-productos"},Object(d.b)("div",{className:"contenedor"},b.length>0?Object(d.b)("ul",{className:"bg-white"},b.map((function(e){return Object(d.b)(s.a,Object(n.a)({key:e.id},e))}))):Object(d.b)("p",{css:l},"No hay productos para mostrar")))))}}},[["LB1W",1,2,3,5,0,4,6,7,8]]]);