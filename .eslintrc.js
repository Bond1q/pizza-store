// eslint-disable-next-line no-undef
module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
		"jest": true,
		"node": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier"
	],
	"overrides": [
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": ["react", "react-hooks", "@typescript-eslint", "prettier"],
	"rules": {
		"jsx-a11y/anchor-is-valid": "off",
		"react/prop-types": "off",
		"import/extensions": "off",
		"react/react-in-jsx-scope": "off",
		"import/prefer-default-export": "off",
		"react/jsx-props-no-spreading": "off",
		"react/require-default-props": "off",
		"react/display-name": "off",
		"react/jsx-max-props-per-line": [1, { "maximum": 2, "when": "multiline" }],
		"react/function-component-definition": [
			"error",
			{
				"namedComponents": "arrow-function",
				"unnamedComponents": "arrow-function"
			}
		]
	},
	"settings": {
		"import/resolver": {
			"typescript": {}
		},
		"react": {
			"version": "detect"
		}
	}
}
