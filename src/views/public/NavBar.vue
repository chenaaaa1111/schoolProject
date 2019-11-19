<template>
  <el-row class="page-header" type="flex" justify="center">
    <el-col :xl="18" :lg="18" :md="20" :sm="22" :xs="24" class="nav-col">
      <el-menu :default-active="activeIndex" class="el-menu-head" mode="horizontal"
          @select="handleSelect">
          <li class="homeEntry" @click="goHome">
            <img src="../../assets/main/classes.png" />班级空间
          </li>
          <el-menu-item index="campusHomepage">校园主页</el-menu-item>
          <el-menu-item index="classHomepage">我的班级</el-menu-item>
          <el-menu-item index="myHomepage">我的主页</el-menu-item>
          <li class="el-menu-item menu-search hidden-sm-and-down">
              <el-input type="text" suffix-icon="el-icon-search"></el-input>
          </li>
          <!-- 待改进 -->
          <li class="nav-user">
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
          </li>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
  export default{
    props: {
      activeIndex: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        fit: 'cover',
        url: require('../../assets/images/user.png')
      }
    },
    methods: {
      goHome() {
        this.$router.push({
          name: 'home'
        })
      },
      handleSelect(val) {
        console.log(val, 'val 不见了?')
        this.$emit('getActiveIndex', val)
      },
    }
  }
</script>
<style lang="scss" scoped>
  .page-header{
    background: #FFF;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 999999;
    .nav-col{
      padding: 0px 10px;
      .el-menu-head{
        .homeEntry{
          float: left;
          height: 100px;
          display: flex;
          align-items: center;
          margin-right: 35px;
          font-size: 26px;
          color: #E27755;
          img{
            display: inline-block;
            width: 56px;
            height: 56px;
            vertical-align: middle;
            margin: 0px 10px;
          }
        }
        .el-menu-item{
          font-size: 22px;
          color: #5B728C;
          padding: 0px;
          margin-right: 35px;
          height: 100px;
          line-height: 106px;
        }
        .is-active{
          border-bottom: 0;
          color: #333;
        }
        .is-active::after{
          content: '';
          display: block;
          width: 100%;
          height: 4px;
          background: #409EFF;
          position: absolute;
          bottom: 6px;
          border-radius: 2px;;
        }
        .nav-user{
          float: right;
          height: 100px;
          display: flex;
          align-items: center;
          margin-right: 10px;
        }
      }


    }
  }
</style>
