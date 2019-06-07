const path = require('path');
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/portfolio/'
    : '/',
    configureWebpack:{
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                '~': path.resolve(__dirname , 'src') 
            },
        },
    }
}


