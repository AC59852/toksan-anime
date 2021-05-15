<template lang="">
  <section id="homeManga">
    <div class="latestTitle">
      <h2>Latest Manga Releases</h2><nuxt-link to="/" class="latestLink">
        See All
      </nuxt-link>
    </div>
    <div class="homeContent">
      <Manga v-for="(manga, index) in apiContent" :key="index" :manga="manga" :class="'manga' + manga.id" />
    </div>
  </section>
</template>
<script>
import Manga from './home/Manga.vue'

export default {
  components: {
    Manga
  },

  data () {
    return {
      api: 'https://api.npoint.io/4d4a367338f89fe81bb5/manga',
      apiContent: []
    }
  },

  created () {
    this.apiPopulate()
  }
}
</script>
<style lang="">

</style>
