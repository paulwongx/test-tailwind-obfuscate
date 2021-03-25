// const MangleCssClassPlugin = require('mangle-css-class-webpack-plugin');

// craco.config.js
module.exports = {
	style: {
		postcss: {
			plugins: [require('tailwindcss'), require('autoprefixer')],
		},
		// css: {
		//     loader: 'css-loader',
		// 	loaderOptions: {
		// 		modules: {
		// 			localIdentName: '[sha1:hash:hex:4]',
		// 		},
		// 		importLoaders: 1,
		// 	},
		// plugins: [
		//     new MangleCssClassPlugin({
		//         classNameRegExp: '^[\w]*[\:]?[\w]*[\-\:]?[\w|\d]*[\-]?[\w|\d]*[\-]?[\w|\d]*',
		//         log: true,
		//       })
		// ]
		// },
	},
	// webpack: {
	// 	configure: {
	// 		module: {
	// 			loaders: [
	// 				{
	// 					test: /\.css$/,
	// 					use: [
	// 						{ loader: 'style-loader' },
	// 						{
	// 							loader: 'css-loader',
	// 							loaderOptions: {
	// 								modules: {
	// 									localIdentName: '[sha1:hash:hex:4]',
	// 								},
	// 								importLoaders: 1,
	// 							},
	// 						},
	// 					],
	// 				},
	// 			],
	// 		},
	// 	},
	// },
};
