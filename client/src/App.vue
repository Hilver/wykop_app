<template lang="pug">
	div#app
		v-app
			div#nav
				toolbar
				//- router-link(to="/") Home
			router-view
</template>
<script>
import Toolbar from './components/Toolbar/Toolbar'
export default {
	components: {
		Toolbar
	}
}
</script>
<style lang="sass">
.greenColorRank
	color: #389B38

.orangeColorRank
	color: #FF5917

.crimsonColorRank
	color: #BB0000

</style>
