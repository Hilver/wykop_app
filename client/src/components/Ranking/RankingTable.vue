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
			data-row(
				v-for='(data, i) in rankingData'
				:key='i'
				:index='(i + 1)'
				:nickname='data.user_nickname'
				:value='data[value]'
				:photoUrl='data.photoUrl'
				)

</template>
<script>
import axios from 'axios'
import DataRow from './DataRow'

export default {
	components: {
		DataRow
	},
	data() {
		return {
			items: ['effectiveness', 'links_added_count', 'links_published_count', 'comments_added', 'diggs', 'avg_daily_digg', 'followers'],
			value: '',
			rankingData: ''
		}
	},
	methods: {
		getRankingData(query) {
			axios.get(`http://localhost:8082/users/ranking/${query}`)
				.then(res => {
					console.log(res)
					this.rankingData = res.data.users
				})
				.catch(err => {
					console.log(err)
				})
		}
	},
	watch: {
		value: function(val) {
			this.getRankingData(val)
		}
	}
}
</script>
<style lang="sass" scoped>

</style>
