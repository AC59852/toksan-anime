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

        if(this.currentContent) {
          this.currentContent = this.apiContent[0]
          console.log(this.currentContent)
        } else { return }

      } catch (err) { console.log(err) }
    },

    async apiPopulatePopular () {
      const config = {
        headers: { 
          Accept: 'application/vnd.api+json',
          'Content-Type': 'application/x-www-form-urlencoded'
        
        }
      }

      try {
        const resContent = await axios.get(this.apiPop, config)
        this.apiContentPop = resContent.data.data
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
    },

    checkWidth() {
      if (window.innerWidth <= 767) {
        this.mobile = true
        this.tablet = false
        this.desktop = false
      } else if (window.innerWidth >= 768 && window.innerWidth <= 1199) {
        this.tablet = true
        this.mobile = false
        this.desktop = false
      } else if (window.innerWidth >= 1199) {
        this.mobile = false
        this.tablet = false
        this.desktop = true
      }
    },
  }
})
