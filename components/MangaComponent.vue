<template>
  <section class="mangaList listWrapper">
    <div class="latestTitle">
        <h2>{{ title }}</h2><nuxt-link to="/" class="latestLink">
        See All
        </nuxt-link>
    </div>
    <div class="listContent">
      <div v-for="manga in apiContentPop" :key="manga.id" :class="'manga' + manga.id" :style="{backgroundImage: 'url(' + manga.attributes.posterImage.small + ')'}">
          <span>
            <h3 v-if="manga.attributes.titles.en == null || manga.attributes.titles.en == ''">{{ manga.attributes.canonicalTitle }}:</h3>
            <h3 v-else>{{ manga.attributes.titles.en }}:</h3>
            <h4 v-if="manga.attributes.chapterCount == null">Chapter {{ manga.attributes.volumeCount }}</h4>
            <h4 v-else>Chapter {{ manga.attributes.chapterCount }}</h4>
          </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    props: ['title', 'apiLink'],
    data() {
        return {
            apiPop: this.apiLink,
            apiContentPop: []
        }
    },

    mounted() {
        this.apiPopulatePopular()
    }
}
</script>

<style>

</style>