<template lang="pug">
    v-layout(row wrap)
        v-flex(xs8)
            v-text-field(v-model="inputProfile" label="Enter a nickname")
        v-flex(xs4)
            v-btn( color="info") Get info
                v-icon(dark right v-text="'$vuetify.icons.user'")

</template>
<script>
    export default {
        props: {
            value: {
                type: String,
                default: ''
            }
        },
        data () {
            return {
                inputProfile: this.value
            }
        },
        watch: {
            inputProfile: {
                handler (value) {
                    this.$emit('input', value)
                }
            }
        }
    }
</script>

<style scoped>
</style>