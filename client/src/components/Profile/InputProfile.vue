<template lang="pug">
	v-layout(row wrap align-center)
		v-flex(xs9)
			v-text-field(
				:error-messages='errorMessage'
				v-model="inputValue"
				label="Enter a nickname"
				@focus='this.focusHandler'
				@keyup.enter='clickHandler'
			)
		v-flex(xs3)
			v-btn(
				color="#4383AF"
				dark
				@click="clickHandler"
			)
				v-icon(left) fas fa-user
				| Get info
</template>

<script>
export default {
	props: {
		errorMsg: {
			type: String
		},
		value: {
			type: String,
			default: ''
		}
	},
	data () {
		return {
			inputValue: this.value,
			errorMessage: this.errorMsg
		}
	},
	methods: {
		clickHandler (event) {
			this.$emit('click', event)
		},
		focusHandler() {
			this.inputValue = ''
			this.errorMessage = this.errorMsg 
				? this.errorMsg 
				: ''
		}
	},
	watch: {
		inputValue: {
			handler (value) {
				this.$emit('input', value)
			}
		},
		errorMsg: {
			handler (value) {
				this.errorMessage = value
			}
		}
	}
}
</script>

<style scoped>
</style>