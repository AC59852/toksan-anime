<template>
  <div class="container">
    <section id="home">
      <HomeHero />
      <HomeManga />
      <aside class="homeInfo">
        <h2>Never Miss Another Release!</h2>
        <p>Toksan Anime is your #1 source for the newest releases of your favourite manga or anime. Discover new shows or manga for the first time, explore which anime’s are becoming popular or simply relive some of the best moments anime has to offer.</p>
        <div class="asideIcons">
          <a v-for="asideIcon in asideIcons" :key="asideIcon.id" :href="asideIcon.link" target="_blank"><fa :icon="['fab', asideIcon.icon]" /></a>
        </div>
      </aside>
      <HomeAnime />
    </section>
  </div>
</template>

<script>
import ogImage from '@/assets/images/fb.png'

export default {
  data () {
    return {
      title: "Toksan Anime",
      description: "This is a test description",
      image: "https://ac59852.github.io/toksan-anime/app-icon.png",

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
          content: this.BASE_URL + ogImage
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
