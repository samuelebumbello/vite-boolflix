<script>
export default {
    name: "Card",
    props:{
        image: String,
        titleOriginal: String,
        titleTranslated: String,
        language: String,
        vote: Number
    }
}
</script>

<template>
    <div class="col mb-5">
        <div class="pg-card d-flex flex-column">
            <img :src="`https://image.tmdb.org/t/p/w500${image}`" alt="">
            <h1>Titolo originale: {{ titleOriginal }}</h1>
            <h2>Titolo italiano:{{ titleTranslated }}</h2>
            <span>Lingua: language</span>
            <span>Media voti:{{ vote }}/10</span>
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>