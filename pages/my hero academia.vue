<template>
  <section class="animeTemp mha">
      <section class="animeTemp__hero animeTemp__hero--mha">
      <div class="animeTemp__logoCon animeTemp__logoCon--mha">
        <img src="https://bit.ly/3zg6GQv" alt="My Hero Academia Logo" class="animeTemp__logo animeTemp__logo--mha">
        <h2 class="animeTemp__heading animeTemp__heading--mha animeTemp__heading--eb animeTemp__heading--center">Season 2 - Coming Soon</h2>
        <iframe v-if="tablet == true || desktop == true" class="mha__video" src="https://www.youtube.com/embed/Q8bmv-14OVI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div class="animeTemp__btns animeTemp__btns--hero animeTemp__btns--hero--mha">
          <span class="animeTemp__btn animeTemp__btn--mha animeTemp__btn--small">Watch Now<img src="~/assets/icons/play-circle.svg" alt="Watch Now Button"></span>
          <span class="animeTemp__btn animeTemp__btn--mha animeTemp__btn--small">Click<img src="~/assets/icons/info.svg" alt="Information Button"></span>
        </div>
      </div>
      <img class="animeTemp__heroImg animeTemp__heroImg--mha" v-if="mobile == true" src="https://bit.ly/2SjlWeS" alt="My Hero Academia Main Character">
      <img class="animeTemp__heroImg animeTemp__heroImg--mha" v-else-if="tablet == true || desktop == true" src="https://bit.ly/3zkckRu" alt="My Hero Academia Main Characters">
    </section>
    <section class="mha__bck">
      <div class="mha__content">
        <div class="mha__text">
          <h3 class="animeTemp__heading animeTemp__heading--mha animeTemp__heading--mha--large">{{ currentContent.heading }}</h3>
          <p class="mha__para">{{ currentContent.desc }}</p>
          <div class="animeTemp__btns animeTemp__btns--list animeTemp__btns--mha">
            <span v-for="(block, index) in apiContent" @click="changeContent(block); setActive(index)" class="animeTemp__btn animeTemp__btn--mha animeTemp__btn--filter" :class="{animeTemp__active: activeComponent === index}" :key="block.id">{{ block.heading }}</span>
          </div>
        </div>
          <div v-if="activeComponent == 0" class="mha__wrapper mha__wrapper--img">
            <img class="animeTemp__image animeTemp__image--mha" :src="currentContent.img" alt="Image of Deku">
          </div>
          <div v-else-if="activeComponent == 1 || activeComponent == 2" class="mha__wrapper mha__wrapper--list">
            <MyHeroContent v-for="item in currentContent.characters" :key="item.id" :item="item"/>
          </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      mobile: null,
      tablet: null,
      desktop: null,

      api: `https://api.npoint.io/4d4a367338f89fe81bb5/mha/content`,
      apiChar: `https://api.npoint.io/4d4a367338f89fe81bb5/mha/content/1/characters`,
      apiEpi: `https://api.npoint.io/4d4a367338f89fe81bb5/mha/content/2/characters`,

      title: 'Toksan Anime - My Hero Academia',
      description: `Whether you're a freshman or in your final year, Toksan Anime gives you the full experience of My Hero Academia, and some of the "Quirks" that come with it!`,
      image: 'https://ac59852.github.io/toksan-anime/app-icon.png',
      ogImage: 'https://ac59852.github.io/toksan-anime/fb.png',

      apiContent: [],
      characters: [],
      episodes: [],

      currentContent: {},

      activeComponent: 0,
      items: [],
    }
  },

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.image
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.title
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.description
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.ogImage
        },
        {
          hid: 'og:image:alt',
          name: 'og:image:alt',
          content: this.title
        },
      ]
    }
  },

  created() {
    this.apiPopulate()
    this.charPopulate()
    this.epiPopulate()
  },

  mounted() {
    this.screenSize()

    this.$nextTick(function () {
      window.addEventListener('resize', this.screenSize)
    })
  },

  methods: {
    screenSize() {
      if (window.innerWidth <= 1023) {
        this.mobile = true
        this.tablet = false
        this.desktop = false
      } else if (window.innerWidth >= 1023 && window.innerWidth <= 1199) {
        this.tablet = true
        this.mobile = false
        this.desktop = false
      } else if (window.innerWidth >= 1199) {
        this.mobile = false
        this.tablet = false
        this.desktop = true
      }
    },

    changeContent(info) {
      this.currentContent = info

      this.items = this.currentContent.characters

      console.log(this.currentContent)
    },

    setActive(index) {
      this.activeComponent = index
    }
  }
}
</script>

<style>

</style>