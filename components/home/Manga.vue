<template>
  <div :style="'background-image: url(' + manga.image + ')'">
    <span>
      <h3>{{ manga.name }}:</h3>
      <h4>Chapter {{ manga.chapter }}</h4>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Manga',
  props: ['manga']
}
</script>
