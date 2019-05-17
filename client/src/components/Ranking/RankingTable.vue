<template lang="pug">
	v-layout(row wrap)
		v-flex(xs8 align-self-center)
			span.title Ranking
		v-flex(xs4 text-xs-right)
			v-select(
				v-model='value'
				solo
				:items='items'
				)
		v-flex(xs12)
			data-row

</template>
<script>
import DataRow from './DataRow'
export default {
	components: {
		DataRow
	},
	data() {
		return {
			items: ['foo', 'bar', 'yolo'],
			value: ''
		}
	}
}
</script>
<style lang="sass" scoped>

</style>
