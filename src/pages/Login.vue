<template>
	<div class="container">
		<div class="container__form-wrapper">
			<h1>Log in to the platform</h1>
			<Form />
		</div>
	</div>
</template>

<script>
import Form from '@/components/Form/Form'

export default {
	components: { Form },
}
</script>

<style lang="scss" scoped>
.container {
	align-items: center;
	display: flex;
	height: 100vh;
	justify-content: center;
	h1 {
		color: #e1e1e6;
		font-size: 54px;
		line-height: 64px;
		margin-top: 64px;
	}
	&__form-wrapper {
		align-items: center;
		display: flex;
		height: 534px;
		justify-content: space-between;
		max-width: 936px;
		padding: 32px 22px;
		width: 100%;
	}
}
</style>
