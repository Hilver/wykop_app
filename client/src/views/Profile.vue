<template lang="pug">
	v-layout(row wrap)
		v-flex(xs12)
			v-layout(row wrap justify-center)
				v-flex(xs12 md8)
					input-profile(
						:errorMsg='errorMsg'
						v-model="inputProfile"
						@click="getProfileInfo"
					)
			v-layout(row wrap justify-center align-center)
				v-flex(xs12 md8)
					CircularProgress(v-if='loading')
					FadeTransition(v-else)
						profile-card(
							class="elevation-1"
							v-if="Object.keys(profileData).length"
							:profileData='profileData'
						)
</template>
<script>
import axios from 'axios'

import InputProfile from '../components/Profile/InputProfile.vue'
import ProfileCard from '../components/Profile/ProfileCard.vue'
import FadeTransition from '../components/utils/Transitions/FadeTransition'
import CircularProgress from '../components/Progress/ProgressCircle.vue'

export default {
	components: {
		CircularProgress,
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