<template lang="pug">
	v-layout(row wrap)
		v-flex(xs12)
			.title Statistics
		v-flex(xs12 md6)
			cell-data-counter(
				name='Dodane'
				:circle='true'
				:total='linksAdded'
			)
		v-flex(xs12 md6)
			cell-data-counter(
				name='Opublikowane'
				:circle='true'
				:total='linksPublished'
			)
		v-flex(xs12 md6)
			cell-data-counter(
				name='Komentarze'
				:circle='true'
				:total='comments'
				)
		v-flex(xs12 md6)
			cell-data-counter(
				name='Wykopane'
				:circle='true'
				:total='diggs'
				)
			
		v-flex(xs12 md6).my-2.text-xs-center
			cell-data-counter(
				name='Skuteczność'
				:circle='true'
				:decimal='2'
				:total='effectiveness'
			)
		v-flex(xs12 md6).my-2.text-xs-center
			cell-data-counter(
				name='Śr. dzienny wykop'
				:circle='true'
				:decimal='2'
				:total='digsPerDay'
			)
</template>
<script>
import CellDataCounter from '../modules/CellDataCounter'
import currentDateDiff from '../utils/Time/currentDateDiff'

export default {
	name: 'ProfileStats',
	components: {
		CellDataCounter
	},
	props: {
		comments: {
			type: Number,
			default: null
		},
		diggs: {
			type: Number,
			default: null
		},
		linksAdded: {
			type: Number,
			default: null
		},
		linksPublished: {
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
			return (this.linksPublished && this.linksPublished) ?
				((this.linksPublished / this.linksAdded) * 100).toFixed(2) :
				null
		},
		digsPerDay() {
			const strDate = this.register_date.split(' ')[0]
			return this.diggs ?
				(this.diggs/currentDateDiff(strDate)).toFixed(2) :
				0
		}
	}
}
</script>
