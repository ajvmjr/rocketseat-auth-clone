<template>
	<v-main id="app">
		<router-view />
	</v-main>
</template>

<script>
export default {
	name: 'App',
}
</script>

<style lang="scss" scoped>
#app {
	font-family: 'Roboto';
	background: #121214;
	height: 100vh;
	width: 100vw;
}
</style>
