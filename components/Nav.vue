<template>
  <header>
      <nav>
          <ul>
              <li v-for="link in links" :key="link.id">
                  <nuxt-link :to="link.route" v-if="mobile"><fa :icon="['fas', link.icon]" /></nuxt-link>
                  <nuxt-link to="/" v-else-if="desktop">{{ link.name }}</nuxt-link>
              </li>
          </ul>
      </nav>
  </header>
</template>

<script> 
export default {
    data () {
        return {
            mobile: true,
            desktop: null,

            links: [
                {id: 0, name: 'Home', icon: 'home', route: '/'},
                {id: 1, name: 'Search', icon: 'search', route: '/search'},
                {id: 2, name: 'Popular', icon: 'fire-alt', route: '/popular'},
                {id: 3, name: 'Books', icon: 'book', route: '/books'},
            ]
        }
    }
}
</script>

<style>

</style>