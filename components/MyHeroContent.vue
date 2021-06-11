<template>
  <div class="animeTemp__item animeTemp__item--mha">
      <img class="animeTemp__image animeTemp__image--item" :src="item.icon" :alt="'Image of ' + item.name">
      <div class="animeTemp__text animeTemp__text--item">
        <h3 class="animeTemp__heading animeTemp__heading--ds animeTemp__heading--small">{{ item.name }}</h3>
        <span class="animeTemp__name">{{ item.sub }}</span>
      </div>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style>

</style>
