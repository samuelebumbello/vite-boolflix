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
        <div class="container py-5">
            <h1 class="text-white">Film</h1>
            <div class="row row-cols-6">
                <Card
                v-for="movie in store.movieResultArray"
                :key="movie.id"
                :image="movie.poster_path"
                :titleOriginal="movie.original_title"
                :titleTranslated="movie.title"
                :language="movie.original_language"
                :vote="movie.vote_average"
                />
            </div>
        </div>
    </main>


        
    
</template>


<style lang="scss" scoped>
@use '../scss/main' as *;
</style>