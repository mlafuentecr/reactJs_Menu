(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{185:function(e,t,a){},186:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(47),i=a(189),o=a(191),c=a(190),l=a(7),u=a(8),h=a(10),m=a(9),p=a(11);function d(e){return(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"})}function f(e){return e[Math.floor(Math.random()*e.length)]}function v(){var e=["adorable","beautiful","clean","drab","elegant","fancy","glamorous","handsome","long","magnificent","old-fashioned","plain","quaint","sparkling","ugliest","unsightly","angry","bewildered","clumsy","defeated","embarrassed","fierce","grumpy","helpless","itchy","jealous","lazy","mysterious","nervous","obnoxious","panicky","repulsive","scary","thoughtless","uptight","worried"];return"".concat(f(e),"-").concat(f(e),"-").concat(f(["women","men","children","teeth","feet","people","leaves","mice","geese","halves","knives","wives","lives","elves","loaves","potatoes","tomatoes","cacti","foci","fungi","nuclei","syllabuses","analyses","diagnoses","oases","theses","crises","phenomena","criteria","data"]))}var g=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).myInput=r.a.createRef(),a.goToStore=function(e){e.preventDefault();var t=a.myInput.current.value;a.props.history.push("/store/".concat(t))},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"store-selector",onSubmit:this.goToStore},r.a.createElement("h2",null,"please enter store"),r.a.createElement("input",{type:"text",required:!0,ref:this.myInput,placeholder:"Store Name",defaultValue:v()}),r.a.createElement("button",{type:"submit"},"Visit Store \u2192 ")))}}]),t}(r.a.Component),b=a(19),y=a(3),E=a.n(y),O=function(e){return r.a.createElement("header",{className:"top"},r.a.createElement("h1",null,"Catch",r.a.createElement("span",{className:"ofThe"},r.a.createElement("span",{className:"of"},"of"),r.a.createElement("span",{className:"the"},"the")),"day"),r.a.createElement("h3",{className:"tagline"},r.a.createElement("span",null,e.tagline)))},j=a(31),w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).removeFish=function(e){console.log(e)},a.renderOrder=function(e){var t=a.props.fishes[e];if(!t)return null;var n=a.props.order[e],s="available"===t.status,i={classNames:"order",key:e,timeout:{enter:500,exit:500}};return s?r.a.createElement(j.CSSTransition,i,r.a.createElement("li",{key:e},r.a.createElement("span",null,r.a.createElement(j.TransitionGroup,{component:"span",className:"count"},r.a.createElement(j.CSSTransition,{classNames:"count",key:n,timeout:{enter:5e3,exit:5e3}},r.a.createElement("span",null," ",n))),"lbs ",t.name,d(n*t.price)," ",r.a.createElement("button",{onClick:function(){return a.props.deleteFishFromOrder(e)}},"\xd7")))):r.a.createElement("li",{key:e}," Sorry ",t.name," is no longer available")},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.order),a=t.reduce(function(t,a){var n=e.props.fishes[a],r=e.props.order[a];return n&&"available"===n.status?t+r*n.price:t},0);return r.a.createElement("div",{className:"order-wrap"},r.a.createElement("h2",null,"Order"),r.a.createElement(j.TransitionGroup,{component:"ul",className:"order"},t.map(this.renderOrder)),r.a.createElement("div",{className:"total"},"Total:",r.a.createElement("strong",null," ",d(a))))}}]),t}(r.a.Component),k=a(32),F=a.n(k),S=a(64),x=a(30),C=a(50),N=a.n(C),R=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).nameRef=r.a.createRef(),a.priceRef=r.a.createRef(),a.statusRef=r.a.createRef(),a.descRef=r.a.createRef(),a.imageRef=r.a.createRef(),a.createFish=function(e){e.preventDefault();var t={nameRef:a.nameRef.current.value,priceRef:parseFloat(a.priceRef.current.value),statusRef:a.statusRef.current.value,descRef:a.descRef.current.value,imageRef:a.imageRef.current.value};a.props.addFish(t),e.currentTarget.reset()},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{action:"",className:"fish-edit",onSubmit:this.createFish},r.a.createElement("input",{name:"name",ref:this.nameRef,type:"text",placeholder:"Name"}),r.a.createElement("input",{name:"price",ref:this.priceRef,type:"text",placeholder:"Price"}),r.a.createElement("select",{name:"status",ref:this.statusRef},r.a.createElement("option",{value:"available"},"Fresh"),r.a.createElement("option",{value:"unavailable"},"Sold Out!")),r.a.createElement("textarea",{name:"desc",placeholder:"Desc",ref:this.descRef}),r.a.createElement("input",{name:"image",type:"text",placeholder:"Image",ref:this.imageRef}),r.a.createElement("button",{type:"submit"},"+ Add Fish"))}}]),t}(r.a.Component),I=a(48),T=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){var t=Object(b.a)({},a.props.fish,Object(I.a)({},e.currentTarget.name,e.currentTarget.value));a.props.updateFish(a.props.index,t)},a.removeFish=function(){a.props.deleteFish(a.props.index)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"fish-edit"},r.a.createElement("input",{type:"text",name:"name",onChange:this.handleChange,value:this.props.fish.name}),r.a.createElement("input",{type:"text",name:"price",onChange:this.handleChange,value:this.props.fish.price}),r.a.createElement("select",{type:"text",name:"status",onChange:this.handleChange,value:this.props.fish.status},r.a.createElement("option",{value:"available"},"Fresh!"),r.a.createElement("option",{value:"unavailable"},"Sold Out!")),r.a.createElement("textarea",{name:"desc",onChange:this.handleChange,value:this.props.fish.desc}),r.a.createElement("input",{type:"text",name:"image",onChange:this.handleChange,value:this.props.fish.image}),r.a.createElement("button",{onClick:this.removeFish},"Remove Fish"))}}]),t}(r.a.Component),A=function(e){return r.a.createElement("nav",{className:"login"},r.a.createElement("h2",null,"Inventory loging"),r.a.createElement("p",null,"Sign in to manage your store"),r.a.createElement("button",{className:"github",onClick:function(){return e.authenticate("Github")}},"Log in with Github"),r.a.createElement("button",{className:"facebook",onClick:function(){return e.authenticate("Facebook")}},"Log in with Facebook"))},D=a(87),L=a.n(D),M=a(63),P=a.n(M),J=(a(183),P.a.initializeApp({apiKey:"".concat("AIzaSyBwdITQrX2ERZfL1xzqRn_x1WmP9xSAIM4"),authDomain:"menu-fish.firebaseapp.com",databaseURL:"https://menu-fish.firebaseio.com",projectId:"menu-fish"})),z=L.a.createClass(J.database()),U=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={uid:null,owner:null},a.authHandler=function(){var e=Object(S.a)(F.a.mark(function e(t){var n;return F.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.fetch(a.props.storeId,{context:Object(x.a)(Object(x.a)(a))});case 2:if(n=e.sent,console.log(JSON.stringify(t)+"2 store= "+a.props.storeId),n.owner){e.next=8;break}return console.log("3 no tiene dueno"),e.next=8,z.post("".concat(a.props.storeId,"/owner"),{data:t.user.uid});case 8:a.setState({uid:t.user.uid,owner:n.owner||t.user.uid});case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.authenticate=function(e){console.log("1 provider= "+e);var t=new(N.a.auth["".concat(e,"AuthProvider")]);J.auth().signInWithPopup(t).then(a.authHandler)},a.logOut=Object(S.a)(F.a.mark(function e(){return F.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("out"),e.next=3,N.a.auth().signOut();case 3:a.setState({uid:null});case 4:case"end":return e.stop()}},e)})),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.a.auth().onAuthStateChanged(function(t){t&&e.authHandler({user:t})})}},{key:"render",value:function(){var e=this,t=r.a.createElement("button",{onClick:this.logOut},"Log Out!");return this.state.uid?(console.log(),this.state.uid!==this.state.owner?r.a.createElement("div",null,r.a.createElement("p",null,"Sorry you are not the owner!"),t):r.a.createElement("div",{className:"inventory"},r.a.createElement("h2",null,"Inventory"),t,Object.keys(this.props.fishes).map(function(t){return r.a.createElement(T,{key:t,index:t,fish:e.props.fishes[t],updateFish:e.props.updateFish,deleteFish:e.props.deleteFish})}),r.a.createElement(R,{addFish:this.props.addFish}),r.a.createElement("button",{onClick:this.props.loadExamples},"Load Samples Fishes"))):r.a.createElement(A,{authenticate:this.authenticate})}}]),t}(r.a.Component),W={fish1:{name:"Pacific Halibut",image:"/images/hali.jpg",desc:"Everyone\u2019s favorite white fish. We will cut it to the size you need and ship it.",price:1724,status:"available"},fish2:{name:"Lobster",image:"/images/lobster.jpg",desc:"These tender, mouth-watering beauties are a fantastic hit at any dinner party.",price:3200,status:"available"},fish3:{name:"Sea Scallops",image:"/images/scallops.jpg",desc:"Big, sweet and tender. True dry-pack scallops from the icey waters of Alaska. About 8-10 per pound",price:1684,status:"unavailable"},fish4:{name:"Mahi Mahi",image:"/images/mahi.jpg",desc:"Lean flesh with a mild, sweet flavor profile, moderately firm texture and large, moist flakes. ",price:1129,status:"available"},fish5:{name:"King Crab",image:"/images/crab.jpg",desc:"Crack these open and enjoy them plain or with one of our cocktail sauces",price:4234,status:"available"},fish6:{name:"Atlantic Salmon",image:"/images/salmon.jpg",desc:"This flaky, oily salmon is truly the king of the sea. Bake it, grill it, broil it...as good as it gets!",price:1453,status:"available"},fish7:{name:"Oysters",image:"/images/oysters.jpg",desc:"A soft plump oyster with a sweet salty flavor and a clean finish.",price:2543,status:"available"},fish8:{name:"Mussels",image:"/images/mussels.jpg",desc:"The best mussels from the Pacific Northwest with a full-flavored and complex taste.",price:425,status:"available"},fish9:{name:"Jumbo Prawns",image:"/images/prawns.jpg",desc:"With 21-25 two bite prawns in each pound, these sweet morsels are perfect for shish-kabobs.",price:2250,status:"available"}},q=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(){a.props.addToOrder(a.props.index)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.detalle,t=e.image,a=e.name,n=e.price,s=e.desc,i="available"===e.status;return r.a.createElement("li",{className:"menu-fish"},r.a.createElement("img",{src:t,alt:a}),r.a.createElement("h3",{className:"fish-name"},a,r.a.createElement("span",{className:"price"},d(n))),r.a.createElement("p",null,s),r.a.createElement("button",{disabled:!i,onClick:this.handleClick},i?"Add to Order":"Sold Out!"))}}]),t}(r.a.Component),B=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={fishes:{},order:{}},a.addFish=function(e){var t=Object(b.a)({},a.state.fishes);t["fish".concat(Date.now())]=e,a.setState({fishes:t})},a.updateFish=function(e,t){var n=Object(b.a)({},a.state.fishes);n[e]=t,a.setState({fishes:n})},a.deleteFish=function(e){var t=Object(b.a)({},a.state.fishes);t[e]=null,a.setState({fishes:t})},a.deleteFishFromOrder=function(e){var t=Object(b.a)({},a.state.order);delete t[e],a.setState({order:t})},a.loadExamples=function(){a.setState({fishes:W})},a.addToOrder=function(e){var t=Object(b.a)({},a.state.order);t[e]=t[e]+1||1,a.setState({order:t})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem(this.props.match.params.storeId);e&&this.setState({order:JSON.parse(e)}),this.fishesRef=z.syncState("".concat(this.props.match.params.storeId,"/fishes"),{context:this,state:"fishes"})}},{key:"componentDidUpdate",value:function(){localStorage.setItem(this.props.match.params.storeId,JSON.stringify(this.state.order))}},{key:"componentWillUnmount",value:function(){z.removeBinding(this.fishesRef)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"catch-of-the-day"},r.a.createElement("div",{className:"menu"},r.a.createElement(O,{tagline:"Fresh Market",age:43,cool:!0}),r.a.createElement("ul",{className:"fishes"},Object.keys(this.state.fishes).map(function(t){return r.a.createElement(q,{key:t,index:t,detalle:e.state.fishes[t],addToOrder:e.addToOrder})}))),r.a.createElement(w,{fishes:this.state.fishes,order:this.state.order,deleteFishFromOrder:this.deleteFishFromOrder}),r.a.createElement(U,{addFish:this.addFish,updateFish:this.updateFish,loadExamples:this.loadExamples,fishes:this.state.fishes,deleteFish:this.deleteFish,storeId:this.props.match.params.storeId}))}}]),t}(r.a.Component);B.propType={match:E.a.Object};var G=B,H=function(){return r.a.createElement("div",{className:"notFound"},r.a.createElement("h2",null,"Not Found!!!!!"))},K=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,null,r.a.createElement(c.a,{exact:!0,path:"/",component:g}),r.a.createElement(c.a,{exact:!0,path:"/store/:storeId",component:G}),r.a.createElement(c.a,{component:H})))};a(185);Object(s.render)(r.a.createElement(K,null),document.querySelector("#main"))},89:function(e,t,a){e.exports=a(186)}},[[89,1,2]]]);
//# sourceMappingURL=main.1c2e4e9d.chunk.js.map