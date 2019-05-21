<template lang="pug">
	v-avatar(
		:size="`${size}px`"
		:tile="tile"
		v-if="photoUrl"
		class='relative-box'
	)
		img(
			:src="photoUrl"
			:class="[sex === 'male' ? 'blue-border' : 'pink-border']"
		)
		.badge(
			v-if='ranking'
			:class="[ranking > 1000 ? 'orangeBadge' : 'crimsonBadge']"
			) {{ `#${ranking}` }}
</template>
<script>
export default {
	name: 'Avatar',
	props: {
		photoUrl: {
			type: String,
			default: null
		},
		ranking: {
			type: Number,
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

.greenBadge
	background-color: #389B38

.orangeBadge
	background-color: #FF5917

.crimsonBadge
	background-color: #BB0000

.relative-box
	position: relative

.badge
	position: absolute
	bottom: 10px
	left: 0px
	width: 50px
	height: 20px
	color: #ffffff
	font-weight: bold
	font-size: 15px

</style>
