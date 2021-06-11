<template>
  <section id="manga">
        <MangaComponent title="Popular Manga Releases" apiLink='https://kitsu.io/api/edge/manga?page[limit]=10&amp;page[offset]=4&amp;sort=popularityRank'/>
        <MangaComponent title="Latest Manga Releases" apiLink="https://kitsu.io/api/edge/manga?page[limit]=10&amp;page[offset]=134&amp;filter[status]=current&amp;sort=updatedAt&amp;sort=-chapterCount"/>
        <MangaComponent title="Completed Manga" apiLink="https://kitsu.io/api/edge/manga?page[limit]=10&amp;page[offset]=11&amp;filter[status]=finished&amp;sort=-userCount"/>
        <MangaComponent title="Hidden Gems" apiLink='https://kitsu.io/api/edge/manga?page[limit]=10&amp;page[offset]=220&amp;sort=popularityRank&amp;sort=-userCount'/>
  </section>
</template>

<script>
export default {
}
</script>

<style>

</style>