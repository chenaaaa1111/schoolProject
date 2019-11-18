// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from "vuex"
import store from "./store/store.js"
import App from './App'
import ElementUI from 'element-ui'
import 'lib-flexible'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css';
import router from './router'
import { Tab, Tabs,List,Cell,Icon,Image,Row, Col   } from 'vant';


Vue.config.productionTip = false;

Vue.use(ElementUI)
Vue.use(Tab);Vue.use(Tabs);Vue.use(Image);Vue.use(List);Vue.use(Cell);Vue.use(Icon);Vue.use(Row);Vue.use(Col);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
