<template lang="pug">
	v-layout(row wrap)
		v-flex(xs8 align-self-center)
			span.title Hall Of Fame
		v-flex(xs4 text-xs-right)
			v-select(
				v-model='value'
				label='Wybierz ranking'
				solo
				:items='items'
				)
		v-flex(xs12)
			data-row(
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

export default {
	name: 'RankingTable',
	components: {
		DataRow
	},
	data() {
		return {
			classColors: ['yellow--text text--darken-2', 'blue-grey--text text--lighten-3', 'brown--text text--lighten-1'],
			items: ['Efektywność', 'Dodane znaleziska', 'Opublikowane znaleziska', 'Dodane komentarze', 'Wykopane', 'Dzienny wykop', 'Obserwatorzy'],
			rankingData: '',
			value: '',
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
