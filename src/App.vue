<template>
  <div id="app">
   <router-view/>
  <Head></Head>
   <Foot></Foot>
   
  </div>
</template>

<script>
import Foot from '@/components/foot.vue'
import Head from '@/components/header.vue'
export default {
  name: 'app',
  components:{
    Foot,
    Head
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
</style>
