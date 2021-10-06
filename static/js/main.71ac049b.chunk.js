(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{27:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(15),s=n.n(c),i=(n(27),n(21)),r=n(2),u=n(16),l=n(17),p=new(function(){function e(t){Object(u.a)(this,e),this._url=t.url,this._headers=t.headers}return Object(l.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getListCard",value:function(){var e=this;return fetch(this._url+"/cards",{method:"GET",headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"postCard",value:function(e){var t=this;return fetch(this._url+"/cards",{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._getResponseData(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch(this._url+"/cards/"+e,{method:"DELETE",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch(this._url+"/users/me",{method:"GET",headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"patchUserInfo",value:function(e){var t=this;return fetch(this._url+"/users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._getResponseData(e)}))}},{key:"patchAvatar",value:function(e){var t=this;return fetch(this._url+"/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._getResponseData(e)}))}},{key:"changeLikeCardStatus",value:function(e,t){var n=this;return fetch(this._url+"/cards/likes/"+e,{method:t?"PUT":"DELETE",headers:this._headers}).then((function(e){return n._getResponseData(e)}))}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-26",headers:{authorization:"16600085-655d-47fe-aa20-66da64ea85b3","Content-type":"application/json"}}),j=n.p+"static/media/header-logo.5f3664ca.svg",d=n(3),h=n(6),b=n(0);var m=function(e){var t=e.userEmail,n=Object(d.g)();return Object(b.jsxs)("header",{className:"header",children:[Object(b.jsx)("img",{src:j,className:"header__logo",alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f 'Mesto Russia'"}),Object(b.jsx)(d.b,{path:"/sign-in",children:Object(b.jsx)(h.b,{className:"header__link link-opacity",to:"/sign-up",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(b.jsx)(d.b,{path:"/sign-up",children:Object(b.jsx)(h.b,{className:"header__link link-opacity",to:"/sign-in",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(b.jsxs)(d.b,{exact:!0,path:"/",children:[Object(b.jsx)("h2",{className:"header__link",style:{marginLeft:"auto",marginRight:"24px"},children:t}),Object(b.jsx)(h.b,{className:"header__link link-opacity",onClick:function(){localStorage.removeItem("token"),n.push("/login")},style:{color:"#A9A9A9"},to:"/sign-in",children:"\u0412\u044b\u0439\u0442\u0438"})]})]})},f=Object(a.createContext)();var O=function(e){var t=e.card,n=e.onCardClick,a=e.onCardLike,c=e.onCardDelete,s=t.likes,i=o.a.useContext(f),r=t.owner._id===i._id?Object(b.jsx)("button",{type:"button",className:"elements__trash-button link-opacity",onClick:function(){c(t)}}):"",u=t.likes.some((function(e){return e._id===i._id})),l="".concat(u?"elements__heart_active":"elements__heart"," link-opacity");return Object(b.jsx)("li",{className:"card-template",children:Object(b.jsxs)("div",{className:"elements__card",children:[r,Object(b.jsx)("img",{src:t.link,onClick:function(){n(t)},className:"elements__photo",alt:t.name}),Object(b.jsxs)("div",{className:"elements__footer",children:[Object(b.jsx)("h2",{className:"elements__title",children:t.name}),Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{type:"button",className:l,onClick:function(){a(t)}}),Object(b.jsx)("h2",{className:"elements__amount",children:s.length})]})]})]})})};var _=function(e){var t=e.onEditAvatar,n=e.onEditProfile,a=e.onAddPlace,c=e.onCardClick,s=e.cards,i=e.onCardLike,r=e.onCardDelete,u=o.a.useContext(f);return Object(b.jsxs)("main",{className:"content",children:[Object(b.jsxs)("section",{className:"profile",children:[Object(b.jsxs)("div",{className:"profile__avatar profile__avatar-opacity",children:[Object(b.jsx)("img",{src:u.avatar,className:"profile__icon profile__avatar-opacity",alt:"\u0410\u0432\u0430\u0442\u0430\u0440\u043a\u0430"}),Object(b.jsx)("button",{type:"button",className:"profile__edit-avatar-button profile__pencil profile__avatar-opacity",alt:"\u0410\u0432\u0430\u0442\u0430\u0440\u043a\u0430",onClick:t})]}),Object(b.jsxs)("div",{className:"profile__info",children:[Object(b.jsx)("h1",{className:"profile__title",children:u.name}),Object(b.jsx)("button",{type:"button",className:"profile__edit-button link-opacity",onClick:n}),Object(b.jsx)("p",{className:"profile__subtitle",children:u.about})]}),Object(b.jsx)("button",{type:"button",className:"profile__add-button link-opacity",onClick:a})]}),Object(b.jsx)("section",{className:"elements",children:Object(b.jsx)("ul",{className:"elements__cards",children:s.map((function(e){return Object(b.jsx)(O,{card:e,onCardClick:c,onCardLike:i,onCardDelete:r},e._id)}))})})]})};var x=function(e){var t=e.card,n=e.onClose;return Object(b.jsx)("section",{className:"popup image ".concat(t.link?"popup_opened":""),children:Object(b.jsxs)("div",{className:"popup__img-container",children:[Object(b.jsx)("button",{type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u043f\u0430\u043f \u043d\u043e\u0432\u043e\u0439 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438",onClick:n,className:"popup__close-button link-opacity"}),Object(b.jsx)("img",{className:"popup__image",src:t.link,alt:t.name}),Object(b.jsx)("h2",{className:"popup__subtitle",children:t.name})]})})},g=n(7);var v=function(e){var t=e.isOpen,n=e.onClose,a=e.onSubmit,o=e.title,c=e.name,s=e.buttonText,i=e.children;return Object(b.jsx)("section",{className:"popup ".concat(c," ").concat(t?"popup_opened":""),children:Object(b.jsxs)("div",{className:"popup__container",children:[Object(b.jsx)("button",{type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u043f\u0430\u043f \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u044f",className:"popup__close-button link-opacity",onClick:n}),Object(b.jsx)("h2",{className:"popup__title",children:o}),Object(b.jsxs)("form",{name:"".concat(c,"-form"),action:"#",className:"popup__form",onSubmit:a,children:[i,Object(b.jsx)("button",{type:"submit",className:"popup__save-button link-opacity save-profile",children:s})]})]})})};var C=function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateUser,s=o.a.useContext(f),i=Object(a.useState)(""),u=Object(r.a)(i,2),l=u[0],p=u[1],j=Object(a.useState)(""),d=Object(r.a)(j,2),h=d[0],m=d[1];return Object(a.useEffect)((function(){p(s.name),m(s.about)}),[t,s]),Object(b.jsxs)(v,Object(g.a)({isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c({name:l,about:h})},title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:!0},"children",[Object(b.jsx)("input",{id:"name-input",className:"popup__input",name:"name",type:"text",placeholder:"\u0418\u043c\u044f",value:l||"",onChange:function(e){p(e.target.value)},autoComplete:"off",minLength:"2",maxLength:"40",required:!0}),Object(b.jsx)("span",{className:"name-input-error popup__input-error"}),Object(b.jsx)("input",{id:"job-input",name:"about",type:"text",placeholder:"\u041e \u0441\u0435\u0431\u0435",value:h||"",onChange:function(e){m(e.target.value)},className:"popup__input",autoComplete:"off",minLength:"2",maxLength:"200",required:!0}),Object(b.jsx)("span",{className:"job-input-error popup__input-error"})]))};var k=function(e){var t=e.isOpen,n=e.onClose,o=e.onAddPlace,c=Object(a.useState)(""),s=Object(r.a)(c,2),i=s[0],u=s[1],l=Object(a.useState)(""),p=Object(r.a)(l,2),j=p[0],d=p[1];return Object(a.useEffect)((function(){u(""),d("")}),[t]),Object(b.jsxs)(v,Object(g.a)({isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),o({name:i,link:j})},title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add",buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",children:!0},"children",[Object(b.jsx)("input",{id:"place",name:"form-place",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",value:i,onChange:function(e){u(e.target.value)},className:"popup__input",autoComplete:"off",minLength:"2",maxLength:"30",required:!0}),Object(b.jsx)("span",{className:"place-error popup__input-error"}),Object(b.jsx)("input",{id:"link",name:"form-resource",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",value:j,onChange:function(e){d(e.target.value)},className:"popup__input",autoComplete:"off",required:!0}),Object(b.jsx)("span",{className:"link-error popup__input-error"})]))};var N=function(e){var t=e.isOpen,n=e.onClose,o=e.onUpdateAvatar,c=Object(a.useRef)("");return Object(a.useEffect)((function(){c.current.value=""}),[t]),Object(b.jsxs)(v,Object(g.a)({isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),o(c.current.value)},title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:!0},"children",[Object(b.jsx)("input",{id:"avatarLink",name:"form-resource",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",ref:c,className:"popup__input",autoComplete:"off",required:!0}),Object(b.jsx)("span",{className:"avatarLink-error popup__input-error"})]))};var y=function(e){var t=e.registrtion,n=(e.isInfoTooltipOpen,e.onPost,e.onClose,Object(a.useState)("")),o=Object(r.a)(n,2),c=o[0],s=o[1],i=Object(a.useState)(""),u=Object(r.a)(i,2),l=u[0],p=u[1],j=Object(a.useState)("password"),d=Object(r.a)(j,2),m=d[0],f=d[1];return Object(b.jsxs)("section",{className:"authorization",children:[Object(b.jsx)("h2",{className:"authorization__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(b.jsxs)("form",{name:"",action:"#",className:"authorization__form",onSubmit:function(e){e.preventDefault(),t(c,l),s(""),p("")},noValidate:!0,children:[Object(b.jsx)("input",{id:"email",className:"authorization__input",name:"email",type:"text",placeholder:"Email",value:c,onChange:function(e){s(e.target.value)},autoComplete:"off",minLength:"2",maxLength:"40",required:!0}),Object(b.jsx)("input",{id:"password",name:"password",type:m,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:l,onChange:function(e){p(e.target.value)},className:"authorization__input",autoComplete:"off",minLength:"2",maxLength:"200",required:!0}),Object(b.jsx)("h2",{className:"authorization__registered link-opacity",style:{textAlign:"center"},onClick:function(){f("password"===m?"text":"password")},children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(b.jsx)("button",{type:"submit",className:"authorization__button link-opacity save-profile",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(b.jsx)(h.b,{to:"/sign-in",className:"authorization__registered",href:"#",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})]})};var S=function(e){var t=e.authorization,n=Object(a.useState)(""),o=Object(r.a)(n,2),c=o[0],s=o[1],i=Object(a.useState)(""),u=Object(r.a)(i,2),l=u[0],p=u[1],j=Object(a.useState)("password"),d=Object(r.a)(j,2),h=d[0],m=d[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("section",{className:"authorization",children:[Object(b.jsx)("h2",{className:"authorization__title",children:"\u0412\u0445\u043e\u0434"}),Object(b.jsxs)("form",{name:"",action:"#",className:"authorization__form",onSubmit:function(e){e.preventDefault(),t(c,l),s(""),p("")},noValidate:!0,children:[Object(b.jsx)("input",{id:"email",className:"authorization__input",name:"email",type:"text",placeholder:"Email",value:c,onChange:function(e){s(e.target.value)},autoComplete:"off",minLength:"2",maxLength:"40",required:!0}),Object(b.jsx)("input",{id:"password",name:"password",type:h,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:l,onChange:function(e){p(e.target.value)},className:"authorization__input",autoComplete:"off",minLength:"2",maxLength:"200",required:!0}),Object(b.jsx)("h2",{className:"authorization__registered link-opacity",style:{textAlign:"center"},onClick:function(){m("password"===h?"text":"password")},children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(b.jsx)("button",{type:"submit",className:"authorization__button link-opacity save-profile",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})},L=n(20),E=n(22),T=["component"],z=function(e){var t=e.component,n=Object(E.a)(e,T);return Object(b.jsx)(d.b,{children:function(){return n.loggedIn?Object(b.jsx)(t,Object(L.a)({},n)):Object(b.jsx)(d.a,{to:"sign-in"})}})},A="https://auth.nomoreparties.co";function D(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}var w=function(){return Object(b.jsx)("footer",{className:"footer",children:Object(b.jsx)("p",{className:"footer__copyright",children:"\xa9 2021. Mesto Russia"})})},P=n.p+"static/media/success.bd528945.svg",I=n.p+"static/media/fail.064903fa.svg";var R=function(e){var t=e.isInfoTooltipOpen,n=e.isSuccess,a=e.onClose,o="\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!",c="\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.";return Object(b.jsx)("section",{className:"popup ".concat(t?"popup_opened":""),children:Object(b.jsxs)("div",{className:"popup__container",children:[Object(b.jsx)("button",{type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u043f\u0430\u043f \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u044f",className:"popup__close-button link-opacity",onClick:a}),Object(b.jsx)("img",{src:n?P:I,style:{paddingTop:60},alt:n?o:c}),Object(b.jsx)("h2",{className:"popup__title",style:{textAlign:"center",padding:0,marginLeft:0,marginBottom:60,marginTop:32},children:n?o:c})]})})};var U=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(!1),s=Object(r.a)(c,2),u=s[0],l=s[1],j=Object(a.useState)(!1),h=Object(r.a)(j,2),O=h[0],g=h[1],v=Object(a.useState)(!1),L=Object(r.a)(v,2),E=L[0],T=L[1],P=Object(a.useState)({}),I=Object(r.a)(P,2),U=I[0],q=I[1],J=Object(a.useState)({}),B=Object(r.a)(J,2),G=B[0],M=B[1],F=Object(a.useState)([]),H=Object(r.a)(F,2),V=H[0],K=H[1],Q=Object(a.useState)(!1),W=Object(r.a)(Q,2),X=W[0],Y=W[1],Z=Object(a.useState)(""),$=Object(r.a)(Z,2),ee=$[0],te=$[1],ne=Object(d.g)(),ae=Object(a.useState)(!1),oe=Object(r.a)(ae,2),ce=oe[0],se=oe[1];function ie(){o(!1),l(!1),g(!1),T(!1),q({})}return Object(a.useEffect)((function(){var e=function(e){"Escape"===e.key&&ie()};return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}}),[]),Object(a.useEffect)((function(){Promise.all([p.getListCard(),p.getUserInfo()]).then((function(e){var t=Object(r.a)(e,2),n=t[0],a=t[1];K(n),M(a)})).catch((function(e){console.log(e)}))}),[]),Object(a.useEffect)((function(){var e;localStorage.getItem("token")&&(e=localStorage.token,fetch("".concat(A,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return D(e)})).then((function(e){if(e)return e}))).then((function(e){te(e.data.email),Y(!0),ne.push("/")})).catch((function(e){console.log(e)}))}),[ne]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(f.Provider,{value:G,children:Object(b.jsxs)("div",{className:"root",children:[Object(b.jsx)(m,{userEmail:ee}),Object(b.jsxs)(d.d,{children:[Object(b.jsx)(z,{component:_,exact:!0,path:"/",loggedIn:X,onEditAvatar:function(){o(!0)},onEditProfile:function(){l(!0)},onAddPlace:function(){g(!0)},onCardClick:function(e){q(e)},cards:V,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===G._id}));p.changeLikeCardStatus(e._id,!t).then((function(t){K((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log(e)}))},onCardDelete:function(e){p.deleteCard(e._id).then((function(){K(V.filter((function(t){return t._id===e._id?null:t})))})).catch((function(e){console.log(e)}))}}),Object(b.jsx)(d.b,{path:"/sign-up",children:Object(b.jsx)(y,{registrtion:function(e,t){(function(e,t){return fetch("".concat(A,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t,email:e})}).then((function(e){return D(e)})).then((function(e){return e}))})(e,t).then((function(){T(!0),se(!0),ne.push("/sign-in")})).catch((function(){T(!0),se(!1)}))},onClose:ie})}),Object(b.jsx)(d.b,{path:"/sign-in",children:Object(b.jsx)(S,{authorization:function(e,t){(function(e,t){return fetch("".concat(A,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t,email:e})}).then((function(e){return D(e)})).then((function(e){return e}))})(e,t).then((function(t){t.token&&(localStorage.setItem("token",t.token),te(e),Y(!0),ne.push("/"))})).catch((function(){T(!0),se(!1)}))},onClose:ie})})]}),Object(b.jsx)(w,{}),Object(b.jsx)(N,{isOpen:n,onClose:ie,onUpdateAvatar:function(e){var t={avatar:e};p.patchAvatar(t).then((function(e){M(e),ie()})).catch((function(e){console.log(e)}))}}),Object(b.jsx)(C,{isOpen:u,onClose:ie,onUpdateUser:function(e){var t=e.name,n=e.about;p.patchUserInfo({name:t,about:n}).then((function(e){M(e),ie()})).catch((function(e){console.log(e)}))}}),Object(b.jsx)(k,{isOpen:O,onClose:ie,onAddPlace:function(e){p.postCard(e).then((function(e){K([e].concat(Object(i.a)(V))),ie()})).catch((function(e){console.log(e)}))}}),Object(b.jsx)(x,{card:U,onClose:ie}),Object(b.jsx)(R,{isInfoTooltipOpen:E,isSuccess:ce,onClose:ie})]})})})};s.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(h.a,{children:Object(b.jsx)(U,{})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.71ac049b.chunk.js.map