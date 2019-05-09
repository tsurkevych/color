<template>
	<main
		:style='{
			"background": st
		}'
	>
		<div class='container'>
			<header class='header'>
				<add-colors />
			</header>
			<div class='main'>
				<template v-for='item of colorsRes'>
					<color-row :key='item.id' :item='item'/>
				</template>
			</div>
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
			iColor:  360,
			iColor2: 200,
			iColor3: 0,
			iColor4: 50,
			deg:     0,
			st:      null
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

			this.st = `linear-gradient(${this.deg++}deg, ${this.colorBuild(this.iColor--)} 0%, ${this.colorBuild(this.iColor2++)} 33%, ${this.colorBuild(this.iColor3++)} 66%, ${this.colorBuild(this.iColor4--)} 100%)`;
		},
	},

	mounted() {
		setInterval(() => { this.bgColor(); }, 20);
	},
};
</script>

<style lang="scss">
body {
	width: 100%;
	min-height: 100vh;
}

main {
	width: 100%;
	min-height: 100vh;
	padding: 50px;
	height: 100%;
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
