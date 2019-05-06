<template lang="pug">
    div
        v-layout(row wrap)
            v-flex(xs6)
                img(:src="avatarImg" :class="[sex === 'male' ? 'blue-border' : 'pink-border']")    
            v-flex(xs6)
                p Login: {{ login }}
                p Opis: {{ description }}
                p Ranking: {{ ranking }}
                p Dodane: {{ linksAdded }}
                p Opublikowane: {{ linksPublished }}
                p Skuteczność: {{ effectiveness }}
                p Wykopane: {{ diggs }}
                p Data rejestracji: {{ register_date }}
        v-layout(row wrap)
</template>

<script>
    export default {
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
                type: String,
                default: ''
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
            }
        }
    }
</script>

<style scoped>

.blue-border {
    border: 2px solid blue
}

.pink-border {
    border: 2px solid pink
}

</style>