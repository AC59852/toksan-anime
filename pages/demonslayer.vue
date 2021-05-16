<template>
  <section class="ds">
    <section class="ds__hero">
      <div class="ds__logoCon">
        <img src="~/assets/images/ds/ds_logo.png" alt="Demon Slayer Logo" class="ds__logo">
        <h2 class="ds__heading ds__heading--eb ds__heading--center">Season 2 - Coming Soon</h2>
        <div class="ds__btns ds__btns--hero">
          <span class="ds__btn ds__btn--small">Watch Now<img src="~/assets/icons/play-circle.svg" alt="Watch Now Button"></span>
          <span class="ds__btn ds__btn--small">Click<img src="~/assets/icons/info.svg" alt="Information Button"></span>
        </div>
      </div>
      <img class="ds__heroImg" src="~/assets/images/ds/demonmain.png" alt="Demon Slayer Main Character">
    </section>
    <section class="ds__content">
      <img class="ds__image" :src="apiContent.img" alt="Demon Slayer Preview Image">
      <div class="ds__text">
        <h2 class="ds__heading ds__heading--content">{{ apiContent.heading }}</h2>
        <p class="ds__para ds__para--content">{{ apiContent.para1 }}</p>
        <p class="ds__para">{{ apiContent.para2 }}</p>
      </div>
    </section>
    <section class="ds__content ds__content--2">
      <div v-if="tablet || desktop" class="ds__content--cards">
        <h2 class="ds__heading ds__heading--content ds__heading--cards">Overall Review</h2>
        <div class="ds__cards">
          <ReviewCard v-for="review in reviews" :key="review.id" :review="review" />
        </div>
      </div>
      <div class="ds__content--list">
        <div class="ds__btns ds__btns--list">
          <span @click="characterList()" class="ds__btn ds__btn--filter">Characters</span>
          <span @click="episodeList()" class="ds__btn ds__btn--filter">Episodes</span>
        </div>
        <div class="ds__list">
          <DemonSlayerList v-for="item in items" :key="item.id" :item="item" />
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import DemonSlayerList from '~/components/demonslayer/DemonSlayerList.vue'
import ReviewCard from '~/components/demonslayer/ReviewCard.vue'

export default {
  head: {
    title: 'test'
  },

  data () {
    return {
      api: 'https://api.npoint.io/4d4a367338f89fe81bb5/ds/content',
      apiChar: 'https://api.npoint.io/4d4a367338f89fe81bb5/ds/characters',
      apiEpi: 'https://api.npoint.io/4d4a367338f89fe81bb5/ds/episodes',

      mobile: null,
      tablet: null,
      desktop: null,

      apiContent: {},
      characters: [],
      episodes: [],

      currentCharacter: null,

      items: [],
      reviews: [
        {id: 0, heading: "Animation", score: "9.4"},
        {id: 0, heading: "Storyline", score: "8.8"},
        {id: 0, heading: "Pacing", score: "9.1"},
      ],
    }
  },

  created () {
    this.apiPopulate()
    this.charPopulate()
    this.epiPopulate()
  },

  mounted () {
    this.checkWidth()

    this.$nextTick(function () {
      window.addEventListener('resize', this.checkWidth)
    })
  },

  methods: {
    episodeList() { this.items = this.episodes },

    characterList() { this.items = this.characters }
  },

  components: {
    DemonSlayerList: DemonSlayerList,
    ReviewCard: ReviewCard
  }
}
</script>

<style>

</style>
