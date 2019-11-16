<template>
    <div class="mainNavBar">
        <!-- <ul class="mnavbar">
           <li v-for=" item in dataList">
                {{item.text}}
           </li>
        </ul> -->
        <van-tabs>
            <van-tab v-for="item in dataList" :title="'标签 '+item.id" key="item.id">
              内容 {{ item.text }}
            </van-tab>
          </van-tabs>
    </div>
</template>
<script>
  // import 'vant/lib/button/style';
  
    export default {
      name: 'mainNavBar',
      data () {
        return {
          active:1,
          dataList:[{text:'全部',id:'all'},{text:'最新',id:'1'},
      {text:'就业',id:'2'},{text:'专业',id:'3'},{text:'辅导',id:'4'},{text:'辅导班',id:'5'}]
        }
      },
      comments:{
       
      }
      
    }
    </script>