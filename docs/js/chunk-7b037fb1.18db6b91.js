(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b037fb1"],{"9db0":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"send__wrap"},[s("div",{staticClass:"navigation app-header"},[s("div",{staticClass:"nav-div"},[s("nav",{staticClass:"nav-menu",attrs:{role:"navigation"}},[s("router-link",{staticClass:"logo title",attrs:{to:"/"}},[s("img",{attrs:{src:a("65cb"),alt:"logo",width:"24px"}}),s("div",{staticStyle:{"white-space":"nowrap"}},[t._v("인편단심")])]),s("span",{staticStyle:{margin:"0 0.7rem"}},[t._v("|")])],1),s("div",{staticClass:"nav-back",on:{click:t.handleBack}},[t._m(0)])])]),1==t.pageNumber?s("div",{staticClass:"content-area"},[s("div",{staticClass:"wrapper send-now"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.mailText,expression:"mailText"}],staticStyle:{display:"none"},domProps:{value:t.mailText},on:{input:function(e){e.target.composing||(t.mailText=e.target.value)}}}),t._m(1),t._m(2),s("div",{staticClass:"btn-container"},[s("div",{staticClass:"btn",on:{click:t.handleSend}},[t._v("지금 보내러 가기")])])]),t._m(3)]):t._e(),2==t.pageNumber?s("div",{staticClass:"done-area"},[s("div",{staticClass:"wrapper done"},[t._m(4),t._m(5),s("div",{staticClass:"btn-container"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.mailText,expression:"mailText"}],staticStyle:{display:"none"},domProps:{value:t.mailText},on:{input:function(e){e.target.composing||(t.mailText=e.target.value)}}}),s("div",{staticClass:"btn",on:{click:t.handleSend}},[t._v(" 다시 복사하기 ")])])])]):t._e(),s("div",{staticClass:"alert-popup__wrap"},[s("transition",{attrs:{name:"popup"}},[t.showAlert?s("div",{staticClass:"alert-popup"},[s("span",[t._v(t._s(t.alertMessage))])]):t._e()])],1)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("i",{staticClass:"fas fa-arrow-left"}),t._v(" 편지작성")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title-container"},[a("div",{staticClass:"eng"},[t._v("SEND")]),a("div",{staticClass:"kor"},[t._v("마음을 전하러 가는 길.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article-container"},[a("div",{staticClass:"text"},[t._v("작성한 편지가 클립보드에 복사되고,")]),a("div",{staticClass:"text"},[t._v("훈련소 페이지로 이동합니다.")]),a("div",{staticClass:"text"},[t._v("훈련병을 찾아 소중한 마음을 전하세요!")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper send-latter"},[a("div",{staticClass:"title-container"},[a("div",{staticClass:"eng"},[t._v("SAVE")]),a("div",{staticClass:"kor"},[t._v("더 예쁜 말로 다듬기 위해서.")])]),a("div",{staticClass:"article-container"},[a("div",{staticClass:"text"},[t._v("로그인하고 작성한 페이지를 보관하세요.")]),a("div",{staticClass:"text"},[t._v("언제든지 꺼내서 보낼 수 있어요!")])]),a("div",{staticClass:"btn-container"},[a("div",{staticClass:"btn"},[t._v("편지 보관하기")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title-container"},[a("div",{staticClass:"eng"},[t._v("DONE!")]),a("div",{staticClass:"kor"},[t._v("기다리는 시간마저 즐거운.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article-container"},[a("div",{staticClass:"text"},[t._v("인편단심을 찾아 주셔서 감사합니다.")]),a("div",{staticClass:"text"},[t._v("또 오세요!")])])}],n=(a("c975"),{data:function(){return{showAlert:!1,pageNumber:1,mailText:this.$route.params.mailText,armyType:this.$route.params.armyType,reciever:this.$route.params.reciever}},methods:{handleSend:function(){this.doCopy(),this.handleShowAlert("복사되었습니다!\n잠시후 훈련소 페이지로 연결됩니다."),this.pageNumber=2,this.showPopup()},toggleSend:function(){this.pageNumber=!this.pageNumber},handleBack:function(){this.$router.push({name:"WriteMail",params:{mailText:this.mailText,armyType:this.armyType,receiver:this.reciever}})},copyText:function(){var t=navigator.userAgent.toLowerCase(),e=document.getElementById("target");e.select(),-1!=t.indexOf("safari")&&e.setSelectionRange(0,9999),document.execCommand("copy"),document.body.removeChild(e)},showPopup:function(){window.open("http://www.airforce.mil.kr:8081/user/indexSub.action?codyMenuSeq=156893223&siteId=last2&menuUIType=sub#searchName","팝업창기능","width=1440, height=900, left=720, top=330")},backToSend:function(){this.pageNumber=!this.pageNumber},handleShowAlert:function(t){this.alertMessage=t,this.showAlert=!0;var e=this;setTimeout((function(){e.showAlert=!1,e.alertMessage=""}),2e3)},doCopy:function(){this.$copyText(this.mailText)}}}),r=n,c=(a("d36a"),a("2877")),l=Object(c["a"])(r,s,i,!1,null,"ae755d1a",null);e["default"]=l.exports},b508:function(t,e,a){},c975:function(t,e,a){"use strict";var s=a("23e7"),i=a("4d64").indexOf,n=a("a640"),r=a("ae40"),c=[].indexOf,l=!!c&&1/[1].indexOf(1,-0)<0,o=n("indexOf"),d=r("indexOf",{ACCESSORS:!0,1:0});s({target:"Array",proto:!0,forced:l||!o||!d},{indexOf:function(t){return l?c.apply(this,arguments)||0:i(this,t,arguments.length>1?arguments[1]:void 0)}})},d36a:function(t,e,a){"use strict";var s=a("b508"),i=a.n(s);i.a}}]);
//# sourceMappingURL=chunk-7b037fb1.18db6b91.js.map