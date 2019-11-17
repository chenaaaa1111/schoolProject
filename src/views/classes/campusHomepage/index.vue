<template>
  <el-row type="flex" justify="center" class="space-wrap">
    <el-col :xl="18" :lg="18" :md="20" :sm="22" :xs="24" class="entry-content">
      <el-row :gutter="10" class="panel-row">
        <el-col :xl="6" :lg="6" :md="8" :sm="8" class="panel-left hidden-xs-only">
          <!-- 学校新闻动态 -->
          <News></News>
          <!-- 班级空间-侧边栏 -->
          <Classes></Classes>
          <!-- 通知公告 -->
          <Notice></Notice>
        </el-col>
        <el-col :xl="18" :lg="18" :md="16" :sm="16" :xs="24">
          <el-card>
            <mainNavBar></mainNavBar>
          </el-card>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>
<script>
  import mainNavBar from '@/components/mainNavBar';
  import News from '../../public/components/news.vue'
  import Classes from '../../public/components/classes.vue'
  import Notice from '../../public/components/notice.vue'
  export default{
    components: {
      mainNavBar,
      News,
      Classes,
      Notice
    },
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>
<style media="screen" lang="scss" scoped>
  .space-wrap{
    margin-top: 30px;
  }
</style>
