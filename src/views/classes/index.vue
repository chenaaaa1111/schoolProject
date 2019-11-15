<template>
  <div class="classes">
    <div class="space-top">
      <div class="space-nav">
        <div class="space-logo">
          <img src="../../assets/images/classs.png" alt="">班级空间
        </div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router @select="handleSelect">
          <el-menu-item index="/campusHomepage">校园主页</el-menu-item>
          <el-menu-item index="/classHomepage">班级主页</el-menu-item>
          <el-menu-item index="/myHomepage">我的主页</el-menu-item>
        </el-menu>
        <div class="search-bar">
          <el-input type="text" placeholder="搜索相关内容" suffix-icon="el-icon-search"></el-input>
        </div>
        <div class="user-box">
          <el-dropdown @visible-change="visibleChange" @command="handleCommand">
            <span class="el-dropdown-link">
              <img class="userimg" src="../../assets/images/user.png"/>
              <span v-show="!visible">刘子璇</span>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="none" disabled><span class="username">刘子璇</span></el-dropdown-item>
              <el-dropdown-item command="account">资料与账号</el-dropdown-item>
              <el-dropdown-item command="exit">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <div class="space-body">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default{
    data() {
      return{
        activeIndex: "/campusHomepage",
        visible: false,
      }
    },
    methods: {
      handleSelect(key){ // 可行方案,不太优雅
        // if(key !== this.activeIndex) {
        //   this.activeIndex = key
        //   this.$router.push({
        //     name: key,
        //     query: {
        //       id: '1202121'
        //     }
        //   })
        // }

      },
      visibleChange(val) {
        this.visible = val
      },
      handleCommand(command) {
        console.log(command, '--dropdown item click')
      }
    }
  }
</script>
<style lang="scss" scoped>
  .classes{
    .space-top{
      width: 100%;
      height: 84px;
      position: sticky;
      top: 0;
      left: 0;
      background: #FFF;
      box-shadow: 0px 1px #E6E6E6;
      .space-nav{
        width: 1152px;
        height: 100%;
        margin: 0px auto;
        .space-logo{
          float: left;
          height: 58px;
          line-height: 58px;
          font-size: 24px;
          font-weight: 500;
          margin-right: 20px;
          margin-top: 17px;
          color: #E27755;
          img{
            display: inline-block;
            width: 45px;
            margin-right: 10px;
            vertical-align: middle;
          }
        }
        .el-menu-demo{
          margin-top: 17px;
          height: 58px;
          float: left;
          border-bottom: 0;
          .el-menu-item{
            color: #5B728C;
            height: 58px;
            line-height: 58px;
            font-size: 20px;
            font-weight: 500;
            padding: 0;
            margin-right: 20px;
          }
          .is-active{
            color: #333;
          }
        }
        .search-bar{
          float: left;
          margin-top: 25px;
          margin-left: 20px;
          width: 230px;
        }
        .user-box{
          float: right;
          height: 100%;
          height: 100%;
          float: right;
          .el-dropdown {
            font-size: 14px;
            height: 100%;
            line-height: 84px;
            font-size: 18px;
            font-weight: 500;
            .el-dropdown-selfdefine{
              display: block;
              height: 100%;
              cursor: pointer;
              padding: 0 20px;
              font-size: 18px;
            }
            .el-dropdown-selfdefine:hover{
              background: #A6CAF4;
            }
          }
          .userimg{
            display: inline-block;
            width: 52px;
            height: 52px;
            border-radius: 50%;
            vertical-align: middle;
          }
        }
      }
    }
    .space-body{

    }
  }

</style>
