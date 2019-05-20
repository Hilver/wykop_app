<template lang="pug">
	v-layout(row wrap)
		v-flex(xs12 md6)
			profile-info(
				:avatarImg='profileData.avatar'
				:description='profileData.about'
				:login='profileData.login'
				:ranking='profileData.rank'
				:register_date='profileData.signup_at'
				:sex='profileData.sex'
				:size='150'
			)
		v-flex(xs12 md6)
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
</template>

<script>
import ProfileInfo from './ProfileInfo'
import ProfileStats from './ProfileStats'

export default {
	components: {
		ProfileInfo,
		ProfileStats
	},
	props: {
		profileData: {
			type: Object,
			required: true
		}
	}
}
</script>