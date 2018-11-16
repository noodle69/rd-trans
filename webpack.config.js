var Encore = require('@symfony/webpack-encore');
var glob = require('glob');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .enableSingleRuntimeChunk()
    .addEntry('app', [
        './assets/js/main.js'
    ])
    .addEntry('translator', [
        './public/bundles/bazingajstranslation/js/translator.min.js',
        './assets/js/translations/config.js'
    ])
    .addEntry('bazinga', glob.sync("./assets/js/translations/messages/*.js"))
    .enableVueLoader()
;

module.exports = Encore.getWebpackConfig();
