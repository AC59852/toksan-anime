<template lang="">
    <section id="homeManga">
        <div class="latestTitle"><h2>Latest Manga Releases</h2><span class="latestLink">See All</span></div>
        <div class="homeContent">
            <Manga v-for="(manga, index) in apiContent" :manga="manga" :key="index" :class="'manga' + manga.id"/>
        </div>
    </section>
</template>
<script>
import axios from 'axios'
import Manga from './home/Manga.vue'

export default {
    components: {
        Manga: Manga
    },
    
    data () {
        return {
            api: "https://api.npoint.io/4d4a367338f89fe81bb5/manga",
            apiContent: []
        }
    },
    
    created() {
       this.apiPopulate()
    }
}
</script>
<style lang="">
    
</style>