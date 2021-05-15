<template>
  <section>
    <h2 v-if="mobile" class="sao__heading">
      {{ block.title }}
    </h2>
    <picture v-if="block.image != null" :class="'sao__image sao__image--' + block.id" :src="block.image">
      <source media="(min-width: 768px)" :srcset="block.image2">
      <img :src="block.image" alt="">
    </picture>
    <div class="sao__text">
      <h2 v-if="tablet || desktop" class="sao__heading">
        {{ block.title }}
      </h2>
      <p class="sao__para">
        {{ block.para1 }}
      </p>
      <p class="sao__para">
        {{ block.para2 }}
      </p>
      <span v-if="block.quote != null" class="sao__quote">&#8212; {{ block.quote }}</span>
    </div>
  </section>
</template>

<script>
export default {
  props: ['block', 'mobile', 'tablet', 'desktop']
}
</script>

<style>

</style>
