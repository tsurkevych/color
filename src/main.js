import Vue from 'vue';
import App from './revert-color.vue';
import store from './store';

Vue.config.productionTip = false;

new Vue({
	store,
	render: h => h(App)
}).$mount('#revert-color');
