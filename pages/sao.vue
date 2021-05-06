<template>
  <section class="anime sao">
    <section class="sao__hero">
      <img class="sao__logo" src="~/assets/images/sao/sao_logo.svg" alt="Sword Art Online Logo" >
      <div class="sao__btns">
        <a href="https://www.youtube.com/watch?v=a4KpzxD7kzI" target="_blank">Trailer</a>
        <div class="sao__event">Link Start</div>
      </div>
    </section>
    <section class="sao__content sao__content--0">
      <h1 class="sao__heading sao__heading--white">The World of Swords</h1>
      <p class="sao__para sao__para--white">In the year 2022, a next generation game device known as “NerveGear” has been developed, making Full Dives into a virtual dimension possible. “NerveGear” is the world’s first true VRMMORPG device.</p>
      <p class="sao__para sao__para--white">"Sword Art Online (SAO)" has generated worldwide buzz, and on its official launch day, 10’000 players immerse themselves in the virtual world, only to find out that none of them can escape.</p>
    </section>
    <SaoContent v-for="block in blocks" :key="block.id" :block="block" :class="'sao__content sao__content__' + block.id"/>
    <div @click="changeCharacter()">Click Me</div>
    <section class="sao__characters">
      <h2 class="sao__heading sao__name">{{ currentCharacter.name }}</h2>
      <img class="sao__image sao__image--character" :src="currentCharacter.image" :alt="'photo of ' + currentCharacter.name + ' from Sword Art Online'">
      <p class="sao__para">{{ currentCharacter.para }}</p>
    </section>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      blocks: [],
      characters: [],

      currentId: 0,

      currentCharacter: {}
    }
  },

  async created() {
    const config = {
      headers: { 'Accept': 'application/json' }
    }

    try {
      const resContent = await axios.get("https://api.npoint.io/4d4a367338f89fe81bb5/sao/content", config);

      const resCharacters = await axios.get("https://api.npoint.io/4d4a367338f89fe81bb5/sao/characters")

      this.blocks = resContent.data;
      this.characters = resCharacters;
      this.currentCharacter = this.characters.data[0]

      console.log(this.characters.length)
    } catch (err) { console.log(err) }

  },

  methods: {
    changeCharacter() {
      this.currentId += 1

      if (this.currentId >= this.characters.data.length) {
        this.currentId = 0
        this.currentCharacter = this.characters.data[0]
      } else {
        this.currentCharacter = this.characters.data[this.currentId]
      }
    }
  }
}
</script>

<style>

</style>