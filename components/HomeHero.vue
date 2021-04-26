<template>
  <section id="hero">
    <h2>{{ heroAnime }}</h2>
    <div class="heroBtns">
      <nuxt-link to="/">Watch Now</nuxt-link>
      <nuxt-link to="/">Info</nuxt-link>
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
