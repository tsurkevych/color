<template>
	<div class='fildset'>
		<input class='input'
			:class='errorValid'
			v-model='color'
			type='text'
		>
		<button
			@click='remove'
			class='remove'
		>
			&times;
		</button>
	</div>
</template>

<script>

export default {
	name:  'fildset',

	props: ['number', 'ind'],

	data() {
		return {
			color:       '',
			regexp:      /^(([#]{0,1}))((([0-9A-Fa-f]{3,4}$))|(([0-9A-Fa-f]{6}$))|(([0-9A-Fa-f]{8}$)))/,
			colorRes:    null,
			colorRevert: null,
			errorValid:  false
		};
	},

	watch: {
		color() {
			this.valid(this.color);
			this.$emit('set-color', this.colorRes, this.colorRevert, this.ind);
		}
	},

	methods: {
		remove() {
			this.$emit('remove-item', this.number);
		},

		hexRevColor(color, i) {
			return parseInt(255 - +parseInt(color.slice(i, i + 2), 16).toString(10), 10).toString(16);
		},

		revFullColor(color) {
			let revFullColor = '';
			for (let i = 0; i < this.colorRes.length; i += 2) {
				if (i !== 6) {
					revFullColor += this.hexRevColor(this.colorRes, i).length === 2 ? this.hexRevColor(this.colorRes, i) : `0${this.hexRevColor(this.colorRes, i)}`;
				}
				else revFullColor += this.colorRes.slice(i, i + 2);
			}
			return revFullColor;
		},

		revert(color) {
			if (color) {
				this.colorRevert = this.revFullColor(color);
			}
			else {
				this.colorRevert = null;
			}
		},

		fullColor(color) {
			let fullColor = '';
			for (let i = 0; i < color.length; i++) fullColor += `${color[i]}${color[i]}`;
			return fullColor;
		},

		valid(color) {
			if (this.regexp.test(color)) {
				let str = color.replace(/^#{1}/, '');
				if (str.length === 3 || str.length === 4) {
					this.colorRes = this.fullColor(str);
				}
				else {
					this.colorRes = str;
				}
				this.errorValid = false;
				this.revert(this.colorRes);
			}
			else {
				this.errorValid = 'is-error';
				this.colorRes = null;
				this.revert(this.colorRes);
			};
		}
	},
};
</script>

<style scoped lang="scss">
.input {
	width: 100%;
	height: 32px;
	margin: {
		bottom: 10px;
	}
	padding: {
		left: 20px;
		right: 36px;
	}
	border: {
		width: 0;
		radius: 4px;
	}
	box-shadow: 2px 2px 4px #6d6d6d;

	&.is-error {
		background: {
			color: rgb(255, 180, 180);
		}
	}
}

.fildset {
	position: relative;
	width: 100%;
	transition: all 300ms;

	+ .fildset {
		margin: {
			left: 10px;
		}
	}

	.remove {
		top: 0;
		right: 0;
		width: 32px;
		height: 32px;
		border: {
			radius: 0 2px 2px 0;
		}
	}
}
</style>
