<template>
  <section>
      <h2 class="sao__heading" v-if="this.mobile">{{ block.title }}</h2>
      <picture :class="'sao__image sao__image--' + block.id" v-if="block.image != null" :src="block.image">
        <source media="(min-width: 768px)" :srcset="block.image2">
        <img :src="block.image" alt="">
      </picture>
      <div class="sao__text">
        <h2 class="sao__heading" v-if="tablet">{{ block.title }}</h2>
        <p class="sao__para">{{ block.para1 }}</p>
        <p class="sao__para">{{ block.para2 }}</p>
        <span class="sao__quote" v-if="block.quote != null">&#8212; {{ block.quote }}</span>
      </div>
    </section>
</template>

<script>
export default {
    props: ['block', 'mobile', 'tablet']
}
</script>

<style>

</style>