<template>
	<div class="input-wrapper">
		<Icon
			class="input-wrapper__svg"
			:icon="innerIcon.name"
			:fill="innerIcon.fill"
		/>
		<input
			@focus="isFocused($event.target)"
			@blur="itsBlurry($event.target)"
			:type="type"
			:placeholder="placeholder"
			v-model="userInput"
		/>
		<Icon
			class="input-wrapper__outer-svg"
			fill="#8257e6"
			@click="wasClicked"
			:icon="outerIcon.name"
		/>
	</div>
</template>

<script>
import Icon from '@/components/Icon'
export default {
	props: {
		type: {
			type: String,
			required: true,
			default: '',
		},
		placeholder: {
			type: String,
			required: true,
			default: '',
		},
		innerIcon: {
			type: Object,
			required: true,
			default: () => ({}),
		},
		outerIcon: {
			type: Object,
			required: false,
			default: () => ({}),
		},
	},
	data: () => ({
		userInput: '',
	}),
	components: { Icon },
	methods: {
		isFocused(element) {
			this.$emit('focus', element)
		},
		itsBlurry(element) {
			this.$emit('blur', element)
		},
		wasClicked() {
			this.$emit('outerWasClicked')
		},
	},
}
</script>

<style lang="scss" scoped>
$main-color: #121214;
$purple: #8257e6;

.input-wrapper {
	position: relative;
	flex: 1 1 0%;
	&__svg {
		position: absolute;
		left: 16px;
		top: 50%;
		transform: translateY(-50%);
		font-size: 14px;
		transition: fill 0.2s ease 0s;
	}
	&__outer-svg {
		background: none;
		border: 0px;
		cursor: pointer;
		display: block;
		position: absolute;
		right: 16px;
		top: 50%;
		transform: translateY(-50%);
		transition: opacity 0.2s ease 0s;
	}
	input {
		background: $main-color;
		border-color: $main-color;
		border-radius: 5px;
		color: #fff;
		font-size: 16px;
		height: 50px;
		padding: 0px 1em 0px 2.65em;
		width: 100%;
		&:focus {
			border-color: $purple;
		}
	}
	input,
	textarea {
		outline: 0px;
		background: $main-color;
		border: 2px solid $main-color;
		border-radius: 5px;
		height: 50px;
		padding: 15px 40px;
		color: #fff;
		font-size: 17px;
		width: 100%;
		transition: border 0.2s ease 0s;
	}
}
</style>
