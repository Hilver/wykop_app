<template lang="pug">
	v-layout(wrap align-center)
		v-flex(xs12).my-2
			v-divider
		v-flex(xs9)
			span.mr-4.title {{ index }}
			Avatar(
				:size='40'
				:tile='false'
				:photoUrl='photoUrl'
			)
			span.ml-2.subheading {{ nickname }}
		v-flex(xs3)
			span {{ value }}
</template>
<script>
import Avatar from '../Profile/Avatar'
export default {
	name: 'DataRow',
	components: {
		Avatar
	},
	props: {
		index: [Number],
		nickname: [String],
		photoUrl: [String],
		value: [Number]
	},
	
}
</script>
