const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options:{
                        presets:['es2015','react','env'],
                        plugins : ['transform-class-properties']
                    },
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
			    test: /(\.less|\.css)$/,
			    use: [
			        'style-loader',
			        'css-loader',
			        'less-loader' 
			    ]
			}
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        })
    ],
    devServer: {
        contentBase: require('path').join(__dirname, "dist"),
        compress: true,
        port: 8088,
        host: "localhost",
    }
};