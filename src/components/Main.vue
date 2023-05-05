<script>
import { store } from "../../data/store.js";
import Card from "./partials/Card.vue";
export default {
    name: 'Main',
    components:{
        Card
    },
    data(){
    return {
          store
        }
    }
}
</script>

<template>
    <main>
        <Card
        v-for="movie in store.movieResultArray"
        :key="movie.id"
        :image="movie.poster_path"
        :titleOriginal="movie.original_title"
        :titleTranslated="movie.title"
        :language="movie.origin_country"
        :vote="movie.vote_average"
        />
    </main>


        
    
</template>


<style lang="scss" scoped>

</style>