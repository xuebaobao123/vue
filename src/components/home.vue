<template>
    <div class="content">
        <ul>
            <li v-for="(item,key) in shuju">
               <router-link :to="'/conter/'+item">{{item.name}}</router-link>
            </li>
         </ul>
         <div class="right">
           <router-view></router-view>
         </div>
    </div>
</template>
<script>
export default {
   data(){
      return{
         menuList:[
            {id:1,name:'菜单1',url:''},
            {id:10,name:'菜单1-1',url:'',pId:1},
            {id:100,name:'菜单1-1-1',url:'',pId:10},
            {id:101,name:'菜单1-1-2',url:'',pId:10},
            {id:11,name:'菜单1-2',url:'',pId:1},
            {id:13,name:'菜单1-3',url:'',pId:1},
            {id:2,name:'菜单2',url:''},
            {id:20,name:'菜单2-1',url:'',pId:2},
            {id:21,name:'菜单2-2',url:'',pId:2},
            {id:3,name:'菜单3',url:''},
            {id:30,name:'菜单3-1',url:'',pId:3},
         ],
          userMenu:[
            {
               userName:'user1',
               menuList:[1,10,100,101,2,20,3]
            },
            {
               userName:'user2',
               menuList:[1,10,100,101,11,2,20,3,30]
            }
         ],
         shuju:[]
      }
   },
   methods:{
     sonsTree(arr,id){
         var temp=[];
         var shu=0,
         forFn=function(arr,id,shu){
            for(var i=0;i<arr.length;i++){
               var item=arr[i];
               if(item.parent_id==id){
                  item.shu=shu;
                  temp.push(item);
                  forFn(arr,item.id,shu+1);
               }
            }

         }
         forFn(arr,id,shu);
         return temp
      }
   },
   mounted() {
     
      var tree=this.sonsTree(this.menuList,1);
      for(var i=0;i<tree.length;i++){
         var item=tree[i];
         if(item['shu']==0){
             for(var i=0;i<this.menuList.length;i++){
               for(var j=0;j<this.userMenu[this.$route.query.userName].menuList.length;j++){
                  if(this.userMenu[this.$route.query.userName].menuList[j]==this.menuList[i].id){
                     this.shuju.push(('&nbsp;&nbsp;'+item.name)
                  }
               }
            }
         }
         else{
            temp.push(item.name)
         }

      }
   },
}
</script>
<style>
   ul{
      list-style:none;
      float:left;
   }
   ul li{
      cursor:pointer;

   }
   .content{
      overflow:hidden;
   }
   .right{
      float:left;
   }
</style>