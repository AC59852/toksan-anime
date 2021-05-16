<template>
  <div class="ds__item">
      <img class="ds__image ds__image--item" :src="item.img" :alt="'Image of ' + item.heading">
      <div class="ds__text ds__text--item">
        <h3 class="ds__heading ds__heading--small">{{ item.heading }}</h3>
        <span class="ds__name">{{ item.sub }}</span>
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
