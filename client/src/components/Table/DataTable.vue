<template lang="pug">
	v-data-table(
		:items="dataItems"
		class="elevation-1"
		:pagination.sync="pagination"
		hide-headers
	)
		template(v-slot:items="props")
			td {{ props.item.title }}
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
		}
	},
	data() {
		return {
			pagination: {}
		}
	}
}
</script>
