import Vue from 'vue';
import App from '@/components/app/app.vue';
// import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
