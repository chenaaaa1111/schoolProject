<template>
  <el-row type="flex" justify="center" class="space-wrap">
    <el-col :xl="18" :lg="18" :md="20" :sm="22" :xs="24" class="entry-content">
      <el-row :gutter="10" class="panel-row">
        <el-col :xl="6" :lg="6" :md="8" :sm="8" class="panel-left hidden-xs-only">
          <UserInfo></UserInfo>
          <Visitor></Visitor>
          <Examine></Examine>
          <NotPass></NotPass>
          <Message></Message>
        </el-col>
        <el-col :xl="18" :lg="18" :md="16" :sm="16" :xs="24">
          <el-card>
            <Exhibition></Exhibition>
            <el-col :span="24" class="card-block">
              <el-row :gutter="10">
                <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24" class="actblock">
                  <General></General>
                </el-col>
                <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24" class="actblock">
                  <General></General>
                </el-col>
                <el-col :span="24" class="actblock">
                  <General></General>
                </el-col>
                <el-col :span="24" class="actblock">
                  <General></General>
                </el-col>
              </el-row>
            </el-col>
          </el-card>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>
<script>
  import UserInfo from '../../public/components/userInfo.vue'
  import Visitor from '../../public/components/Visitor.vue'
  import Examine from '../../public/components/examine.vue'
  import Message from '../../public/components/message.vue'
  import NotPass from '../../public/components/notpass.vue'
  import Exhibition from '../../public/components/exhibition.vue'
  import General from '../../public/components/general.vue'

  export default{
    components: {
      UserInfo,
      Visitor,
      Examine,
      Message,
      NotPass,
      Exhibition,
      General
    },
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style media="screen" lang="scss" scoped>
  .space-wrap{
    margin-top: 30px;
  }
  .card-block{
    padding-left: 0!important;
    padding-right: 0!important;
    margin-top: 14px;
  }
</style>
