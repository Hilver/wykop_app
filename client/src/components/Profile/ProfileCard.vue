<template lang="pug">
	v-layout(row wrap)
		v-flex(xs12 md6)
			profile-info(
				:avatarImg='profileData.avatar'
				:description='profileData.about'
				:login='profileData.login'
				:sex='profileData.sex'
				:size='150'
			)
		v-flex(xs12 md6)
			profile-stats(
				:comments='profileData.comments_count'
				:diggs='profileData.diggs'
				:linksAdded='profileData.links_added_count'
				:linksPublished='profileData.links_published_count'
				:ranking='profileData.rank'
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