<template>
	<v-container fluid>
		<v-layout row wrap>
			<v-flex xs3>
				
			</v-flex>
			<v-flex xs9>
				<profile></profile>
			</v-flex>
		</v-layout>
	</v-container>

</template>

<script>
import Profile from './Profile.vue'

export default {
	components: {
		Profile
	},
    data: () => {
		return {
			
		}
    }
}
</script>

<style scoped lang="sass">

</style>
