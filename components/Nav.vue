<template>
  <header>
    <nav>
      <nuxt-link v-if="desktop" to="/">
        <img src="~/assets/icons/toksan_logo_site.svg" alt="Toksan Anime Logo">
      </nuxt-link>
      <ul>
        <li v-for="link in links" :key="link.id">
          <nuxt-link v-if="mobile" :to="link.route">
            <fa :icon="['fas', link.icon]" />
          </nuxt-link>
          <nuxt-link v-else-if="desktop" :to="link.route">
            {{ link.name }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data () {
    return {
      mobile: null,
      desktop: null,

      links: [
        { id: 0, name: 'Home', icon: 'home', route: '/' },
        { id: 1, name: 'Search', icon: 'search', route: '/search' },
        { id: 2, name: 'Popular', icon: 'fire-alt', route: '/popular' },
        { id: 3, name: 'Books', icon: 'book', route: '/books' }
      ]
    }
  },

  mounted () {
    if (window.innerWidth <= 948) {
      this.mobile = true
      this.desktop = false
    } else if (window.innerWidth >= 949) {
      this.mobile = false
      this.desktop = true
    }

    this.$nextTick(function () {
      window.addEventListener('resize', this.getWindowWidth)
    })
  },

  methods: {
    getWindowWidth () {
      if (window.innerWidth <= 948) {
        this.mobile = true
        this.desktop = false
      } else if (window.innerWidth >= 949) {
        this.mobile = false
        this.desktop = true
      }
    }
  }
}
</script>

<style>

</style>
