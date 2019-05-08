<template lang="pug">
	div
		v-layout(row wrap)
			v-flex(xs6)
				Avatar(:photoUrl='avatarImg' :size='150' :sex='sex')
			v-flex(xs6)
				p Login: {{ login }}
				p Opis: {{ description }}
				p Ranking: {{ ranking }}
				p Dodane: {{ linksAdded }}
				p Opublikowane: {{ linksPublished }}
				p Skuteczność: {{ effectiveness }}
				p Wykopane: {{ diggs }}
				p Data rejestracji: {{ register_date }}
				p Różnica dni: {{ dateDiff }}
		v-layout(row wrap)
			circle-counter(:total='diggs')
</template>

<script>
import Avatar from '../Profile/Avatar.vue'
import currentDateDiff from '../utils/Time/currentDateDiff'
import circleCounter from '../modules/circleCounter'

export default {
	components: {
		Avatar,
		circleCounter
	},
	props: {
		login: {
			type: String,
			default: ''
		},
		avatarImg: {
			type: String,
			default: ''
		},
		ranking: {
			type: Number,
			default: null
		},
		description: {
			type: String,
			default: ''
		},
		sex: {
			type: String
		},
		linksAdded: {
			type: Number,
			default: null
		},
		linksPublished: {
			type: Number,
			default: null
		},
		diggs: {
			type: Number,
			default: null
		},
		register_date: {
			type: String,
			default: ''                
		}
	},
	computed: {
		effectiveness() {
			return ((this.linksPublished / this.linksAdded) * 100).toFixed(2)
		},
		dateDiff() {
			const strDate = this.register_date.split(' ')[0]
			return currentDateDiff(strDate)
		}
	}
}
</script>