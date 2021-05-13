<template>
  <section class="anime sao">
    <section class="sao__hero">
      <img class="sao__logo" src="~/assets/images/sao/sao_logo.svg" alt="Sword Art Online Logo" >
    </section>
    <section class="sao__content sao__content--0">
      <h1 v-if="mobile" class="sao__heading sao__heading--white">The World of Swords</h1>
      <picture v-if="tablet" class="sao__image">
        <img src="https://res.cloudinary.com/ap-creative/image/upload/v1620500325/anime/sao/sao_asuna_aincrad_p9ajyj.jpg" alt="Image of The World of the Swords">
      </picture>
      <div class="sao__text">
        <h1 v-if="tablet" class="sao__heading sao__heading--white">The World of Swords</h1>
        <p class="sao__para sao__para--white">In the year 2022, a next generation game device known as “NerveGear” has been developed, making Full Dives into a virtual dimension possible. “NerveGear” is the world’s first true VRMMORPG device.</p>
        <p class="sao__para sao__para--white">"Sword Art Online (SAO)" has generated worldwide buzz, and on its official launch day, 10’000 players immerse themselves in the virtual world, only to find out that none of them can escape.</p>
      </div>
    </section>
    <SaoContent v-for="block in apiContent" :key="block.id" :block="block" :tablet="tablet" :mobile="mobile" :class="'sao__content sao__content__' + block.id"/>
    <div @click="changeCharacter()">Click Me</div>
    <section class="sao__characters sao__content">
      <h2 class="sao__heading sao__name" v-if="mobile">{{ currentCharacter.name }}</h2>
      <img class="sao__image sao__image--character" :src="currentCharacter.image" :alt="'photo of ' + currentCharacter.name + ' from Sword Art Online'">
      <div class="sao__text">
        <h2 class="sao__heading sao__name" v-if="tablet">{{ currentCharacter.name }}</h2>
        <p class="sao__para">{{ currentCharacter.para }}</p>
      </div>
    </section>
  </section>
</template>

<script>

export default {
  data() {
    return {
      mobile: null,
      tablet: null,

      api: process.env.SAO_CONTENT,
      apiChar: process.env.SAO_CHARACTERS,

      apiContent: [],
      characters: [],

      currentId: 0,

      currentCharacter: {}
    }
  },

  created() {
    this.apiPopulate()
    this.charPopulate()
  },

  mounted() {

    if (window.innerWidth <= 767) {
        this.mobile = true
        this.tablet = false
      } else if (window.innerWidth >= 768) {
        this.tablet = true
        this.mobile = false

        window.addEventListener("scroll", function() {
        document.querySelector(".sao__hero").style.opacity = 1 - +window.pageYOffset/4550+ ''
        })
      }

    this.$nextTick(function() {
      window.addEventListener('resize', this.getWindowWidth);
  })
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
    },

    test() {
      if(this.mobile = null) {
        console.log("test")
      }
    },

    getWindowWidth() {
      if (window.innerWidth <= 767) {
        this.mobile = true
        this.tablet = false
      } else if (window.innerWidth >= 768) {
        this.tablet = true
        this.mobile = false
      }
    }
  
  }
}
</script>

<style>

</style>