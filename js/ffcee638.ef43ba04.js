(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ffcee638"],{b656:function(t,e,a){"use strict";var n=a("e707"),o=a.n(n);o.a},e707:function(t,e,a){},f241:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{staticClass:"shadow-2 rounded-borders",attrs:{view:"hHh Lpr fFf"}},[a("q-header",{staticClass:"header row",attrs:{elevated:""}},[a("section",{staticClass:"header-container col-11"},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}},[a("q-icon",{attrs:{name:"menu"}})],1),a("q-toolbar-title",{staticClass:"gt-xs"},[t._v("\n          "+t._s(t.$t("menu"))+"\n        ")])],1),a("div",{staticClass:"header__logo"},[a("router-link",{attrs:{to:"/",tag:"p"}},[t._v("\n          inCitySport\n        ")]),a("div",{staticClass:"header__logo-icon"})],1),a("q-select",{staticClass:"header__find",staticStyle:{"min-width":"80px"},attrs:{options:t.langOptions,label:"Language",dense:"",borderless:"","emit-value":"","map-options":"","options-dense":""},model:{value:t.lang,callback:function(e){t.lang=e},expression:"lang"}})],1)]),a("q-drawer",{attrs:{behavior:"mobile","content-class":"bg-grey-2"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-list",[a("q-item",{attrs:{clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"home"}})],1),a("q-item-section",[a("router-link",{attrs:{to:"/",tag:"a"}},[t._v("\n            "+t._s(t.$t("main"))+"\n          ")])],1)],1),a("q-item",{attrs:{clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"priority_high"}})],1),a("q-item-section",[a("router-link",{attrs:{to:"/rules",tag:"a"}},[t._v("\n            "+t._s(t.$t("rules"))+"\n          ")])],1)],1),a("q-item",{attrs:{clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"mail_outline"}})],1),a("q-item-section",[a("router-link",{attrs:{to:"/contacts",tag:"a"}},[t._v("\n              "+t._s(t.$t("contacts"))+"\n            ")])],1)],1)],1)],1),a("q-page-container",[a("q-page",{attrs:{padding:""}},[a("router-view")],1)],1)],1)},o=[],r=a("0967"),i=a("2b0e"),s=function(t,e){var a=window.open;if(!0===r["a"].is.cordova){if(void 0!==cordova&&void 0!==cordova.InAppBrowser&&void 0!==cordova.InAppBrowser.open)a=cordova.InAppBrowser.open;else if(void 0!==navigator&&void 0!==navigator.app)return navigator.app.loadUrl(t,{openExternal:!0})}else if(void 0!==i["a"].prototype.$q.electron)return i["a"].prototype.$q.electron.shell.openExternal(t);var n=a(t,"_blank");if(n)return n.focus(),n;e&&e()},l={name:"MyLayout",data:function(){return{leftDrawerOpen:!1,lang:this.$i18n.locale,langOptions:[{value:"ua",label:"Українська"},{value:"ru",label:"Русский"},{value:"en-us",label:"English"}]}},watch:{lang:function(t){this.$i18n.locale=t}},methods:{openURL:s}},c=l,p=(a("b656"),a("2877")),u=Object(p["a"])(c,n,o,!1,null,null,null);e["default"]=u.exports}}]);