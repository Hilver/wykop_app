<template lang="pug">
	div
		Avatar(:photoUrl='avatarImg' :ranking='ranking' :size='size' :sex='sex')
		.title.my-1(:class="[(ranking <= 1000 && ranking) ? 'crimsonColorRank' : 'orangeColorRank']") {{ login }}
		v-chip(color='#4383AF' text-color='white')
			v-avatar
				v-icon(small) fas fa-birthday-cake
			|	{{ register_date }}
		v-divider.my-2(v-if='description' class='divider')
		.subheading.my-1 {{description }}
</template>
<script>
import Avatar from './Avatar'
export default {
	name: 'ProfileInfo',
	components: {
		Avatar
	},
	props: {
		avatarImg: {
			type: String,
			default: null,
		},
		description: {
			type: String,
			default: null
		},
		login: {
			type: String,
			default: null
		},
		ranking: [Number],
		register_date: [String],
		sex: {
			type: String,
			default: 'male'
		},
		size: {
			type: Number,
			default: 150
		}
	}
}
</script>
<style lang="sass" scoped>
.divider
	width: 80%
</style>
