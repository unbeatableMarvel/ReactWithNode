var path =require('path');

var config = {
    devtool: 'cheap-module-source-map',
   entry: './index.js',
	
   output: {
      path:'',
      filename: 'bundle.min.js',
   },
	
   devServer: {
      inline: true,
      port: 8080,
      contentBase:path.join(__dirname, '/')
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
				
            query: {
               presets: ['es2015', 'react']
            }


         },
         {
            test: /(\.css)$/,
            loaders: ['style-loader', 'css-loader']
         }    
      ]
   }
}

module.exports = config;