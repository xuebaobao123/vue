<template>
    <form @submit.prevent="sumbit">
       用户名
       <input type="text" v-model="formDate.name"></input>
       密码
       <input type="password" v-model="formDate.password"></input>
       <button type="sumbit">提交</button>
       <router-view></router-view>
    </form>
</template>
<script>
   export default{
     data(){
         return{
             formDate:{
                 "name":"",
                 "password":""
             }
         }
     },
     methods:{
         sumbit(){
             if(!this.formDate.name || !this.formDate.password){
                 alert("数据不能为空")
             }
             else{
                 this.$router.push({
                        path: '/home',
                        name: 'home',
                        component: home
                    })
             }

         }
     }
   }
</script>