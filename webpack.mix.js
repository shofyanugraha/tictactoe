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

mix.js('js/app.js', 'public/js')
	.scripts(['js/ui.js',
		'js/state.js',
		'js/game.js',
		'js/aiaction.js',
		'js/ai.js',
		], 'public/js/tictactoe.js')
    .sass('scss/app.scss', 'public/css');
