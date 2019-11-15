<template>
  <div class="body-inner">
    <el-card class="box-card box-card-top">
      <div class="brand">
        <img src="../../../assets/fonts/logo.png" />
        <span>我的主页</span>
        <el-button plain class="write" :autofocus="true">写新闻</el-button>
      </div>
    </el-card>
    <el-card class="box-card">

    </el-card>
  </div>
</template>
<style lang="scss">
  .body-inner{
    width: 1152px;
    margin: 0px auto;
    .box-card-top{
      margin-top: 20px;
      .brand{
        font-size: 28px;
        font-weight: 500;
        position: relative;
        img{
          display: inline-block;
          width: 56px;
          height: 56px;
          vertical-align: middle;
          margin-right: 10px;
        }
        .write{
          position: absolute;
          top: 8px;
          right: 0;
          font-size: 16px;
          font-weight: 500;
          color: #409EFF;
          border: 1px solid #409EFF;
        }
      }
    }
    .box-card{
      margin-bottom: 20px;
    }
  }
</style>
