<template>
  <section id="popular">
      <CreatedAnime v-for="anime in apiContent" :key="anime.id" :anime="anime" :class="'popAnime popAnime' + anime.id"/>
      <div class="popAnimeCon">
          <div class="latestTitle">
            <h2>Latest Manga Releases</h2><nuxt-link to="/" class="latestLink">
              See All
            </nuxt-link>
          </div>
          <div class="popAnimeList">
            <div v-for="popular in apiContentPop" :key="popular.id" class="popAnimeList__item" :style="{backgroundImage: 'url(' + popular.attributes.posterImage.small + ')'}">
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
    },

    methods: {
    }
}
</script>

<style>
#popular {
    width: 320px;
    margin: 0 auto;
}

</style>