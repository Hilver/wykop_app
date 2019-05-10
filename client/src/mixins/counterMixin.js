const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export const counterMixin = {
	props: {
		rankColor: {
			type: Array,
			default: () => ['#329A37', '#FF5917', '#B91817', '#020303']
		},
		decimal: {
			type: Number,
			default: 0
		},
		total: {
			type: [Number, String],
			default: 0
		}
	},
	data () {
		return {
			value: 0
		}
	},
	methods: {
		async counter(n, ms, x = 0) {
			let init = {}
			n ? n = Number(n.toString().split('.').join('')) : 0
			n > 1000 ? init = {n: n-500, x: x+500} :
				n > 100 ? init = {n: n-5, x: x+5} :
					init = {n: n-1, x: x+1}
			this.value = this.decimalConverter(x)
			if (n <= 0) return
			await delay(ms)
			this.counter(init.n, ms, init.x)
		},
		decimalConverter(n) {
			return n / (10 ** this.decimal)
		}
	},
	computed: {
		badgeColor() {
			return this.value > 10000 ?
				this.rankColor[3] :
				this.value > 1000 ?
					this.rankColor[2] :
					this.value > 100 ?
						this.rankColor[1] :
						this.rankColor[0]
		}
	},
	watch: {
		total: {
			handler: function(val) {
				this.counter(val, 1)
			}
		}
	}
}