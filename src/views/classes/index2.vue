<template>
  <div class="entry">
    <!-- <HomePage @getActiveIndex="spaceChange"></HomePage> -->
    <NavBar :activeIndex="currentPage"  @getActiveIndex="spaceChange"></NavBar>

    <pageTop :loadData="topparams" @goWrite="goWrite"></pageTop>
    <campusHomepage v-if="currentPage == 'campusHomepage'"></campusHomepage>
    <classHomepage v-if="currentPage == 'classHomepage'"></classHomepage>
    <myHomepage v-if="currentPage == 'myHomepage'"></myHomepage>
  </div>
</template>
<script>
  import NavBar from '../public/NavBar.vue'
  import pageTop from '../public/pageTop.vue'
  import campusHomepage from './campusHomepage/index.vue'
  import classHomepage from './classHomepage/index.vue'
  import myHomepage from './myHomepage/index.vue'
  export default{
    components: {
      pageTop,
      campusHomepage,
      classHomepage,
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
          pageName: '校园主页',
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
      console.log(this.$store.state, 'store 里面有啥')
      if(this.$store.state.spaceInitTab != '') {
        this.currentPage = this.$store.state.spaceInitTab
      }
    },
    methods: {
      spaceChange(data) {
        console.log(data, 'current ????')
        switch (data) {
          case 'campusHomepage':
            this.currentPage = 'campusHomepage'
            this.topparams = {
              title: '华悦蜀山区第一中学',
              subTitle: '',
              activeIndex: 'campusHomepage',
              pageName: '校园主页',
              showWrite: true
            }
            break;
          case 'classHomepage':
            this.currentPage = 'classHomepage'
            this.topparams = {
              url: require('../../assets/images/class_else.png'),
              title: '2019级2班',
              subTitle: '',
              activeIndex: 'classHomepage',
              pageName: '我的班级',
              showWrite: false
            }
            break;
          case 'myHomepage':
            this.currentPage = 'myHomepage'
            this.topparams = {
              title: '我的个人主页',
              subTitle: '西区初中2019级1班',
              activeIndex: 'myHomepage',
              pageName: '我的主页',
              showWrite: true
            }
            break;
          default:
            this.currentPage = 'campusHomepage'
            this.topparams = {
              title: '华悦蜀山区第一中学',
              subTitle: '',
              activeIndex: 'campusHomepage',
              pageName: '校园主页',
              showWrite: true
            }
            break;
        }
        this.currentPage = data;
      },
      goWrite(data) {
        console.log(data, 'from write')
        this.$router.push({
          name: 'writenews',
          query: {
            fromwhere: data.name,
            pageName: this.topparams.pageName
          }
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
