<template>
  <div class="currency">
    <WriteBar @publish="overWrite" :loadInfo="writeBarInfo"></WriteBar>
    <div class="currency-top" v-if="false">
      <el-row type="flex" justify="center">
        <el-col  :xl="18" :lg="18" :md="20" :sm="22" :xs="24" class="navcol">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1" class="brand" disabled><img src="../../assets/images/classes/classesicon.png"/>班级空间</el-menu-item>
            <el-menu-item index="" >写新闻</el-menu-item>

            <li class="el-menu-item menu-search ">
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
            <li class="el-menu-item menu-search ">
              <el-button type="default" plan size="small">发布</el-button>
            </li>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div class="currency-body">
      <el-row type="flex" justify="center">
        <el-col :xl="18" :lg="18" :md="20" :sm="22" :xs="24">
          <el-card class="edit-card">
            <el-page-header @back="goBack" :title="'返回'+prevPageName"></el-page-header>
            <el-row>
              <el-col :span="24" class="formrow">
                <div class="upload-box">
                  <el-upload
                    action="#"
                    list-type="picture-card"
                    :auto-upload="false">
                      <i slot="default" class="el-icon-plus">添加图片</i>
                      <div slot="file" slot-scope="{file}">
                        <img
                          class="el-upload-list__item-thumbnail"
                          :src="file.url" alt=""
                        >
                        <span class="el-upload-list__item-actions">
                          <span
                            class="el-upload-list__item-preview"
                            @click="handlePictureCardPreview(file)"
                          >
                            <i class="el-icon-zoom-in"></i>
                          </span>
                          <span
                            v-if="!disabled"
                            class="el-upload-list__item-delete"
                            @click="handleDownload(file)"
                          >
                            <i class="el-icon-download"></i>
                          </span>
                          <span
                            v-if="!disabled"
                            class="el-upload-list__item-delete"
                            @click="handleRemove(file)"
                          >
                            <i class="el-icon-delete"></i>
                          </span>
                        </span>
                      </div>
                  </el-upload>
                </div>
                <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
              </el-col>
              <el-col :span="24">
                <el-input type="text" placeholder="请输入标题"></el-input>
              </el-col>
              <el-col :span="24" class="formrow">
                <quill-editor
                  v-model="form.goods_desc"
                  ref="myQuillEditor"
                  :options="editorOption"
                  @blur="onEditorBlur($event)"
                  @focus="onEditorFocus($event)"
                  @change="onEditorChange($event)">
               </quill-editor>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <el-dialog
      title="发布"
      :visible.sync="dialog"
      width="30%"
      class="mydialog"
      :before-close="handleClose">
      <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="发布主题" prop="theme">
            <el-select v-model="ruleForm.theme" filterable placeholder="选择主页" style="width: 100%;">
              <el-option
                v-for="(item,index) in options"
                :key="index"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="选择栏目" prop="column">
            <el-select v-model="ruleForm.column" filterable placeholder="选择栏目" style="width: 100%;">
              <el-option label="影评" value="1"></el-option>
              <el-option label="专业" value="2"></el-option>
              <el-option label="考试" value="3"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div class="tips">
          发布到校园主页需要审核后才能发布成功，发布到班级主页不需要审核
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="dialog = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>



<script>
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import WriteBar from '../public/writeBar.vue'
  export default{
    components: {
      quillEditor,
      WriteBar
    },
    data() {
      return {
        writeBarInfo: {
          barTitle: '写新闻',
          showWrite: true
        },
        activeIndex: 'campusHomepage',
        fit: 'cover',
        url: require('../../assets/images/user.png'),
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false,
        form:{
          goods_desc: ''
        },
        editorOption: {},
        prevPageName: '',
        dialog: false,
        ruleForm:{
          theme: '',
          column: ''
        },
        rules:{
          theme: [
            { required: true, message: '请选择主页', trigger: 'change' }
          ],
          column: [
            { required: true, message: '请选择栏目', trigger: 'change' }
          ],
        },
        options: [
          {
            value: '0',
            label: '校园主页'
          },
          {
            value: '1',
            label: '班级主页'
          },
          {
            value: '2',
            label: '我的主页'
          }
        ],
      }
    },
    computed: {
      editor() {
        return this.$refs.myQuillEditor.quill;
      },
    },
    mounted() {
      this.prevPageName = this.$route.query.pageName
      console.log(this.$route.query, 'write news page query value')
    },
    methods: {
      handleSelect(val) {
        this.activeIndex = val
      },
      goBack() { // 从哪儿来，回哪儿去
        this.$store.commit('setSpaceInitTab', this.$route.query.fromwhere)
        this.$router.push({
          path: '/campusHomepage'
        })
      },
      handleRemove(file) {
        console.log(file);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleDownload(file) {
        console.log(file);
      },
      onEditorReady(editor) { // 准备编辑器
      },
      onEditorBlur(){
        console.log(this.form)
      }, // 失去焦点事件
      onEditorFocus(){}, // 获得焦点事件
      onEditorChange(){}, // 内容改变事件
      overWrite(data) { // 发表文章
        this.dialog = true
      },
      handleClose() {
        this.dialog = false
      },
    }
  }
</script>
<style lang="scss">
  .currency{
    min-height: 100%;
    background: url('../../assets/images/classes/classesbg.png') no-repeat;
    background-size: 100% 100%;
    .navcol{
      position: relative;
      background: #fff;
      .userpic{
        display: flex;
        align-items: center;
        position: absolute;
        height: 100%;
        top: 0;
        right: .6rem;
      }
    }
    .currency-top{
      z-index: 999999;
      padding-left:.2rem;
      background: #fff;
      height: auto!important;
      .el-col{
        height: auto!important;
      }
    }
    .el-menu-demo{
      border-bottom: 0;
      .el-menu-item{
        font-size: 22px;
        font-weight: 600;
        padding: 0px;
        margin-right: 30px;
      }
      .menu-search{
        float: right;
        .el-button{
          padding: 7px 30px;
        }
      }
      .brand{
        color: #D59F36;
        font-size: 24px;
        opacity: 1;
        img{
          display: inline-block;
          vertical-align: middle;
          width: 47px;
          height: 36px;
          margin-right: 12px;
        }
      }
    }

    .currency-top{
      // width: 100%;
      height: 100px;
      position: sticky;
      top: 0;
      left: 0;
      box-shadow: 0px 1px #ccc;
      .el-col{
        height: 100px;
      }
    }
    .currency-body{
      .edit-card{
        margin-top: 30px;
        .formrow{
          margin: 30px 0px;
        }
        .upload-box{
          margin-top: 32px;
          padding: 20px;
          background: #F6F6F6;
          .el-icon-plus{
            font-size: 14px;
          }
        }
        .ql-container{
          height: 350px;
          overflow: auto;
        }
      }
    }
    .mydialog{
      .el-dialog{
        min-width: 9.733333rem;
      }
      .tips{
        font-size: 18px;
        color: #999;
        padding-left: 0.58rem;
      }
    }

  }
</style>
