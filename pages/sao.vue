<template>
  <section class="anime sao">
    <section class="sao__hero">
      <img class="sao__logo" src="~/assets/images/sao/sao_logo.svg" alt="Sword Art Online Logo">
    </section>
    <section class="sao__content sao__content--0">
      <h1 v-if="mobile" class="sao__heading sao__heading--white">
        The World of Swords
      </h1>
      <picture v-if="tablet" class="sao__image">
        <img src="https://res.cloudinary.com/ap-creative/image/upload/v1620500325/anime/sao/sao_asuna_aincrad_p9ajyj.jpg" alt="Image of The World of the Swords">
      </picture>
      <div class="sao__text sao__text--0">
        <h1 v-if="tablet || desktop" class="sao__heading sao__heading--white">
          The World of Swords
        </h1>
        <p class="sao__para sao__para--white">
          In the year 2022, a next generation game device known as “NerveGear” has been developed, making Full Dives into a virtual dimension possible. “NerveGear” is the world’s first true VRMMORPG device.
        </p>
        <p class="sao__para sao__para--white">
          "Sword Art Online (SAO)" has generated worldwide buzz, and on its official launch day, 10’000 players immerse themselves in the virtual world, only to find out that none of them can escape.
        </p>
      </div>
    </section>
    <SaoContent
      v-for="block in apiContent"
      :key="block.id"
      :block="block"
      :tablet="tablet"
      :mobile="mobile"
      :desktop="desktop"
      :class="'sao__content sao__content__' + block.id"
    />
    <div @click="changeCharacter()">
      Click Me
    </div>
    <section class="sao__characters sao__content">
      <h2 v-if="mobile" class="sao__heading sao__name">
        {{ currentCharacter.name }}
      </h2>
      <img class="sao__image sao__image--character" :src="currentCharacter.image" :alt="'photo of ' + currentCharacter.name + ' from Sword Art Online'">
      <div class="sao__text">
        <h2 v-if="tablet || desktop" class="sao__heading sao__name">
          {{ currentCharacter.name }}
        </h2>
        <p class="sao__para sao__para--char">
          {{ currentCharacter.para }}
        </p>
      </div>
    </section>
  </section>
</template>

<script>

export default {
  data () {
    return {
      mobile: null,
      tablet: null,
      desktop: null,

      title: 'Toksan Anime - Sword Art Online',
      description: 'Test Sword Art Online Description',
      image: 'https://ac59852.github.io/toksan-anime/app-icon.png',

      api: 'https://api.npoint.io/4d4a367338f89fe81bb5/sao/content',
      apiChar: 'https://api.npoint.io/4d4a367338f89fe81bb5/sao/characters',

      apiContent: [],
      characters: [],

      currentId: 0,

      currentCharacter: {}
    }
  },

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.image
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.title
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.description
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.image
        },
        {
          hid: 'og:image:alt',
          name: 'og:image:alt',
          content: this.title
        },
      ]
    }
  },

  created () {
    this.apiPopulate()
    this.charPopulate()
  },

  mounted () {
    if (window.innerWidth >= 768) {
      window.addEventListener('scroll', function () {
        document.querySelector('.sao__hero').style.opacity = 1 - +window.pageYOffset / 4550 + ''
      })
    }

    this.checkWidth()

    this.$nextTick(function () {
      window.addEventListener('resize', this.checkWidth)
    })
  },

  methods: {
    changeCharacter () {
      this.currentId += 1

      if (this.currentId >= this.characters.length) {
        this.currentId = 0
        this.currentCharacter = this.characters[0]
      } else {
        this.currentCharacter = this.characters[this.currentId]
      }
    },

  }
}
</script>

<style>

</style>
