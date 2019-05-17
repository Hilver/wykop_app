<template lang="pug">
	v-container(fluid)
		v-layout(row wrap)
			v-flex(xs6)
				profile
			v-flex(xs6)
				ranking-table
</template>

<script>
import Profile from './Profile.vue'
import RankingTable from '../components/Ranking/RankingTable'

export default {
	components: {
		Profile,
		RankingTable
	},
	data: () => {
		return {

		}
	}
}
</script>
