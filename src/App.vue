<script>
import axios from "axios";
import { store } from '../data/store.js';
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";

export default {
    name: "App",
     components:{
         Header,
         Main
     },
    data(){
    return {
          store
        }
    },
    methods:{
    getApi(){
      axios.get(store.apiUrl, {
        params:{
          query: store.movieSearchTitle
        }
      })
      .then(result =>{
        store.movieResultArray = result.data.results;
        console.log(store.movieResultArray);
      })
    }
  },
  mounted(){
    this.getApi();
  }
}
</script>

<template>
  <Header @searchMovie="getApi"/>
  <Main/>
</template>


<style lang="scss" scoped>
@use './scss/main' as *;

</style>