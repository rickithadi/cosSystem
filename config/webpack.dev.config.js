const commonPaths = require('./common-paths');

const config = {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: commonPaths.outputPath,
        compress: true,
        historyApiFallback: true,
          disableHostCheck: true,   // That solved it
        hot: false,
        port: 9000
    }
};

module.exports = config;
