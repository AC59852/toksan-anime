<template>
  <section id="hero">
    <div class="heroWrapper">
      <h2>{{ heroAnime }}</h2>
      <div class="heroBtns">
      <nuxt-link to="/"><span>Watch Now</span><img src="~/assets/icons/play-circle.svg" alt="icon for Watch Now Button"></nuxt-link>
      <nuxt-link to="/"><span>Info</span><img src="~/assets/icons/info.svg" alt="icon for Information Button"></nuxt-link>
    </div>
    <img src="~/assets/images/mob_logo.svg" alt="Mob Psycho 100 Logo">
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      heroAnime: 'Mob Psycho 100'
    }
  }
}
</script>

<style>
</style>
