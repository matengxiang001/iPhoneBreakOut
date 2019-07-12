// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Group, CellBox, XHeader, XButton, Toast, ToastPlugin  } from 'vux'
import { Container, Aside, Main } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './common/css/iconfont.css'
Vue.config.productionTip = false

Vue.component('group', Group);
Vue.component('cell-box', CellBox);
Vue.component('x-header', XHeader);
Vue.component('x-button', XButton);
Vue.component('toast', Toast);
Vue.use(ToastPlugin)
Vue.use(Container);
Vue.use(Aside);
Vue.use(Main);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
