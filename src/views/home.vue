<template>
  <div class="view-home" >
    <div class="home-top">
      <el-row type="flex" justify="center">
        <el-col class="home-navbox" :xl="18" :lg="18" :md="20" :sm="22" :xs="24">
          <el-row>
            <el-col :span="12" class="nav-title">
              <img src="../assets/fonts/logo.png" />
              欢迎来到校本社团综合管理服务系统
            </el-col>
            <el-col :span="12" class="nav-user">
              <el-dropdown trigger="click" @visible-change="visibleChange">
                <span class="el-dropdown-link">
                  <el-avatar shape="circle" :size="48" :fit="fit" :src="url"></el-avatar>
                  <span v-if="!visible" class="userName">刘子璇</span>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item icon="el-icon-s-custom">刘子璇</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-s-cooperation">资料与账号</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-close">退出</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <div class="home-body">
      <div class="body-inner">
        <el-row type="flex" justify="center" style="width: 100%;">
          <el-col :xl="16" :lg="16" :md="20" :sm="22" :xs="24">
            <el-card class="nine">
              <el-row>
                <el-col :span="8" v-for="(item, index) in routerList" :key="index">
                  <router-link :to="{name: item.name}" class="router-link">
                    <div class="icon-box">
                      <img :src="item.image" />
                    </div>
                    <div class="item-title">{{item.title}}</div>
                  </router-link>
                </el-col>
                <!-- <el-col :span="8">
                  <div class="icon-box">
                    <img src="../assets/main/grade.png" />
                  </div>
                  <div class="item-title">年级空间</div>
                </el-col>
                <el-col :span="8">
                  <div class="icon-box">
                    <img src="../assets/main/team.png" />
                  </div>
                  <div class="item-title">社团</div>
                </el-col>
                <el-col :span="8">
                  <div class="icon-box">
                    <img src="../assets/main/special.png" />
                  </div>
                  <div class="item-title">专题空间</div>
                </el-col>
                <el-col :span="8">
                  <div class="icon-box">
                    <img src="../assets/main/topic.png" />
                  </div>
                  <div class="item-title">课题空间</div>
                </el-col>
                <el-col :span="8">
                  <div class="icon-box">
                    <img src="../assets/main/teaching.png" />
                  </div>
                  <div class="item-title">教研空间</div>
                </el-col> -->
              </el-row>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        url: require('../assets/images/user.png'),
        fit: 'cover',
        visible: false,
        routerList: [
          {
            name: 'classes',
            title: '班级空间',
            image: require('../assets/main/classes.png')
          },
          {
            name: 'grade',
            title: '年级空间',
            image: require('../assets/main/grade.png')
          },
          {
            name: 'team',
            title: '社团空间',
            image: require('../assets/main/team.png')
          },
          {
            name: 'special',
            title: '专题空间',
            image: require('../assets/main/special.png')
          },
          {
            name: 'topic',
            title: '课题空间',
            image: require('../assets/main/topic.png')
          },
          {
            name: 'teaching',
            title: '教研空间',
            image: require('../assets/main/teaching.png')
          },
        ]
      }
    },
    methods: {
      visibleChange(val) {
        console.log(val, 'val shishenme ')
        this.visible = val
      },
      changeRouter(name) {
        console.log('name')
      }
    },
    mounted:function(){
      
    }
  }
</script>

<style lang="scss">
  .view-home{
    height: 100%;
    background: url('../assets/images/bg1.jpg') no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    .home-top{
      background:rgba(255,255,255,1);
      box-shadow:0px 2px 4px 0px rgba(0,0,0,0.18);
      height: 100px;
      .home-navbox{
        .el-row{
          height: 100%;
          .nav-title{
            padding-left: 10px;
            height: 100px;
            font-size: 24px;
            font-weight: bold;
            display: flex;
            align-items: center;
            img{
              display: inline-block;
              width: 48px;
              height: 48px;
              vertical-align: middle;
              margin-right: 16px;
            }
          }
          .nav-user{
            padding-right: 10px;
            height: 100%;
            text-align: right;
            .el-dropdown{
              height: 100%;
              .el-dropdown-link{
                display: block;
                height: 100%;
                display: flex;
                align-items: center;
                .el-avatar{
                  margin-right: 16px;
                }
                .userName{
                  float: right;
                  font-size: 20px;
                  font-weight: 500;
                }
              }
            }
          }
        }
      }
    }
    .home-body{
      width: 100%;
			flex: 1;
      .body-inner{
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        align-items: center;
        .nine{
          background: #F8FBFC;
          margin: 0px 10px;
          .el-card__body{
            padding: 80px;
          }
          .el-col:nth-child(3){
            box-shadow: 0px 1px #CECDCD;
          }
          .el-col:nth-child(4){
            box-shadow: 1px 0px #CECDCD;
          }
          .el-col:nth-child(5){
            box-shadow: 1px 0px #CECDCD;
          }
          .el-col:nth-child(6){
            box-shadow: 0px 0px #CECDCD;
          }
          .el-col:hover{
            background: #c1e0e8;
            cursor: pointer;
            color: #329EB6;
          }
          .el-col{
            box-shadow: 1px 1px #CECDCD;
            .icon-box{
              width: 100px;
              height: 100px;
              padding: 10px;
              margin: 42px auto 10px;
              img{
                display: block;
                width: 100%;
                height: 100%;
              }
            }
            .item-title{
              font-size: 24px;
              text-align: center;
              margin-bottom: 50px;
            }
          }
        }
      }
    }
  }
</style>
