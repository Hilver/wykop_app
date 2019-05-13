<template lang="pug">
	stats-box(
		:statSettings='statSettings'
	)
</template>
<script>
import StatsBox from '../modules/statsBox'

export default {
	name: 'WykopStats',
	components: {
		StatsBox
	},
	props: {
		statSettings: {
			type: Array,
			default: () => []
		}
	}
}
</script>
