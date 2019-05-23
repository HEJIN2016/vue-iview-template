// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import cookie from 'js-cookie'
import moment from 'moment'
import axios from './js/axios'

import './style/main.less'

Vue.prototype.$Cookie = cookie;
Vue.prototype.$Moment = moment;
Vue.prototype.$Axios = axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
