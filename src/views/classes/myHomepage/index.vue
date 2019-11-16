<template>
  <el-row class="curreBody">
    <el-col>
      <el-row  type="flex" justify="center" class="body-top">
        <el-col :xl="18" :lg="18" :md="20" :sm="22" :xs="24">
          <el-row >
            <el-col :span="16" class="schoolName">我的个人主页</el-col>
            <el-col :span="8" class="write">
              <el-button type="plan" @click="write">写新闻</el-button>
            </el-col>
            <el-col :span="24" class="myClass">西区初中2019级1班</el-col>
          </el-row>
          <el-row >
            <el-col :span="24">
              <div class="hideWrap">
                <span class="hidden-sm-and-up">
                  <el-button type="danger" circle>
                    <img class="btnicon" src="../../../assets/images/classes/news.png"/>
                  </el-button>
                  <el-button type="primary" circle>
                    <img class="btnicon" src="../../../assets/images/classes/space.png"/>
                  </el-button>
                  <el-button type="primary" circle>
                    <img class="btnicon" src="../../../assets/images/classes/notice.png"/>
                  </el-button>
                </span>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :xl="18" :lg="18" :md="20" :sm="22" :xs="24">
          <el-row :gutter="10" class="colblock">
            <el-col :xl="6" :lg="6" :md="8" :sm="8" class="panel-left hidden-xs-only">
              <!-- 个人头像信息 -->
              <el-card class="banner-card">
                <div class="circle" style="text-align: center;">
                  <el-avatar :size="120" :src="circleUrl"></el-avatar>
                </div>
                <h2 class="myName">
                  里斯本 <img src="../../../assets/images/myhome/editName.png"/>
                </h2>
                <div class="dynamic">
                  <div class="dynamic-g">
                    <p class="count">32</p>
                    <p class="title">校园动态</p>
                  </div>
                  <div class="dynamic-c">
                    <p class="count">12</p>
                    <p class="title">班级动态</p>
                  </div>
                </div>
              </el-card>
              <!-- 最近访客 -->
              <el-card class="banner-card">
                <div slot="header" class="clearfix">
                  <h2 class="cardTitle"><img src="../../../assets/images/myhome/vistor.png"/>最近访客</h2>
                </div>
                <h2 class="vistorCount">
                  总共访问: 3576人次
                </h2>
                <div class="lately">最近10个访客:</div>
                <div>
                  <el-avatar class="vistor-avatar" :size="44" :src="circleUrl"></el-avatar>
                  <el-avatar class="vistor-avatar" :size="44" :src="circleUrl"></el-avatar>
                  <el-avatar class="vistor-avatar" :size="44" :src="circleUrl"></el-avatar>
                  <el-avatar class="vistor-avatar" :size="44" :src="circleUrl"></el-avatar>
                  <el-avatar class="vistor-avatar" :size="44" :src="circleUrl"></el-avatar>
                  <el-avatar class="vistor-avatar" :size="44" :src="circleUrl"></el-avatar>
                  <el-avatar class="vistor-avatar" :size="44" :src="circleUrl"></el-avatar>
                  <el-avatar class="vistor-avatar" :size="44" :src="circleUrl"></el-avatar>
                  <el-avatar class="vistor-avatar" :size="44" :src="circleUrl"></el-avatar>
                  <el-avatar class="vistor-avatar" :size="44" :src="circleUrl"></el-avatar>
                  <el-avatar class="vistor-avatar" :size="44" :src="circleUrl"></el-avatar>
                  <el-avatar class="vistor-avatar" :size="44" :src="circleUrl"></el-avatar>
                </div>
              </el-card>
              <!-- 审核中 -->
              <el-card class="banner-card">
                <div slot="header" class="clearfix">
                  <span class="cardTitle">
                    <img
                      style="background:#226BB4;border-radius: 50%;"
                      src="../../../assets/images/myhome/examine.png"/>审核中
                  </span>
                  <span class="more">
                    <span class="text">全部</span><img src="../../../assets/images/classes/more.png"/>
                  </span>
                </div>
                <div class="examineTips">3个正在审核中的新闻:</div>
                <el-row class="question">
                  <el-col class="title">如何评价电影《少年的你》?</el-col>
                  <el-col>
                    <el-row>
                      <el-col :span="14" class="time">2019/08/03 09:20</el-col>
                      <el-col :span="10" class="exit">
                        <el-button type="text">撤回</el-button>
                      </el-col>
                    </el-row>
                  </el-col>
                </el-row>
                <el-row class="question">
                  <el-col class="title">如何评价电影《少年的你》?</el-col>
                  <el-col>
                    <el-row>
                      <el-col :span="14" class="time">2019/08/03 09:20</el-col>
                      <el-col :span="10" class="exit">
                        <el-button type="text">撤回</el-button>
                      </el-col>
                    </el-row>
                  </el-col>
                </el-row>
                <el-row class="question">
                  <el-col class="title">如何评价电影《少年的你》?</el-col>
                  <el-col>
                    <el-row>
                      <el-col :span="14" class="time">2019/08/03 09:20</el-col>
                      <el-col :span="10" class="exit">
                        <el-button type="text">撤回</el-button>
                      </el-col>
                    </el-row>
                  </el-col>
                </el-row>
                <el-row class="question">
                  <el-col class="title">如何评价电影《少年的你》?</el-col>
                  <el-col>
                    <el-row>
                      <el-col :span="14" class="time">2019/08/03 09:20</el-col>
                      <el-col :span="10" class="exit">
                        <el-button type="text">撤回</el-button>
                      </el-col>
                    </el-row>
                  </el-col>
                </el-row>
              </el-card>
              <!-- 审核未通过 -->
              <el-card class="banner-card">
                <div slot="header" class="clearfix">
                  <span class="cardTitle">
                    <img
                      style="background:#226BB4;border-radius: 50%;"
                      src="../../../assets/images/myhome/notpass.png"/>审核未通过
                  </span>
                  <span class="more">
                    <span class="text">全部</span><img src="../../../assets/images/classes/more.png"/>
                  </span>
                </div>
                <div class="examineTips">3个审核未通过的新闻:</div>
                <el-row class="question">
                  <el-col class="title">如何评价电影《少年的你》?</el-col>
                  <el-col>
                    <el-row>
                      <el-col :span="14" class="time">2019/08/03 09:20</el-col>
                      <el-col :span="10" class="exit">
                        <el-button type="text">编辑</el-button>
                        <el-button type="text">删除</el-button>
                      </el-col>
                    </el-row>
                  </el-col>
                </el-row>
                <el-row class="question">
                  <el-col class="title">如何评价电影《少年的你》?</el-col>
                  <el-col>
                    <el-row>
                      <el-col :span="14" class="time">2019/08/03 09:20</el-col>
                      <el-col :span="10" class="exit">
                        <el-button type="text">编辑</el-button>
                        <el-button type="text">删除</el-button>
                      </el-col>
                    </el-row>
                  </el-col>
                </el-row>
                <el-row class="question">
                  <el-col class="title">如何评价电影《少年的你》?</el-col>
                  <el-col>
                    <el-row>
                      <el-col :span="14" class="time">2019/08/03 09:20</el-col>
                      <el-col :span="10" class="exit">
                        <el-button type="text">编辑</el-button>
                        <el-button type="text">删除</el-button>
                      </el-col>
                    </el-row>
                  </el-col>
                </el-row>
                <el-row class="question">
                  <el-col class="title">如何评价电影《少年的你》?</el-col>
                  <el-col>
                    <el-row>
                      <el-col :span="14" class="time">2019/08/03 09:20</el-col>
                      <el-col :span="10" class="exit">
                        <el-button type="text">编辑</el-button>
                        <el-button type="text">删除</el-button>
                      </el-col>
                    </el-row>
                  </el-col>
                </el-row>
              </el-card>
              <!-- 审核未通过 -->
              <el-card class="banner-card">
                <div slot="header" class="clearfix">
                  <span class="cardTitle">
                    <img
                      style="background:#226BB4;border-radius: 50%;"
                      src="../../../assets/images/myhome/message.png"/>
                      <el-badge :value="200" :max="99" class="item">
                        消息通知
                      </el-badge>
                  </span>
                  <span class="more">
                    <span class="text">全部</span><img src="../../../assets/images/classes/more.png"/>
                  </span>
                </div>
                <el-row class="question">
                  <el-col class="title">如何评价电影《少年的你》?</el-col>
                  <el-col>
                    <el-row>
                      <el-col :span="14" class="time">2019/08/03 09:20</el-col>
                    </el-row>
                  </el-col>
                </el-row>
                <el-row class="question">
                  <el-col class="title">如何评价电影《少年的你》?</el-col>
                  <el-col>
                    <el-row>
                      <el-col :span="14" class="time">2019/08/03 09:20</el-col>
                    </el-row>
                  </el-col>
                </el-row>
                <el-row class="question">
                  <el-col class="title">如何评价电影《少年的你》?</el-col>
                  <el-col>
                    <el-row>
                      <el-col :span="14" class="time">2019/08/03 09:20</el-col>
                    </el-row>
                  </el-col>
                </el-row>
                <el-row class="question">
                  <el-col class="title">如何评价电影《少年的你》?</el-col>
                  <el-col>
                    <el-row>
                      <el-col :span="14" class="time">2019/08/03 09:20</el-col>
                    </el-row>
                  </el-col>
                </el-row>
              </el-card>
            </el-col>
            <el-col :xl="18" :lg="18" :md="16" :sm="16" :xs="24">
              <classesdynamic></classesdynamic>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>
