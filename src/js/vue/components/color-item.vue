<template>
	<div class='color'>
		<template v-if='colors.color'>
			<div
				class='color__orig'
				:style='{
					"background": "#" + colors.color
				}'
			>
				{{ '#' + colors.color}}
			</div>
			<div
				class='color__revert'
				:style='{
					"background": "#" + colors.revert
				}'
			>
				{{ '#' + colors.revert}}
			</div>
		</template>
		<template v-else>
			<div class='color__error'>
				error
			</div>
		</template>
	</div>
</template>

<script>
export default {
	name:       'color-item',

	props: ['colors']
};
</script>

<style scoped lang="scss">
.color {
	position: relative;
	width: 80px;
	height: 40px;
	margin: 5px;
	border: {
		width: 1px;
		color: rgb(70, 70, 70);
		style: solid;
		radius: 6px;
	}
	overflow: hidden;

	> div {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		color: #ffffff;
		font: {
			size: 11px
		}
		text-shadow: 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black;
	}

	&__orig {
		top: 0;
		right: 0;
		bottom: 50%;
		left: 0;
	}

	&__revert {
		top: 50%;
		right: 0;
		bottom: 0;
		left: 0;
	}

	&__error {
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: {
			color: red;
		}
		color: white;
	}
}
</style>
