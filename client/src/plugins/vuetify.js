import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import pl from 'vuetify/es5/locale/pl'

Vue.use(Vuetify, {
	iconfont: 'fa',
	icons: {
		'cancel': 'fas fa-ban',
		'menu': 'fas fa-ellipsis-v',
		'user': 'fas fa-user',
		'cake': 'fas fa-birthday-cake'
	},
	lang: {
		locales: { pl },
		current: 'pl'
	},
})
