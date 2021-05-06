<template>
  <section>
      <h2 class="sao__heading">{{ block.title }}</h2>
      <img class="sao__image" v-if="block.image != null" :src="block.image" :alt="'Sword Art Online Image of ' + block.title">
      <p class="sao__para">{{ block.para1 }}</p>
      <p class="sao__para">{{ block.para2 }}</p>
      <span class="sao__quote" v-if="block.quote != null">&#8212; {{ block.quote }}</span>
    </section>
</template>

<script>
export default {
    props: ['block']
}
</script>

<style>

</style>