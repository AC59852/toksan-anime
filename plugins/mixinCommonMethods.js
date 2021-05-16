import Vue from 'vue'
import axios from '~/node_modules/axios'

Vue.mixin({

  methods: {
    async apiPopulate () {
      const config = {
        headers: { Accept: 'application/json' }
      }

      try {
        const resContent = await axios.get(this.api, config)

        this.apiContent = resContent.data
      } catch (err) { console.log(err) }
    },

    async charPopulate () {
      const config = {
        headers: { Accept: 'application/json' }
      }

      try {
        const resCharacters = await axios.get(this.apiChar, config)
        console.log(resCharacters.data)
        this.characters = resCharacters.data

        if(this.currentCharacter == null) {
          console.log("No First Character")
        } else {
          this.currentCharacter = this.characters[0]
        }

        if(this.items) {
          this.items = this.characters
        }

      } catch (err) { console.log(err) }
    },

    async epiPopulate () {
      const config = {
        headers: { Accept: 'application/json' }
      }

      try {
        const resEpisodes = await axios.get(this.apiEpi, config)
        console.log(resEpisodes.data)
        this.episodes = resEpisodes.data

      } catch (err) { console.log(err) }
    }
  }
})
