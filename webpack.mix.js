const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('src/js/app.js', 'js')
	.scripts(['src/js/ui.js',
		'src/js/state.js',
		'src/js/game.js',
		'src/js/aiaction.js',
		'src/js/ai.js',
		], 'js/tictactoe.js')
    .sass('src/scss/app.scss', 'css');
