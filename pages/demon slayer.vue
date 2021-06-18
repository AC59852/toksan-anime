<template>
  <section class="animeTemp ds">
    <section class="animeTemp__hero animeTemp__hero--ds">
      <div class="animeTemp__logoCon animeTemp__logoCon--ds">
        <img src="~/assets/images/ds/ds_logo.png" alt="Demon Slayer Logo" class="animeTemp__logo animeTemp__logo--ds">
        <h2 class="animeTemp__heading animeTemp__heading--ds animeTemp__heading--eb animeTemp__heading--center">Season 2 - Coming Soon</h2>
        <div class="animeTemp__btns animeTemp__btns--hero animeTemp__btns--ds">
          <span class="animeTemp__btn animeTemp__btn--ds animeTemp__btn--small">Watch Now<img src="~/assets/icons/play-circle.svg" alt="Watch Now Button"></span>
          <span class="animeTemp__btn animeTemp__btn--ds animeTemp__btn--small">Click<img src="~/assets/icons/info.svg" alt="Information Button"></span>
        </div>
      </div>
      <img class="animeTemp__heroImg animeTemp__heroImg--ds" src="~/assets/images/ds/demonmain.png" alt="Demon Slayer Main Character">
    </section>
    <section class="ds__content">
      <img class="animeTemp__image animeTemp__image--ds" :src="apiContent.img" alt="Demon Slayer Preview Image">
      <div class="ds__text">
        <h2 v-if="desktop == true" class="animeTemp__heading animeTemp__heading--ds animeTemp__heading--content">Synopsis</h2>
        <h2 v-else class="animeTemp__heading animeTemp__heading--ds animeTemp__heading--content">{{ apiContent.heading }}</h2>
        <p class="ds__para ds__para--content">{{ apiContent.para1 }}</p>
        <p class="ds__para">{{ apiContent.para2 }}</p>
        <span class="ds__quote ds__para" v-if="desktop">&#8212; {{ apiContent.quote }}</span>
      </div>
    </section>
    <section class="ds__content ds__content--2">
      <div v-if="tablet || desktop" class="ds__content--cards">
        <h2 class="animeTemp__heading animeTemp__heading--ds animeTemp__heading--content animeTemp__heading--cards">Overall Review</h2>
        <div class="ds__cards">
          <ReviewCard v-for="review in reviews" :key="review.id" :review="review" />
        </div>
      </div>
      <div class="ds__content--list">
        <div class="animeTemp__btns animeTemp__btns--list">
          <span @click="characterList()" class="animeTemp__btn animeTemp__btn--ds animeTemp__btn--filter">Characters</span>
          <span @click="episodeList()" class="animeTemp__btn animeTemp__btn--ds animeTemp__btn--filter">Episodes</span>
        </div>
        <div class="animeTemp__list">
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
  
  data () {
    return {
      api: 'https://api.npoint.io/4d4a367338f89fe81bb5/ds/content',
      apiChar: 'https://api.npoint.io/4d4a367338f89fe81bb5/ds/characters',
      apiEpi: 'https://api.npoint.io/4d4a367338f89fe81bb5/ds/episodes',

      title: 'Toksan Anime - Demon Slayer',
      description: 'Follow the life of loyal brother turned Demon Slayer, Tanjiro Kamado, in the epic, action packed anime of 2020, aptly named, Demon Slayer! Provided to you by Toksan Anime, Demon Free!',
      image: 'https://ac59852.github.io/toksan-anime/app-icon.png',
      ogImage: 'https://ac59852.github.io/toksan-anime/fb.png',

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
        {id: 1, heading: "Storyline", score: "8.8"},
        {id: 2, heading: "Pacing", score: "9.1"},
      ],
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

    characterList() { this.items = this.characters },

    test() {
      console.log("test")
    }
  },

  components: {
    DemonSlayerList: DemonSlayerList,
    ReviewCard: ReviewCard
  }
}
</script>

<style>

</style>
