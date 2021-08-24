<template>
	<div class="wrapper">
		<ValidationObserver v-slot="{ handleSubmit }">
			<form class="wrapper__form" @submit.prevent="handleSubmit(submit)">
				<FormField
					type="text"
					placeholder="Email"
					rules="required|email"
					@focus="isFocused"
					@blur="itsBlurry"
					:autoFocus="true"
					:innerIcon="emailIconConfig"
					v-model="email"
				/>
				<FormField
					placeholder="Password"
					rules="required"
					@focus="isFocused"
					@blur="itsBlurry"
					@outerWasClicked="handleOuterIconClick"
					:type="passwordFieldType"
					:innerIcon="passwordIconConfig.inner"
					:outerIcon="passwordIconConfig.outer"
					v-model="password"
				/>
				<span class="wrapper__form__span">Forgot my password</span>
				<button :disabled="disableButton" type="submit">Login</button>
				<p>
					Don't have an account?
					<router-link tag="a" to="/signup">Register</router-link>
				</p>
				<div class="wrapper__form__pseudos"></div>
				<div class="wrapper__form__github">
					<p>Or enter with</p>
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
		</ValidationObserver>
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
		email: '',
		password: '',
	}),
	components: { FormField, Icon },
	computed: {
		disableButton() {
			return this.email.length < 4 || this.password.length < 4
		},
	},
	methods: {
		async submit() {
			const { email, password } = this
			try {
				await this.$store.dispatch('signin', { email, password })
				this.$router.push('/authenticated')
			} catch (e) {
				this.$store.dispatch('setToast', {
					status: true,
					message: e.response.data.error.message,
					color: '#993840',
				})
			}
		},
		isFocused({ placeholder }) {
			if (placeholder === 'Email') {
				this.emailIconConfig = {
					...this.emailIconConfig,
					fill: '#8257e6',
				}
			}

			if (placeholder === 'Password') {
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

			if (placeholder === 'Password') {
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
			color: #87868b;
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
				color: #ffffff;
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
