<script>
import { store } from '../../data/store'
export default {
  name: 'Header',
  data(){
    return{
        store
    }
  }
}
</script>

<template>
    <header>
        <div class="head-container d-flex align-items-center justify-content-between">
            <img class="logo" src="../../public/logo-boolflix.png" alt="logo">
            <div class="cont-input me-2">
                <input 
                v-model="store.movieSearchTitle"
                @keyup.enter="$emit('searchMovie')"
                class="form-control" 
                type="text" 
                placeholder="Cerca">
                <button class="btn btn-danger" @click="$emit('searchMovie')">Cerca</button>
            </div>
      </div>
  </header>
</template>


<style lang="scss" scoped>
@use '../scss/main' as *;

header{
    background-color: rgb(105, 65, 65);
}
.head-container{
    height: 80px;
    .logo{
        height: 65px;
        object-fit: contain;

    }
}

</style>

