(window.webpackJsonp=window.webpackJsonp||[]).push([[13,8],{261:function(t,e,n){"use strict";n.r(e);var o={props:["title","apiLink"],data:function(){return{apiPop:this.apiLink,apiContentPop:[]}},mounted:function(){this.apiPopulatePopular()}},l=n(23),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"mangaList listWrapper"},[n("div",{staticClass:"latestTitle"},[n("h2",[t._v(t._s(t.title))]),n("nuxt-link",{staticClass:"latestLink",attrs:{to:"/"}},[t._v("\n      See All\n      ")])],1),t._v(" "),n("div",{staticClass:"listContent"},t._l(t.apiContentPop,(function(e){return n("div",{key:e.id,class:"manga"+e.id,style:{backgroundImage:"url("+e.attributes.posterImage.small+")"}},[n("span",[null==e.attributes.titles.en||""==e.attributes.titles.en?n("h3",[t._v(t._s(e.attributes.canonicalTitle)+":")]):n("h3",[t._v(t._s(e.attributes.titles.en)+":")]),t._v(" "),null==e.attributes.chapterCount?n("h4",[t._v("Chapter "+t._s(e.attributes.volumeCount))]):n("h4",[t._v("Chapter "+t._s(e.attributes.chapterCount))])])])})),0)])}),[],!1,null,null,null);e.default=component.exports},273:function(t,e,n){"use strict";n.r(e);n(24),n(41);var o={data:function(){return{title:"Toksan Anime - Demon Slayer",description:"Toksan Anime provides all forms of Japanese cultural content, that includes manga! Check out our curated lists of most popular, most recent, and even hidden gems!",image:"https://ac59852.github.io/toksan-anime/app-icon.png",ogImage:"https://ac59852.github.io/toksan-anime/fb.png"}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description},{hid:"twitter:title",name:"twitter:title",content:this.title},{hid:"twitter:description",name:"twitter:description",content:this.description},{hid:"twitter:image",name:"twitter:image",content:this.image},{hid:"twitter:image:alt",name:"twitter:image:alt",content:this.title},{hid:"og:title",name:"og:title",content:this.title},{hid:"og:description",name:"og:description",content:this.description},{hid:"og:image",name:"og:image",content:this.ogImage},{hid:"og:image:alt",name:"og:image:alt",content:this.title}]}}},l=n(23),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"manga"}},[n("MangaComponent",{attrs:{title:"Popular Manga Releases",apiLink:"https://kitsu.io/api/edge/manga?page[limit]=10&page[offset]=4&sort=popularityRank"}}),t._v(" "),n("MangaComponent",{attrs:{title:"Latest Manga Releases",apiLink:"https://kitsu.io/api/edge/manga?page[limit]=10&page[offset]=134&filter[status]=current&sort=updatedAt&sort=-chapterCount"}}),t._v(" "),n("MangaComponent",{attrs:{title:"Completed Manga",apiLink:"https://kitsu.io/api/edge/manga?page[limit]=10&page[offset]=11&filter[status]=finished&sort=-userCount"}}),t._v(" "),n("MangaComponent",{attrs:{title:"Hidden Gems",apiLink:"https://kitsu.io/api/edge/manga?page[limit]=10&page[offset]=220&sort=popularityRank&sort=-userCount"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MangaComponent:n(261).default})}}]);