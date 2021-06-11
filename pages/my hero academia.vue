<template>
  <section class="animeTemp mha">
      <section class="animeTemp__hero animeTemp__hero--mha">
      <div class="animeTemp__logoCon animeTemp__logoCon--mha">
        <img src="https://bit.ly/3zg6GQv" alt="My Hero Academia Logo" class="animeTemp__logo animeTemp__logo--mha">
        <h2 class="animeTemp__heading animeTemp__heading--mha animeTemp__heading--eb animeTemp__heading--center">Season 2 - Coming Soon</h2>
        <div class="animeTemp__btns animeTemp__btns--hero">
          <span class="animeTemp__btn animeTemp__btn--mha animeTemp__btn--small">Watch Now<img src="~/assets/icons/play-circle.svg" alt="Watch Now Button"></span>
          <span class="animeTemp__btn animeTemp__btn--mha animeTemp__btn--small">Click<img src="~/assets/icons/info.svg" alt="Information Button"></span>
        </div>
      </div>
      <img class="animeTemp__heroImg animeTemp__heroImg--mha" v-if="mobile == true" src="https://bit.ly/2SjlWeS" alt="My Hero Academia Main Character">
      <img class="animeTemp__heroImg" v-else-if="tablet == true || desktop == true" src="https://bit.ly/3zkckRu" alt="My Hero Academia Main Characters">
    </section>
    <section class="mha__bck">
      <div class="mha__content">
        <div>
          <h3 class="animeTemp__heading animeTemp__heading--mha animeTemp__heading--mha--large">{{ currentContent.heading }}</h3>
          <p class="mha__para">{{ currentContent.desc }}</p>
          <div class="animeTemp__btns animeTemp__btns--list animeTemp__btns--mha">
            <span v-for="(block, index) in apiContent" @click="changeContent(block); setActive(index)" class="animeTemp__btn animeTemp__btn--mha animeTemp__btn--filter" :class="{animeTemp__active: activeComponent === index}" :key="block.id">{{ block.heading }}</span>
          </div>
        </div>
          <div class="mha__wrapper">
            <img v-if="activeComponent == 0" class="animeTemp__image animeTemp__image--mha" :src="currentContent.img" alt="Image of Deku">
            <MyHeroContent v-else-if="activeComponent == 1 || activeComponent == 2" v-for="item in currentContent.characters" :key="item.id" :item="item"/>
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

      apiContent: [],
      characters: [],
      episodes: [],

      currentContent: {},

      activeComponent: 0,
      items: [],
    }
  },

  created() {
    this.apiPopulate()
    this.charPopulate()
    this.epiPopulate()
  },

  mounted() {
    this.checkWidth()

    this.$nextTick(function () {
      window.addEventListener('resize', this.checkWidth)
    })
  },

  methods: {
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