<script>
  import classesdynamic from './components/classesdynamic.vue'
  import campusdynamic from './components/campusdynamic.vue'
  export default{
    components: {
      classesdynamic,
      campusdynamic
    },
    data() {
      return {
        areaList:[
          {
            areaName: '东区',
            classes: ['19级1班','19级2班','19级3班','19级4班','19级5班','19级6班','19级7班','19级8班']
          },
          {
            areaName: '西区',
            classes: ['19级1班','19级2班','19级3班','19级4班','19级5班','19级6班','19级7班','19级8班']
          },
          {
            areaName: '南区',
            classes: ['19级1班','19级2班','19级3班','19级4班','19级5班','19级6班','19级7班','19级8班']
          }
        ],
        noticeList: [
          {
            title: '沈家门第四小学2019学校安全工作一号预警沈家门第四小学2019学校安全工作一号预警沈家门第四小学2019学校安全工作一号预警沈家门第四小学2019学校安全工作一号预警',
            date: '2019-11-11'
          },
          {
            title: '沈家门第四小学2019学校安全工作一号预警沈家门第四小学2019学校安全工作一号预警沈家门第四小学20',
            date: '2019-11-11'
          },
          {
            title: '沈家门第四小学2019学校安全工作一号预警沈家门第四小学2019学校安全工作一号预警沈家门第四',
            date: '2019-11-11'
          },
          {
            title: '沈家门第四小学2019学校安全工作一号预警沈家门第四小学2019学校安全工作一号预警沈家门第四小学2019学校安全工作一号预警',
            date: '2019-11-11'
          },
        ],
        circleUrl: require('../../../assets/images/user.png')
      }
    },
    methods: {
      write() { // 写新闻
        this.$router.push({
          name: 'writenews'
        })
      },
    }
  }
