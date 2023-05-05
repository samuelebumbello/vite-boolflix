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
    },
    getApiSeries(){
      axios.get(store.apiUrlSeries, {
        params:{
          query: store.movieSearchTitle
        }
      })
      .then(result => {
        store.seriesResultArray = result.data.results;
        console.log(store.seriesResultArray);
      })
    }
  },
  mounted(){
    this.getApi();
    this.getApiSeries();
  }
}
</script>

<template>
  <Header @searchMovie="getApi" @searchSeries="getApiSeries"/>
  <Main />
</template>


<style lang="scss">
@use './scss/main' as *;
body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #141414;
}

</style>