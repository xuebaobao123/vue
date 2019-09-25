<template>
    <form @submit.prevent="sumbit">
        <div class="divForm">
           <span>用户名:</span>
           <el-input
                placeholder="请输入内容"
                v-model="formDate.name"
                clearable>
            </el-input>
        </div>
        <div class="divForm">
            <span>密码:</span>
            <el-input
                show-password
                placeholder="请输入内容"
                v-model="formDate.password"
                clearable>
            </el-input>
        </div>
        <button type="primary">提交</button>
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
    .el-input__icon{
        line-height:30px !important;
    }
    .divForm span{
        width: 48px;
        display: inline-block;
        font-size: 14px;
        text-align:left;
    }
    .divForm input{
        border:1px solid #bcbfbf;
        width:130px;
        height:30px;
        line-height:30px;
    }
    .divForm{
        font-size:18px;
        margin-top:10px;
    }
    button{
        background:#409EFF;
        border-radius:4px;
        color:white;
        border:none;
        width:143px;
        margin:0 auto;
        height:30px;
        line-height:30px;
        margin-top:10px;
    }
    .el-input{
        width:50% !important;
    }
    form{
        width:300px;
        box-shadow:5px 5px 5px 5px #efefef;
        text-align:center;
        margin:0 auto;
        padding:20px;
    }
</style>