module.exports = {
	filenameHashing:     false,
	configureWebpack: {
		output: {
			filename: './js/[name].bundle.js'
		},
		optimization: {
			splitChunks: false
		},
		performance: {
			maxEntrypointSize: 2512000,
			maxAssetSize:      2512000
		}
	},
	productionSourceMap: false,
	parallel:            undefined,
	css:                 {
		sourceMap:     true,
		loaderOptions: {
			css: {
				localIdentName: '',
				camelCase:      'only'
			}
		},

		extract: {
			filename: './css/[name].bundle.css'
		}
	},

	pages: {
		fcore: {
			entry:    'src/entry/main.js',
			template: 'public/index.html',
			filename: 'index.html'
		}
	},
	outputDir: 'dist/'
};
