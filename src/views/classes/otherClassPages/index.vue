<!-- 别人的班级主页 -->
<template>
    <div class="container">
            <div class="logo">
                    <img src="./../../../assets/images/class_else.png"  alt=""><span>2019 級二班</span>
                </div>
                <div class="mainContent">
                    <div class="slidbar">
                       <LeftPhotoLIst></LeftPhotoLIst>
                    </div>
                    <div class="content">
                        1212
                    </div>
                </div>
    </div>
   
</template>
<script>
    import homePage from '@/views/public/homePage';
    import LeftPhotoLIst from '@/components/LeftPhotoLIst';

    export default {
        name: 'otherClassPageIndex',
        data() {
            return {

            }
        },
        methods: {

        },
        components: {
            homePage,
            LeftPhotoLIst
        }
    }

</script>
<style>
     @media screen and (max-width: 600px) {
        .slidbar {
           display: none;
        
        }
    }
</style>
<style >
    .slidbar{
        width: 300px;
        margin-right: 10px;
        background: #fff;
    }
    .content{
        flex: 1;
        background: #fff;
    }
    .mainContent{
        background: rgba(255,255,255,0.34);
        padding: 10px 20px 20px 20px;
        display: flex;
        
    }
    .logo img{
        width: 74px;
        height: 74px;
        vertical-align: middle;
    }
    .logo{
        padding-top: 38px;
        padding-bottom: 62px;
    }
    .container{
        max-width: 1240px;
        margin: 0 auto;
    }
    .logo span{
        font-size: 40px;
        vertical-align: middle;
        margin-left: 30px;
        color: #034692;
    }
</style>