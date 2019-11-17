<!-- 别人的班级主页 -->
<template>
    <div class="container">
        <div class="logo" style="position: relative;">
            <img src="./../../../assets/images/class_else.png" alt=""><span>2019 級二班</span>
            <van-icon name="apps-o" class="phoneYidong"  @click="showSlide" />
        </div>
        <div class="mainContent">
            <div class="slidbar" ref="slidbar">
                <LeftPhotoLIst></LeftPhotoLIst>
            </div>

            <div class="content">
                <mainNavBar></mainNavBar>
            </div>
        </div>
    </div>

</template>
<script>
    import homePage from '@/views/public/homePage';
    import LeftPhotoLIst from '@/components/LeftPhotoLIst';
    import mainNavBar from '@/components/mainNavBar';
    export default {
        name: 'otherClassPageIndex',
        data() {
            return {

            }
        },
        methods: {
            showSlide:function(){
                var dis=this.$refs.slidbar.style.display;
                if(dis=='none'){
                    this.$refs.slidbar.style.display="block";
                }else{
                    this.$refs.slidbar.style.display="none";
                }
            }
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
            display: none ;
         
        }
        .phoneYidong {
            visibility: visible !important;
        }
        .mainContent {
            padding-left: 10px !important;
        }
    }
    @media screen and (min-width: 601px) {
        .slidbar {
            display: block !important ;
         
        }
    }
</style>
<style>
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

    .slidbar {
        width: 280px;
        margin-right: 10px;
        background: #fff;
        position: absolute;
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
        padding-left: 300px;
        position: relative;

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
        max-width: 1240px;
        margin: 0 auto;
    }

    .logo span {
        font-size: 40px;
        vertical-align: middle;
        margin-left: 30px;
        color: #034692;
    }
</style>