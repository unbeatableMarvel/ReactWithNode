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
               presets: ['es2015', 'react','stage-0','es2015-node6',"env"]
            }


         }
      ]
   }
}

module.exports = config;