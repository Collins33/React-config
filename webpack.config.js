const path = require('path');

module.exports = {
    // entry specifies the entry file where the bundler starts the bundling process
    entry: './client/index.js',

    // output specifies place where the bundles js code is to be saved
    output:{
        path:path.resolve('dist'),
        filename: 'index_bundle.js'
    }
}