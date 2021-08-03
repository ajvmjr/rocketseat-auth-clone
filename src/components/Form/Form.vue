<template>
	<div class="wrapper">
		<form class="wrapper__form" @submit.prevent="submit">
			<FormField
				type="text"
				placeholder="Email"
				@focus="isFocused"
				@blur="itsBlurry"
				@input="updateEmail"
				:autoFocus="true"
				:innerIcon="emailIconConfig"
			/>
			<span class="wrapper__form__valid" v-if="emailIsNotValid">
				{{ validatorText }}
			</span>
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
			<button :disabled="disableButton" type="submit">Entrar</button>
			<p>
				Não tem uma conta?
				<a>Registre-se</a>
			</p>
			<div class="wrapper__form__pseudos"></div>
			<div class="wrapper__form__github">
				<p>Ou entre com</p>
				<a
					href="#"
					@mouseenter="toggleGithubIconColor"
					@mouseleave="toggleGithubIconColor"
				>
					<Icon icon="github" :fill="githubIconColor" />
					<div style="width: 12px"></div>
					Github
				</a>
			</div>
		</form>
	</div>
</template>

<script>
import FormField from '@/components/Form/FormField'
import Icon from '@/components/Icon'

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
		githubIconColor: '#8257e6',
		passwordFieldType: 'password',
		validatorText: 'Insira um e-mail válido.',
		email: '',
		password: '',
	}),
	components: { FormField, Icon },
	computed: {
		disableButton() {
			return this.email.length < 4 || this.password.length < 4
		},
		emailIsNotValid() {
			return this.validatorText.length > 0
		},
	},
	methods: {
		submit() {},
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
		toggleGithubIconColor() {
			if (this.githubIconColor === '#8257e6') this.githubIconColor = '#fff'
			else this.githubIconColor = '#8257e6'
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
		&__valid {
			display: inline-block;
			color: rgb(211, 66, 66);
			font-size: 14px;
		}
		&__span {
			align-self: flex-start;
			color: $main-purple;
			cursor: pointer;
			font-size: 14px;
			font-weight: 600;
			margin: 1px 0px 24px;
			opacity: 0.8;
			transition: opacity 0.2s ease 0s;
			&:hover {
				opacity: 1;
			}
		}
		button {
			background: #8257e5;
			border-radius: 5px;
			border: 0px;
			color: #ffffff;
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
		p {
			color: #cccccc;
			font-size: 14px;
			margin-top: 24px;
			text-align: center;
			a {
				align-self: flex-start;
				color: $main-purple;
				cursor: pointer;
				font-size: 14px;
				font-weight: 600;
				margin: 8px 0px 24px;
				opacity: 0.8;
				transition: opacity 0.2s ease 0s;
				text-decoration: none;
				&:hover {
					opacity: 1;
				}
			}
		}
		&__pseudos {
			position: relative;
			font-size: 12px;
			color: rgb(135, 134, 139);
			margin: 24px 0px;
			text-align: center;
			&::before {
				left: 0px;
			}
			&:right {
				right: 0px;
			}
			&::before,
			&::after {
				background: #28272f;
				content: '';
				height: 1px;
				position: absolute;
				top: 50%;
				width: calc(50% - 25px);
			}
		}
		&__github {
			display: flex;
			justify-content: space-between;
			a {
				align-items: center;
				background: #29292e;
				border: 0px;
				border-radius: 5px;
				color: rgb(255, 255, 255);
				display: flex;
				font-size: 16px;
				font-weight: bold;
				height: 50px;
				justify-content: center;
				transition: background 0.1s ease 0s;
				text-align: center;
				text-transform: uppercase;
				text-decoration: none;
				width: 70%;
				&:hover {
					background: $main-purple;
				}
			}
		}
	}
}
</style>
