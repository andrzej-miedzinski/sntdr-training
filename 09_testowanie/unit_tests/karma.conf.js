module.exports = function (config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
      plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        require('karma-jasmine-html-reporter'),
        require('karma-coverage'),
        require('@angular-devkit/build-angular/plugins/karma')
      ],
      client: {
        jasmine: {
          // Konfiguracja Jasmine
        },
        clearContext: false // Pozostawia wyniki testów na stronie
      },
      reporters: ['progress', 'kjhtml'], // Reporterzy dla wyników testów
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: ['Chrome'], // Przeglądarka do uruchamiania testów
      singleRun: false,
      restartOnFileChange: true
    });
  };