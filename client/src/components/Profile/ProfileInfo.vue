<template lang="pug">
	div
		Avatar(:photoUrl='avatarImg' :size='size' :sex='sex')
		.title.my-1 {{ login }}
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


