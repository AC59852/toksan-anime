<template>
  <nuxt-link :style="{backgroundImage: 'url(' + anime.bck + ')'}" :to="anime.name">
      <img class="popAnime__logo" :src="anime.logo" :alt="'Logo for ' + anime.name">
  </nuxt-link>
</template>

<script>
export default {
    props: ['anime'],
}
</script>

<style>

</style>