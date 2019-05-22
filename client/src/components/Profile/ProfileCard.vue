<template lang="pug">
	v-layout(row wrap)
		v-flex(md12 lg4)
			profile-info(
				:avatarImg='profileData.avatar'
				:description='profileData.about'
				:login='profileData.login'
				:ranking='profileData.rank'
				:register_date='profileData.signup_at'
				:sex='profileData.sex'
				:size='150'
			)
		v-flex(md12 lg8)
			profile-stats(
				:comments='profileData.comments_count'
				:diggs='profileData.diggs'
				:followers='profileData.followers'
				:following='profileData.following'
				:linksAdded='profileData.links_added_count'
				:linksPublished='profileData.links_published_count'
				:login='profileData.login'
				:mirkoComments='profileData.entries_comments'
				:mirkoEntries='profileData.entries'
				:photoUrl='profileData.avatar'
				:register_date='profileData.signup_at'
			)
		v-flex(xs12)
			data-table(:dataItems='lastDiggs')
</template>

<script>
import axios from 'axios'
import ProfileInfo from './ProfileInfo'
import ProfileStats from './ProfileStats'
import DataTable from '../Table/DataTable'

export default {
	components: {
		DataTable,
		ProfileInfo,
		ProfileStats
	},
	props: {
		profileData: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			lastDiggs: []
		}
	},
	methods: {
		getLastDiggs(login) {
			axios.get(`http://localhost:8082/profile/diggs/${login}`)
				.then(res => this.lastDiggs = res.data.map(el =>(
					{
						title: el.title,
						date: el.date,
						source: el.source_url
					})
				))
				.catch(err => console.log(err))
		}
	},
	watch: {
		profileData: {
			handler: function(val) {
				this.getLastDiggs(val.login)
			},
			immediate: true,
			deep: true
		}
	},
	mounted() {
		this.getLastDiggs(this.profileData.login)
	}
}
</script>