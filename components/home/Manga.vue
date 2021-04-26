<template>
  <div :style="'background-image: url(' + manga.image + ')'">
    <h3>{{ manga.name }}:</h3>
    <h4>{{ manga.chapter }}</h4>
  </div>
</template>

<script>
export default {
  name: 'Manga',
  props: ['manga']
}
</script>
