<template lang="pug">
	v-layout(row wrap align-center).mt-1
		v-flex(xs7)
			span.title Hall Of Fame
		v-flex(xs5 text-xs-right)
			v-select(
				v-model='value'
				label='Wybierz ranking'
				solo
				:items='items'
				)
		v-flex(xs12)
			CircularProgress(v-if='loading')
			data-row(
				v-else
				v-for='(data, i) in rankingData'
				:key='i'
				:classes='classColors[i]'
				:index='(i + 1)'
				:nickname='data.user_nickname'
				:value='data[itemsCompilator(value)]'
				:photoUrl='data.photoUrl'
				)

</template>
<script>
import axios from 'axios'
import DataRow from './DataRow'
import CircularProgress from '../Progress/ProgressCircle.vue'

export default {
	name: 'RankingTable',
	components: {
		CircularProgress,
		DataRow
	},
	data() {
		return {
			classColors: ['yellow--text text--darken-2', 'blue-grey--text text--lighten-3', 'brown--text text--lighten-1'],
			items: ['Efektywność', 'Dodane znaleziska', 'Opublikowane znaleziska', 'Dodane komentarze', 'Wykopane', 'Dzienny wykop', 'Obserwatorzy'],
			loading: false,
			rankingData: '',
			value: '',
		}
	},
	methods: {
		getRankingData(query) {
			this.loading = true
			axios.get(`http://localhost:8082/users/ranking/${query}`)
				.then(res => {
					console.log(res)
					this.rankingData = res.data.users
					this.loading = false
				})
				.catch(err => {
					this.loading = false
					console.log(err)
				})
		},
		itemsCompilator(item) {
			const itemsAPI = ['effectiveness', 'links_added_count', 'links_published_count', 'comments_added', 'diggs', 'avg_daily_digg', 'followers']
			return itemsAPI[this.items.indexOf(item)]
		}
	},
	watch: {
		value: function(val) {
			this.getRankingData(this.itemsCompilator(val))
		}
	}
}
</script>
<style lang="sass" scoped>

</style>
