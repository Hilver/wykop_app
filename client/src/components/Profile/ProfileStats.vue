<template lang="pug">
	v-layout(row wrap)
		tabs-component(
			:items='this.tabItems'
		)
</template>
<script>
import TabsComponent from '../modules/tabsComponent'
import WykopStats from './WykopStats'
import currentDateDiff from '../utils/Time/currentDateDiff'

export default {
	name: 'ProfileStats',
	components: {
		TabsComponent,
		WykopStats
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
		followers: {
			type: Number,
			default: null
		},
		following: {
			type: Number,
			default: null
		},
		linksAdded: {
			type: Number,
			default: null
		},
		mirkoComments: {
			type: Number,
			default: null
		},
		mirkoEntries: {
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
		},
		tabItems() {
			return [
				{
					name: 'Wykop',
					props: {
						statSettings: this.wykopStats
					},
					activeComponent: WykopStats
				},
				{
					name: 'Mirko & Social',
					props: {
						statSettings: this.mirkoSocialStats
					},
					activeComponent: WykopStats
				}
			]
		},
		wykopStats() {
			return [
				{
					name: 'Dodane',
					circle: true,
					total: this.linksAdded
				},
				{
					name: 'Opublikowane',
					circle: true,
					total: this.linksPublished
				},
				{
					name: 'Komentarze',
					circle: true,
					total: this.comments
				},
				{
					name: 'Wykopane',
					circle: true,
					total: this.diggs
				},
				{
					name: 'Skuteczność',
					circle: true,
					decimal: 2,
					total: this.effectiveness
				},
				{
					name: 'Śr. dzienny wykop',
					circle: true,
					decimal: 2,
					total: this.digsPerDay
				}
			]
		},
		mirkoSocialStats() {
			return [
				{
					name: 'Dodane',
					circle: true,
					total: this.mirkoEntries
				},
				{
					name: 'Komentarze',
					circle: true,
					total: this.mirkoComments
				},
				{
					name: 'Obserwujący',
					circle: true,
					total: this.followers
				},
				{
					name: 'Obserwowani',
					circle: true,
					total: this.following
				}
			]
		}
	}
}
</script>
