<template lang="pug">
	v-progress-circular(
		:rotate="-90"
		:size="size"
		:width="width"
		:value="circleValue"
		:color="this.badgeColor"
	)
		|	{{value}}
</template>
<script>
import {counterMixin} from '../../mixins/counterMixin'

export default {
	mixins: [counterMixin],
	props: {
		size: {
			type: Number,
			default: 100
		},
		width: {
			type: Number,
			default: 12
		}
	},
	data() {
		return {
			// circleValue: 0
		}
	},
	computed: {
		circleValue() {
			const x = this.decimal ? 0 : (this.value.toString().split('').length - 2)
			return this.value / (10 ** x)
		}
	}
}
</script>

<style lang="sass" scoped>

</style>
