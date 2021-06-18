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
  data() {
    return {
      title: 'Toksan Anime - Demon Slayer',
      description: `Toksan Anime provides all forms of Japanese cultural content, that includes manga! Check out our curated lists of most popular, most recent, and even hidden gems!`,
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
}
</script>

<style>

</style>