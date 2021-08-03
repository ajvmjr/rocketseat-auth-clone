import { extend } from 'vee-validate';
import { confirmed, email, max, min, required } from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/en.json';

const rules = [
  confirmed,
  email,
  max,
  min,
  required
]

Object.keys(rules).forEach((rule) => {
	extend(rule, {
		...rules[rule],
		message: messages[rule],
	})
})