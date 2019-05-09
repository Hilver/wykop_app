<template lang="pug">
	v-layout(row wrap)
		v-flex(xs12)
			v-layout(row wrap)
				v-flex(xs6)
					input-profile(v-model="inputProfile" @click="getProfileInfo")
			v-layout(row wrap)
				v-flex(xs6)
					profile-card( 
						:profileData='profile'
					)
</template>
<script>
import axios from 'axios'

import InputProfile from '../components/modules/InputProfile.vue'
import ProfileCard from '../components/modules/ProfileCard.vue'

export default {
	components: {
		InputProfile,
		ProfileCard
	},
	data() {
		return {
			inputProfile: '',
			profile: {},
			errorMsg: null,
			loading: false
		}
	},
	methods: {
		async getProfileInfo () {			
			try {
				this.loading = true
				await axios.get('http://localhost:8081/profile/' + this.inputProfile)
					.then(res => {
						console.log(res)
						this.profile = res.data
					})
				this.loading = false
			} catch (err) {
				this.errorMsg = err
			}
		}
	}
}

</script>
<style scoped>

</style>