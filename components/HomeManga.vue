<template lang="">
    <div>
       <Manga v-for="(manga, index) in mangaList" :manga="manga" :key="index" />
    </div>
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
            mangaList: []
        }
    },
    
    async created() {
        const config = {
            headers: {
                'Accept': 'application/json'
            }
        }
        try {
            const res = await axios.get("https://api.npoint.io/4d4a367338f89fe81bb5/manga", config);

            this.mangaList = res.data;
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
    }
}
</script>
<style lang="">
    
</style>