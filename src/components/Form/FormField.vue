<template>
	<div class="input-wrapper">
		<ValidationProvider
			:name="placeholder"
			:rules="rules"
			:vid="id"
			v-slot="{ errors }"
		>
			<Icon
				class="input-wrapper__svg"
				:icon="innerIcon.name"
				:fill="innerIcon.fill"
			/>
			<input
				:id="id"
				:name="placeholder"
				@focus="isFocused($event.target)"
				@blur="itsBlurry($event.target)"
				:autofocus="autoFocus"
				:type="type"
				:placeholder="placeholder"
				v-model="userInput"
			/>
			<span class="input-wrapper__span" v-if="errors.length">
				{{ errors[0] }}
			</span>
			<Icon
				class="input-wrapper__outer-svg"
				fill="#8257e6"
				@click="wasClicked"
				:icon="outerIcon.name"
			/>
		</ValidationProvider>
	</div>
</template>

<script>
import Icon from '@/components/Icon'
export default {
	props: {
		id: {
			type: String,
			required: false,
			default: '',
		},
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
		autoFocus: {
			type: Boolean,
			required: false,
			default: false,
		},
		rules: {
			type: String,
			required: false,
			default: '',
		},
	},
	data: () => ({
		userInput: '',
	}),
	components: { Icon },
	watch: {
		userInput() {
			this.$emit('input', this.userInput)
		},
	},
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
		box-sizing: border-box;
		position: absolute;
		left: 16px;
		top: 25px;
		transform: translateY(-50%);
		font-size: 14px;
		transition: fill 0.2s ease 0s;
	}
	&__span {
		color: rgb(211, 66, 66);
		display: inline-block;
		font-size: 14px;
		margin-top: 5px;
		overflow: hidden;
	}
	&__outer-svg {
		background: none;
		border: 0px;
		cursor: pointer;
		display: block;
		position: absolute;
		right: 16px;
		top: 25px;
		transform: translateY(-50%);
		transition: opacity 0.2s ease 0s;
		overflow: hidden;
	}
	input,
	textarea {
		background: $main-color;
		border-color: $main-color;
		border-radius: 5px;
		border: 2px solid $main-color;
		color: #fff;
		font-size: 16px;
		height: 50px;
		padding: 0px 1em 0px 2.65em;
		transition: border 0.2s ease 0s;
		outline: 0;
		width: 100%;
		&:focus {
			border-color: $purple;
		}
	}
}
</style>
