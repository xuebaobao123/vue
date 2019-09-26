<template>
   <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
         <el-menu :default-openeds="['1', '3']">
               <!-- <el-submenu>
                     <template slot="title">菜单1</template>
                     <el-submenu>
                        <template slot="title"> 菜单1-1</template>
                     <el-submenu>
                     <el-submenu>
                        <template slot="title">菜单1-1-1</template>
                        <el-menu-item> 菜单1-1-1</el-menu-item>
                     </el-submenu>
                     <el-submenu>
                        <template slot="title">菜单1-1-2</template>
                        <el-menu-item>菜单1-1-2</el-menu-item>
                     </el-submenu>
               </el-submenu>    -->
         </el-menu>
         <el-menu :default-openeds="['1', '3']">
              <el-submenu index="1">
                  <template slot="title"><i class="el-icon-message"></i>导航一</template>
                  <template slot="title">选项4</template>
                     <!-- <el-submenu index="2-4-1-1">
                        <template slot="title">选项4sss</template>
                        <el-menu-item index="2-4-1-1-1">选项4-sss1</el-menu-item>
                     </el-submenu> -->
                  <el-submenu index="2-4">
                     <template slot="title">选项5</template>
                     <!-- <el-submenu index="2-4-1-1">
                        <template slot="title">选项4sss</template>
                        <el-menu-item index="2-4-1-1-1">选项4-sss1</el-menu-item>
                     </el-submenu> -->
                  </el-submenu>
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
      </el-container>

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
         shuju:'',
         tableData: Array(20).fill(item),
         menuList:[
            {id:1,name:'菜单1',url:'',child:[
               {id:10,name:'菜单1-1',url:'',child:[
                  {id:100,name:'菜单1-1-1',url:''},
                  {id:101,name:'菜单1-1-2',url:''},
                ]
               },
               {id:11,name:'菜单1-2',url:''},
               {id:13,name:'菜单1-3',url:''},
			  ]},
            {id:2,name:'菜单2',url:'',child:[
               {id:20,name:'菜单2-1',url:''},
               {id:21,name:'菜单2-2',url:''},
			  ]},
            {id:3,name:'菜单3',url:'',child:[
               {id:30,name:'菜单3-1',url:''},
			  ]},        
         ],
      }
   },
    methods:{
      creatMenu(arr){
         var temp = "";
         for(var i=0;i<arr.length;i++){
            if(arr[i].child && arr[i].child.length>0){
               temp+="<template slot='title'>"+arr[i].name+"</template>"
               temp+=this.creatMenu(arr[i].child)
             }
             else{
                temp+="<el-submenu><template slot='title'>"+arr[i].name+"</template>"
               temp+="<el-menu-item>"+arr[i].name+"</el-menu-item></el-submenu>"
            }
         }
         return temp;
      }
    },
   mounted() { 
      var temp="";
      var tree = this.creatMenu(this.menuList);
      this.shuju+="<el-submenu>"+tree+"</el-submenu>";
      console.log(this.shuju)
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
  .ziji{
     margin-left:30px;;
  }
</style>