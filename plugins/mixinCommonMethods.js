import Vue from 'vue';
import axios from '~/node_modules/axios';

Vue.mixin({

    methods: {
        async apiPopulate() {
            const config = {
                headers: { 'Accept': 'application/json' }
              }
          
              try {
                const resContent = await axios.get(this.api, config);
          
                this.apiContent = resContent.data;
                console.log(this.apiContent)
              } catch (err) { console.log(err) }
        },

        async charPopulate() {
            const config = {
                headers: { 'Accept': 'application/json' }
              }
          
              try {
                  const resCharacters = await axios.get(this.apiChar, config)
                  this.characters = resCharacters;
                  this.currentCharacter = this.characters.data[0]
              } catch (err) { console.log(err) }
        }
    }
})