<template lang="">
    <div>
       <Anime v-for="(anime, index) in animeList" :anime="anime" :key="index" />
    </div>
</template>
<script>
import axios from 'axios'
import Anime from './home/Anime.vue'

export default {
    data () {
        return {
            animeList: []
        }
    },
    
    async created() {
        const config = {
            headers: {
                'Accept': 'application/json'
            }
        }
        try {
            const res = await axios.get("https://api.npoint.io/4d4a367338f89fe81bb5/anime", config);

            this.animeList = res.data;
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
    },

    components: {
        Anime: Anime
    }
}
</script>
<style lang="">
    
</style>