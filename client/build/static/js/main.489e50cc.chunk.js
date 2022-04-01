(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{142:function(e,t,r){},203:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),s=r(10),c=r.n(s),o=(r(142),r(244)),i=r(50),u=r(13),l=r(64),d=r(116),j=r.n(d),b=r(117),f=r(44),p="GET_USER",h="SET_FETCHING_STATUS",m=function(e){return{type:p,user:e}},x=function(e){return{type:h,isFetching:e}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetching:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return t.user;case h:return Object(f.a)(Object(f.a)({},e),{},{isFetching:t.isFetching});default:return e}},O=r(88),v=function(e,t){var r=t.message,n=t.sender;if(null!==n){var a={id:r.conversationId,otherUser:n,messages:[r]};return a.latestMessageText=r.text,[a].concat(Object(O.a)(e))}return e.map((function(e){if(r&&e.id===r.conversationId){var t=Object(f.a)({},e);return t.messages.push(r),t.latestMessageText=r.text,t.unreadCount=r.unreadCount,t}return e}))},w=function(e,t){return e.map((function(e){if(e.otherUser.id===t){var r=Object(f.a)({},e);return r.otherUser.online=!0,r}return e}))},C=function(e,t){return e.map((function(e){if(e.otherUser.id===t){var r=Object(f.a)({},e);return r.otherUser.online=!1,r}return e}))},y=function(e,t){var r={};e.forEach((function(e){r[e.otherUser.id]=!0}));var n=Object(O.a)(e);return t.forEach((function(e){if(!r[e.id]){var t={otherUser:e,messages:[]};n.push(t)}})),n},S=function(e,t,r){return e.map((function(e){return e.otherUser.id===t?(e.id=r.conversationId,e.messages.push(r),e.latestMessageText=r.text,e):e}))},k=function(e,t){return e.map((function(e){if(e.id===t.conversationId){var r=Object(f.a)({},e);return r.unreadCount=t.unreadCount,r.messages[r.messages.length-1].unreadCount=t.unreadCount,r}return e}))},E="GET_CONVERSATIONS",U="SET_MESSAGE",N="ADD_ONLINE_USER",I="REMOVE_OFFLINE_USER",T="SET_SEARCHED_USERS",F="CLEAR_SEARCHED_USERS",D="ADD_CONVERSATION",A="UPDATE_MESSAGE",R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return t.conversations;case U:return v(e,t.payload);case N:return w(e,t.id);case I:return C(e,t.id);case T:return y(e,t.users);case F:return e.filter((function(e){return e.id}));case D:return S(e,t.payload.recipientId,t.payload.newMessage);case A:return k(e,t.message);default:return e}},_="SET_ACTIVE_CHAT",B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return t.type===_?t.username:e},L="CLEAR_ON_LOGOUT",P=Object(l.b)({user:g,conversations:R,activeConversation:B}),W=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.c,z=Object(l.d)((function(e,t){return t.type===L&&(e=void 0),P(e,t)}),W(Object(l.a)(b.a,j.a))),M=r(127),G=Object(M.a)({typography:{fontFamily:"Open Sans, sans-serif",fontSize:14,button:{textTransform:"none",letterSpacing:0,fontWeight:"bold"}},overrides:{MuiInput:{input:{fontWeight:"bold"}}},palette:{primary:{main:"#3A8DFF"},secondary:{main:"#B0B0B0"}}}),q=r(27),V=r(16),H=r(7),J=r.n(H),X=r(12),$=r(35),K=r.n($),Q=r(121),Y=r.n(Q)()(window.location.origin);Y.on("connect",(function(){console.log("connected to server"),Y.on("add-online-user",(function(e){z.dispatch(function(e){return{type:N,id:e}}(e))})),Y.on("remove-offline-user",(function(e){z.dispatch(function(e){return{type:I,id:e}}(e))})),Y.on("new-message",(function(e){var t,r;z.dispatch((t=e.message,r=e.sender,{type:U,payload:{message:t,sender:r||null}}))}))}));var Z=Y;K.a.interceptors.request.use(function(){var e=Object(X.a)(J.a.mark((function e(t){var r;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("messenger-token");case 2:return r=e.sent,t.headers["x-access-token"]=r,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var ee=function(){var e=Object(X.a)(J.a.mark((function e(t){var r,n;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.a.post("/api/messages",t);case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=function(e,t){Z.emit("new-message",{message:e.message,recipientId:t.recipientId,sender:e.sender})},re=r(233),ne=r(246),ae=r(206),se=r(247),ce=r(236),oe=r(245),ie=r(239),ue=r(2),le=Object(u.b)((function(e){return{user:e.user}}),(function(e){return{register:function(t){e(function(e){return function(){var t=Object(X.a)(J.a.mark((function t(r){var n,a;return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,K.a.post("/auth/register",e);case 3:return n=t.sent,a=n.data,t.next=7,localStorage.setItem("messenger-token",a.token);case 7:r(m(a)),Z.emit("go-online",a.id),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.error(t.t0),r(m({error:t.t0.response.data.error||"Server Error"}));case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t=Object(V.g)(),r=e.user,a=e.register,s=Object(n.useState)({}),c=Object(q.a)(s,2),o=c[0],i=c[1],u=function(){var e=Object(X.a)(J.a.mark((function e(t){var r,n,s,c;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r=t.target.username.value,n=t.target.email.value,s=t.target.password.value,c=t.target.confirmPassword.value,s===c){e.next=8;break}return i({confirmPassword:"Passwords must match"}),e.abrupt("return");case 8:return e.next=10,a({username:r,email:n,password:s});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.id?Object(ue.jsx)(V.a,{to:"/home"}):Object(ue.jsx)(re.a,{container:!0,justifyContent:"center",children:Object(ue.jsxs)(ne.a,{children:[Object(ue.jsxs)(re.a,{container:!0,item:!0,children:[Object(ue.jsx)(ae.a,{children:"Need to log in?"}),Object(ue.jsx)(se.a,{onClick:function(){return t.push("/login")},children:"Login"})]}),Object(ue.jsx)("form",{onSubmit:u,children:Object(ue.jsxs)(re.a,{children:[Object(ue.jsx)(re.a,{children:Object(ue.jsx)(ce.a,{children:Object(ue.jsx)(oe.a,{"aria-label":"username",label:"Username",name:"username",type:"text",required:!0})})}),Object(ue.jsx)(re.a,{children:Object(ue.jsx)(ce.a,{children:Object(ue.jsx)(oe.a,{label:"E-mail address","aria-label":"e-mail address",type:"email",name:"email",required:!0})})}),Object(ue.jsx)(re.a,{children:Object(ue.jsxs)(ce.a,{error:!!o.confirmPassword,children:[Object(ue.jsx)(oe.a,{"aria-label":"password",label:"Password",type:"password",inputProps:{minLength:6},name:"password",required:!0}),Object(ue.jsx)(ie.a,{children:o.confirmPassword})]})}),Object(ue.jsx)(re.a,{children:Object(ue.jsxs)(ce.a,{error:!!o.confirmPassword,children:[Object(ue.jsx)(oe.a,{label:"Confirm Password","aria-label":"confirm password",type:"password",inputProps:{minLength:6},name:"confirmPassword",required:!0}),Object(ue.jsx)(ie.a,{children:o.confirmPassword})]})}),Object(ue.jsx)(se.a,{type:"submit",variant:"contained",size:"large",children:"Create"})]})})]})})})),de=Object(u.b)((function(e){return{user:e.user}}),(function(e){return{login:function(t){e(function(e){return function(){var t=Object(X.a)(J.a.mark((function t(r){var n,a;return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,K.a.post("/auth/login",e);case 3:return n=t.sent,a=n.data,t.next=7,localStorage.setItem("messenger-token",a.token);case 7:r(m(a)),Z.emit("go-online",a.id),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.error(t.t0),r(m({error:t.t0.response.data.error||"Server Error"}));case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t=Object(V.g)(),r=e.user,n=e.login,a=function(){var e=Object(X.a)(J.a.mark((function e(t){var r,a;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=t.target.username.value,a=t.target.password.value,e.next=5,n({username:r,password:a});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.id?Object(ue.jsx)(V.a,{to:"/home"}):Object(ue.jsx)(re.a,{container:!0,justifyContent:"center",children:Object(ue.jsxs)(ne.a,{children:[Object(ue.jsxs)(re.a,{container:!0,item:!0,children:[Object(ue.jsx)(ae.a,{children:"Need to register?"}),Object(ue.jsx)(se.a,{onClick:function(){return t.push("/register")},children:"Register"})]}),Object(ue.jsx)("form",{onSubmit:a,children:Object(ue.jsxs)(re.a,{children:[Object(ue.jsx)(re.a,{children:Object(ue.jsx)(ce.a,{margin:"normal",required:!0,children:Object(ue.jsx)(oe.a,{"aria-label":"username",label:"Username",name:"username",type:"text"})})}),Object(ue.jsx)(ce.a,{margin:"normal",required:!0,children:Object(ue.jsx)(oe.a,{label:"password","aria-label":"password",type:"password",name:"password"})}),Object(ue.jsx)(re.a,{children:Object(ue.jsx)(se.a,{type:"submit",variant:"contained",size:"large",children:"Login"})})]})})]})})})),je=r(243),be=r(240),fe=Object(be.a)((function(e){return{root:{display:"flex",justifyContent:"space-between",marginLeft:20,flexGrow:1},username:{fontWeight:"bold",letterSpacing:-.2},previewText:{fontSize:12,color:"#9CADC8",letterSpacing:-.17},previewTextBold:{fontSize:12,letterSpacing:-.17,fontWeight:"bold"}}})),pe=function(e){var t=fe(),r=e.conversation,n=e.bold,a=r.latestMessageText,s=r.otherUser;return Object(ue.jsx)(ne.a,{className:t.root,children:Object(ue.jsxs)(ne.a,{children:[Object(ue.jsx)(ae.a,{className:t.username,children:s.username}),Object(ue.jsx)(ae.a,{className:n&&t.previewTextBold||t.previewText,children:a})]})})},he=r(75),me=r.n(he),xe=Object(be.a)((function(){return{root:{height:44,marginTop:23,marginLeft:6,display:"flex",alignItems:"center"},subContainer:{display:"flex",justifyContent:"space-between",alignItems:"center",flexGrow:1},username:{letterSpacing:-.23,fontSize:16,fontWeight:"bold",marginLeft:17},ellipsis:{color:"#95A7C4",marginRight:24,opacity:.5}}})),ge=Object(u.b)((function(e){return{user:e.user}}))((function(e){var t=xe(),r=e.user||{};return Object(ue.jsxs)(ne.a,{className:t.root,children:[Object(ue.jsx)(Ae,{photoUrl:r.photoUrl,online:!0}),Object(ue.jsxs)(ne.a,{className:t.subContainer,children:[Object(ue.jsx)(ae.a,{className:t.username,children:r.username}),Object(ue.jsx)(me.a,{classes:{root:t.ellipsis}})]})]})})),Oe=r(237),ve=r(241),we=r(124),Ce=r.n(we),ye=Object(be.a)((function(){return{filledInput:{height:50,background:"#E9EEF9",borderRadius:5,fontSize:13,fontWeight:"bold",color:"#99A9C4",letterSpacing:0,display:"flex",justifyContent:"center",marginBottom:20},input:{"&::placeholder":{color:"#ADC0DE",opacity:1}}}})),Se=function(e){var t=ye(),r=e.handleChange;return Object(ue.jsx)("form",{onSubmit:function(e){e.preventDefault()},children:Object(ue.jsx)(ce.a,{fullWidth:!0,hiddenLabel:!0,children:Object(ue.jsx)(Oe.a,{name:"search",onChange:r,classes:{root:t.filledInput,input:t.input},disableUnderline:!0,placeholder:"Search",startAdornment:Object(ue.jsx)(ve.a,{position:"start",children:Object(ue.jsx)(Ce.a,{})})})})})},ke=Object(be.a)((function(){return{root:{paddingLeft:21,paddingRight:21,flexGrow:1},title:{fontSize:20,letterSpacing:-.29,fontWeight:"bold",marginTop:32,marginBottom:15}}})),Ee=Object(u.b)((function(e){return{conversations:e.conversations,user:e.user,activeConversation:e.activeConversation}}))((function(e){var t=ke(),r=e.conversations||[],n=e.handleChange,a=e.searchTerm,s=e.user,c=e.activeConversation;return Object(ue.jsxs)(ne.a,{className:t.root,children:[Object(ue.jsx)(ge,{}),Object(ue.jsx)(ae.a,{className:t.title,children:"Chats"}),Object(ue.jsx)(Se,{handleChange:n}),r.filter((function(e){return e.otherUser.username.includes(a)})).map((function(e){return Object(ue.jsx)(Te,{conversation:e,user:s,activeConversation:c},e.otherUser.username)}))]})})),Ue=Object(u.b)(null,(function(e){return{searchUsers:function(t){var r;e((r=t,function(){var e=Object(X.a)(J.a.mark((function e(t){var n,a;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K.a.get("/api/users/".concat(r));case 3:n=e.sent,a=n.data,t({type:T,users:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()))},clearSearchedUsers:function(){e({type:F})}}}))((function(e){var t=e.searchUsers,r=e.clearSearchedUsers,a=Object(n.useState)(""),s=Object(q.a)(a,2),c=s[0],o=s[1],i=function(){var e=Object(X.a)(J.a.mark((function e(n){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==n.target.value){e.next=4;break}return r(),o(""),e.abrupt("return");case 4:if(!c.includes(n.target.value)){e.next=7;break}return o(n.target.value),e.abrupt("return");case 7:return e.next=9,t(n.target.value);case 9:o(n.target.value);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(ue.jsx)(Ee,{handleChange:i,searchTerm:c})})),Ne=r(242),Ie=Object(be.a)((function(e){return{root:{paddingRight:20,borderRadius:8,height:80,boxShadow:"0 2px 10px 0 rgba(88,133,196,0.05)",marginBottom:10,display:"flex",alignItems:"center","&:hover":{cursor:"grab"}}}})),Te=Object(u.b)(null,(function(e){return{setActiveChat:function(t){e({type:_,username:t})},updateConversation:function(t,r){var n,a;e((n=t,a=r,function(){var e=Object(X.a)(J.a.mark((function e(t){var r,s;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K.a.put("/api/user-conversation",{userId:n,conversationId:a});case 3:r=e.sent,s=r.data,t({type:A,message:s}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()))}}}))((function(e){var t=Ie(),r=e.user,n=e.conversation,a=n.otherUser,s=function(){var t=Object(X.a)(J.a.mark((function t(n){return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setActiveChat(n.otherUser.username);case 2:return t.next=4,e.updateConversation(r.id,n.id);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),c=n.messages.length>0&&n.messages[n.messages.length-1].senderId;return Object(ue.jsxs)(ne.a,{onClick:function(){return s(n)},className:t.root,children:[Object(ue.jsx)(Ae,{photoUrl:a.photoUrl,username:a.username,online:a.online,sidebar:!0}),Object(ue.jsx)(pe,{conversation:n,bold:r.id!==c&&n.unreadCount>0}),r.id!==c&&Object(ue.jsx)(Ne.a,{color:"primary",badgeContent:n.unreadCount})]})})),Fe=r(250),De=Object(be.a)((function(){return{profilePic:{height:44,width:44},badge:{height:13,width:13,borderRadius:"50%",border:"2px solid white",backgroundColor:"#D0DAE9"},online:{backgroundColor:"#1CED84"},sidebar:{marginLeft:17}}})),Ae=function(e){var t=De(),r=e.sidebar,n=e.username,a=e.photoUrl,s=e.online;return Object(ue.jsx)(ne.a,{className:r?t.sidebar:"",children:Object(ue.jsx)(Ne.a,{classes:{badge:"".concat(t.badge," ").concat(s&&t.online)},variant:"dot",anchorOrigin:{horizontal:"right",vertical:"bottom"},overlap:"circular",children:Object(ue.jsx)(Fe.a,{alt:n,src:a,className:t.profilePic})})})},Re=Object(be.a)((function(){return{root:{display:"flex",flexDirection:"column",alignItems:"flex-end"},date:{fontSize:11,color:"#BECCE2",fontWeight:"bold",marginBottom:5},text:{fontSize:14,color:"#91A3C0",letterSpacing:-.2,padding:8,fontWeight:"bold"},bubble:{background:"#F4F6FA",borderRadius:"10px 10px 0 10px"},avatar:{height:20,width:20,marginTop:4,marginBottom:20}}})),_e=function(e){var t=Re(),r=e.time,n=e.text,a=e.otherUser,s=e.last;return Object(ue.jsxs)(ne.a,{className:t.root,children:[Object(ue.jsx)(ae.a,{className:t.date,children:r}),Object(ue.jsx)(ne.a,{className:t.bubble,children:Object(ue.jsx)(ae.a,{className:t.text,children:n})}),s&&Object(ue.jsx)(Fe.a,{alt:a.username,src:a.photoUrl,className:t.avatar})]})},Be=Object(be.a)((function(){return{root:{display:"flex"},avatar:{height:30,width:30,marginRight:11,marginTop:6},usernameDate:{fontSize:11,color:"#BECCE2",fontWeight:"bold",marginBottom:5},bubble:{backgroundImage:"linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)",borderRadius:"0 10px 10px 10px"},text:{fontSize:14,fontWeight:"bold",color:"#FFFFFF",letterSpacing:-.2,padding:8}}})),Le=function(e){var t=Be(),r=e.text,n=e.time,a=e.otherUser;return Object(ue.jsxs)(ne.a,{className:t.root,children:[Object(ue.jsx)(Fe.a,{alt:a.username,src:a.photoUrl,className:t.avatar}),Object(ue.jsxs)(ne.a,{children:[Object(ue.jsxs)(ae.a,{className:t.usernameDate,children:[a.username," ",n]}),Object(ue.jsx)(ne.a,{className:t.bubble,children:Object(ue.jsx)(ae.a,{className:t.text,children:r})})]})]})},Pe=Object(be.a)((function(){return{root:{display:"flex",flexGrow:8,flexDirection:"column"},chatContainer:{marginLeft:41,marginRight:41,display:"flex",flexDirection:"column",flexGrow:1,justifyContent:"space-between"}}})),We=Object(u.b)((function(e){return{user:e.user,conversations:e.conversations,activeConversation:e.activeConversation}}),null)((function(e){var t=Pe(),r=e.user,n=e.conversations,a=e.activeConversation,s=n&&n.find((function(e){return e.otherUser.username===a}));return Object(ue.jsx)(ne.a,{className:t.root,children:s&&Object(ue.jsxs)(ue.Fragment,{children:[Object(ue.jsx)(qe,{username:s.otherUser.username,online:s.otherUser.online||!1}),Object(ue.jsxs)(ne.a,{className:t.chatContainer,children:[Object(ue.jsx)(Je,{unreadCount:s.unreadCount,messages:s.messages,otherUser:s.otherUser,userId:r.id}),Object(ue.jsx)(Me,{otherUser:s.otherUser,conversationId:s.id,user:r})]})]})})})),ze=Object(be.a)((function(){return{root:{justifySelf:"flex-end",marginTop:15},input:{height:70,backgroundColor:"#F4F6FA",borderRadius:8,marginBottom:20}}})),Me=Object(u.b)(null,(function(e){return{postMessage:function(t){var r;e((r=t,function(){var e=Object(X.a)(J.a.mark((function e(t){var n;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee(r);case 3:n=e.sent,r.conversationId||t((a=r.recipientId,s=n.message,{type:D,payload:{recipientId:a,newMessage:s}})),te(n,r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}var a,s}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()))}}}))((function(e){var t=ze(),r=Object(n.useState)(""),a=Object(q.a)(r,2),s=a[0],c=a[1],o=e.postMessage,i=e.otherUser,u=e.conversationId,l=e.user,d=function(){var e=Object(X.a)(J.a.mark((function e(t){var r;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r={text:t.target.text.value,recipientId:i.id,conversationId:u,sender:u?null:l},e.next=4,o(r);case 4:c("");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(ue.jsx)("form",{className:t.root,onSubmit:d,children:Object(ue.jsx)(ce.a,{fullWidth:!0,hiddenLabel:!0,children:Object(ue.jsx)(Oe.a,{classes:{root:t.input},disableUnderline:!0,placeholder:"Type something...",value:s,name:"text",onChange:function(e){c(e.target.value)}})})})})),Ge=Object(be.a)((function(e){return{root:{display:"flex",alignItems:"center",justifyContent:"space-between",height:89,marginBottom:34,boxShadow:"0 2px 20px 0 rgba(88,133,196,0.10)"},content:{display:"flex",alignItems:"center",marginLeft:24},username:{fontSize:20,letterSpacing:-.29,fontWeight:"bold",marginRight:14},statusText:{fontSize:12,color:"#BFC9DB",letterSpacing:-.17},statusDot:{height:8,width:8,borderRadius:"50%",marginRight:5,backgroundColor:"#D0DAE9"},online:{background:"#1CED84"},ellipsis:{color:"#95A7C4",marginRight:24,opacity:.5}}})),qe=function(e){var t=Ge(),r=e.username,n=e.online;return Object(ue.jsxs)(ne.a,{className:t.root,children:[Object(ue.jsxs)(ne.a,{className:t.content,children:[Object(ue.jsx)(ae.a,{className:t.username,children:r}),Object(ue.jsx)(ne.a,{className:"".concat(t.statusDot," ").concat(t[n&&"online"])}),Object(ue.jsx)(ae.a,{className:t.statusText,children:n?"Online":"Offline"})]}),Object(ue.jsx)(me.a,{classes:{root:t.ellipsis}})]})},Ve=r(125),He=r.n(Ve),Je=function(e){var t=e.messages,r=e.otherUser,n=e.userId,a=e.unreadCount,s=t.filter((function(e){return e.senderId===n})),c=s[s.length-a-1].id;return Object(ue.jsx)(ne.a,{children:t.map((function(e){var t=He()(e.createdAt).format("h:mm");return e.senderId===n?Object(ue.jsx)(_e,{text:e.text,time:t,otherUser:r,last:c===e.id&&a>0},e.id):Object(ue.jsx)(Le,{text:e.text,time:t,otherUser:r},e.id)}))})},Xe=Object(be.a)((function(e){return{root:{height:"100vh"}}})),$e=Object(u.b)((function(e){return{user:e.user,conversations:e.conversations}}),(function(e){return{logout:function(t){e(function(e){return function(){var t=Object(X.a)(J.a.mark((function t(r){return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,K.a.delete("/auth/logout");case 3:return t.next=5,localStorage.removeItem("messenger-token");case 5:r(m({})),Z.emit("logout",e),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(t)),e({type:L})},fetchConversations:function(){e(function(){var e=Object(X.a)(J.a.mark((function e(t){var r,n;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K.a.get("/api/conversations");case 3:r=e.sent,n=r.data,t({type:E,conversations:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}}}))((function(e){var t=Xe(),r=e.user,a=e.logout,s=e.fetchConversations,c=Object(n.useState)(!1),o=Object(q.a)(c,2),i=o[0],u=o[1];if(Object(n.useEffect)((function(){r.id&&u(!0)}),[r.id]),Object(n.useEffect)((function(){s()}),[s]),!r.id)return i?Object(ue.jsx)(V.a,{to:"/login"}):Object(ue.jsx)(V.a,{to:"/register"});var l=function(){var e=Object(X.a)(J.a.mark((function e(){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(r.id);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(ue.jsxs)(ue.Fragment,{children:[Object(ue.jsx)(se.a,{className:t.logout,onClick:l,children:"Logout"}),Object(ue.jsxs)(re.a,{container:!0,component:"main",className:t.root,children:[Object(ue.jsx)(je.a,{}),Object(ue.jsx)(Ue,{}),Object(ue.jsx)(We,{})]})]})})),Ke=r(249),Qe=r(126),Ye=r.n(Qe),Ze=Object(be.a)((function(e){return{snackbar:{backgroundColor:"red",fontWeight:"bold"},icon:{color:"white"}}})),et=function(e){var t=Ze();return Object(ue.jsx)(Ke.a,{open:e.snackBarOpen,onClose:function(){return e.setSnackBarOpen(!1)},message:e.errorMessage||"Sorry, an error occured. Please try again",action:Object(ue.jsx)(a.a.Fragment,{children:Object(ue.jsx)(se.a,{className:t.icon,size:"small",onClick:function(){return e.setSnackBarOpen(!1)},children:Object(ue.jsx)(Ye.a,{color:"secondary"})})}),ContentProps:{classes:{root:t.snackbar}}})},tt=Object(V.h)(Object(u.b)((function(e){return{user:e.user}}),(function(e){return{fetchUser:function(){e(function(){var e=Object(X.a)(J.a.mark((function e(t){var r,n;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(x(!0)),e.prev=1,e.next=4,K.a.get("/auth/user");case 4:r=e.sent,n=r.data,t(m(n)),n.id&&Z.emit("go-online",n.id),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0);case 13:return e.prev=13,t(x(!1)),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(t){return e.apply(this,arguments)}}())}}}))((function(e){var t=e.user,r=e.fetchUser,a=Object(n.useState)(""),s=Object(q.a)(a,2),c=s[0],o=s[1],i=Object(n.useState)(!1),u=Object(q.a)(i,2),l=u[0],d=u[1];return Object(n.useEffect)((function(){r()}),[r]),Object(n.useEffect)((function(){t.error&&("string"===typeof t.error?o(t.error):o("Internal Server Error. Please try again"),d(!0))}),[t.error]),e.user.isFetchingUser?Object(ue.jsx)("div",{children:"Loading..."}):Object(ue.jsxs)(ue.Fragment,{children:[l&&Object(ue.jsx)(et,{setSnackBarOpen:d,errorMessage:c,snackBarOpen:l}),Object(ue.jsxs)(V.d,{children:[Object(ue.jsx)(V.b,{path:"/login",component:de}),Object(ue.jsx)(V.b,{path:"/register",component:le}),Object(ue.jsx)(V.b,{exact:!0,path:"/",render:function(e){var t;return(null===(t=e.user)||void 0===t?void 0:t.id)?Object(ue.jsx)($e,{}):Object(ue.jsx)(le,{})}}),Object(ue.jsx)(V.b,{path:"/home",component:$e})]})]})})));var rt=function(){return Object(ue.jsx)(u.a,{store:z,children:Object(ue.jsx)(o.a,{theme:G,children:Object(ue.jsx)(i.a,{children:Object(ue.jsx)(tt,{})})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(ue.jsx)(rt,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[203,1,2]]]);
//# sourceMappingURL=main.489e50cc.chunk.js.map