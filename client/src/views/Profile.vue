<template lang="pug">
	v-layout(row wrap)
		v-flex xs12
			v-layout(row wrap)
				v-flex(xs6)
					input-profile(v-model="inputProfile" @click="getProfileInfo")
			v-layout(row wrap)
				v-flex(xs6)
					profile-card( 
						:login="profile.login" 
						:avatarImg="profile.avatar" 
						:ranking="profile.ranking" 
						:description="profile.description" 
						:sex="profile.sex" 
						:linksAdded="profile.linksAdded"
						:linksPublished="profile.linksPublished"
						:diggs="profile.diggs"
						:register_date="profile.register_date"
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
			profile: {
				login: '',
				avatar: '',
				description: '',
				ranking: null,
				linksAdded: null,
				linksPublished: null,
				sex: null,
				register_date: ''
			},
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
					this.profile.login = res.data.login
					this.profile.avatar = res.data.avatar
					this.profile.description = res.data.about
					this.profile.ranking = res.data.rank
					this.profile.linksAdded = res.data.links_added_count,
					this.profile.linksPublished = res.data.links_published_count
					this.profile.sex = res.data.sex
					this.profile.diggs = res.data.diggs
					this.profile.register_date = res.data.signup_at
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