import Vue from 'vue';
import revertColor from '../js/vue/revert-color.vue';
import store from '../js/vue/store';

Vue.config.productionTip = false;

new Vue({
	store,
	render: h => h(revertColor)
}).$mount('#revert-color');
