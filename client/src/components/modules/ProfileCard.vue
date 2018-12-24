<template>
    <div>
        <v-layout row wrap>
            <v-flex xs6>
                <img :src="avatarImg" :class="{'blue-border': sex === 'male', 'pink-border': sex === 'female'}">
            </v-flex>
            <v-flex xs6>
                <p>Login: {{ login }}</p>
                <p>Opis: {{ description }}</p>
                <p>Ranking: {{ ranking }}</p>
                <p>Dodane: {{ linksAdded }}</p>
                <p>Opublikowane: {{ linksPublished }}</p>
                <p>Skuteczność: {{ effectiveness }}</p>
                <p>Wykopane: {{ diggs }}</p>
                <p>Data rejestracji: {{ register_date }}</p>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            
        </v-layout>
    </div>
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