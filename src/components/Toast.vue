<template>
	<v-snackbar v-model="showToast" :color="toast.color" top right>
		{{ toast.message }}
	</v-snackbar>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	data: () => ({
		showToast: false,
	}),
	computed: {
		...mapGetters(['toast']),
	},
	watch: {
		toast() {
			this.showToast = this.toast.show
		},
		showToast() {
			if (!this.showToast) {
				this.$store.dispatch('setToast', {
					show: false,
					message: '',
					color: '#993840',
				})
			}
		},
	},
}
</script>
