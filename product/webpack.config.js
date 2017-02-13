var ET = require("extract-text-webpack-plugin");

module.exports = {
    entry: __dirname+"/src/scripts/app.js",   //要编译的入口文件
    devtool: "source-map",
    output: {
        path: __dirname+"/prd/",   //目标文件目录
        filename: "boudle.js"   //目标文件夹
    },
    module: {
        loaders: [
            {
                test: /\.css$/,        //正则 编译所有css文件
                loader: "style-loader!css-loader"
            },
            {
                test: /\.js$/,         //正则 编译所有js文件
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                //loader:"style-loader!css-loader!sass-loader"
                loader:ET.extract({fallbackLoader:'style-loader',loader:'css-loader!sass-loader'})
            }
        ]
    },
    devServer: {
        contentBase: __dirname+"/prd",
        historyApiFallback: true,
        inline: true,
        port: "8080"
    },
    plugins: [
        new ET("boudle.css")
    ]
};