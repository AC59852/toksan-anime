(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{271:function(t,n,e){"use strict";e.r(n);var l={name:"Manga",props:["manga"]},r=e(23),c={components:{Manga:Object(r.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{style:"background-image: url("+t.manga.image+")"},[e("span",[e("h3",[t._v(t._s(t.manga.name)+":")]),t._v(" "),e("h4",[t._v("Chapter "+t._s(t.manga.chapter))])])])}),[],!1,null,null,null).exports},data:function(){return{api:"https://api.npoint.io/4d4a367338f89fe81bb5/manga",apiContent:[]}},created:function(){this.apiPopulate()}},o=Object(r.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"listWrapper",attrs:{id:"homeManga"}},[e("div",{staticClass:"latestTitle"},[e("h2",[t._v("Latest Manga Releases")]),e("nuxt-link",{staticClass:"latestLink",attrs:{to:"/"}},[t._v("\n      See All\n    ")])],1),t._v(" "),e("div",{staticClass:"listContent"},t._l(t.apiContent,(function(t,n){return e("Manga",{key:n,class:"manga"+t.id,attrs:{manga:t}})})),1)])}),[],!1,null,null,null);n.default=o.exports}}]);