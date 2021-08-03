<template>
	<div class="wrapper">
		<form class="wrapper__form">
			<FormField
				type="text"
				placeholder="Email"
				@focus="isFocused"
				@blur="itsBlurry"
				@input="updateEmail"
				:autoFocus="true"
				:innerIcon="emailIconConfig"
			/>
			<FormField
				placeholder="Senha"
				@focus="isFocused"
				@blur="itsBlurry"
				@outerWasClicked="handleOuterIconClick"
				@input="updatePassword"
				:type="passwordFieldType"
				:innerIcon="passwordIconConfig.inner"
				:outerIcon="passwordIconConfig.outer"
			/>
			<span class="wrapper__form__span">Esqueci minha senha</span>
			<button :disabled="disableButton">Entrar</button>
		</form>
	</div>
</template>

<script>
import FormField from '@/components/Form/FormField'

export default {
	data: () => ({
		emailIconConfig: {
			name: 'mail',
			fill: '#202024',
		},
		passwordIconConfig: {
			inner: {
				name: 'lock',
				fill: '#202024',
			},
			outer: {
				name: 'visibility',
			},
		},
		passwordFieldType: 'password',
		email: '',
		password: '',
	}),
	components: { FormField },
	computed: {
		disableButton() {
			return this.email.length < 4 || this.password.length < 4
		},
	},
	methods: {
		updateEmail(val) {
			this.email = val
		},
		updatePassword(val) {
			this.password = val
		},
		isFocused({ placeholder }) {
			if (placeholder === 'Email') {
				this.emailIconConfig = {
					...this.emailIconConfig,
					fill: '#8257e6',
				}
			}

			if (placeholder === 'Senha') {
				this.passwordIconConfig.inner = {
					...this.passwordIconConfig.inner,
					fill: '#8257e6',
				}
			}
		},
		itsBlurry({ placeholder }) {
			if (placeholder === 'Email') {
				this.emailIconConfig = {
					...this.emailIconConfig,
					fill: '#202024',
				}
			}

			if (placeholder === 'Senha') {
				this.passwordIconConfig.inner = {
					...this.passwordIconConfig.inner,
					fill: '#202024',
				}
			}
		},
		handleOuterIconClick() {
			let { name } = this.passwordIconConfig.outer

			if (name === 'visibility') {
				this.passwordIconConfig.outer.name = 'visibility-off'
				this.passwordFieldType = 'text'
			} else {
				this.passwordIconConfig.outer.name = 'visibility'
				this.passwordFieldType = 'password'
			}
		},
	},
}
</script>

<style lang="scss" scoped>
$main-purple: #8257e6;
$secondary-purple: #41356b;

.wrapper {
	background: #202024;
	border-radius: 5px;
	min-height: 470px;
	max-width: 480px;
	padding: 64px;
	width: 100%;
	&__form {
		display: grid;
		grid-auto-flow: row;
		gap: 10px;
		&__span {
			align-self: flex-start;
			color: $main-purple;
			font-size: 14px;
			font-weight: 600;
			margin: 1px 0px 24px;
			opacity: 0.8;
			transition: opacity 0.2s ease 0s;
		}
		button {
			background: rgb(130, 87, 229);
			border-radius: 5px;
			border: 0px;
			color: rgb(255, 255, 255);
			font-weight: bold;
			font-size: 16px;
			height: 50px;
			transition: background 0.2s ease 0s, color 0.2s ease 0s;
			text-transform: uppercase;
			&:disabled {
				background: $secondary-purple;
				color: #ffffff59;
			}
		}
	}
}
</style>
