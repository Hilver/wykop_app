<template lang="pug">
    v-layout(row wrap)
        v-flex(xs8)
            v-text-field(v-model="inputValue" label="Enter a nickname")
        v-flex(xs4)
            v-btn(color="green" dark @click="clickHandler") Get info
                v-icon(right v-text="'$vuetify.icons.user'")

</template>
<script>
export default {
	props: {
		value: {
			type: String,
			default: ''
		}
	},
	data () {
		return {
			inputValue: this.value
		}
	},
	methods: {
		clickHandler (event) {
			this.$emit('click', event)
		}
	},
	watch: {
		inputValue: {
			handler (value) {
				this.$emit('input', value)
			}
		}
	}
}
</script>

<style scoped>
</style>