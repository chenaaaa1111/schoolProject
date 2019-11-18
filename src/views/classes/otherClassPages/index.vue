<!-- 别人的班级主页 -->
<template>
    <div class="container">
        <el-row justify="center" type="flex">
            <el-col :xl="18" :lg="18" :md="20" :sm="22" :xs="24">
                <div class="logo" style="position: relative;">
                    <img src="./../../../assets/images/class_else.png" alt=""><span>2019 級二班</span>
                    <van-icon name="apps-o" class="phoneYidong" @click="showSlide" />                  
                </div>
                <ul class="avatarImg" ref="phoneImg">
                         <li>
                             <span>学生主页</span>
                         </li>
                        <li >
                            <img src="./../../../assets/images/user.png" alt="用户" class="pho_avatot"><span>姓名</span>
                        </li>
                        <li>
                            <img src="./../../../assets/images/user.png" alt="用户" class="pho_avatot"><span>姓名</span>
                        </li>
                        <li>
                            <img src="./../../../assets/images/user.png" alt="用户" class="pho_avatot"><span>姓名</span>
                        </li>
                        <li>
                            <img src="./../../../assets/images/user.png" alt="用户" class="pho_avatot"><span>姓名</span>
                        </li>
                    </ul>
            </el-col>

        </el-row>
        <el-row justify="center" type="flex">
            <el-col :xl="18" :lg="18" :md="20" :sm="24" :xs="24" style="position: relative;">
                <el-row>
                    <!-- <div class="mainContent"> -->
                    <el-col :xl="6" :lg="6" :md="8" :sm="8">
                        <div class="slidbar" ref="slidbar">
                            <LeftPhotoLIst></LeftPhotoLIst>
                        </div>
                        <div class="slidbar2" ref="slidbar2">
                            <LeftPhotoLIst></LeftPhotoLIst>
                        </div>
                    </el-col>
                    <el-col :xl="18" :lg="18" :md="16" :sm="16">
                        <div class="content">
                            <mainNavBar></mainNavBar>
                        </div>
                    </el-col>


                    <!-- </div> -->

                </el-row>

            </el-col>

        </el-row>

    </div>

</template>
<script>
    import homePage from '@/views/public/homePage';
    import LeftPhotoLIst from '@/components/LeftPhotoLIst';
    import mainNavBar from '@/components/mainNavBar';
    import 'element-ui/lib/theme-chalk/display.css';
    import request from '@/api/request.js';
    export default {
        name: 'otherClassPageIndex',
        data() {
            return {

            }
        },
        methods: {
            showSlide: function () {
                var dis = this.$refs.phoneImg.style.display;
                if (dis == 'none') {
                    this.$refs.phoneImg.style.display = "block";
                } else {
                    this.$refs.phoneImg.style.display = "none";
                }
            }
        },
        mounted(){
            var data={
                column:0,
                class:1
            }
            request.post('/roomapi/Room_Class/classPage',data)
        },
        components: {
            homePage,
            LeftPhotoLIst,
            mainNavBar
        }
    }

</script>
<style>
    @media screen and (max-width: 600px) {
        .slidbar {
            display: none !important;

        }

        .phoneYidong {
            visibility: visible !important;
        }

        .mainContent {
            padding-left: 10px !important;
        }
    }
</style>
<style>
    .pho_avatot{
        width: 30px;
        height: 30px;
        border-radius: 50%;

    }
    .avatarImg{
        display: none;
    width: 100%;
    overflow-y: scroll;
    background: #fff;
    height: 5.333333rem;
    top: 130px;
    z-index: 99;
    position: absolute;
    padding-bottom: 0.266667rem;

    }
    .avatarImg li{
      height: 80px; 
      line-height: 80px;
      padding-left: 40px;
      border-bottom: 1px solid #999999;
    }
    .avatarImg li img,.avatarImg li span{
     vertical-align: middle;
    }
    .avatarImg li span{
       margin-left: 40px;
    }
    .logo {
        padding-left: 40px;
    }

    .phoneYidong {
        position: absolute;
        font-size: 30px;
        top: 100px;
        left: 1.8rem;
        color: green;
        visibility: hidden;
    }

    .slidbar2 {
        display: none;
    }

    .slidbar {
        /* width: 280px; */
        margin-right: 10px;
        background: #fff;
        /* position: absolute; */
        left: 12px;
        z-index: 99;
    }

    .content {
        flex: 1;
        background: #fff;
    }

    .mainContent {
        background: rgba(255, 255, 255, 0.34);
        padding: 10px 20px 20px 20px;
        /* padding-left: 300px; */
        position: relative;
        overflow: hidden;
    }

    .logo img {
        width: 74px;
        height: 74px;
        vertical-align: middle;
    }

    .logo {
        padding-top: 38px;
        padding-bottom: 62px;
    }

    .container {
        /* max-width: 1240px; */
        margin: 0 auto;
    }

    .logo span {
        font-size: 40px;
        vertical-align: middle;
        margin-left: 30px;
        color: #034692;
    }
</style>