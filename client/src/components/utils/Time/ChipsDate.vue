<template lang="pug">
	v-chip(
		:color="color" 
		:text-color="textColor"
		small
	)
		| {{ date }} ago

</template>
<script>
import juration from 'juration'

export default {
	name: 'ChipsDate',
	props: {
		color: {
			type: String,
			default: 'primary'
		},
		textColor: {
			type: String,
			default: 'white'
		},
		dateString: {
			type: String
		}
	},
	data() {
		return {
			date: ''
		}
	},
	methods: {
		parseDifferenceDateToSeconds(dateStr) {
			return (new Date().getTime() - Date.parse(dateStr)) / 1000
		},
		parseDifference(seconds) {
			return juration.stringify(seconds, { format: 'long', units: 1 })
		}
	},
	watch: {
		dateString: {
			handler: function(val) {
				this.date = this.parseDifference(this.parseDifferenceDateToSeconds(val))
			},
			immediate: true
		}
	}
}
</script>
