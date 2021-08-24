<template>
	<v-main id="app">
		<router-view />
		<Toast />
	</v-main>
</template>

<script>
import Toast from '@/components/Toast'

export default {
	name: 'App',
	components: { Toast },
	mounted() {
		this.$store.dispatch('autoLogin')
	},
}
</script>

<style lang="scss" scoped>
* {
	box-sizing: border-box;
}

#app {
	font-family: 'Roboto';
	background: #121214;
	height: 100vh;
	width: 100vw;
}
</style>
