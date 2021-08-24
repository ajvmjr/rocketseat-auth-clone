<template>
	<div class="wrapper">
		<h1 class="wrapper__title">Create your account</h1>
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
					id="password"
					placeholder="Password"
					rules="required|confirmed:passwordConfirmation"
					@focus="isFocused"
					@blur="itsBlurry"
					@outerWasClicked="
						handleOuterIconClick('passwordIconConfig', 'passwordFieldType')
					"
					:type="passwordFieldType"
					:innerIcon="passwordIconConfig.inner"
					:outerIcon="passwordIconConfig.outer"
					v-model="password"
				/>
				<FormField
					id="passwordConfirmation"
					placeholder="Confirm Password"
					rules="required"
					@focus="isFocused"
					@blur="itsBlurry"
					@outerWasClicked="
						handleOuterIconClick(
							'confirmPasswordIconConfig',
							'confirmPasswordFieldType'
						)
					"
					:type="confirmPasswordFieldType"
					:innerIcon="confirmPasswordIconConfig.inner"
					:outerIcon="confirmPasswordIconConfig.outer"
					v-model="confirmPassword"
				/>
				<button class="wrapper__form__button">Register</button>
				<div class="wrapper__form__terms">
					<p>
						By registering, you accept <a href="#">our terms</a> of use and our
						<a href="#">privacy policy</a>.
					</p>
				</div>
			</form>
		</ValidationObserver>
	</div>
</template>

<script>
import FormField from '@/components/Form/FormField'
import firebase from 'firebase'

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
		confirmPasswordIconConfig: {
			inner: {
				name: 'lock',
				fill: '#202024',
			},
			outer: {
				name: 'visibility',
			},
		},
		email: '',
		password: '',
		confirmPassword: '',
		passwordFieldType: 'password',
		confirmPasswordFieldType: 'password',
	}),
	components: { FormField },
	methods: {
		async submit() {
			const { email, password } = this
			try {
				await this.$store.dispatch('signup', { email, password })
				this.$router.push('/authenticated')
			} catch (e) {
				console.error(e)
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

			if (placeholder === 'Confirm Password') {
				this.confirmPasswordIconConfig.inner = {
					...this.confirmPasswordIconConfig.inner,
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

			if (placeholder === 'Confirm Password') {
				this.confirmPasswordIconConfig.inner = {
					...this.confirmPasswordIconConfig.inner,
					fill: '#202024',
				}
			}
		},
		handleOuterIconClick(dataProp, passwordField) {
			let { name } = this[dataProp].outer

			if (name === 'visibility') {
				this[dataProp].outer.name = 'visibility-off'
				this[passwordField] = 'text'
			} else {
				this[dataProp].outer.name = 'visibility'
				this[passwordField] = 'password'
			}
		},
	},
}
</script>

<style lang="scss" scoped>
.wrapper {
	background: #202024;
	border-radius: 5px;
	height: 600px;
	max-width: 480px;
	padding: 64px;
	width: 100%;
	&__title {
		color: #ffffff;
		font-size: 25px;
		margin-bottom: 39px;
	}
	&__form {
		display: grid;
		grid-auto-flow: row;
		gap: 10px;
		&__button {
			background: #8257e5;
			border-radius: 5px;
			border: 0px;
			color: #ffffff;
			font-weight: bold;
			font-size: 16px;
			height: 50px;
			transition: background 0.2s ease 0s, color 0.2s ease 0s;
			text-transform: uppercase;
		}
		&__terms {
			p {
				color: #cccccc;
				font-size: 14px;
				line-height: 26px;
				margin-top: 14px;
				text-align: center;
			}
			a {
				color: #8257e6;
				font-size: 14px;
				font-weight: 600;
				margin: 40px 0px 24px;
				opacity: 0.8;
				transition: opacity 0.2s ease 0s;
			}
		}
	}
}
</style>
