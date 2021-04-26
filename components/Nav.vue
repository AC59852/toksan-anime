<template>
  <header>
      <nav>
          <ul>
              <li v-for="link in links" :key="link.id">
                  <nuxt-link to="/" v-if="mobile"><fa :icon="['fas', link.icon]" /></nuxt-link>
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
                {id: 0, name: 'Home', icon: 'home'},
                {id: 1, name: 'Search', icon: 'search'},
                {id: 2, name: 'Popular', icon: 'fire-alt'},
                {id: 3, name: 'Books', icon: 'book'},
            ]
        }
    }
}
</script>

<style>

</style>