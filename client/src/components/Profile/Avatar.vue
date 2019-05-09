<template lang="pug">
	v-avatar( 
		:size="`${size}px`"
		:tile="tile"
		v-if="photoUrl"
	)
		img(
			:src="photoUrl"
			:class="[sex === 'male' ? 'blue-border' : 'pink-border']"
		)
</template>
<script>
export default {
	name: 'Avatar',
	props: {
		photoUrl: {
			type: String,
			default: null
		},
		size: {
			type: Number,
			default: 100
		},
		sex: {
			type: String,
			default: 'male'
		},
		tile: {
			type: Boolean,
			default: true
		}
	}
}
</script>

<style lang="sass" scoped>

.blue-border
	border: 2px solid #46ABF2

.pink-border
	border: 2px solid #F246D0

</style>
