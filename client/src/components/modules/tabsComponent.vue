<template lang="pug">
	div
		v-tabs(
			v-model='model'
			centered
			fixed-tabs
		)
			v-tabs-slider(:color='color')
			v-tab(
				v-for="(item, i) in items"
				:key="i"
				:href="`#tab-${i}`"
			)
				|	{{ item.name }}
		v-tabs-items(v-model='model')
			v-tab-item(
				v-for="(item, i) in items"
				:key="i"
				:value="`tab-${i}`"
			)
				component(:is='item.activeComponent' v-bind='item.props')
</template>
<script>
export default {
	name: 'TabsComponent',
	props: {
		items: {
			type: Array,
			default: () => []
		},
		color: {
			type: String,
			default: 'purple'
		}
	},
	data() {
		return {
			model: 'tab-0'
		}
	}
}
</script>
