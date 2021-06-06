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
            apiContentPop: {}
        }
    },

    mounted() {
        this.apiPopulate();

        this.apiPopulatePopular();

        document.querySelector("header").classList.add("picture-nav")
    },

    methods: {
    }
}
</script>

<style>
</style>