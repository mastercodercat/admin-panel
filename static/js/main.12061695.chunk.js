(this["webpackJsonpadmin-dashboard"]=this["webpackJsonpadmin-dashboard"]||[]).push([[0],{111:function(e,t,n){},113:function(e,t,n){"use strict";n.r(t);var a=n(72),r=n(0),s=n(40),c=n.n(s),i=(n(95),n(34)),u=n.n(i),o=n(44),l=n(16),d=n(28),j=n(125),b=n(128),h=n(41),O=n(17),p=n(38);function m(e){console.error(e),alert(e)}function x(e){return e.length>10&&e.length<=15}function g(e){return e.length>=3}function f(e){var t=e.username,n=e.title,a=e.latitude,r=e.longitude;return!!(isFinite(a)&&Math.abs(a)<=90)&&(!!(isFinite(r)&&Math.abs(r)<=180)&&(t.length>=3&&n.length>=3))}var v=function(){window.sessionStorage.clear(),window.location.href="/"},D=n(70),C=n(59),y=n(79),k=n(80),w=n(3);var S,U,E=function(){return Object(w.jsx)(D.a,{bg:"dark",variant:"dark",children:Object(w.jsxs)(y.a,{children:[Object(w.jsx)(D.a.Brand,{href:"https://bitcoinbeach.com",children:Object(w.jsx)(k.a,{src:"/BBLogo.png",rounded:!0})}),Object(w.jsx)(C.a,{className:"mr-auto",children:Object(w.jsx)(C.a.Link,{href:"/dashboard",children:"Home"})}),Object(w.jsx)(C.a,{children:Object(w.jsx)(O.a,{onClick:v,variant:"dark",children:"Logout"})})]})})},L=(n(111),Object(j.a)(S||(S=Object(d.a)(["\n  mutation userRequestAuthCode($input: UserRequestAuthCodeInput!) {\n    mutationData: userRequestAuthCode(input: $input) {\n      errors {\n        message\n      }\n      success\n    }\n  }\n"])))),I=Object(j.a)(U||(U=Object(d.a)(["\n  mutation login($input: UserLoginInput!) {\n    mutationData: userLogin(input: $input) {\n      errors {\n        message\n      }\n      authToken\n    }\n  }\n"])));function A(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(""),c=Object(l.a)(s,2),i=c[0],d=c[1],j=Object(r.useState)(!1),g=Object(l.a)(j,2),f=g[0],v=g[1],D=Object(b.a)(L),C=Object(l.a)(D,2),y=C[0],k=C[1].loading,S=Object(b.a)(I),U=Object(l.a)(S,2),A=U[0],$=U[1].loading,T=function(){function e(){return(e=Object(o.a)(u.a.mark((function e(t){var a,r,s,c,i,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,y({variables:{input:{phone:n}}});case 3:if(a=e.sent,r=a.error,s=a.data,!r){e.next=8;break}return e.abrupt("return",m(r.message));case 8:if(c=s.mutationData,i=c.errors,o=c.success,!(i.length>0)){e.next=11;break}return e.abrupt("return",m(i[0].message));case 11:o?v(!0):m("Could not execute operation");case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(w.jsxs)(p.a,{onSubmit:function(t){return e.apply(this,arguments)},children:[Object(w.jsx)(p.a.Group,{size:"lg",children:Object(w.jsx)(p.a.Control,{autoFocus:!0,type:"tel",placeholder:"Enter phone number",value:n,onChange:function(e){return a(e.target.value)}})}),Object(w.jsx)(O.a,{block:!0,size:"lg",type:"submit",disabled:!x(n),children:"Login"})]})},B=function(){function e(){return(e=Object(o.a)(u.a.mark((function e(t){var a,r,s,c,o,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,A({variables:{input:{phone:n,code:i}}});case 3:if(a=e.sent,r=a.error,s=a.data,!r){e.next=8;break}return e.abrupt("return",m(r.message));case 8:if(c=s.mutationData,o=c.errors,l=c.authToken,!(o.length>0)){e.next=11;break}return e.abrupt("return",m(o[0].message));case 11:l?(window.sessionStorage.setItem("token",l),Object(h.navigate)("/dashboard",!0)):m("Could not execute operation");case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(w.jsxs)(p.a,{onSubmit:function(t){return e.apply(this,arguments)},children:[Object(w.jsx)(p.a.Group,{size:"lg",children:Object(w.jsx)(p.a.Control,{autoFocus:!0,type:"text",placeholder:"Enter Auth Code",value:i,onChange:function(e){return d(e.target.value)}})}),Object(w.jsx)(O.a,{block:!0,size:"lg",type:"submit",disabled:(t=i,!(6===t.length)),children:"Login"})]});var t};return Object(w.jsxs)("div",{children:[Object(w.jsx)(E,{}),Object(w.jsxs)("div",{className:"Login",children:[!f&&Object(w.jsx)(T,{}),f&&Object(w.jsx)(B,{}),(k||$)&&Object(w.jsx)("p",{children:"Loading..."})]})]})}var $=n(46),T=n(24);function B(){return Object(w.jsxs)("div",{children:[Object(w.jsx)(E,{}),Object(w.jsx)(y.a,{fluid:!0,style:{marginTop:"50px"},children:Object(w.jsxs)($.a,{className:"justify-content-md-center",children:[Object(w.jsx)(T.a,{md:"auto",children:Object(w.jsx)(O.a,{size:"lg",href:"/dashboard/userDetails",children:"User Details"})}),Object(w.jsx)(T.a,{md:"auto",children:Object(w.jsx)(O.a,{size:"lg",href:"/dashboard/addToMap",children:"Add Business To Map"})})]})})]})}var F,z,M,q,G=n(126),N=n(84),P=Object(j.a)(F||(F=Object(d.a)(["\n  query getUserDetails($phone: Phone!) {\n    userDetails: userDetailsByPhone(phone: $phone) {\n      id\n      phone\n      username\n      level\n      status\n      title\n      coordinates {\n        latitude\n        longitude\n      }\n      createdAt\n    }\n  }\n"]))),R=Object(j.a)(z||(z=Object(d.a)(["\n  query getUserDetails($username: Username!) {\n    userDetails: userDetailsByUsername(username: $username) {\n      id\n      phone\n      username\n      level\n      status\n      title\n      coordinates {\n        latitude\n        longitude\n      }\n      createdAt\n    }\n  }\n"]))),J=Object(j.a)(M||(M=Object(d.a)(["\n  mutation userUpdateStatus($input: UserUpdateStatusInput!) {\n    mutationData: userUpdateStatus(input: $input) {\n      errors {\n        message\n      }\n      userDetails {\n        id\n        phone\n        username\n        level\n        status\n        title\n        coordinates {\n          latitude\n          longitude\n        }\n        createdAt\n      }\n    }\n  }\n"]))),K=Object(j.a)(q||(q=Object(d.a)(["\n  mutation userUpdateLevel($input: UserUpdateLevelInput!) {\n    mutationData: userUpdateLevel(input: $input) {\n      errors {\n        message\n      }\n      userDetails {\n        id\n        phone\n        username\n        level\n        status\n        title\n        coordinates {\n          latitude\n          longitude\n        }\n        createdAt\n      }\n    }\n  }\n"])));var V,W=function(){var e=r.useState(""),t=Object(l.a)(e,2),n=t[0],a=t[1],s=r.useState(""),c=Object(l.a)(s,2),i=c[0],u=c[1],o=r.useState(""),d=Object(l.a)(o,2),j=d[0],h=d[1],f=Object(G.a)(P,{onCompleted:function(e){var t=e.userDetails;h(t)},onError:function(e){m(e.message),a("")}}),v=Object(l.a)(f,2),D=v[0],C=v[1].loading,k=Object(G.a)(R,{onCompleted:function(e){var t=e.userDetails;h(t)},onError:function(e){m(e.message),u("")}}),S=Object(l.a)(k,2),U=S[0],L=S[1].loading,I=Object(b.a)(J,{onCompleted:function(e){var t=e.mutationData;h(t.userDetails),alert("".concat(j.username,"'s account level has been changed successfully"))},onError:function(e){console.error(e),alert(e.message)}}),A=Object(l.a)(I,1)[0],B=Object(b.a)(K,{onCompleted:function(e){var t=e.mutationData;h(t.userDetails),alert("".concat(j.username,"'s account status has been changed successfully"))},onError:function(e){console.error(e),alert(e.message)}}),F=Object(l.a)(B,1)[0];return Object(w.jsxs)("div",{children:[Object(w.jsx)(E,{}),Object(w.jsxs)(y.a,{fluid:!0,children:[Object(w.jsx)("br",{}),Object(w.jsxs)($.a,{className:"justify-content-md-center",children:[Object(w.jsx)(T.a,{md:"auto",children:Object(w.jsx)(p.a,{inline:!0,onSubmit:function(e){e.preventDefault(),D({variables:{phone:n}})},children:Object(w.jsxs)(p.a.Group,{children:[Object(w.jsx)(p.a.Control,{type:"tel",placeholder:"Enter user's phone number",value:n,onChange:function(e){return a(e.target.value)}}),Object(w.jsx)(O.a,{type:"submit",disabled:!x(n),children:"Submit"})]})})}),Object(w.jsx)(T.a,{md:"auto",children:Object(w.jsx)(p.a,{inline:!0,onSubmit:function(e){e.preventDefault(),U({variables:{username:i}})},children:Object(w.jsxs)(p.a.Group,{children:[Object(w.jsx)(p.a.Control,{placeholder:"Enter user's user name",value:i,onChange:function(e){return u(e.target.value)}}),Object(w.jsx)(O.a,{type:"submit",disabled:!g(i),children:"Submit"})]})})})]}),Object(w.jsxs)($.a,{children:[(C||L)&&Object(w.jsx)(T.a,{md:"auto",children:"Getting user details..."}),j&&Object(w.jsxs)(N.a,{bordered:!0,hover:!0,striped:!0,style:{margin:"15px"},children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{children:"Phone"}),Object(w.jsx)("th",{children:"Username"}),Object(w.jsx)("th",{children:"Title"}),Object(w.jsx)("th",{children:"Latitude"}),Object(w.jsx)("th",{children:"Longtitude"}),Object(w.jsx)("th",{children:"Created At"}),Object(w.jsx)("th",{children:"Level"}),Object(w.jsx)("th",{children:"Status"})]})}),Object(w.jsx)("tbody",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:j.phone}),Object(w.jsx)("td",{children:j.username}),Object(w.jsx)("td",{children:j.title}),Object(w.jsx)("td",{children:j.coordinates?j.coordinates.latitude:""}),Object(w.jsx)("td",{children:j.coordinates?j.coordinates.longitude:""}),Object(w.jsx)("td",{children:new Date(parseInt(j.createdAt)).toString()}),Object(w.jsxs)("td",{children:[j.level," ",Object(w.jsx)(O.a,{variant:"outline-danger",disabled:"TWO"===j.level,size:"sm",onClick:function(){F({variables:{input:{uid:j.id,level:"TWO"}}})},children:"Upgrade"})," "]}),Object(w.jsxs)("td",{children:[j.status," ",Object(w.jsx)(O.a,{variant:"outline-danger",size:"sm",onClick:function(){var e="ACTIVE"===j.status?"LOCKED":"ACTIVE";window.confirm("Clicking OK will change ".concat(j.phone,"'s status to ").concat(e,". Do you wish to proceed?"))&&A({variables:{input:{uid:j.id,status:e}}})},children:"Change"})," "]})]})})]})]})]})]})},H=Object(j.a)(V||(V=Object(d.a)(["\n  mutation businessUpdateMapInfo($input: BusinessUpdateMapInfoInput!) {\n    mutationData: businessUpdateMapInfo(input: $input) {\n      errors {\n        message\n      }\n      userDetails {\n        id\n      }\n    }\n  }\n"])));var Q=function(){var e=Object(b.a)(H),t=Object(l.a)(e,1)[0],n=function(){var e=Object(o.a)(u.a.mark((function e(n){var a,r,s,c,i,o,l,d,j,b;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=n.target,s=r.username,c=r.title,i=r.longitude,o=r.latitude,f(l={username:s.value,title:c.value,longitude:parseFloat(i.value),latitude:parseFloat(o.value)})){e.next=6;break}return alert("Invalid input values"),e.abrupt("return");case 6:return e.next=8,t({variables:{input:l}});case 8:d=e.sent,j=d.data,(b=d.errors)||(null===j||void 0===j||null===(a=j.mutationData)||void 0===a?void 0:a.errors.length)>0?(console.error({errors:b,userErrors:j.mutationData.errors}),alert("Error adding merchant to map")):alert("Added successfully!"),s.value="",c.value="",i.value="",o.value="";case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsxs)("div",{children:[Object(w.jsx)(E,{}),Object(w.jsxs)(y.a,{fluid:!0,children:[Object(w.jsx)("br",{}),Object(w.jsx)($.a,{className:"justify-content-md-center",children:Object(w.jsx)(T.a,{md:"auto",children:Object(w.jsx)(p.a,{onSubmit:n,children:Object(w.jsxs)(p.a.Group,{children:[Object(w.jsx)(p.a.Control,{placeholder:"Enter user name",name:"username"}),Object(w.jsx)(p.a.Control,{placeholder:"Enter title",name:"title"}),Object(w.jsx)(p.a.Control,{placeholder:"Enter latitude",name:"latitude"}),Object(w.jsx)(p.a.Control,{placeholder:"Enter longitude",name:"longitude"}),Object(w.jsx)(O.a,{type:"submit",children:"Submit"})]})})})})]})]})},X={"/":function(){return Object(w.jsx)(A,{})},"/dashboard*":function(){return Object(w.jsx)(Z,{})}},Y={"/":function(){return Object(w.jsx)(B,{})},"/userDetails":function(){return Object(w.jsx)(W,{})},"/addToMap":function(){return Object(w.jsx)(Q,{})}},Z=function(){var e=Object(h.useRoutes)(Y);return Boolean(window.sessionStorage.getItem("token"))||Object(h.navigate)("/"),e};var _=function(){return Object(h.useRoutes)(X)||Object(w.jsx)(A,{})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,129)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))},te=n(124),ne=n(123),ae=n(122),re=n(121),se=n(85),ce="https://admin-api.testnet.galoy.io/graphql";var ie=new te.a,ue=new ne.a({uri:ce,fetch:fetch}),oe=Object(se.a)((function(e,t){var n=t.headers,r=window.sessionStorage.getItem("token");return{headers:Object(a.a)(Object(a.a)({},n),{},{Authorization:r?"Bearer ".concat(r):""})}})),le=new ae.a({link:oe.concat(ue),cache:ie});c.a.render(Object(w.jsx)(re.a,{client:le,children:Object(w.jsx)(_,{})}),document.getElementById("root")),ee()},95:function(e,t,n){}},[[113,1,2]]]);
//# sourceMappingURL=main.12061695.chunk.js.map