<template>
  <div id="app">
     <router-link to="/HelloWorld" class="a">登录</router-link>
     <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return{
    }
  }
}
</script>

<style>
   .a{
     margin:200px auto 20px;
     width:69px;
     display:block;
   }
   a{
     font-size:16px;
     color:black;
     text-decoration: none;
   }
   *{
      padding:0;
      margin:0;
   }
</style>
