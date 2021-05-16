<template>
  <div class="ds__card">
      <h3>{{ review.heading }}</h3>
      <span>{{ review.score }}</span>
      <span>Score</span>
  </div>
</template>

<script>
export default {
    props: ['review']
}
</script>

<style>

</style>