<template>
  <div class="container">
    <section id="home">
      <HomeHero />
      <LazyHomeManga />
      <aside class="homeInfo">
        <h2>Never Miss Another Release!</h2>
        <p>Toksan Anime is your #1 source for the newest releases of your favourite manga or anime. Discover new shows or manga for the first time, explore which anime’s are becoming popular or simply relive some of the best moments anime has to offer.</p>
        <div class="asideIcons">
          <a v-for="asideIcon in asideIcons" :key="asideIcon.id" :href="asideIcon.link" target="_blank"><fa :icon="['fab', asideIcon.icon]" /></a>
        </div>
      </aside>
      <LazyHomeAnime />
    </section>
  </div>
</template>

<script>

export default {
  data () {
    return {
      title: "Toksan Anime",
      description: "Toksan Anime is your #1 source for the newest releases of your favourite manga or anime. Discover new shows or manga for the first time, explore which anime’s are becoming popular or simply relive some of the best moments anime has to offer.",
      image: "https://ac59852.github.io/toksan-anime/app-icon.png",
      ogImage: 'https://ac59852.github.io/toksan-anime/fb.png',

      asideIcons: [
        { id: 0, icon: 'facebook-f', link: 'https://facebook.com' },
        { id: 1, icon: 'instagram', link: 'https://instagram.com' },
        { id: 2, icon: 'twitter', link: 'https://twitter.com' }
      ]
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
          propert: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description
        },
        {
          hid: 'og:image',
          name: 'image',
          property: 'og:image',
          content: this.ogImage
        },
        {
          hid: 'og:image:alt',
          name: 'og:image:alt',
          content: this.title
        },
      ]
    }
  }

}
</script>
