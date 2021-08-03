<template>
	<div class="wrapper">
		<form class="wrapper__form">
			<FormField
				type="text"
				placeholder="Email"
				@focus="isFocused"
				@blur="itsBlurry"
				:innerIcon="emailIconConfig"
			/>
			<FormField
				placeholder="Senha"
				@focus="isFocused"
				@blur="itsBlurry"
				@outerWasClicked="handleOuterIconClick"
				:type="passwordFieldType"
				:innerIcon="passwordIconConfig.inner"
				:outerIcon="passwordIconConfig.outer"
			/>
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
	}),
	components: { FormField },
	methods: {
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
	}
}
</style>
