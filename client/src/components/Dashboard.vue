<template lang="pug">
	v-container(fluid)
		v-layout(row wrap)
			v-flex(xs6)
				InputProfile(v-model="inputProfile")
			v-flex(xs6)


</template>

<script>
import InputProfile from './modules/InputProfile.vue'

export default {
	components: {
		InputProfile
	},
    data: () => {
		return {
			inputProfile: ''
		}
    }
}
</script>

<style scoped lang="sass">

</style>
