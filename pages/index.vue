<template>
  <div class="container">
    <section id="home">
      <HomeHero />
      <HomeManga />
      <aside class="homeInfo">
        <h2>Never Miss Another Release!</h2>
        <p>Toksan Anime is your #1 source for the newest releases of your favourite manga or anime. Discover new shows or manga for the first time, explore which anime’s are becoming popular or simply relive some of the best moments anime has to offer.</p>
        <div class="asideIcons">
          <a :href="asideIcon.link" v-for="asideIcon in asideIcons" :key="asideIcon.id" target="_blank"><fa :icon="['fab', asideIcon.icon]"/></a>
        </div>
      </aside>
      <HomeAnime />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      STRIPE_SECET: process.env.SAO_CHARACTERS,

      asideIcons: [
        {id: 0, icon: 'facebook-f', link: 'https://facebook.com'},
        {id: 1, icon: 'instagram', link: 'https://instagram.com'},
        {id: 2, icon: 'twitter', link: 'https://twitter.com'},
      ]
    }
  },

  mounted() {
    console.log(this.STRIPE_SECET)
  }
}
</script>
