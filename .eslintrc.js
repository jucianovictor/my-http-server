module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		jest: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		ecmaVersion: 12,
		sourceType: 'module',
		warnOnUnsupportedTypeScriptVersion: false,
	},
	globals: {
		React: 'readonly',
	},
	plugins: ['@typescript-eslint'],
	rules: {
		'@typescript-eslint/no-empty-interface': 'off',
		'@typescript-eslint/semi': ['error'],
		semi: 'off',
		'arrow-parens': 'off',
		'import/extensions': 'off',
		indent: 'off',
		'linebreak-style': [
			'error',
			process.platform === 'win32' ? 'windows' : 'unix',
		],
		'prefer-const': 'error',
		quotes: ['error', 'single'],
		'no-extra-semi': 'error',
	},
};
