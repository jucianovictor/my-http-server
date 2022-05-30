const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
	mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
			{
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
	devtool: 'inline-source-map',
	devServer: {
		static: './dist',
	 hot: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Welcome',
		}),
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
		client: {
      progress: true,
    },
    compress: true,
    port: 3001,
  },
};