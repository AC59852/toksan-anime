<template>
  <section id="popular">
      <div class="popAnime">
          <CreatedAnime v-for="anime in apiContent" :key="anime.id" :anime="anime" :class="'popAnime__custom popAnime' + anime.id"/>
      </div>
      <div class="popAnime__con">
          <div class="popAnime__title">
            <h2>Popular Anime Releases</h2><nuxt-link to="/" class="latestLink">
              See All
            </nuxt-link>
          </div>
          <div class="popAnime__list">
            <div v-for="popular in apiContentPop" :key="popular.id" class="popAnime__item" :style="{backgroundImage: 'url(' + popular.attributes.posterImage.small + ')'}">
                <span>
                    <h3>{{ popular.attributes.titles.en }}</h3>
                </span>
            </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {
    data() {
        return {
            api: 'https://api.npoint.io/4d4a367338f89fe81bb5/popular',
            apiPop: `https://kitsu.io/api/edge/anime?page[limit]=7&page[offset]=33&sort=popularityRank`,

            apiContent: {},
            apiContentPop: {},

            title: 'Toksan Anime - Demon Slayer',
            description: `While it's always a great feeling to find something new, sometimes you just want what you know is good, and boy do we have that! Toksan Anime provides you with breakdowns of some of the best anime of all time, and a list of content that'll sure to peak your interests!`,
            image: 'https://ac59852.github.io/toksan-anime/app-icon.png',
            ogImage: 'https://ac59852.github.io/toksan-anime/fb.png',
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

    mounted() {
        this.apiPopulate();

        this.apiPopulatePopular();
    },

    methods: {
    }
}
</script>

<style>
</style>