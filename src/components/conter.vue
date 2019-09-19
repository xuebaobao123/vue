<template>
    <div>
        详情数据{{list}}
    </div>
</template>
<script>
export default {
    data(){
        return{
          list:""
        }
    },
    mounted(){
        this.list=this.$route.params.aid
    }
}
</script>