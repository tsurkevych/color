<template>
	<div class='container'>
		<header class='header'>
			<add-colors />
		</header>
		<transition
			tag='div'
			name='slide-fade'
		>

			<transition-group
				v-if='colorsRes.length > 0'
				class='main'
				tag='div'
				name='slide-fade'>
				<template v-for='item of colorsRes'>
					<color-row :key='item.id' :item='item'/>
				</template>
			</transition-group>
		</transition>
	</div>
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
			iColor:  360,
			iColor2: 200,
			iColor3: 0,
			iColor4: 50,
			deg:     0
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
			if (this.iColor < 0) {
				this.iColor = 360;
			}
			if (this.iColor2 > 360) {
				this.iColor2 = 0;
			}
			if (this.iColor3 > 360) {
				this.iColor3 = 0;
			}
			if (this.iColor4 < 0) {
				this.iColor4 = 360;
			}
			if (this.deg > 360) {
				this.deg = 0;
			}
			document.body.style.backgroundImage = `linear-gradient(${this.deg++}deg, ${this.colorBuild(this.iColor--)} 0%, ${this.colorBuild(this.iColor2++)} 33%, ${this.colorBuild(this.iColor3++)} 66%, ${this.colorBuild(this.iColor4--)} 100%)`;
		}
	},

	mounted() {
		setInterval(() => { this.bgColor(); }, 20);
	},
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
	transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
	opacity: 0;
}

.slide-fade-enter-active {
	transition: all .3s ease;
}

.slide-fade-leave-active {
	transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to {
	transform: translateX(-100px);
	opacity: 0;
}

body {
	width: 100%;
	min-height: 100vh;
	padding: 50px;
	background: {
		color: rgb(255, 166, 0);
		size: cover
	}
}

* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	font-family: sans-serif
}

button, input {
	&:focus {
		outline: 0 none;
	}
}

.container {
	width: 100%;
	max-width: 800px;
	margin: {
		right: auto;
		left: auto;
	}
	border: {
		radius: 10px;
	}
	background: {
		color: rgb(211, 215, 255);
	}
	box-shadow: 2px 10px 20px #474747;
	overflow: hidden;

	&--modal {
		padding: 40px;
	}
}

.header {
	padding: 20px 40px;
	background: {
		color: rgb(211, 215, 255);
	}
}

.main {
	padding: 40px;
	background: {
		color: rgb(255, 255, 255);
	}
}
</style>
