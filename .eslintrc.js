module.exports = {
	root: true,
	env:  {
		node: true
	},
	extends: ['plugin:vue/essential', '@vue/standard'],
	rules:   {
		'no-console':  process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

		'indent':                        [2, 'tab'],
		'no-tabs':                     0,
		'semi':                          [1, 'always'],
		'space-before-function-paren': [1, 'never'],

		'space-infix-ops': 2,
		'key-spacing':     [
			2,
			{
				afterColon: true,
				mode:       'minimum',
				align:      'value'
			}
		],
		'array-bracket-newline': [
			2,
			{
				multiline: true,
				minItems:  3
			}
		],
		'array-bracket-spacing': [2, 'never'],
		'comma-spacing':         [
			1,
			{
				before: false,
				after:  true
			}
		],
		'comma-style':  [1, 'last'],
		'comma-dangle': [
			2,
			{
				arrays:    'never',
				objects:   'only-multiline',
				imports:   'never',
				exports:   'never',
				functions: 'never'
			}
		],
		'brace-style':            [
			2, 'stroustrup', { allowSingleLine: true }
		],
		'func-call-spacing':      [2, 'never'],
		'function-paren-newline': [2, 'multiline'],
		'func-style':             [
			2,
			'declaration',
			{
				allowArrowFunctions: true
			}
		],
		'lines-around-comment': [
			2,
			{
				beforeBlockComment: false,
				afterBlockComment:  false,
				beforeLineComment:  false,
				afterLineComment:   false
			}
		],
		'no-underscore-dangle': [
			1,
			{
				allowAfterThis:  true,
				allowAfterSuper: true
			}
		],
		'no-unneeded-ternary':           2,
		'no-whitespace-before-property': 2,
		'object-curly-newline':          [
			2,
			{
				consistent: true
			}
		],
		'one-var':             [2, 'never'],
		'operator-assignment': [1, 'always'],
		/* 'operator-linebreak': [2, 'none'], */
		'quote-props':         [1, 'consistent-as-needed'],
		'require-jsdoc':       [
			1,
			{
				require: {
					FunctionDeclaration:     true,
					MethodDefinition:        true,
					ClassDeclaration:        true,
					ArrowFunctionExpression: true,
					FunctionExpression:      false
				}
			}
		],
		'space-before-blocks': [2, 'always'],

		'vue/require-v-for-key': 1,
		'vue/html-quotes':       [1, 'single'],
		'vue/html-indent':       [2, 'tab'],
		'vue/html-self-closing': [
			2,
			{
				html: {
					normal: 'any'
				}
			}
		],
		'vue/max-attributes-per-line': [
			2,
			{
				singleline: 3,
				multiline:  {
					max:            1,
					allowFirstLine: true
				}
			}
		]
	},
	parserOptions: {
		parser: 'babel-eslint'
	},
	globals: {
		$:             false,
		jQuery:        false,
		mapGetters:    false,
		mapActions:    false,
		GSet:          true,
		BX:            false,
		_sc:           false,
		DocumentTouch: false,
		google:        false,
		Foundation:    false,
		Vue:           false,
		VueResource:   false,
		Vuex:          false,
		Swiper:        false,
		YT:            false,
		FB:            false,
		gtag:          false,
		mainData:      false,
		zauiURL:       false,
		errorList:     false
	}
};
