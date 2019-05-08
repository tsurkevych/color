import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		colorsRes: []
	},

	getters: {
		colorsRes: state => state.colorsRes
	},

	mutations: {
		setColors(state, payload) {
			state.colorsRes.push({
				id:     payload.index,
				colors: payload.arr
			});
		},

		deleteItems(state, payload) {
			state.colorsRes.forEach((el, i) => {
				if (payload === el.id) {
					state.colorsRes.splice(i, 1);
				}
			});
		}
	}
});
