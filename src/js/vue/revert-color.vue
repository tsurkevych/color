<template>
	<main
		:style='{
			"background-image": gradient,
		}'
	>
		<div class='container'>
			<header class='header'>
				<add-colors />
			</header>
			<transition name='bounce'>
				<div class='main' v-if='colorsRes.length > 0'>
					<transition-group name='bounce' >
						<template v-for='item of colorsRes'>
							<color-row :key='item.id' :item='item'/>
						</template>
					</transition-group>
				</div>
			</transition>
		</div>
	</main>
</template>

<script>
import addColors from './components/add-colors.vue';
import colorRow from './components/color-row.vue';
import { mapGetters } from 'vuex';

export default {
	name:       'revert-color',

	components: {
		addColors,
		colorRow
	},

	data() {
		return {
			iColor:   360,
			iColor2:  200,
			iColor3:  0,
			iColor4:  50,
			deg:      0,
			gradient: null,
		};
	},

	computed: {
		...mapGetters({
			colorsRes: 'colorsRes'
		})
	},

	methods: {
		colorBuild(a) {
			return 'hsl(' + a + ', 100%, 50%)';
		},

		bgColor() {
			if (this.iColor < 0) this.iColor = 360;
			if (this.iColor2 > 360) this.iColor2 = 0;
			if (this.iColor3 > 360) this.iColor3 = 0;
			if (this.iColor4 < 0) this.iColor4 = 360;
			if (this.deg > 360) this.deg = 0;

			this.gradient = `
				linear-gradient(
					${this.deg++}deg,
					${this.colorBuild(this.iColor--)} 0%,
					${this.colorBuild(this.iColor2++)} 33%,
					${this.colorBuild(this.iColor3++)} 66%,
					${this.colorBuild(this.iColor4--)} 100%
				)
			`;
		}
	},

	mounted() {
		setInterval(() => { this.bgColor(); }, 20);
	},
};
</script>

<style lang="scss" scoped>

.header {
	position: relative;
	padding: 20px 40px;
	border: {
		radius: 10px;
	}
	background: {
		color: rgb(211, 215, 255);
	}
	box-shadow: 2px 10px 20px #474747;
	z-index: 2;
	margin: {
		bottom: 50px;
	}
}

.main {
	position: relative;
	padding: 40px;
	border: {
		radius: 10px;
	}
	background: {
		position: center;
	}
	z-index: 1;
}
</style>
