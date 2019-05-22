<template lang="pug">
	v-layout(row wrap)
		v-flex(xs6 v-for='statSetting in statSettings' :key='statSetting.name')
			cell-data-counter(
				:name='statSetting.name'
				:circle='statSetting.circle'
				:total='statSetting.total'
				:decimal='statSetting.decimal'
			)
</template>
<script>
import CellDataCounter from './CellDataCounter'

export default {
	name: 'StatsBox',
	components: {
		CellDataCounter
	},
	props: {
		statSettings: {
			type: Array,
			default: () => []
		}
	}
}
</script>
