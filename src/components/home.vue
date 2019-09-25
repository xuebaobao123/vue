<template>
     <div id="app">
         <ul>
            <li v-for="(item,key) in shuju" v-html="item">{{item}}</li>
         </ul>
        <!-- <el-container style="height: 500px; border: 1px solid #eee;">
         <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu :default-openeds="['1', '3']" >
               <el-submenu index="1">
               </el-submenu>
            </el-menu>
         </el-aside>
         <el-container>
            <el-header style="text-align: right; font-size: 12px">
               <el-dropdown>
               <i class="el-icon-setting" style="margin-right: 15px"></i>
               <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>查看</el-dropdown-item>
                  <el-dropdown-item>新增</el-dropdown-item>
                  <el-dropdown-item>删除</el-dropdown-item>
               </el-dropdown-menu>
               </el-dropdown>
               <span>王小虎</span>
            </el-header>
            <el-main>
               <el-table :data="tableData">
               <el-table-column prop="date" label="日期" width="140">
               </el-table-column>
               <el-table-column prop="name" label="姓名" width="120">
               </el-table-column>
               <el-table-column prop="address" label="地址">
               </el-table-column>
               </el-table>
            </el-main>
         </el-container>
         </el-container> -->
     </div>
      
</template>  
<script>
export default {
   data(){
       const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return{
         menuList:[
            {id:1,name:'菜单1',url:'',pId:0},
            {id:10,name:'菜单1-1',url:'',pId:1},
            {id:100,name:'菜单1-1-1',url:'',pId:10},
            {id:101,name:'菜单1-1-2',url:'',pId:10},
            {id:11,name:'菜单1-2',url:'',pId:1},
            {id:13,name:'菜单1-3',url:'',pId:1},
            {id:2,name:'菜单2',url:'',pId:0},
            {id:20,name:'菜单2-1',url:'',pId:2},
            {id:21,name:'菜单2-2',url:'',pId:2},
            {id:3,name:'菜单3',url:'',pId:0},
            {id:30,name:'菜单3-1',url:'',pId:3},
         ],
          userMenu:[
            {
               userName:'user1',
               menuList:[1,100,101,2,3,10,20,20,20]
            },
            {
               userName:'user2',
               menuList:[1,10,100,101,11,2,20,3,30]
            }
         ],
         shuju:[],
         tableData: Array(20).fill(item)
      }
   },
    methods:{
      sonsTree(arr,id){
         var temp = [],lev=0;
         var userMenu=this.userMenu[this.$route.query.userName].menuList;
         var forFn = function(arr, id,lev){
            for (var i = 0; i < arr.length; i++) {
               var item = arr[i];
               if (item.pId==id) {
                  item.lev=lev;
                  let have = false;
                   for(let j=0;j<userMenu.length;j++){
                     if(userMenu[j]==item.id){
                         have = true;
                         break; 
                     }
                  }
                  if(have)
                     temp.push(item);
                  forFn(arr,item.id,lev+1);
               }
            }
         };
      forFn(arr, id,lev);
         return temp;
      }
   },
   mounted() { 
      var tree = this.sonsTree(this.menuList,0);
      for(var i=0;i<tree.length;i++){
            var item = tree[i];
            let spaceS = "";
            if(i>0){
               spaceS = "</ul>";
         }
         if(item.lev==0){
             this.shuju.push(spaceS+'<li><a class="one">'+item.name+'</a></li><ul>');
         }else{
             this.shuju.push('<li><a>'+item.name+'</a></li>')
         }
         if(i+1==tree.length){
             this.shuju.push("</ul>")
         }
      }
   },
}
</script>
<style>
    .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>