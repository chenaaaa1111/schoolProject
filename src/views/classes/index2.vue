<template>
  <div class="entry">
    <HomePage @getActiveIndex="spaceChange"></HomePage>
    <pageTop :whereami="currentPage" @goWrite="goWrite"></pageTop>
    <campusHomepage v-if="currentPage == 'campusHomepage'"></campusHomepage>
    <myHomepage v-if="currentPage == 'myHomepage'"></myHomepage>
  </div>
</template>
<script>
  import HomePage from '../public/homePage.vue'
  import pageTop from '../public/pageTop.vue'
  import campusHomepage from './campusHomepage/index.vue'
  import myHomepage from './myHomepage/index.vue'
  export default{
    components: {
      HomePage,
      pageTop,
      campusHomepage,
      myHomepage
    },
    data() {
      return {
        currentPage: 'campusHomepage'
      }
    },
    created() {
      console.log(this.currentPage,'重新加载 writebackpage')
    },
    mounted() {
      console.log(this.$route.query.name, 'query ????')
      if(this.$route.query.name != undefined) {
        this.currentPage = this.$route.query.name
      }
    },
    methods: {
      spaceChange(data) {
        console.log(data, 'current ????')
        this.currentPage = data;
      },
      goWrite(data) {
        console.log(data, 'from write')
        this.$router.push({
          name: 'writenews',
          query: {
            fromwhere: data.name
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
