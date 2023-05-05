<script>
import axios from "axios";
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
      axios.get(store.apiUrl)
    }
  },
  mounted(){
    this.getApi();
  }
}
</script>

<template>
  
</template>


<style lang="sss" scoped>

</style>