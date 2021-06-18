<template>
  <header :class="{ 'picture-nav': $route.path == '/popular', 'picture-nav picture-nav-manga': $route.path == '/manga', 'navbar--hidden': !showNavBar}">
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

      showNavBar: true,
      lastScrollPosition: 0,

      links: [
        { id: 0, name: 'Home', icon: 'home', route: '/' },
        { id: 1, name: 'Search', icon: 'search', route: '/search' },
        { id: 2, name: 'Popular', icon: 'fire-alt', route: '/popular' },
        { id: 3, name: 'Manga', icon: 'book', route: '/manga' }
      ]
    }
  },

  mounted () {
    if (window.innerWidth <= 1023) {
      this.mobile = true
      this.desktop = false
    } else if (window.innerWidth >= 1024) {
      this.mobile = false
      this.desktop = true
    }

    window.addEventListener('touchmove', this.onScroll)

    this.$nextTick(function () {
      window.addEventListener('resize', this.getWindowWidth)
    })
  },

  beforeDestroy () {
  window.removeEventListener('touchmove', this.onScroll)
  },

  methods: {
    getWindowWidth () {
      if (window.innerWidth <= 1023) {
        this.mobile = true
        this.desktop = false
      } else if (window.innerWidth >= 1023) {
        this.mobile = false
        this.desktop = true
      }
    },

    onScroll () {
      if(this.mobile == true) {
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return
      }
      this.showNavBar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
      }
    }

    
  }
}
</script>

<style>

</style>
