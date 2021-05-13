<template lang="">
    <section id="homeAnime">
        <div class="latestTitle"><h2>Latest Anime Releases</h2><span class="latestLink">See All</span></div>
        <div class="homeContent">
            <Anime v-for="(anime, index) in apiContent" :anime="anime" :key="index" :class="'anime' + anime.id"/>
        </div>
    </section>
</template>
<script>
import Anime from './home/Anime.vue'

export default {
    data () {
        return {
            api: process.env.HOME_ANIME,
            apiContent: []
        }
    },
    
    created() {
        this.apiPopulate()
    },

    components: {
        Anime: Anime
    }
}
</script>
<style lang="">
    
</style>