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
    <div class="col mb-4">
        <div class="pg-card d-flex flex-column text-white position-relative overflow-hidden">

            <!-- cont-img -->
            <div class="container-img w-100">
                <img class="w-100 h-100 object-fit-contain" :src="`https://image.tmdb.org/t/p/w500${image}`" alt="">
            </div>

            <!-- cont finestra testo -->
            <div class="card-text position-absolute w-100 h-100">

                <!-- cont titoli -->
                <div class="container-title">
                    <h1 class="fs-5">Titolo originale: {{ titleOriginal }}</h1>
                    <h2 class="fs-5">Titolo italiano: {{ titleTranslated }}</h2>
                </div>
                <!-- cont lingua -->
                <div class="container-language">
                    <span>Lingua:</span>
                    <img :src="`flags/language-${language}.svg`" :alt="language">
                </div>
    
                <!-- cont voti -->
                <div class="container-votes">
                    <span>Media voti:</span>
                    <span v-for="star in vote" :key="star"><i class="fa-solid fa-star" style="color: #D71F2B;"></i></span>
                </div>

            </div>


        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../../scss/main' as *;
.pg-card{
    .container-img{
        transition: all .3s;
    }
    .card-text{
        top: 100%;
        transition: all .6s;
    }
    &:hover{
        .card-text{
            top: 0;
            
        }
        .container-img{
            opacity: 30%;
        }
    }
    .container-language{
        img{
            width: 20px;
            margin-left: 3px;
        }
    }
}
</style>