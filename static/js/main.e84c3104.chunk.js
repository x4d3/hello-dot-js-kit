(this.webpackJsonppoc=this.webpackJsonppoc||[]).push([[0],{37:function(e,t,o){},38:function(e,t,o){},56:function(e,t,o){"use strict";o.r(t);var n=o(0),c=o.n(n),a=o(32),l=o.n(a),r=(o(37),o(38),o(39),o(2));function i(){return Object(r.jsx)("div",{children:"Example"})}var s=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,57)).then((function(t){var o=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,l=t.getTTFB;o(e),n(e),c(e),a(e),l(e)}))},d=o(7),u=o(1),j=function(e){return Object(n.useEffect)((function(){var t=document.getElementById("x-dot-document-auto-capture");t?(console.log(t),t.cameraOptions=e):console.log("documentAutoCaptureHTMLElement not found")})),Object(r.jsx)("x-dot-document-auto-capture",{id:"x-dot-document-auto-capture"})},b={modelJSON:"blaze_model/docu_3cl_background/model.json",modelBin:"blaze_model/docu_3cl_background/group1-shard1of1.bin"},m=function(){return Object(r.jsxs)("div",{className:"container",style:{height:500,width:500},children:[Object(r.jsx)("div",{children:"Scan Documents"}),Object(r.jsx)(j,{imageType:"png",cameraFacing:"environment",photoTakenCb:function(e,t){console.log("handleDocumentPhotoTaken"),console.log({image:e,resolution:t})},modelUrls:b})]})},O=o(4),h=(o(55),function(e){return Object(n.useEffect)((function(){document.getElementById("x-dot-face-auto-capture").cameraOptions=e})),Object(r.jsx)("x-dot-face-auto-capture",{id:"x-dot-face-auto-capture"})}),f=function(){var e=Object(n.useState)({}),t=Object(O.a)(e,2),o=t[0],c=t[1];return Object(r.jsxs)("div",{className:"container",style:{height:500,width:500},children:[Object(r.jsx)(h,{imageType:"png",cameraFacing:"user",photoTakenCb:function(e,t){console.log({image:e,resolution:t}),c({image:e,resolution:t})},onError:function(e){console.log(e),c({error:e})},modelUrls:{modelJSON:"blaze_model/face_4cl/model.json",modelBin:"blaze_model/face_4cl/group1-shard1of1.bin"},uiCustomisation:{placeholder:{facePlaceholder:"ellipse-solid"},instructions:{face_too_close:"TOO CLOSE YOU ",face_too_far:"TOO FAR!!"},colors:{placeholderColor:"#EEEEEE",instructionTextColor:"#080808"}}}),Object(r.jsx)("pre",{children:JSON.stringify(o,null,2)})]})};function x(){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("nav",{style:{borderBottom:"solid 1px",paddingBottom:"1rem"},children:[Object(r.jsx)(d.b,{to:"/document",children:"Document"})," |"," ",Object(r.jsx)(d.b,{to:"/face",children:"Face"})]}),Object(r.jsx)("hr",{}),Object(r.jsx)(u.a,{})]})}l.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(d.a,{basename:"/hello-dot-js-kit",children:Object(r.jsx)(u.d,{children:Object(r.jsxs)(u.b,{path:"/",element:Object(r.jsx)(x,{}),children:[Object(r.jsx)(u.b,{index:!0,element:Object(r.jsx)(i,{})}),Object(r.jsx)(u.b,{path:"document",element:Object(r.jsx)(m,{})}),Object(r.jsx)(u.b,{path:"face",element:Object(r.jsx)(f,{})})]})})})}),document.getElementById("root")),s()}},[[56,1,2]]]);
//# sourceMappingURL=main.e84c3104.chunk.js.map