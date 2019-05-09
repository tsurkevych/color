import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		colorsRes: [
			{
				id:     0,
				colors: [
					{ id: 2, color: '534543', revert: 'acbabc' },
					{ id: 3, color: '909088', revert: '6f6f77' },
					{ id: 4, color: '122ff7', revert: 'edd008' },
					{ id: 5, color: '55dddd', revert: 'aa2222' }
				]
			},
			{
				id:     1,
				colors: [
					{ id: 6, color: '123009', revert: 'edcff6' },
					{ id: 7, color: '442ffd', revert: 'bbd002' },
					{ id: 8, color: '00115f', revert: 'ffeea0' },
					{ id: 9, color: 'ff4412', revert: '00bbed' }
				]
			}
		]
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
