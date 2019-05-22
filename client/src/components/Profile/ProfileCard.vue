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
			).pa-2
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
			).pa-2
		v-flex(xs12)
			StalkoTableWrapper(:login='profileData.login').pa-2
</template>

<script>
import ProfileInfo from './ProfileInfo'
import ProfileStats from './ProfileStats'
import StalkoTableWrapper from '../Profile/StalkoTableWrapper'

export default {
	components: {
		ProfileInfo,
		ProfileStats,
		StalkoTableWrapper
	},
	props: {
		profileData: {
			type: Object,
			required: true
		}
	}
}
</script>