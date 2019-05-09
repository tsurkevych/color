<template>
	<div class='color-list' @dblclick='remove'>
		<template v-for='colors of item.colors'>
			<color-item :key='colors.id' :colors='colors'/>
		</template>
		<button class='remove' @click='remove'>
			&times;
		</button>
	</div>
</template>

<script>
import colorItem from './color-item.vue';

export default {
	name:       'color-row',

	props: ['item'],

	components: {
		colorItem
	},

	methods: {
		remove() {
			this.$store.commit('deleteItems', this.item.id);
		}
	},
};
</script>

<style scoped lang="scss">
.color-list {
	position: relative;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	padding: 10px;
	//transition: background 300ms;
	border: {
		radius: 6px;
	}
	background: {
		color: rgb(234, 236, 255);
	}
	cursor: pointer;

	&:hover {
		//transition: background 300ms;
		background: {
			color:rgb(197, 203, 255);
		}
	}

	+ .color-list {
		margin: {
			top: 15px;
		}
	}

	.remove {
		position: absolute;
		top: 6px;
		right: 6px;
		width: 22px;
		height: 22px;
		transition: background 300ms;
		border: {
			width: 0;
			radius: 4px;
		}
		background: {
			color: rgb(255, 54, 54);
		}
		color: #ffffff;
		font: {
			size: 18px;
		}
		cursor: pointer;
		text-transform: uppercase;

		&:hover {
			transition: background 300ms;
			background: {
				color: rgb(255, 105, 105);
			}
		}
	}
}
</style>
