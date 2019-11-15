<template>
  <div class="view-home">
    <div class="home-nav">
      <div class="nav-box">
        <div class="nav-welcome">
          欢迎来到校本社团综合管理服务系统
        </div>
        <div class="userInfo">
          <el-dropdown @visible-change="visibleChange" @command="handleCommand">
            <span class="el-dropdown-link">
              <img class="userimg" src="../assets/images/user.png"/>
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
    <div class="home-body">
      <div class="body-wrap">
        <div class="body-panel">
          <ul class="lattice">
            <li v-for="(item,index) in routerList">
              <router-link :to="{name: item.name}" class="router-link" :key="index">
                <img :src="item.image"/>
                <p>{{item.title}}</p>
              </router-link>
            </li>
            <!-- <li>
              <router-link :to="{name: 'home'}" class="router-link">
                <img src="../assets/images/classs.png"/>
                <p>班级空间</p>
              </router-link>
            </li> -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        visible: false,
        routerList: [
          {
            name: 'classes',
            title: '班级空间',
            image: require('../assets/images/classs.png')
          },
          {
            name: 'grade',
            title: '年级空间',
            image: require('../assets/images/grade.png')
          },
          {
            name: 'team',
            title: '社团空间',
            image: require('../assets/images/team.png')
          },
          {
            name: 'special',
            title: '专题空间',
            image: require('../assets/images/special.png')
          },
          {
            name: 'topic',
            title: '课题空间',
            image: require('../assets/images/topic.png')
          },
          {
            name: 'teaching',
            title: '教研空间',
            image: require('../assets/images/teaching.png')
          },
        ]
      }
    },
    methods: {
      visibleChange(val) {
        this.visible = val
      },
      handleCommand(command) {
        console.log(command, '--dropdown item click')
      }
    }
  }
</script>

<style lang="scss">
  .view-home{
    height: 100%;
    position: relative;
    background: url('../assets/images/bg1.jpg') no-repeat;
    background-size: 100% 100%;
    .home-nav{
      height: 84px;
      background: #FFF;
      .nav-box{
        width: 1152px;
        height: 100%;
        margin: 0 auto;
        .nav-welcome{
          height: 44px;
          line-height: 44px;
          float: left;
          font-size: 26px;
          font-weight: 400;
          margin-top: 20px;
          padding-left: 50px;
          background: url('../assets/fonts/logo.png') no-repeat left center;
        }
        .userInfo{
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
    .home-body{
      position: absolute;
      width: 100%;
      height: auto;
      top: 84px;
      bottom: 0px;
    }
  }
  .username{
    color: #333;
    font-weight: 500;
  }
  .el-dropdown-menu__item{
    width: 214px;
    padding: 0px 20px;
    font-size: 16px;
  }
  .home-body{
    .body-wrap{
      position: relative;
      width: 100%;
      height: 100%;
      overflow: auto;
    }
    .body-panel{
      width: 900px;
      height: 504px;
      padding: 95px 125px;
      background: #F5F3F3;
      border-radius: 20px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -347px;
      margin-left: -575px;
      .lattice{
        list-style: none;
        width: 100%;
        height: 100%;
        li{
          width: 33.33%;
          height: 50%;
          float: left;
          box-shadow: 1px 1px #D0D0D0;
          .router-link{
            display: block;
            width: 101px;
            margin: 55px auto;
            text-decoration: none;
            text-align: center;
            img{
              display: block;
              height: 100px;
            }
            p{
              line-height: 40px;
              font-size: 22px;
            }
          }
        }

      }
      .lattice li:nth-child(3){
        box-shadow: 0px 1px #D0D0D0;
      }
      .lattice li:nth-child(4){
        box-shadow: 1px 0px #D0D0D0;
      }
      .lattice li:nth-child(5){
        box-shadow: 1px 0px #D0D0D0;
      }
      .lattice li:nth-child(6){
        box-shadow: 0px 0px #D0D0D0;
      }
    }
  }
</style>
