(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{153:function(e,n,t){e.exports=t(348)},348:function(e,n,t){"use strict";t.r(n);t(154),t(156);var r=t(1),a=t.n(r),s=t(63),u=t.n(s),c=t(50),o=t(144),i=t(145),l=t(151),d=t(146),p=t(152),f=t(77),m=t.n(f),g=t(32),h=t(2),b=t(11),E=t.n(b),v=t(25),G=t(13),_="MAIN_CHANGE_VIEW",y="MAIN_CHANGE_PANEL",A="MAIN_CHANGE_FETCHED_USER",O="MAIN_CHANGE_ACTIVE_TAB",I="MAIN_CHANGE_AUTH_TOKEN",F={activeView:"main",activePanel:"main",activePanelProps:null,activeTab:"groups",fetchedUser:null,authToken:null},j=function(e,n){return function(t){t({type:y,payload:{panel:e,data:n}})}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,n=arguments.length>1?arguments[1]:void 0,t=n.payload;switch(n.type){case _:return Object(G.a)({},e,{activeView:t.view,activePanel:t.panel});case y:return Object(G.a)({},e,{activePanel:t.panel,activePanelProps:t.data});case O:return Object(G.a)({},e,{activeTab:t});case A:return Object(G.a)({},e,{fetchedUser:t});case I:return Object(G.a)({},e,{authToken:t});default:return e}},P=function(){var e=Object(v.a)(E.a.mark(function e(n,t){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.send("VKWebAppCallAPIMethod",{method:"groups.get",params:{user_id:t,fields:"members_count",extended:!0,v:"5.95",access_token:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(n,t){return e.apply(this,arguments)}}(),k=function(){var e=Object(v.a)(E.a.mark(function e(n,t){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.send("VKWebAppCallAPIMethod",{method:"groups.getById",params:{group_ids:String(t),fields:"members_count",v:"5.95",access_token:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(n,t){return e.apply(this,arguments)}}(),L=function(){var e=Object(v.a)(E.a.mark(function e(n,t){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.send("VKWebAppCallAPIMethod",{method:"execute.getUserFriendGroups",params:{friends:String(t),v:"5.95",access_token:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(n,t){return e.apply(this,arguments)}}(),U=function(){var e=Object(v.a)(E.a.mark(function e(n,t){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.send("VKWebAppCallAPIMethod",{method:"friends.get",params:{user_id:t,order:"name",fields:"photo_100",name_case:"nom",v:"5.95",access_token:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(n,t){return e.apply(this,arguments)}}(),R=t(36),S="USER_CHANGE_USER_GROUPS",N="USER_CHANGE_USER_GROUPS_LOADING",C="USER_CHANGE_USER_FRIENDS",x="CHANGE_USER_FRIENDS_LOADING",T="USER_CHANGE_USER_FRIENDS_GROUPS",H="USER_CHANGE_USER_FRIENDS_GROUPS_LOADING",V="USER_CHANGE_USER_FRIENDS_GROUPS_ANALYZE",D={userGroups:null,userGroupsIsLoading:!1,userFriends:null,userFriendsIsLoading:!1,userFriendsGroups:null,userFriendsGroupsIsLoading:!1,userFriendsGroupsAnalyzeProgress:0},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,n=arguments.length>1?arguments[1]:void 0,t=n.payload;switch(console.log(n.type,t),n.type){case S:return Object(G.a)({},e,{userGroups:t.groups,userGroupsIsLoading:t.isLoading});case N:return Object(G.a)({},e,{userGroupsIsLoading:t.isLoading});case C:return Object(G.a)({},e,{userFriends:t.friends,userFriendIsLoading:t.isLoading});case x:return Object(G.a)({},e,{userFriendsIsLoading:t.isLoading});case T:return Object(G.a)({},e,{userFriendsGroups:t.groups,userFriendsGroupsIsLoading:t.isLoading});case V:return Object(G.a)({},e,{userFriendsGroupsAnalyzeProgress:t.value});default:return e}},K=function(e){var n=e.userGroups;return a.a.createElement(h.List,null,n.map(function(e){return a.a.createElement(h.Cell,{key:e.id,before:a.a.createElement(h.Avatar,{src:e.photo_200}),description:"".concat(e.members_count," \u041f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432")},e.name)}))},W={changePanel:j},z=Object(g.b)(null,W)(function(e){var n=e.userFriends,t=e.changePanel;return a.a.createElement(h.List,null,n.map(function(e){return a.a.createElement(h.Cell,{onClick:function(){t("friendGroups",{id:e.id,fullname:"".concat(e.first_name," ").concat(e.last_name)})},key:e.id,before:a.a.createElement(h.Avatar,{size:48,src:e.photo_100})},e.first_name," ",e.last_name)}))}),B={changeActiveTab:function(e){return function(){var n=Object(v.a)(E.a.mark(function n(t){return E.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t({type:O,payload:e});case 1:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()},fetchUserGroups:function(e,n){return function(){var t=Object(v.a)(E.a.mark(function t(r){var a;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:N,payload:{isLoading:!0}}),t.next=3,P(e,n);case 3:a=t.sent.data.response.items,r({type:S,payload:{groups:a,isLoading:!1}});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},fetchUserFriends:function(e,n){return function(){var t=Object(v.a)(E.a.mark(function t(r){var a;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:x,payload:{isLoading:!0}}),t.t0=R.filter,t.next=4,U(e,n);case 4:t.t1=t.sent.data.response.items,t.t2=function(e){return!1===Object(R.has)(e,"deactivated")},a=(0,t.t0)(t.t1,t.t2),r({type:C,payload:{friends:a,isLoading:!1}});case 8:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},fetchUserFriendsGroups:function(e,n,t){return function(){var r=Object(v.a)(E.a.mark(function r(a){var s,u,c,o,i;return E.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:a({type:H,payload:{isLoading:!0}}),s=Object(R.chunk)(t,25),u=[],c=0;case 4:if(!(c<s.length)){r.next=15;break}return r.next=7,L(e,Object(R.map)(s[c],function(e){return e.id}));case 7:return o=r.sent.data.response,r.next=10,new Promise(function(e){return setTimeout(e,3e3)});case 10:u=u.concat(o),a({type:V,payload:{value:Math.floor((c+1)/s.length*100)}});case 12:++c,r.next=4;break;case 15:return i=Object(R.filter)(Object(R.map)(Object(R.sortBy)((l=u,l.reduce(function(e,n){return(e[e.findIndex(function(e){return e.el===n})]||e[e.push({el:n,count:0})-1]).count++,e},[])),"count").reverse(),function(e){return e.el}),function(e){return!1===Object(R.map)(n,function(e){return e.id}).includes(e)}).slice(0,25),r.t0=a,r.t1=T,r.next=20,k(e,i);case 20:r.t2=r.sent.data.response,r.t3={groups:r.t2,isLoading:!1},r.t4={type:r.t1,payload:r.t3},(0,r.t0)(r.t4);case 24:case"end":return r.stop()}var l},r)}));return function(e){return r.apply(this,arguments)}}()}},J=Object(g.b)(function(e){return Object(G.a)({},e.main,{userGroups:e.user.userGroups,userGroupsIsLoading:e.user.userGroupsIsLoading,userFriends:e.user.userFriends,userFriendsIsLoading:e.user.userFriendsIsLoading,userFriendsGroups:e.user.userFriendsGroups,userFriendsGroupsIsLoading:e.user.userFriendsGroupsIsLoading,userFriendsGroupsAnalyzeProgress:e.user.userFriendsGroupsAnalyzeProgress})},B)(function(e){var n=e.authToken,t=e.fetchedUser,s=e.activeTab,u=e.changeActiveTab,c=e.fetchUserGroups,o=e.userGroups,i=e.userGroupsIsLoading,l=e.fetchUserFriends,d=e.userFriends,p=e.userFriendsIsLoading,f=e.userFriendsGroups,m=e.userFriendsGroupsIsLoading,g=e.fetchUserFriendsGroups,b=e.userFriendsGroupsAnalyzeProgress;n&&t&&(console.log(e),o||i||c(n,t.id),d||p||l(n,t.id),!d||f||m||g(n,null===o?[]:o,d));return a.a.createElement(r.Fragment,null,a.a.createElement(h.PanelHeader,{noShadow:!0},"\u041c\u043e\u0439 \u043f\u0430\u0431\u043b\u0438\u043a"),a.a.createElement(h.FixedLayout,{vertical:"top"},a.a.createElement(h.Tabs,{type:"buttons",theme:"header"},a.a.createElement(h.HorizontalScroll,null,a.a.createElement(h.TabsItem,{onClick:function(){u("groups")},selected:"groups"===s},"\u041c\u043e\u0438 \u0433\u0440\u0443\u043f\u043f\u044b"),a.a.createElement(h.TabsItem,{onClick:function(){u("friends")},selected:"friends"===s},"\u041c\u043e\u0438 \u0434\u0440\u0443\u0437\u044c\u044f"),a.a.createElement(h.TabsItem,{onClick:function(){u("friendsRecommendations")},selected:"friendsRecommendations"===s},"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438 \u0434\u0440\u0443\u0437\u0435\u0439")))),a.a.createElement("div",{id:"content",style:{marginTop:"48px"}},function(){switch(s){case"groups":return a.a.createElement(K,{userGroups:null===o?[]:o});case"friends":return a.a.createElement(z,{userFriends:null===d?[]:d});case"friendsRecommendations":return f?a.a.createElement(K,{userGroups:f}):(console.log("render loading!"),a.a.createElement(h.Group,null,a.a.createElement(h.Div,null,a.a.createElement(h.InfoRow,{title:"\u0410\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u044e \u0442\u0432\u043e\u0438\u0445 \u0434\u0440\u0443\u0437\u0435\u0439..."},a.a.createElement(h.Progress,{value:b})))));default:return null}}()))}),Y=t(150),Z=t(107),q=t.n(Z),Q=t(148),X=t.n(Q),$=Object(h.platform)(),ee={changePanel:j},ne=Object(g.b)(function(e){return e.main},ee)(function(e){var n=e.activePanelProps,t=n.id,s=n.fullname,u=e.authToken,c=e.changePanel,o=Object(r.useState)([]),i=Object(Y.a)(o,2),l=i[0],d=i[1];return a.a.createElement(r.Fragment,null,a.a.createElement(h.PanelHeader,{addon:a.a.createElement(h.HeaderButton,{onClick:function(){c("main",{})}},"\u041d\u0430\u0437\u0430\u0434"),left:a.a.createElement(h.HeaderButton,null,$===h.IOS?a.a.createElement(X.a,null):a.a.createElement(q.a,null))},s),a.a.createElement("div",null,function(e){return 0===l.length?(P(u,e).then(function(e){d(e.data.response.items)}),null):a.a.createElement(K,{userGroups:l})}(t)))}),te=(t(347),function(e){function n(){var e,t;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(t=Object(l.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(a)))).go=function(e){t.props.changePanel(e.currentTarget.dataset.to,null)},t}return Object(p.a)(n,e),Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,n=e.changeFetchedUser,t=e.changeAuthToken;m.a.subscribe(function(e){switch(e.detail.type){case"VKWebAppGetUserInfoResult":n(e.detail.data);break;case"VKWebAppAccessTokenReceived":t(e.detail.data.access_token);break;default:console.log(e.detail.type)}}),m.a.send("VKWebAppGetUserInfo",{}),m.a.send("VKWebAppGetAuthToken",{app_id:6921887,scope:"groups,friends"})}},{key:"render",value:function(){var e=this.props,n=e.activeView,t=e.activePanel;return a.a.createElement(h.Root,{activeView:n},a.a.createElement(h.View,{id:"main",activePanel:t},a.a.createElement(h.Panel,{id:"main"},a.a.createElement(J,null)),a.a.createElement(h.Panel,{id:"friendGroups"},a.a.createElement(ne,null))))}}]),n}(a.a.Component)),re={changeView:function(e,n){return function(t){t({type:_,payload:{view:e,panel:n}})}},changePanel:j,changeFetchedUser:function(e){return function(n){n({type:A,payload:e})}},changeAuthToken:function(e){return function(n){n({type:I,payload:e})}}},ae=Object(g.b)(function(e){return e.main},re)(te),se=t(58),ue=t(149),ce={main:w,user:M},oe=Object(se.d)(Object(se.c)(ce),Object(se.a)(ue.a));c.a.send("VKWebAppInit",{}),u.a.render(a.a.createElement(g.a,{store:oe},a.a.createElement(ae,null)),document.getElementById("root"))}},[[153,1,2]]]);
//# sourceMappingURL=main.68c44e4a.chunk.js.map