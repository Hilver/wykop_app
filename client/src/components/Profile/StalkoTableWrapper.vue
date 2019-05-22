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
			data-table(:dataItems='stalkoData')
</template>
<script>
import axios from 'axios'
import DataTable from '../Table/DataTable'

const stalkoSource = ['diggs']

export default {
	name: 'StalkoTableWrapper',
	components: {
		DataTable
	},
	props: {
		login: {
			type: String
		}
	},
	data() {
		return {
			items: ['Ostatnio wykopane'],
			stalkoData: [],
			value: ''
		}
	},
	methods: {
		getStalkoData(source, login) {
			axios.get(`http://localhost:8082/profile/${source}/${login}`)
				.then(res => this.stalkoData = res.data.map(el =>(
					{
						title: el.title,
						date: el.date,
						source: el.source_url
					})
				))
				.catch(err => console.log(err))
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
		}
	}
}
</script>
<style lang="sass" scoped>
alignCenter
	display: flex!important
	align-content: center!important
</style>