</script>
<style media="screen" lang="scss">
.item{
  .is-fixed{
    right: -3px!important;
    top: 14px!important;
  }
}
</style>
<style media="screen" lang="scss" scoped>
  .curreBody{
    padding:20px;
  }
  .justdemo{
    height: 100px;background: #5098DF;
  }
  .body-top{
    margin-top: 48px;
    margin-left:0px;
    padding-left: 0.2rem;
    .schoolName{
      color: #034692;
      height: 1rem;
      font-size: 50px;
      display: flex;
      align-items: center;
    }
    .write{
      height: 1rem;
      text-align: right;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    .myClass{
      font-size: 24px;
      color: #333;
    }
    .hideWrap{
      padding-right:20px;
      height: 84px;
      text-align: right;
      display: flex;
      align-items: center;
      justify-content:flex-end;
      .btnicon{
        width: 45px;
        height: 45px;
      }
      .el-button.is-circle{
        padding: 0px;
      }
    }
  }
  .colblock{
    margin-top: 20px;
    margin-left: 0!important;
    margin-right: 0!important;
    .panel-left{
      .banner-card{
        margin-bottom: 12px;
        .cardTitle{
          font-size: 24px;
          font-weight: 600;
          img{
            display: inline-block;
            width: 38px;
            height: 38px;
            vertical-align: middle;
            margin-right: 17px;
          }
        }
        .more{
          float: right;
          display: block;
          // width: 16px;
          height: 16px;
          cursor: pointer;
          margin-top: 0.1rem;
          .text{
            position: relative;
            top: 2px;
            margin-right: 10px;
            color: #888;
          }
          img{
            display: inline;
            width: 18px;
            vertical-align: middle;
          }
        }
        .newList{
          list-style: none;
          li{
            padding: 16px 20px 16px 18px;
            margin-left: 20px;
            font-size: 18px;
            background: url('../../../assets/images/classes/dotg.png') no-repeat 0px center;
            background-size: 8px 8px;
            cursor: pointer;
            position: relative;
            border-bottom: 1px dashed #DEDEDE;
            .text{
              display: block;
              margin-right: 80px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .date{
              position: absolute;
              width: 80px;
              top: 17px;
              right: 0;
              color: #888888;
            }
          }
          li:hover{
            color: #034692;
            background-image: url('../../../assets/images/classes/dot.png');
          }
        }
        .areablock{
          .areaName{
            font-size: 22px;
            font-weight: 500;
            margin-bottom: 10px;
          }
          .area{
            list-style: none;
            margin-bottom: 30px;
            li{
              float: left;
              width: 33.333%;
              padding: 8px 0px;
              font-size: 18px;
            }
            li:hover{
              color: #034692;
              cursor: pointer;
            }
          }
          .area::after{
            content: "";
            display: block;
            height: 0;
            clear: both;
          }
        }
        .notice{
          font-size: 18px;
          li{
            padding: 8px 0px;
            line-height: 30px;
            border-bottom: 1px dashed #DEDEDE;
            .noticeTitle{
              overflow:hidden;
              text-overflow:ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
            }
            .noticeDate{
              text-align: right;
              color: #888888;
            }
          }
        }
        .circle{
          text-align: center;
          padding: 24px 0px 14px;
        }
        .myName{
          text-align: center;
          img{
            display: inline-block;
            width: 22px;
            height: 22px;
            vertical-align: middle;
            cursor: pointer;
            position: relative;
            top: -3px;
            left: 12px;
          }
        }
        .dynamic{
          height: 108px;
          margin-top: 30px;
          border-radius:12px;
          overflow: hidden;
          background-color: #D3E1F1;
          .dynamic-g,.dynamic-c{
            float: left;
            width: 50%;
            height: 100%;
            text-align: center;
            color: #034692;
            font-size: 26px;
            .count{
              width: 100%;
              height: 48px;
              line-height: 48px;
              margin-top: 26px;
            }
            .title{
              font-size: 16px;
              color: #333;
            }
          }
          .dynamic-g:first-child{
            .count{
              box-shadow: 1px 0px #819EBF;
            }
          }

        }
        .dynamic::after{
          content: '';
          display: block;
          height: 0;
          clear: both;
        }
        .vistorCount{
          font-size: 20px;
          color: #1E1E1E;
          font-weight: 600;
        }
        .lately{
          font-size: 16px;
          color: #034692;
          padding: 15px 0px 20px;
        }
        .vistor-avatar{
          margin-top: 10px;
          margin-right: 10px;
        }
        .examineTips{
          font-size: 14px;
          color: red;
          line-height: 30px;
        }
        .question{
          margin-top: 10px;
          .title{
            font-size: 18px;
            color: #1E1E1E;
            padding: 6px 0px;
            font-weight: 600;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .time{
            height: 44px;
            font-size: 14px;
            color: #999999;
            display: flex;
            align-items: center;
          }
          .exit{
            text-align: right;
            .el-button{
              font-size: 12px;
            }
          }
        }
      }
    }
  }

</style>
