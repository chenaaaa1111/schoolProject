<template>
  <div class="currency">
    <div class="currency-top">
      <el-row type="flex" justify="center">
        <el-col  :xl="18" :lg="18" :md="20" :sm="22" :xs="24" class="navcol">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1" class="brand" disabled><img src="../../assets/images/classes/classesicon.png"/>班级空间</el-menu-item>
            <el-menu-item index="2" >校园主页</el-menu-item>
            <el-menu-item index="3" >我的班级</el-menu-item>
            <el-menu-item index="4" >我的主页</el-menu-item>
            <li class="el-menu-item menu-search hidden-sm-and-down">
              <el-input type="text" suffix-icon="el-icon-search"></el-input>
            </li>
          </el-menu>
          <div class="userpic">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                <el-avatar shape="circle" :size="48" :fit="fit" :src="url"></el-avatar>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-s-custom">刘子璇</el-dropdown-item>
                <el-dropdown-item icon="el-icon-s-cooperation">资料与账号</el-dropdown-item>
                <el-dropdown-item icon="el-icon-close">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>

          </div>
        </el-col>
      </el-row>
    </div>
    <div class="currency-body">
      <campusHomepage></campusHomepage>
    </div>
  </div>
</template>
<script>
  import campusHomepage from './campusHomepage/index1.vue'
  export default{
    components: {
      campusHomepage
    },
    data() {
      return {
        activeIndex: '2',
        fit: 'cover',
        url: require('../../assets/images/user.png')
      }
    },
    methods: {
      handleSelect() {},
    }
  }
</script>
<style lang="scss">
  .currency{
    min-height: 100%;
    background: url('../../assets/images/classes/classesbg.png') no-repeat;
    background-size: 100% 100%;
    .navcol{
      position: relative;
      background: #fff;
      .userpic{
        display: flex;
        align-items: center;
        position: absolute;
        height: 100%;
        top: 0;
        right: 0;
      }
    }
    .currency-top{
      z-index: 999999;
      background: #fff;
      height: auto!important;
      .el-col{
        height: auto!important;
      }
    }
    .el-menu-demo{
      border-bottom: 0;
      margin-right: 100px;
      .el-menu-item{
        font-size: 22px;
        font-weight: 600;
        padding: 0px;
        margin-right: 30px;
      }
      .menu-search{
        margin-left: 30px;
      }
      .brand{
        color: #D59F36;
        font-size: 24px;
        opacity: 1;
        img{
          display: inline-block;
          vertical-align: middle;
          width: 47px;
          height: 36px;
          margin-right: 12px;
        }
      }
    }

    .currency-top{
      width: 100%;
      height: 100px;
      position: sticky;
      top: 0;
      left: 0;
      box-shadow: 0px 1px #ccc;
      .el-col{
        height: 100px;
      }
    }
    .currency-body{

    }
  }
</style>
