<template>
	<div class="wrapper">
		<h1>Welcome, you're authenticated</h1>
		<button class="button" @click="logout">
			Logout
		</button>
	</div>
</template>

<script>
export default {
	methods: {
		logout() {
			this.$store.dispatch('logout')
			this.$router.push('/')
		},
	},
}
</script>

<style scoped>
.wrapper {
	align-items: center;
	display: flex;
	justify-content: center;
	flex-direction: column;
	height: 100%;
}

h1 {
	color: #ffffff;
	font-size: 25px;
	margin-bottom: 39px;
}

.button {
	background: #8257e5;
	border-radius: 5px;
	border: 0px;
	color: #ffffff;
	font-weight: bold;
	font-size: 16px;
	height: 50px;
	transition: background 0.2s ease 0s, color 0.2s ease 0s;
	text-transform: uppercase;
	width: 200px;
}
</style>
