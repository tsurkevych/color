<template>
	<div>
		<transition name='fade' mode='out-in'>
			<div v-if='colorArr.length > 0' class='input-group'>
				<div class='container container--modal'>
					<div class='button-row'>
						<template v-for='(item, index) of colorArr'>
							<fildset
								v-if='item'
								:key='item.id'
								:ind='index'
								:number='item.id'
								@set-color='setColor'
								@remove-item='removeItem'
							/>
						</template>
					</div>
					<div class='button-row'>
						<button class='button' @click='addItem' v-if='colorArr.length < 4'>
							add
						</button>
						<button class='button button--green' v-if='colorArr.length > 0' @click='converting'>
							revert
						</button>
					</div>
				</div>
			</div>
		</transition>
		<div class='button-row'>
			<h1 class='title'>
				негатив кольорів
			</h1>
			<button class='button' @click='addItem'>
				add
			</button>
		</div>
	</div>
</template>

<script>
import fildset from './fildset.vue';
import { mapGetters } from 'vuex';

export default {
	name:       'colors',

	components: {
		fildset
	},

	data() {
		return {
			colorArr:  [],
			count:     0,
			countItem: 0,
		};
	},

	computed: {
		...mapGetters({
			colorsRes: 'colorsRes'
		})
	},

	mounted() {
		this.countItem = this.colorsRes.length;
	},

	methods: {
		setColor(color, revert, index) {
			this.colorArr[index].color = color;
			this.colorArr[index].revert = revert;
		},

		removeItem(payload) {
			this.colorArr.forEach((el, i) => {
				if (payload === el.id) {
					this.colorArr.splice(i, 1);
				}
			});
		},

		addItem() {
			this.colorArr.push({
				id:     this.count++,
				color:  null,
				revert: null
			});
		},

		converting() {
			this.$store.commit('setColors', {
				arr:   this.colorArr,
				index: this.countItem++
			});

			this.colorArr = [];
		}
	},
};
</script>

<style scoped lang="scss">

.fade-enter-active,
.fade-leave-active {
	transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
	opacity: 0;
}

.colors-row {
	display: flex;
	height: 42px;
}

.button-row {
	display: flex;
	justify-content: space-between;
	align-items: center;

	+ .button-row {
		margin: {
			top: 20px;
		}
	}
}

.input-group {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: {
		color: rgba(0, 0, 0, 0.8);
	}
	z-index: 100;
}

.title {
	font: {
		size: 18px;
	}
	text-transform: uppercase;
}

.button {
	height: 32px;
	padding: 8px 16px;
	transition: background 300ms, box-shadow 300ms;
	border: {
		width: 0;
		radius: 4px;
	}
	background: {
		color: rgb(47, 49, 151);
	}
	color: #ffffff;
	font: {
		weight: 700;
	}
	cursor: pointer;
	text-transform: uppercase;

	&:hover {
		box-shadow: 2px 2px 4px #6d6d6d;
		transition: background 300ms, box-shadow 300ms;
		background: {
			color: rgb(77, 78, 151);
		}
	}

	&--green {
		margin: {
			left: auto;
		}
		background: {
			color: rgb(47, 151, 102);
		}

		&:hover {
			background: {
				color: rgb(85, 143, 109);
			}
		}
	}
}
</style>
