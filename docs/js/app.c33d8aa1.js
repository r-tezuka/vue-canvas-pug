(function(e){function t(t){for(var r,s,n=t[0],u=t[1],o=t[2],h=0,d=[];h<n.length;h++)s=n[h],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(d.length)d.shift()();return c.push.apply(c,o||[]),i()}function i(){for(var e,t=0;t<c.length;t++){for(var i=c[t],r=!0,n=1;n<i.length;n++){var u=i[n];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=i[0]))}return e}var r={},a={app:0},c=[];function s(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=r,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(i,r,function(t){return e[t]}.bind(null,r));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],u=n.push.bind(n);n.push=t,n=n.slice();for(var o=0;o<n.length;o++)t(n[o]);var l=u;c.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";var r=i("85ec"),a=i.n(r);a.a},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var r=i("2b0e"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("Bezier")],1)},c=[],s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("span",{staticClass:"col-1"},[e._v("3次ベジェ曲線/ cubic: "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.cubic.bezier,expression:"cubic.bezier"}],staticClass:"bezier",attrs:{id:"cubic",type:"checkbox"},domProps:{checked:Array.isArray(e.cubic.bezier)?e._i(e.cubic.bezier,null)>-1:e.cubic.bezier},on:{change:function(t){var i=e.cubic.bezier,r=t.target,a=!!r.checked;if(Array.isArray(i)){var c=null,s=e._i(i,c);r.checked?s<0&&e.$set(e.cubic,"bezier",i.concat([c])):s>-1&&e.$set(e.cubic,"bezier",i.slice(0,s).concat(i.slice(s+1)))}else e.$set(e.cubic,"bezier",a)}}}),i("label",{attrs:{for:"cubic.bezier"}},[e._v("bezier")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.cubic.rationalBezier,expression:"cubic.rationalBezier"}],staticClass:"rationalBezier",attrs:{id:"cubic",type:"checkbox"},domProps:{checked:Array.isArray(e.cubic.rationalBezier)?e._i(e.cubic.rationalBezier,null)>-1:e.cubic.rationalBezier},on:{change:function(t){var i=e.cubic.rationalBezier,r=t.target,a=!!r.checked;if(Array.isArray(i)){var c=null,s=e._i(i,c);r.checked?s<0&&e.$set(e.cubic,"rationalBezier",i.concat([c])):s>-1&&e.$set(e.cubic,"rationalBezier",i.slice(0,s).concat(i.slice(s+1)))}else e.$set(e.cubic,"rationalBezier",a)}}}),i("label",{attrs:{for:"cubic.rationalBezier"}},[e._v("rationalBezier")]),e._l(this.cubic.vertices,(function(t,r){return i("div",[i("div",[e._v("point"+e._s(r)+" x:"+e._s(t.x)+" y:"+e._s(t.y)+" weight:"),i("input",{directives:[{name:"model",rawName:"v-model",value:t.w,expression:"vertex.w"}],staticStyle:{width:"40px"},attrs:{type:"number"},domProps:{value:t.w},on:{input:function(i){i.target.composing||e.$set(t,"w",i.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.w,expression:"vertex.w"}],attrs:{type:"range",max:"10",step:"0.1"},domProps:{value:t.w},on:{__r:function(i){return e.$set(t,"w",i.target.value)}}})])])})),e._l(this.cubic.handles,(function(t,r){return i("div",[i("div",[e._v("handle"+e._s(r)+" x:"+e._s(t.x)+" y:"+e._s(t.y)+" weight:"),i("input",{directives:[{name:"model",rawName:"v-model",value:t.w,expression:"handle.w"}],staticStyle:{width:"40px"},attrs:{type:"number"},domProps:{value:t.w},on:{input:function(i){i.target.composing||e.$set(t,"w",i.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.w,expression:"handle.w"}],attrs:{type:"range",max:"10",step:"0.1"},domProps:{value:t.w},on:{__r:function(i){return e.$set(t,"w",i.target.value)}}})])])}))],2),i("span",{staticClass:"col-2"},[e._v("2次ベジェ曲線 /quadratic: "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.quadratic.bezier,expression:"quadratic.bezier"}],staticClass:"bezier",attrs:{id:"quadratic",type:"checkbox"},domProps:{checked:Array.isArray(e.quadratic.bezier)?e._i(e.quadratic.bezier,null)>-1:e.quadratic.bezier},on:{change:function(t){var i=e.quadratic.bezier,r=t.target,a=!!r.checked;if(Array.isArray(i)){var c=null,s=e._i(i,c);r.checked?s<0&&e.$set(e.quadratic,"bezier",i.concat([c])):s>-1&&e.$set(e.quadratic,"bezier",i.slice(0,s).concat(i.slice(s+1)))}else e.$set(e.quadratic,"bezier",a)}}}),i("label",{attrs:{for:"quadratic.bezier"}},[e._v("bezier")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.quadratic.rationalBezier,expression:"quadratic.rationalBezier"}],staticClass:"rationalBezier",attrs:{id:"quadratic",type:"checkbox"},domProps:{checked:Array.isArray(e.quadratic.rationalBezier)?e._i(e.quadratic.rationalBezier,null)>-1:e.quadratic.rationalBezier},on:{change:function(t){var i=e.quadratic.rationalBezier,r=t.target,a=!!r.checked;if(Array.isArray(i)){var c=null,s=e._i(i,c);r.checked?s<0&&e.$set(e.quadratic,"rationalBezier",i.concat([c])):s>-1&&e.$set(e.quadratic,"rationalBezier",i.slice(0,s).concat(i.slice(s+1)))}else e.$set(e.quadratic,"rationalBezier",a)}}}),i("label",{attrs:{for:"quadratic.rationalBezier"}},[e._v("rationalBezier")]),e._l(this.quadratic.vertices,(function(t,r){return i("div",[i("div",[e._v("point"+e._s(r)+" x:"+e._s(t.x)+" y:"+e._s(t.y)+" weight:"),i("input",{directives:[{name:"model",rawName:"v-model",value:t.w,expression:"vertex.w"}],staticStyle:{width:"40px"},attrs:{type:"number"},domProps:{value:t.w},on:{input:function(i){i.target.composing||e.$set(t,"w",i.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.w,expression:"vertex.w"}],attrs:{type:"range",max:"10",step:"0.1"},domProps:{value:t.w},on:{__r:function(i){return e.$set(t,"w",i.target.value)}}})])])})),e._l(this.quadratic.handles,(function(t,r){return i("div",[i("div",[e._v("handle"+e._s(r)+" x:"+e._s(t.x)+" y:"+e._s(t.y)+" weight:"),i("input",{directives:[{name:"model",rawName:"v-model",value:t.w,expression:"handle.w"}],staticStyle:{width:"40px"},attrs:{type:"number"},domProps:{value:t.w},on:{input:function(i){i.target.composing||e.$set(t,"w",i.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.w,expression:"handle.w"}],attrs:{type:"range",max:"10",step:"0.1"},domProps:{value:t.w},on:{__r:function(i){return e.$set(t,"w",i.target.value)}}})])])}))],2),i("p",[i("span",{staticClass:"col-3"},[e._v("曲率 /curvature: "),i("label",{attrs:{for:"curvature.value"}},[e._v(e._s(e.curvature.value))]),i("div",[i("label",{attrs:{for:"curvature.t"}},[e._v("position: ")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.curvature.t,expression:"curvature.t"}],attrs:{type:"range",max:"1",step:"0.01"},domProps:{value:e.curvature.t},on:{__r:function(t){return e.$set(e.curvature,"t",t.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:e.curvature.circle,expression:"curvature.circle"}],staticClass:"circle",attrs:{id:"curvature",type:"checkbox"},domProps:{checked:Array.isArray(e.curvature.circle)?e._i(e.curvature.circle,null)>-1:e.curvature.circle},on:{change:function(t){var i=e.curvature.circle,r=t.target,a=!!r.checked;if(Array.isArray(i)){var c=null,s=e._i(i,c);r.checked?s<0&&e.$set(e.curvature,"circle",i.concat([c])):s>-1&&e.$set(e.curvature,"circle",i.slice(0,s).concat(i.slice(s+1)))}else e.$set(e.curvature,"circle",a)}}}),i("label",{attrs:{for:"curvature.circle"}},[e._v("circle ")]),i("div",[e._v("radius of curvature: "+e._s(e.curvature.r))])]),i("label",{attrs:{for:"curvature.dimension"}},[e._v("dimension: "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.curvature.dimension,expression:"curvature.dimension"}],staticClass:"dimension cubic",attrs:{id:"curvature",type:"radio",value:"cubic"},domProps:{checked:e._q(e.curvature.dimension,"cubic")},on:{change:function(t){return e.$set(e.curvature,"dimension","cubic")}}}),i("label",{attrs:{for:"curvature.dimension.cubic"}},[e._v("cubic ")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.curvature.dimension,expression:"curvature.dimension"}],staticClass:"dimension quadratic",attrs:{id:"curvature",type:"radio",value:"quadratic"},domProps:{checked:e._q(e.curvature.dimension,"quadratic")},on:{change:function(t){return e.$set(e.curvature,"dimension","quadratic")}}}),i("label",{attrs:{for:"curvature.dimension.quadratic"}},[e._v("quadratic ")])]),i("div"),i("label",{attrs:{for:"curvature.curveType"}},[e._v("curveType: "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.curvature.curveType,expression:"curvature.curveType"}],staticClass:"curveType bezier",attrs:{id:"curvature",type:"radio",value:"bezier"},domProps:{checked:e._q(e.curvature.curveType,"bezier")},on:{change:function(t){return e.$set(e.curvature,"curveType","bezier")}}}),i("label",{attrs:{for:"curvature.curveType.bezier"}},[e._v("bezier ")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.curvature.curveType,expression:"curvature.curveType"}],staticClass:"curveType rationalBezier",attrs:{id:"curvature",type:"radio",value:"rationalBezier"},domProps:{checked:e._q(e.curvature.curveType,"rationalBezier")},on:{change:function(t){return e.$set(e.curvature,"curveType","rationalBezier")}}}),i("label",{attrs:{for:"curvature.curveType.rationalBezier"}},[e._v("rationalBezier ")])])]),i("span",{staticClass:"col-4"},[e._v(" 3次有理ベジェ曲線をピッチでグレーディング /grading cubic rational bezier by pitch:"),i("div",[i("label",{attrs:{for:"cubic.numOfSize"}},[e._v("number of sizes: ")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.cubic.numOfSize,expression:"cubic.numOfSize"}],staticStyle:{width:"40px"},attrs:{type:"number"},domProps:{value:e.cubic.numOfSize},on:{input:function(t){t.target.composing||e.$set(e.cubic,"numOfSize",t.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:e.cubic.gradingResult,expression:"cubic.gradingResult"}],staticClass:"gradingResult",attrs:{id:"cubic",type:"checkbox"},domProps:{checked:Array.isArray(e.cubic.gradingResult)?e._i(e.cubic.gradingResult,null)>-1:e.cubic.gradingResult},on:{change:function(t){var i=e.cubic.gradingResult,r=t.target,a=!!r.checked;if(Array.isArray(i)){var c=null,s=e._i(i,c);r.checked?s<0&&e.$set(e.cubic,"gradingResult",i.concat([c])):s>-1&&e.$set(e.cubic,"gradingResult",i.slice(0,s).concat(i.slice(s+1)))}else e.$set(e.cubic,"gradingResult",a)}}}),i("label",{attrs:{for:"cubic.gradingResult"}},[e._v("grading result")])]),i("b",[e._v("grading pitch")]),e._l(this.cubic.pitches,(function(t,r){return i("div",[i("div",[e._v("point"+e._s(r)+" "),i("label",{attrs:{for:"pitch.x"}},[e._v(" x:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.x,expression:"pitch.x"}],staticStyle:{width:"40px"},attrs:{type:"number"},domProps:{value:t.x},on:{input:function(i){i.target.composing||e.$set(t,"x",i.target.value)}}}),i("label",{attrs:{for:"pitch.y"}},[e._v(" y:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.y,expression:"pitch.y"}],staticStyle:{width:"40px"},attrs:{type:"number"},domProps:{value:t.y},on:{input:function(i){i.target.composing||e.$set(t,"y",i.target.value)}}}),i("label",{attrs:{for:"pitch.l"}},[e._v(" handle length:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.l,expression:"pitch.l"}],staticStyle:{width:"40px"},attrs:{type:"number"},domProps:{value:t.l},on:{input:function(i){i.target.composing||e.$set(t,"l",i.target.value)}}}),i("label",{attrs:{for:"pitch.a"}},[e._v(" angle:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.a,expression:"pitch.a"}],staticStyle:{width:"40px"},attrs:{type:"number"},domProps:{value:t.a},on:{input:function(i){i.target.composing||e.$set(t,"a",i.target.value)}}}),i("label",{attrs:{for:"pitch.w"}},[e._v(" weight:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.w,expression:"pitch.w"}],staticStyle:{width:"40px"},attrs:{type:"number"},domProps:{value:t.w},on:{input:function(i){i.target.composing||e.$set(t,"w",i.target.value)}}})])])}))],2)]),i("canvas",{attrs:{id:"canvas"},on:{mousedown:e.onDown,mouseup:e.onUp,mouseout:e.onUp,mousemove:e.onMove}})])},n=[],u={data:function(){return{dt:.01,cubic:{bezier:!0,rationalBezier:!0,gradingResult:!1,numOfSize:7,vertices:[{x:150,y:100,w:1},{x:350,y:100,w:1}],handles:[{x:200,y:50,w:2},{x:300,y:50,w:2}],pitches:[{x:20,y:0,w:0,l:0,a:0},{x:20,y:0,w:0,l:0,a:0}]},quadratic:{bezier:!0,rationalBezier:!0,vertices:[{x:550,y:100,w:1},{x:750,y:100,w:1}],handles:[{x:650,y:50,w:2}]},curvature:{circle:!0,t:.5,dimension:"cubic",curveType:"bezier"}}},mounted:function(){this.dragging=!1,this.draw()},methods:{getLength:function(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))},getRadian:function(e,t){return Math.atan2(t.y-e.y,t.x-e.x)},getAngle:function(e,t){return 180*this.getRadian(e,t)/Math.PI},drawCurve:function(e,t){for(var i in this.ctx.strokeStyle=t,this.ctx.beginPath(),this.ctx.moveTo(e[0].x,e[0].y),e)this.ctx.lineTo(e[i].x,e[i].y);this.ctx.stroke()},drawPoint:function(e,t,i){this.ctx.fillStyle=i,this.ctx.fillRect(e-5,t-5,10,10)},draw:function(){if(this.canvas=document.getElementById("canvas"),this.canvas.width=1200,this.canvas.height=800,document.body.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.cubic.bezier||this.cubic.rationalBezier){for(var e in this.cubic.vertices)this.drawPoint(this.cubic.vertices[e].x,this.cubic.vertices[e].y,"rgb(0, 0, 0)"),this.drawPoint(this.cubic.handles[e].x,this.cubic.handles[e].y,"rgb(0, 0, 255)"),this.ctx.strokeStyle="rgb(0, 0, 255)",this.ctx.beginPath(),this.ctx.moveTo(this.cubic.vertices[e].x,this.cubic.vertices[e].y),this.ctx.lineTo(this.cubic.handles[e].x,this.cubic.handles[e].y),this.ctx.stroke();if(this.cubic.bezier){var t=this.getCubicBezier();this.drawCurve(t,"rgb(0, 0, 0)"),this.curvature.circle&&"cubic"==this.curvature.dimension&&"bezier"==this.curvature.curveType&&this.drawCurvatureCircle(t)}if(this.cubic.rationalBezier){var i=this.getCubicRationalBezier(this.cubic.vertices[0],this.cubic.vertices[1],this.cubic.handles[0],this.cubic.handles[1]);this.drawCurve(i,"rgb(255, 0, 0)"),this.curvature.circle&&"cubic"==this.curvature.dimension&&"rationalBezier"==this.curvature.curveType&&this.drawCurvatureCircle(i),this.cubic.gradingResult&&this.executeGrading()}}if(this.quadratic.bezier||this.quadratic.rationalBezier){for(var r in this.drawPoint(this.quadratic.handles[0].x,this.quadratic.handles[0].y,"rgb(0, 0, 255)"),this.ctx.strokeStyle="rgb(0, 0, 255)",this.quadratic.vertices)this.drawPoint(this.quadratic.vertices[r].x,this.quadratic.vertices[r].y,"rgb(0, 0, 0)"),this.ctx.fillStyle="rgb(0, 0, 255)",this.ctx.beginPath(),this.ctx.moveTo(this.quadratic.vertices[r].x,this.quadratic.vertices[r].y),this.ctx.lineTo(this.quadratic.handles[0].x,this.quadratic.handles[0].y),this.ctx.stroke();if(this.quadratic.bezier){var a=this.getQuadraticBezier();this.drawCurve(a,"rgb(0, 0, 0)"),this.curvature.circle&&"quadratic"==this.curvature.dimension&&"bezier"==this.curvature.curveType&&this.drawCurvatureCircle(a)}if(this.quadratic.rationalBezier){var c=this.getQuadraticRationalBezier();this.drawCurve(c,"rgb(255, 0, 0)"),this.curvature.circle&&"quadratic"==this.curvature.dimension&&"rationalBezier"==this.curvature.curveType&&this.drawCurvatureCircle(c)}}},getCubicBezier:function(){for(var e=[],t=Math.round(1/this.dt),i=0;i<=t;i++){var r=this.dt*i,a=this.cubic.vertices[0].x,c=this.cubic.handles[0].x,s=this.cubic.handles[1].x,n=this.cubic.vertices[1].x,u=Math.pow(1-r,3)*a+3*Math.pow(1-r,2)*r*c+3*(1-r)*Math.pow(r,2)*s+Math.pow(r,3)*n,o=this.cubic.vertices[0].y,l=this.cubic.handles[0].y,h=this.cubic.handles[1].y,d=this.cubic.vertices[1].y,v=Math.pow(1-r,3)*o+3*Math.pow(1-r,2)*r*l+3*(1-r)*Math.pow(r,2)*h+Math.pow(r,3)*d;e.push({x:u,y:v})}return e},getCubicRationalBezier:function(e,t,i,r){for(var a=[],c=Math.round(1/this.dt),s=0;s<=c;s++){var n=this.dt*s,u=e.w,o=i.w,l=r.w,h=t.w,d=e.x,v=i.x,p=r.x,b=t.x,m=Math.pow(1-n,3)*d*u+3*Math.pow(1-n,2)*n*v*o+3*(1-n)*Math.pow(n,2)*p*l+Math.pow(n,3)*b*h,g=Math.pow(1-n,3)*u+3*Math.pow(1-n,2)*n*o+3*(1-n)*Math.pow(n,2)*l+Math.pow(n,3)*h,w=m/g,y=e.y,x=i.y,f=r.y,z=t.y,_=Math.pow(1-n,3)*y*u+3*Math.pow(1-n,2)*n*x*o+3*(1-n)*Math.pow(n,2)*f*l+Math.pow(n,3)*z*h,q=Math.pow(1-n,3)*u+3*Math.pow(1-n,2)*n*o+3*(1-n)*Math.pow(n,2)*l+Math.pow(n,3)*h,M=_/q;a.push({x:w,y:M})}return a},getQuadraticBezier:function(){for(var e=[],t=0;t<=1/this.dt;t++){var i=this.dt*t,r=this.quadratic.vertices[0].x,a=this.quadratic.handles[0].x,c=this.quadratic.vertices[1].x,s=Math.pow(1-i,2)*r+2*(1-i)*i*a+Math.pow(i,2)*c,n=this.quadratic.vertices[0].y,u=this.quadratic.handles[0].y,o=this.quadratic.vertices[1].y,l=Math.pow(1-i,2)*n+2*(1-i)*i*u+Math.pow(i,2)*o;e.push({x:s,y:l})}return e},getQuadraticRationalBezier:function(){for(var e=[],t=0;t<=1/this.dt;t++){var i=this.dt*t,r=this.quadratic.vertices[0].w,a=this.quadratic.handles[0].w,c=this.quadratic.vertices[1].w,s=this.quadratic.vertices[0].x,n=this.quadratic.handles[0].x,u=this.quadratic.vertices[1].x,o=Math.pow(1-i,2)*s*r+2*(1-i)*i*n*a+Math.pow(i,2)*u*c,l=Math.pow(1-i,2)*r+2*(1-i)*i*a+Math.pow(i,2)*c,h=o/l,d=this.quadratic.vertices[0].y,v=this.quadratic.handles[0].y,p=this.quadratic.vertices[1].y,b=Math.pow(1-i,2)*d*r+2*(1-i)*i*v*a+Math.pow(i,2)*p*c,m=Math.pow(1-i,2)*r+2*(1-i)*i*a+Math.pow(i,2)*c,g=b/m;e.push({x:h,y:g})}return e},drawCurvatureCircle:function(e){var t,i=Math.round(1*this.curvature.t/this.dt);this.drawPoint(e[i].x,e[i].y,"rgb(0, 255, 0)"),0==i&&(i=1),i==1/this.dt&&(i=1/this.dt-1);var r=e[i+1].x-e[i-1].x,a=e[i+1].x+e[i-1].x-2*e[i].x,c=e[i+1].y-e[i-1].y,s=e[i+1].y+e[i-1].y-2*e[i].y,n=this.dt,u=e[i].x-(Math.pow(r/n,2)+Math.pow(c/n,2))/(r/n*s/n/n-c/n*a/n/n)*c/n,o=e[i].y+(Math.pow(r/n,2)+Math.pow(c/n,2))/(r/n*s/n/n-c/n*a/n/n)*r/n,l=Math.abs(Math.pow(Math.pow(r/n,2)+Math.pow(c/n,2),1.5)/(r/n*s/n/n-c/n*a/n/n));t={x:u,y:o,r:l},this.drawPoint(t.x,t.y,"rgb(0, 255, 0)"),this.ctx.strokeStyle="rgb(0, 255, 0)",this.ctx.beginPath(),this.ctx.moveTo(e[i].x,e[i].y),this.ctx.lineTo(t.x,t.y),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.arc(t.x,t.y,t.r,0,360),this.ctx.stroke(),this.curvature.value=1/t.r,this.curvature.r=t.r},executeGrading:function(){for(var e=[this.getRadian(this.cubic.vertices[0],this.cubic.handles[0]),this.getRadian(this.cubic.vertices[1],this.cubic.handles[1])],t=[this.getLength(this.cubic.vertices[0],this.cubic.handles[0]),this.getLength(this.cubic.vertices[1],this.cubic.handles[1])],i=1;i<this.cubic.numOfSize;i++){var r=[],a=[];for(var c in this.ctx.strokeStyle="rgb(0, 0, 255)",this.cubic.vertices){var s=parseFloat(this.cubic.pitches[c].x*i),n=parseFloat(this.cubic.pitches[c].y*i),u=parseFloat(this.cubic.pitches[c].w*i),o=this.cubic.pitches[c].a/180*Math.PI*i,l=this.cubic.pitches[c].l*i,h={x:parseFloat(this.cubic.vertices[c].x)+s,y:parseFloat(this.cubic.vertices[c].y)+n,w:this.cubic.vertices[c].w};r.push(h);var d={x:h.x+(t[c]+l)*Math.cos(e[c]+o),y:h.y+(t[c]+l)*Math.sin(e[c]+o),w:parseFloat(this.cubic.handles[c].w)+u};a.push(d),this.ctx.beginPath(),this.ctx.moveTo(h.x,h.y),this.ctx.lineTo(d.x,d.y),this.ctx.stroke()}var v=this.getCubicRationalBezier(r[0],r[1],a[0],a[1]);this.drawCurve(v,"rgb(255, 0, 0)")}},onDown:function(e){var t=this.canvas.getBoundingClientRect().left,i=this.canvas.getBoundingClientRect().top,r=e.clientX-t,a=e.clientY-i;for(var c in this.cubic.vertices){var s=this.cubic.vertices[c];this.objDrag(s,r,a)}for(var n in this.cubic.handles){var u=this.cubic.handles[n];this.objDrag(u,r,a)}for(var o in this.quadratic.vertices){var l=this.quadratic.vertices[o];this.objDrag(l,r,a)}for(var h in this.quadratic.handles){var d=this.quadratic.handles[h];this.objDrag(d,r,a)}},objDrag:function(e,t,i){e.x-5<t&&e.x+5>t&&e.y-5<i&&e.y+5>i&&(this.dragging=!0,this.target=e,this.relX=this.target.x-t,this.relY=this.target.y-i)},onMove:function(e){var t=this.canvas.getBoundingClientRect().left,i=this.canvas.getBoundingClientRect().top,r=e.clientX-t,a=e.clientY-i;this.dragging&&(this.target.x=r+this.relX,this.target.y=a+this.relY,this.draw())},onUp:function(){this.dragging=!1}},watch:{cubic:{handler:function(){this.draw()},deep:!0},quadratic:{handler:function(){this.draw()},deep:!0},curvature:{handler:function(){this.draw()},deep:!0}}},o=u,l=(i("d764"),i("2877")),h=Object(l["a"])(o,s,n,!1,null,"8ccd5fe6",null),d=h.exports,v={name:"App",components:{Bezier:d}},p=v,b=(i("034f"),Object(l["a"])(p,a,c,!1,null,null,null)),m=b.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(m)}}).$mount("#app")},"85ec":function(e,t,i){},"99c7":function(e,t,i){},d764:function(e,t,i){"use strict";var r=i("99c7"),a=i.n(r);a.a}});
//# sourceMappingURL=app.c33d8aa1.js.map