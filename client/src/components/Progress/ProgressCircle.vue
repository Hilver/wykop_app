<template lang="pug">
	v-container(fill-height)
		v-layout(row justify-center align-center)
			v-progress-circular(:size="50" color="primary" indeterminate)
</template>
<script>
export default {
	name: 'CircularProgress'
}
</script>
