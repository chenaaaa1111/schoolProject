<template>
  <div class="entry">
    <!-- <HomePage @getActiveIndex="spaceChange"></HomePage> -->
    <NavBar :activeIndex="currentPage"  @getActiveIndex="spaceChange"></NavBar>

    <pageTop :loadData="topparams" @goWrite="goWrite"></pageTop>
    <campusHomepage v-if="currentPage == 'campusHomepage'"></campusHomepage>

    <myHomepage v-if="currentPage == 'myHomepage'"></myHomepage>
  </div>
</template>
<script>
  import NavBar from '../public/NavBar.vue'
  import pageTop from '../public/pageTop.vue'
  import campusHomepage from './campusHomepage/index.vue'
  import myHomepage from './myHomepage/index.vue'
  export default{
    components: {
      pageTop,
      campusHomepage,
      myHomepage,
      NavBar
    },
    data() {
      let that = this
      return {
        currentPage: 'campusHomepage',
        topparams: {
          title: '华悦蜀山区第一中学',
          subTitle: '',
          activeIndex: 'campusHomepage',
          showWrite: true
        }
      }
    },
    watch:{
  　　$route(to,from){
        console.log(to,from , 'to == from')
  　　}
    },
    created() {
      console.log(this.currentPage,'重新加载 writebackpage')
    },
    mounted() {

    },
    methods: {
      spaceChange(data) {
        console.log(data, 'current ????')
        switch (val) {
          case 'campusHomepage':
            this.currentPage = 'campusHomepage'
            break;
          case 'classHomepage':
            this.currentPage = 'classHomepage'
            break;
          case 'myHomepage':
            this.currentPage = 'myHomepage'
            break;
          default:
            this.currentPage = 'campusHomepage'
            break;
        }
        this.currentPage = data;
      },
      goWrite(data) {
        console.log(data, 'from write')
        this.$router.push({
          name: 'writenews',
          // query: {
          //   fromwhere: data.name
          // }
        })
      },
    }
  }
</script>
<style lang="scss">
.entry{
  height: 100%;
  overflow: auto;
  background: url('../../assets/images/classes/classesbg.png') no-repeat;
  background-size: 100% 100%;
  .entry-content{
    padding: 0px 10px;
  }
}
</style>
