<template>
  <div id="app">
    <ffff :title="title1"></ffff>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  data(){
    return{
      todal:'',
      list:[],
      title1:"ssssss"
    }
  },
  components:{
      "ffff":HelloWorld
  }
}
</script>

<style>
</style>
