<template>
  <el-row class="pageTop" type="flex" justify="center">
    <el-col :xl="18" :lg="18" :md="20" :sm="22" :xs="24" class="pageContent">
      <el-row>
        <el-col :span="12" class="top-title">
          <img v-if="loadData.url" :src="loadData.url" alt=""/>{{loadData.title}}
        </el-col>
        <el-col :span="12" class="top-write">
          <span v-if="loadData.showWrite" @click="write"></span>
        </el-col>
        <el-col :span="12" class="department">
          {{loadData.subTitle}}
        </el-col>
        <el-col :span="loadData.subTitle != ''?12: 24" class="leftentry">
          <span class="entrybtns hidden-sm-and-up">
            <el-button type="danger" circle>
              <img class="btnicon" src="../../assets/images/classes/news.png"/>
            </el-button>
            <el-button type="primary" circle>
              <img class="btnicon" src="../../assets/images/classes/space.png"/>
            </el-button>
            <el-button type="primary" circle>
              <img class="btnicon" src="../../assets/images/classes/notice.png"/>
            </el-button>
          </span>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>
<script>
  export default{
    props: {
      loadData: {
        type: Object,
        default: null
      }
    },
    data() {
      return {

      }
    },
    mounted() {
      console.log(this.loadData, 'where am i ????')
    },
    methods: {
      write() {
        let data = {
          name: this.loadData.activeIndex
        }
        this.$emit('goWrite', data)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .pageTop{
    .pageContent{
      margin-top: 48px;
      .top-title{
        height: 56px;
        line-height: 56px;
        padding-left: 10px;
        font-size: 30px;
        color: #034692;
        img{
          display: inline-block;
          width: 74px;
          height: 74px;
          vertical-align: middle;
          margin-right: 30px;
        }
      }
      .top-write{
        height: 56px;
        line-height: 56px;
        text-align: right;
        padding-right: 10px;
        span{
          display: inline-block;
          width: 152px;
          height: 52px;
          background: url('../../assets/images/myhome/writenews.png') no-repeat;
          background-size: 100% 100%;
          cursor: pointer;
        }
      }
      .leftentry{
        text-align: right;
        margin-top: 20px;
        padding: 0px 10px;
        .entrybtns{
          .btnicon{
            width: 45px;
            height: 45px;
          }
          .el-button.is-circle{
            padding: 0px;
          }
        }
      }
      .department{
        padding-left: 10px;
        font-size: 24px;
        line-height: 46px;
      }
    }
  }
</style>
