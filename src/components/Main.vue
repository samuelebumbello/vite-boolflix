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
        <div class="container">
            <!-- FILM -->
            <h1 class="text-white mb-3">Film</h1>
            <div class="row row-cols-6">
                <Card
                v-for="movie in store.movieResultArray"
                :key="movie.id"
                :image="movie.poster_path"
                :titleOriginal="movie.original_title"
                :titleTranslated="movie.title"
                :language="movie.original_language"
                :vote="Math.ceil(movie.vote_average/2)"
                />
            </div>
            <!-- SERIE TV -->
            <h1 class="text-white mb-3">Serie TV</h1>
            <div class="row row-cols-6">
                <Card
                v-for="serie in store.seriesResultArray"
                :key="serie.id"
                :image="serie.poster_path"
                :titleOriginal="serie.original_name"
                :titleTranslated="serie.name"
                :language="serie.original_language"
                :vote="Math.ceil(serie.vote_average/2)"
                />
            </div>
        </div>
    </main>


        
    
</template>


<style lang="scss" scoped>
@use '../scss/main' as *;
.container{
    padding-top: 5rem;
    padding-bottom: 5rem;
}

h1{
    font-size: 60px;
}
</style>