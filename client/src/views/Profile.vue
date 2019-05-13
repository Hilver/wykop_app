<template lang="pug">
	v-layout(row wrap)
		v-flex(xs12)
			v-layout(row wrap)
				v-flex(xs6)
					input-profile(
						:errorMsg='errorMsg'
						v-model="inputProfile"
						@click="getProfileInfo"
					)
			v-layout(row wrap)
				v-flex(xs6)
					FadeTransition
						profile-card(
							v-if="Object.keys(profileData).length"
							:profileData='profileData'
						)
</template>
<script>
import axios from 'axios'

import InputProfile from '../components/Profile/InputProfile.vue'
import ProfileCard from '../components/Profile/ProfileCard.vue'
import FadeTransition from '../components/utils/Transitions/FadeTransition'

export default {
	components: {
		InputProfile,
		ProfileCard,
		FadeTransition
	},
	data() {
		return {
			inputProfile: '',
			profileData: {},
			errorMsg: null,
			loading: false
		}
	},
	methods: {
		async getProfileInfo () {
			try {
				this.loading = true
				await axios.get('http://localhost:8082/profile/' + this.inputProfile)
					.then(res => {
						console.log(res)
						this.profileData = res.data
					})
				this.errorMsg = null
				this.loading = false
			} catch (err) {
				if(err.response.status === 404) {
					this.errorMsg = 'User can not be found'
					this.profileData = {}
					this.loading = false
				} else {
					this.errorMsg = err.response.data.error
					this.profileData = {}
					this.loading = false
				}
			}
		}
	}
}

</script>
<style scoped>

</style>