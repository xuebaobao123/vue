<template>
    <form @submit.prevent="sumbit">
        <div class="divForm">
           <span>用户名:</span>
           <input type="text" v-model="formDate.name"></input>
        </div>
        <div class="divForm">
            <span>密码:</span>
           <input type="password" v-model="formDate.password"></input>
        </div>
        <button type="sumbit">提交</button>
    </form>
</template>
<script>
   export default{
     data(){
         return{
             formDate:{
                 "name":"",
                 "password":""
             },
         }
     },
     methods:{
         sumbit(){
             if(!this.formDate.name || !this.formDate.password){
                 alert("数据不能为空")
             }
             else{
                if(this.formDate.name=='user1'){
                    this.$router.push({
                        path: '/home',
                        query:{
                            userName:"0"
                        }
                    })
                }
                else{
                    this.$router.push({
                        path: '/home',
                        query:{
                            userName:"1"
                            }
                    })
                }
                
            }

         }
     }
   }
</script>
<style>
    .divForm span{
        width: 48px;
        display: inline-block;
        font-size: 14px;
        text-align:left;
    }
    .divForm input{
        border:1px solid #bcbfbf;
        width:130px;
    }
    .divForm{
        font-size:18px;
        margin-top:10px;
    }
    button{
        background:#07a2be;
        border-radius:4px;
        color:white;
        border:none;
        width:100px;
        margin:0 auto;
        height:26px;
        line-height:26px;
        margin-top:10px;
    }
    form{
        width:300px;
        box-shadow:5px 5px 5px 5px #efefef;
        text-align:center;
        margin:0 auto;
        padding:20px;
    }
</style>