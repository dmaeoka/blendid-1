module.exports = {
	extends: ["stylelint-config-recommended"],
	plugins: [
		/**
		 * add plugins
		 * docs: https://stylelint.io/user-guide/configure#plugins
		 */
		"stylelint-scss", // stylelint by itself supports SCSS syntax very well
	],
	ignoreFiles: [
		/**
		 * ignore certain files
		 * docs: https://stylelint.io/user-guide/configure#ignorefiles
		 */
		'app.css',
		'public/**/*.css'
	],
	rules: {
		/**
		 * add custom rules
		 * docs: https://stylelint.io/user-guide/rules/list
		 */
		"at-rule-no-unknown": null,
		"scss/at-rule-no-unknown": [
			true,
			{
				ignoreAtRules: [
					"tailwind",
					"apply",
					"variants",
					"responsive",
					"screen",
					"layer"
				],
			},
		],
		"declaration-block-trailing-semicolon": null,
		"no-descending-specificity": null,
	},
};
