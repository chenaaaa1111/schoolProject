<template>
  <el-row class="curreBody">
    <el-col>
      <el-row  type="flex" justify="center" class="body-top">
        <el-col :xl="18" :lg="18" :md="20" :sm="22" :xs="24">
          <el-row >
            <el-col :span="16" class="schoolName">华悦蜀山区第一中学</el-col>
            <el-col :span="8" class="write">
              <el-button type="default" @click="write">写新闻</el-button>
            </el-col>
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
              <!-- 学校新闻动态 -->
              <el-card class="banner-card">
                <div slot="header" class="clearfix">
                  <span class="cardTitle"><img src="../../../assets/images/classes/news.png"/>学校新闻动态</span>
                  <span class="more">
                    <img src="../../../assets/images/classes/more.png"/>
                  </span>
                </div>
                <ul class="newList">
                  <li v-for="(item,index) in newsList"><span class="text">{{item.title}}</span><span class="date" :key="index">{{item.date}}</span></li>
                </ul>
              </el-card>
              <!-- 班级空间 -->
              <el-card class="banner-card">
                <div slot="header" class="clearfix">
                  <span class="cardTitle"><img src="../../../assets/images/classes/space.png"/>班级空间</span>
                  <span class="more">
                    <img src="../../../assets/images/classes/more.png"/>
                  </span>
                </div>
                <div class="areablock" v-for="(item,index) in areaList" :key="index">
                  <div class="areaName">{{item.areaName}}</div>
                  <ul class="area">
                    <li v-for="(res,num) in item.classes" :key="num">{{res}}</li>
                  </ul>
                </div>
              </el-card>
              <!-- 通知公告 -->
              <el-card class="banner-card">
                <div slot="header" class="clearfix">
                  <span class="cardTitle"><img src="../../../assets/images/classes/notice.png"/>通知公告</span>
                  <span class="more">
                    <span class="text">全部</span><img src="../../../assets/images/classes/more.png"/>
                  </span>
                </div>
                <ul class="notice">
                  <li v-for="(item,index) in noticeList" :key="index">
                    <div class="noticeTitle">{{item.title}}</div>
                    <div class="noticeDate">{{item.date}}</div>
                  </li>
                </ul>
              </el-card>
            </el-col>
            <el-col :xl="18" :lg="18" :md="16" :sm="16" :xs="24"><el-card>
                <mainNavBar>

                </mainNavBar>
            </el-card></el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>
<script>
  import mainNavBar from '@/components/mainNavBar';
  export default{
    data() {
      return {
        newsList: [
          {
            title: '激动人心的运动会',
            date: '04-02'
          },
          {
            title: '激动人心的运动会',
            date: '04-06'
          },
          {
            title: '激动人心的运动会激动人心的运动会',
            date: '04-09'
          },
          {
            title: '激动人心的运动会',
            date: '05-02'
          },
          {
            title: '激动人心的运动会激动人心的运动会',
            date: '05-08'
          },
        ],
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
        ]
      }
    },
    methods: {
      write() {
        this.$router.push({
          name: 'writenews'
        })
      }
    },
    components:{
      mainNavBar
    }
  }
</script>
<style media="screen" lang="scss" scoped>
.curreBody{
  padding:20px;
}
  .justdemo{
    height: 100px;background: #5098DF;
  }
  .body-top{
    margin-top: 48px;
    margin-left:.2rem;
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
    .panel-left{
      .banner-card{
        margin-bottom: 12px;
        .cardTitle{
          font-size: 24px;
          font-weight: 500;
          img{
            display: inline-block;
            width: 38px;
            height: 38px;
            vertical-align: middle;
            margin-right: 10px;
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
      }
    }
  }

</style>
