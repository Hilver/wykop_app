<template lang="pug">
	v-layout(row wrap)
		tabs-component(
			:items='this.tabItems'
		)
</template>
<script>
import axios from 'axios'
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
		login: {
			type: String,
			default: ''
		},
		register_date: {
			type: String,
			default: ''
		}
	},
	methods: {
		insertRankingData() {
			axios.post(`http://localhost:8082/users/create/${this.login}`, this.profileData
			).then(res => {
				if (res.data.message.sqlMessage !== 'undefined' && res.data.message.sqlMessage.indexOf('Duplicate entry') !== -1) {
					this.updateRankingData()
				}
				return res.data.message
			}).catch(err => {
				return err
			})
		},
		updateRankingData() {
			axios.put(`http://localhost:8082/users/update/${this.login}`, this.profileData
			).then(res => {
				return res.data.message
			}).catch(err => {
				return err
			})
		}
	},
	computed: {
		profileData() {
			return {
				links_added_count: this.linksAdded,
				links_published_count: this.linksPublished,
				comments_added: this.comments,
				diggs: this.diggs,
				effectiveness: Number(this.effectiveness),
				avg_daily_digg: Number(this.digsPerDay),
				followers: this.followers
			}
		},
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
					name: 'Dzienny wykop',
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
		},
		conditions() {
			return (
				this.comments_count > 500 ||
				this.diggs > 10000 ||
				this.followrs > 100 ||
				this.links_added_count > 100 ||
				this.effectiveness > 10 ||
				this.digsPerDay > 5
			) ? true : false
		}
	},
	mounted() {
		this.conditions && this.insertRankingData()
	},
	updated() {
		this.conditions && this.insertRankingData()
	}
}
</script>
