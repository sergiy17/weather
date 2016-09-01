module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      './node_modules/angular/angular.js',                             // angular
      './node_modules/angular-ui-router/release/angular-ui-router.js', // ui-router
      './node_modules/angular-mocks/angular-mocks.js',
      './app/bower_components/angular-mass-autocomplete/massautocomplete.js',
      './app/bower_components/angular-sanitize/angular-sanitize.js',
      './app/cities-list/cities-list.js',
      './app/app.js',
      './app/app.spec.js',
      './app/cities-list/cities-list.spec.js'
    ],
    exclude: [
    ],
    preprocessors: {
    },
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}