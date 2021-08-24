<template>
	<v-main id="app">
		<router-view />
	</v-main>
</template>

<script>
export default {
	name: 'App',
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
