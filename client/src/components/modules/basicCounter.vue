<template lang="pug">
	div
		|	{{ value }}
</template>
<script>
import { counterMixin } from '../../mixins/counterMixin'

export default {
	mixins: [counterMixin]
}
</script>
