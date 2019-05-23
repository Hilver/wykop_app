<template lang="pug">
	v-data-table(
		:items="dataItems"
		:pagination.sync="pagination"
		hide-headers
		:loading='statusLoading'
	)
		template(v-slot:items="props")
			td
				a(:href='props.item.source' target='_blank')
					| {{ props.item.title }}
			td.text-xs-right
				chips-date(:dateString='props.item.date')
</template>
<script>
import ChipsDate from '../utils/Time/ChipsDate'

export default {
	name: 'DataTable',
	components: {
		ChipsDate
	},
	props: {
		dataItems: {
			type: Array,
			default: () => []
		},
		loading: { 
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			pagination: {},
			statusLoading: this.loading
		}
	},
	watch: {
		loading: {
			handler: function(val) {
				this.statusLoading = val
			}
		}
	}
}
</script>
<style lang="sass" scoped>
a 
	color: #000
	text-decoration: none
</style>
