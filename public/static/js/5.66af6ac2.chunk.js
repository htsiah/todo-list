(window["webpackJsonpmern-car-inpection-challenge-fontend"]=window["webpackJsonpmern-car-inpection-challenge-fontend"]||[]).push([[5],{316:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(301),r=a.n(n),c=a(302),l=a(0),s=function(){var e=Object(l.useRef)([]),t=Object(l.useCallback)(function(){var t=Object(c.a)(r.a.mark((function t(a){var n,c,l,s,i,o,u=arguments;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"GET",c=u.length>2&&void 0!==u[2]?u[2]:null,l=u.length>3&&void 0!==u[3]?u[3]:{},s=new AbortController,e.current.push(s),t.prev=5,t.next=8,fetch(a,{method:n,body:c,headers:l,signal:s.signal});case 8:return i=t.sent,t.next=11,i.json();case 11:if(o=t.sent,e.current=e.current.filter((function(e){return e!==s})),i.ok){t.next=15;break}throw new Error(o.message);case 15:return t.abrupt("return",o);case 18:throw t.prev=18,t.t0=t.catch(5),t.t0;case 21:case"end":return t.stop()}}),t,null,[[5,18]])})));return function(e){return t.apply(this,arguments)}}(),[]);return Object(l.useEffect)((function(){return function(){e.current.forEach((function(e){return e.abort()}))}}),[]),{sendRequest:t}}},372:function(e,t){},453:function(e,t,a){"use strict";a.r(t);var n=a(78),r=a(0),c=a.n(r),l=function(e){return c.a.createElement("div",{className:"content-wrapper"},e.unwrap?c.a.createElement("div",{className:"unwrap"},e.children):e.children)};l.defaultProps={unwrap:!1};var s=l,i=a(307),o=a(131),u=a(301),d=a.n(u),m=a(302),p=a(313),f=a.n(p),h=a(36),v=a(37),E=a(39),b=a(38),k=a(299),y=a.n(k),j=a(367);window.JSZip=j,a(417),a(418),a(330),a(419),a(420),a(311),a(421),a(357),a(422),a(423),a(424),a(425),a(426),a(427),a(428),a(429);var g=function(e){Object(E.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).setRef=function(t){return e.tableElement=t},e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=y()(this.tableElement).dataTable(this.props.options);this.props.dtInstance&&this.props.dtInstance(e)}},{key:"componentWillUnmount",value:function(){y()(this.tableElement).dataTable({destroy:!0})}},{key:"render",value:function(){return c.a.cloneElement(c.a.Children.only(this.props.children),{ref:this.setRef})}}]),a}(r.Component);g.defaultProps={options:{}};var O=a(430),w=a.n(O),N=(a(440),a(40)),x=a(316),D=function(e,t,a){var c=Object(r.useState)(Object(N.a)({},e)),l=Object(n.a)(c,2),s=l[0],i=l[1],o=Object(r.useState)({}),u=Object(n.a)(o,2),p=u[0],h=u[1],v=Object(r.useState)(!1),E=Object(n.a)(v,2),b=E[0],k=E[1],y=Object(x.a)().sendRequest;Object(r.useEffect)((function(){i(Object(N.a)({},e))}),[a.showTodoModal]),Object(r.useEffect)((function(){""===a.docID?i(Object(N.a)({},e)):function(){var e=Object(m.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y("https://to-do-list-assess.herokuapp.com/api/todolist/getbyid?id="+a.docID);case 3:t=e.sent,i(Object(N.a)(Object(N.a)({},t),{},{dueAt:f()(t.dueAt).format("DD-MMM-YYYY")})),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()()}),[a.docID]),Object(r.useEffect)((function(){b&&(0===Object.keys(p).length?(a.toggleTodoModal(""),""===a.docID?function(){var e=Object(m.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://to-do-list-assess.herokuapp.com/api/todolist",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({status:s.status,priority:s.priority,description:s.description,dueAt:f()(s.dueAt).format("DD-MMM-YYYY")})});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,a.addTableData(Object(N.a)(Object(N.a)({},s),{},{id:n._id})),k(!1),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(0);case 13:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}()():function(){var e=Object(m.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y("https://to-do-list-assess.herokuapp.com/api/todolist?id="+a.docID,"PATCH",JSON.stringify({status:s.status,priority:s.priority,description:s.description,dueAt:f()(s.dueAt).format("DD-MMM-YYYY")}),{"Content-Type":"application/json"});case 3:a.updateTableData(Object(N.a)(Object(N.a)({},s),{},{id:a.docID})),k(!1),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()()):k(!1))}),[b]);return{handleSubmit:function(){var e=Object(m.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),h(t(s)),k(!0);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),handleChange:function(e){i(Object(N.a)(Object(N.a)({},s),{},{[e.target.name]:e.target.value}))},handleCustomChange:function(e,t,a){i("date_m"===e?""===a?Object(N.a)(Object(N.a)({},s),{},{[t]:f()(s[t])}):Object(N.a)(Object(N.a)({},s),{},{[t]:a}):Object(N.a)(Object(N.a)({},s),{},{[t]:a}))},handleBlur:function(){h(t(s))},values:s,errors:p,isSubmitting:b}};function C(e){var t={};return e.status||(t.status="Please select status."),e.priority||(t.priority="Please select priority."),e.description||(t.description="Please enter description."),t}var M=function(e){var t={id:"",status:"",priority:"",description:"",dueAt:f()()},a=D(t,C,e),n=a.handleSubmit,r=a.handleChange,l=a.handleCustomChange,s=a.handleBlur,o=a.values,u=a.errors,d=a.isSubmitting;return c.a.createElement(c.a.Fragment,null,c.a.createElement(i.i,{isOpen:e.showTodoModal,toggle:function(t){return e.toggleTodoModal("")}},c.a.createElement(i.l,{toggle:function(t){return e.toggleTodoModal("")}},""===e.docID?"Add New Item":"Edit Item"),c.a.createElement(i.j,null,c.a.createElement("form",{className:"form-horizontal",onSubmit:n},c.a.createElement(i.g,{row:!0},c.a.createElement("div",{className:"col-xl-12"},c.a.createElement("select",{id:"status",name:"status",type:"text",onChange:r,onBlur:s,value:o.status,className:u.status?"custom-select custom-select-sm is-invalid":"custom-select custom-select-sm"},c.a.createElement("option",{key:"0",value:""},"Select Status"),c.a.createElement("option",{key:"1",value:"Incomplete"},"Incomplete"),c.a.createElement("option",{key:"2",value:"Completed"},"Completed")),u.status&&c.a.createElement("p",{className:"text-danger"},u.status))),c.a.createElement(i.g,{row:!0},c.a.createElement("div",{className:"col-xl-12"},c.a.createElement("select",{id:"priority",name:"priority",type:"text",onChange:r,onBlur:s,value:o.priority,className:u.priority?"custom-select custom-select-sm is-invalid":"custom-select custom-select-sm"},c.a.createElement("option",{key:"0",value:""},"Select Priority"),c.a.createElement("option",{key:"1",value:"Low Priority"},"Low Priority"),c.a.createElement("option",{key:"2",value:"Medium Priority"},"Medium Priority"),c.a.createElement("option",{key:"3",value:"High Priority "},"High Priority")),u.prority&&c.a.createElement("p",{className:"text-danger"},u.prority))),c.a.createElement(i.g,{row:!0},c.a.createElement("div",{className:"col-xl-12"},c.a.createElement(i.h,{id:"description",name:"description",type:"text",value:o.description,onChange:r,placeholder:"Description"}),u.description&&c.a.createElement("p",{className:"text-danger"},u.description))),c.a.createElement(i.g,{row:!0},c.a.createElement("div",{className:"col-xl-12"},c.a.createElement(w.a,{dateFormat:"DD-MMM-YYYY",timeFormat:!1,closeOnSelect:!0,onChange:function(e,t){return l("date_m","dueAt",e)},value:o.dueAt,inputProps:{id:"dueAt",name:"dueAt",className:"form-control"}}))))),c.a.createElement(i.k,null,c.a.createElement(i.a,{color:"primary",onClick:n,disabled:d},""===e.docID?"Add New":"Save"))))},S=a(452),T=a(1),A=a.n(T),Y=a(441),P=a.n(Y),I=function(e){e.callback;var t=Object(S.a)(e,["callback"]);return c.a.createElement("div",Object.assign({},t,{onClick:function(t){t.preventDefault(),P()(e.options).then((function(t){return e.callback(t,P.a)}))}}),e.children)};I.propType={options:A.a.object.isRequired,callback:A.a.func},I.defaultProps={callback:function(){}};var R=I,L=function(e){var t=Object(x.a)().sendRequest,a=function(){var a=Object(m.a)(d.a.mark((function a(n){return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!n){a.next=10;break}return a.prev=1,console.log("https://to-do-list-assess.herokuapp.com/api"+e.delurl),a.next=5,t("https://to-do-list-assess.herokuapp.com/api"+e.delurl,"DELETE");case 5:e.onDeleteData(e.docid),a.next=10;break;case 8:a.prev=8,a.t0=a.catch(1);case 10:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement(R,{options:{title:"Are you sure?",text:"",icon:"warning",buttons:{cancel:!0,confirm:{text:"Yes",value:!0,visible:!0,className:"bg-danger",closeModal:!0}}},callback:a,title:"Delete Task",className:"btn btn-sm btn-danger"},c.a.createElement("i",{className:"fa fa-times"})))},q=(a(359),function(e){var t=Object(r.useState)(),a=Object(n.a)(t,2),l=a[0],u=a[1],p=Object(r.useState)(!1),h=Object(n.a)(p,2),v=h[0],E=h[1],b=Object(r.useState)(""),k=Object(n.a)(b,2),y=k[0],j=k[1];Object(r.useEffect)((function(){(function(){var e=Object(m.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://to-do-list-assess.herokuapp.com/api/todolist");case 3:return t=e.sent,e.next=6,t.json();case 6:(a=e.sent).length<1&&O(""),u(a),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(0);case 13:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var O=function(e){j(e),E((function(e){return!e}))},w=function(e){u((function(t){return t.filter((function(t){return t.id!==e}))}))};return c.a.createElement(s,null,c.a.createElement("div",{className:"content-heading"},c.a.createElement("div",{className:"ml-auto"},c.a.createElement("button",{className:"btn btn-xs btn-secondary",type:"button",onClick:function(e){return O("")}},c.a.createElement("span",{className:"btn-label"},c.a.createElement("i",{className:"fas fa-plus-square"})),"Add Task"),c.a.createElement(M,{docID:y,showTodoModal:v,toggleTodoModal:O,addTableData:function(e){var t=l.concat(e);u(t)},updateTableData:function(e){var t=l.findIndex((function(t){return t.id===e.id})),a=Object(o.a)(l);a[t]=e,u(a)}}))),c.a.createElement(i.f,{fluid:!0},c.a.createElement(i.b,null,c.a.createElement(i.c,null,void 0===l&&c.a.createElement("div",{className:"card-body d-flex align-items-center justify-content-center"},c.a.createElement("div",{className:"sk-circle"},c.a.createElement("div",{className:"sk-circle1 sk-child"}),c.a.createElement("div",{className:"sk-circle2 sk-child"}),c.a.createElement("div",{className:"sk-circle3 sk-child"}),c.a.createElement("div",{className:"sk-circle4 sk-child"}),c.a.createElement("div",{className:"sk-circle5 sk-child"}),c.a.createElement("div",{className:"sk-circle6 sk-child"}),c.a.createElement("div",{className:"sk-circle7 sk-child"}),c.a.createElement("div",{className:"sk-circle8 sk-child"}),c.a.createElement("div",{className:"sk-circle9 sk-child"}),c.a.createElement("div",{className:"sk-circle10 sk-child"}),c.a.createElement("div",{className:"sk-circle11 sk-child"}),c.a.createElement("div",{className:"sk-circle12 sk-child",s:!0}))),void 0!==l&&c.a.createElement("div",{className:"table-responsive"},c.a.createElement(g,{options:{pageLength:10,paging:!0,ordering:!1,info:!0,responsive:!1,bAutoWidth:!1}},c.a.createElement("table",{className:"table table-striped my-4 w-100"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{"data-priority":"1"},"Status"),c.a.createElement("th",null,"Priority"),c.a.createElement("th",null,"Description"),c.a.createElement("th",null,"Due Date"),c.a.createElement("th",null))),c.a.createElement("tbody",null,l.map((function(e){return c.a.createElement("tr",{key:e.id},c.a.createElement("td",null,e.status),c.a.createElement("td",null,e.priority),c.a.createElement("td",null,e.description),c.a.createElement("td",null,f()(e.dueAt).format("DD-MMM-YYYY")),c.a.createElement("td",null,c.a.createElement("div",{className:"btn-group"},c.a.createElement("button",{className:"btn btn-sm btn-primary",type:"button",onClick:function(){return O(e.id)},alt:"Edit Task"},c.a.createElement("i",{className:"fa fa-pencil-alt"})),c.a.createElement(L,{docid:e.id,delurl:"/todolist?id="+e.id,onDeleteData:w}))))}))))))))))}),W=function(e){var t=Object(r.useState)(),a=Object(n.a)(t,2),l=a[0],o=a[1];Object(r.useEffect)((function(){var e=function(){var e=Object(m.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://to-do-list-assess.herokuapp.com/api/todolist/latest");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,o(a),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();console.log("ww"),e()}),[]);return c.a.createElement(s,null,c.a.createElement(i.f,{fluid:!0},c.a.createElement(i.b,null,c.a.createElement(i.c,null,void 0===l&&c.a.createElement("div",{className:"card-body d-flex align-items-center justify-content-center"},c.a.createElement("div",{className:"sk-circle"},c.a.createElement("div",{className:"sk-circle1 sk-child"}),c.a.createElement("div",{className:"sk-circle2 sk-child"}),c.a.createElement("div",{className:"sk-circle3 sk-child"}),c.a.createElement("div",{className:"sk-circle4 sk-child"}),c.a.createElement("div",{className:"sk-circle5 sk-child"}),c.a.createElement("div",{className:"sk-circle6 sk-child"}),c.a.createElement("div",{className:"sk-circle7 sk-child"}),c.a.createElement("div",{className:"sk-circle8 sk-child"}),c.a.createElement("div",{className:"sk-circle9 sk-child"}),c.a.createElement("div",{className:"sk-circle10 sk-child"}),c.a.createElement("div",{className:"sk-circle11 sk-child"}),c.a.createElement("div",{className:"sk-circle12 sk-child",s:!0}))),void 0!==l&&c.a.createElement("div",{className:"table-responsive"},c.a.createElement(g,{options:{lengthChange:!1,searching:!1,paging:!1,ordering:!1,info:!1,responsive:!1,bAutoWidth:!0}},c.a.createElement("table",{className:"table table-striped my-4 w-100"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{"data-priority":"1"},"Status"),c.a.createElement("th",null,"Priority"),c.a.createElement("th",null,"Description"))),c.a.createElement("tbody",null,l.map((function(e){return c.a.createElement("tr",{key:e.id},c.a.createElement("td",null,e.status),c.a.createElement("td",null,e.priority),c.a.createElement("td",null,e.description))}))))))))))},F=function(e){var t=Object(r.useState)({}),a=Object(n.a)(t,2),l=a[0],s=a[1];return Object(r.useEffect)((function(){(function(){var e=Object(m.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://to-do-list-assess.herokuapp.com/api/todolist/getreviewstatictic");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,s(a),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}})()()}),[]),c.a.createElement(i.b,{className:"card-default"},c.a.createElement(i.d,null,"Statistics"),c.a.createElement(i.c,null,c.a.createElement("center",null,c.a.createElement("h1",null,l.totalCompleted," / ",l.totalTask),c.a.createElement("h2",null,"Completed task vs number of task"))))},J=a(442),B=a.n(J),H=(a(445),a(446),a(447),a(448),a(449),a(450),a(451),function(e){Object(E.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).setRef=function(t){e.flotElement=t},e}return Object(v.a)(a,[{key:"componentWillMount",value:function(){if("undefined"===typeof y.a.plot)throw new Error("Flot plugin not present.")}},{key:"componentDidMount",value:function(){this.dreawChart()}},{key:"componentWillReceiveProps",value:function(e){B()(e.data,this.props.data)&&B()(e.options,this.props.options)||this.dreawChart(e)}},{key:"componentWillUnmount",value:function(){}},{key:"dreawChart",value:function(e){var t=e&&e.data||this.props.data,a=e&&e.options||this.props.options;y.a.plot(this.flotElement,t,a)}},{key:"render",value:function(){var e={height:this.props.height,width:this.props.width,color:"white"};return c.a.createElement("div",{ref:this.setRef,style:e})}}]),a}(r.Component));H.defaultProps={height:"300px",width:"100%"};var _=H,U=function(e){var t=Object(r.useState)({}),a=Object(n.a)(t,2),l=a[0],s=a[1];Object(r.useEffect)((function(){(function(){var e=Object(m.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://to-do-list-assess.herokuapp.com/api/todolist/getreviewchart");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,s(a),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var o={series:{pie:{show:!0,innerRadius:0,label:{show:!0,radius:.8,formatter:function(e,t){return'<div class="flot-pie-label">'+Math.round(t.percent)+"%</div>"},background:{opacity:.8,color:"#222"}}}}};return c.a.createElement(i.b,{className:"card-default"},c.a.createElement(i.d,null,"Donut Chart"),c.a.createElement(i.c,null,c.a.createElement(_,{options:o,data:l,className:"flot-chart",height:"250px"}),c.a.createElement("center",null,c.a.createElement("h2",null,"Completed task vs incompleted task"))))};t.default=function(e){var t=Object(r.useState)("all"),a=Object(n.a)(t,2),l=a[0],o=a[1],u=function(e){l!==e&&o(e)};return c.a.createElement(s,null,c.a.createElement(i.b,null,c.a.createElement("form",{className:"ie-fix-flex"},c.a.createElement("div",{role:"tabpanel"},c.a.createElement(i.m,{tabs:!0,justified:!0},c.a.createElement(i.n,null,c.a.createElement(i.o,{href:"#latest",className:"latest"===l?"active":"",onClick:function(e){e.preventDefault(),u("latest")}},"Latest List")),c.a.createElement(i.n,null,c.a.createElement(i.o,{href:"#all",className:"all"===l?"active":"",onClick:function(e){e.preventDefault(),u("all")}},"All List")),c.a.createElement(i.n,null,c.a.createElement(i.o,{href:"#review",className:"review"===l?"active":"",onClick:function(e){e.preventDefault(),u("review")}},"Review"))),c.a.createElement(i.q,{activeTab:l},c.a.createElement(i.r,{tabId:"latest",role:"tabpanel"},"latest"===l&&c.a.createElement(W,null)),c.a.createElement(i.r,{tabId:"all",role:"tabpanel"},c.a.createElement(q,null)),c.a.createElement(i.r,{tabId:"review",role:"tabpanel"},c.a.createElement(s,null,c.a.createElement(i.f,{fluid:!0},c.a.createElement(i.p,null,c.a.createElement(i.e,{md:6},"review"===l&&c.a.createElement(F,null)),c.a.createElement(i.e,{md:6},"review"===l&&c.a.createElement(U,null)))))))))))}}}]);
//# sourceMappingURL=5.66af6ac2.chunk.js.map