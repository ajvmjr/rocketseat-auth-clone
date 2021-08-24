<template>
	<div class="container">
		<FormSignup />
		<div class="container__infos">
			<h1>More than 200,000 boosters are already connected.</h1>
			<v-spacer />
			<p class="container__infos__invite">
				Join thousands of devs and accelerate towards your goals
			</p>
			<v-spacer />
			<div class="container__infos__back-to-login">
				<span class="material-icons">
					arrow_back
				</span>
				<router-link tag="p" to="/">Back to login</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import FormSignup from '@/components/Form/FormSignup'

export default {
	components: { FormSignup },
}
</script>

<style lang="scss" scoped>
$main-purple: #8257e6;

.container {
	align-items: center;
	display: flex;
	height: 100vh;
	justify-content: center;
	&__infos {
		align-self: center;
		display: flex;
		flex-direction: column;
		height: 250px;
		max-width: 480px;
		padding-left: 100px;
		width: 100%;
		h1 {
			font-size: 36px;
			color: #e1e1e6;
		}
		&__invite {
			color: #a8a8b3;
			font-size: 16px;
			line-height: 26px;
		}
		&__back-to-login {
			color: $main-purple;
			cursor: pointer;
			display: flex;
			font-size: 14px;
			font-weight: 600;
			opacity: 0.8;
			transition: opacity 0.2s ease 0s;
			&:hover {
				opacity: 1;
			}
			p {
				margin-left: 5px;
				line-height: 23px;
			}
		}
	}
}
</style>
