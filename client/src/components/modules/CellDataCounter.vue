<template lang="pug">
	.cell-data-counter
		.title.my-2 {{ name }}
		basic-counter(
			v-if='!circle'
			:total='total'
			:decimal='decimal'
		)
		circle-counter(
			v-else
			:decimal='decimal'
			:size='size'
			:total='total'
			:width='width'
		)
</template>
<script>
import CircleCounter from './circleCounter'
import BasicCounter from './basicCounter'
export default {
	name: 'CellDataCounter',
	components: {
		BasicCounter,
		CircleCounter
	},
	props: {
		circle: {
			type: Boolean,
			default: false
		},
		decimal: {
			type: Number,
			required: false
		},
		name: {
			type: String,
			default: ''
		},
		size: {
			type: Number,
			required: false
		},
		total: {
			type: Number,
			default: null
		},
		width: {
			type: Number,
			required: false
		}
	}
}
</script>
<style lang="sass" scoped>
.cell-data-counter
	display: flex
	flex-direction: column
	justify-align: center
	align-items: center
</style>
