<template>
  <div :style="'background-image: url(' + anime.image + ')'">
    <h3>{{ anime.name }}:</h3>
    <h4>{{ anime.episode }}</h4>
  </div>
</template>

<script>
export default {
  name: 'Anime',
  props: ['anime']
}
</script>
