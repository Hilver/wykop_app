<template lang="pug">
	v-progress-circular(
		:rotate="-90"
		:size="this.size"
		:width="this.width"
		:value="value"
		color="green"
	)
		|	{{value}}
</template>
<script>
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export default {
	props: {
		width: {
			type: Number,
			default: 15
		},
		total: {
			type: Number,
			default: 0
		},
		size: {
			type: Number,
			default: 100
		}
	},
	data() {
		return {
			value: 0
		}
	},
	methods: {
		async counter(n, ms, x = 0) {
			let init = {}
			n > 1000 ? init = {n: n-500, x: x+500} :
				n > 100 ? init = {n: n-5, x: x+5} :
					init = {n: n-1, x: x+1}
			this.value = x
			if (!n) return
			await sleep(ms)
			this.counter(init.n, ms, init.x)
		}
	},
	watch: {
		total: {
			handler: function(val) {
				this.counter(val, 1)
			},
			immediate: true
		}
	}
}
</script>

<style lang="sass" scoped>

</style>
