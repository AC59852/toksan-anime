<template>
  <footer class="footer">
      <div class="footer__wrapper">
        <p class="footer__text">&#169; {{ currentDate.getFullYear() }} Toksan Anime All Rights Reserved</p>
        <div class="footer__icons">
          <a class="footer__icon" v-for="icon in footerIcons" :key="icon.id" :href="icon.link" target="_blank"><fa :icon="['fab', icon.icon]" /></a>
        </div>
      </div>
  </footer>
</template>

<script>
export default {
    data() {
        return {
            currentDate: new Date,

            footerIcons: [
                { id: 0, icon: 'facebook-f', link: 'https://facebook.com' },
                { id: 1, icon: 'instagram', link: 'https://instagram.com' },
                { id: 2, icon: 'twitter', link: 'https://twitter.com' }
            ]
        }
    }
}
</script>

<style>

</style>