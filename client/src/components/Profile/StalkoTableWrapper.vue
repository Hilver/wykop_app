<template lang="pug">
	v-layout(row wrap align-center)
		v-flex(xs7)
			span.title StalkoMarko
		v-flex(xs5 text-xs-right)
			v-select(
				v-model='value'
				label='Wybierz stalk content'
				solo
				:items='items'
				)
		v-flex(xs12)
			CircularProgress(v-if='loading')
			data-table(
				v-else
				:dataItems='stalkoData'
			)
</template>
<script>
import axios from 'axios'
import DataTable from '../Table/DataTable'
import CircularProgress from '../Progress/ProgressCircle.vue'

const stalkoSource = [
	'added',
	'commented',
	'digged',
	'published',
	'entries',
	'entriescomments',
	'related'
]

export default {
	name: 'StalkoTableWrapper',
	components: {
		CircularProgress,
		DataTable
	},
	props: {
		login: {
			type: String
		},
		errorMsg: ''
	},
	data() {
		return {
			items: [
				'Dodane znaleziska',
				'Komentarze',
				'Ostatnio wykopane',
				'Opublikowane znaleziska',
				'Wpisy na mirko',
				'Komentarze na mirko',
				'Powiązane znaleziska'
				],
			loading: false,
			stalkoData: [],
			value: ''
		}
	},
	methods: {
		getStalkoData(source, login) {
			this.loading = true
			axios.get(`http://localhost:8082/profile/${source}/${login}`)
				.then(res => {
					this.stalkoData = res.data.map(el =>(
						{
							title: el.title || el.body,
							date: el.date,
							source: el.source_url || `https://www.wykop.pl/wpis/${el.id}`
						})
					)
					this.loading = false
				})
				.catch(err => {
					this.errorMsg = err
					this.loading = false
				})
		}
	},
	watch: {
		value: {
			handler: function(val) {
				this.getStalkoData(stalkoSource[this.items.indexOf(val)], this.login)
			}
		},
		login: {
			handler: function(val) {
				this.getStalkoData(stalkoSource[this.items.indexOf(this.value)], val)
			}
		},
		initLoading: {
			handler: function(val) {
				this.loading = val
			}
		}
	}
}
</script>
<style lang="sass" scoped>
alignCenter
	display: flex!important
	align-content: center!important
</style>
