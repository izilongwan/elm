import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import FastClick from 'fastclick';
import MintUI from 'mint-ui';

import 'mint-ui/lib/style.css';
import 'styles/resets.css';
import 'styles/common.styl';
import 'js/common';

FastClick.attach(document.body);

Vue.config.productionTip = false;
Vue.use(MintUI);
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
