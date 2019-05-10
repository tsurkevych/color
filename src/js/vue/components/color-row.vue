<template>
	<div
		class='color-list'
	>
		<template v-for='colors of item.colors'>
			<color-item :key='colors.id' :colors='colors'/>
		</template>
		<button
			@click='remove'
			class='remove'
		>
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
	border: {
		radius: 6px;
	}
	background: {
		color: rgb(234, 236, 255);
	}
	box-shadow: 2px 10px 10px #474747;

	&:hover {
		.remove {
			opacity: 1;
			transition: background 300ms, opacity 300ms;
		}
	}

	+ .color-list {
		margin: {
			top: 15px;
		}
	}

	.remove {
		top: 6px;
		right: 6px;
		width: 22px;
		height: 22px;
		opacity: 0;
	}
}
</style>
