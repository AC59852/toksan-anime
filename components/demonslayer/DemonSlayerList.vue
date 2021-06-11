<template>
  <div class="animeTemp__item">
      <img class="animeTemp__image animeTemp__image--item" :src="item.img" :alt="'Image of ' + item.heading">
      <div class="ds__text ds__text--item">
        <h3 class="animeTemp__heading animeTemp__heading--ds animeTemp__heading--small">{{ item.heading }}</h3>
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
