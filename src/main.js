import Vue from 'vue';
import revertColor from './revert-color.vue';
import store from './store';

Vue.config.productionTip = false;

new Vue({
	store,
	render: h => h(revertColor)
}).$mount('#revert-color');
