module.exports = function (config) {
    config.set({
      basePath: '', // Katalog bazowy dla plików testowych
      frameworks: ['jasmine', '@angular-devkit/build-angular'], // Frameworki używane w testach
      plugins: [
        require('karma-jasmine'), // Plugin Jasmine
        require('karma-chrome-launcher'), // Uruchamia testy w Chrome
        require('karma-firefox-launcher'), // Uruchamia testy w Chrome
        require('karma-jasmine-html-reporter'), // Reporter wyników w przeglądarce
        require('karma-coverage'), // Generuje raporty pokrycia kodu
        require('@angular-devkit/build-angular/plugins/karma') // Plugin Angular CLI
      ],
      client: {
        jasmine: {
          // Konfiguracja Jasmine
        },
        clearContext: false // Pozostawia wyniki testów na stronie
      },
      reporters: ['progress', 'kjhtml'], // Reporterzy dla wyników testów
      port: 9876, // Port, na którym działa serwer Karma
      colors: true, // Włącza/wyłącza kolory w konsoli
      logLevel: config.LOG_INFO, // Poziom logowania
      autoWatch: true, // Automatyczne ponowne uruchamianie testów po zmianach
      browsers: ['Chrome'], // Przeglądarka do uruchamiania testów
      singleRun: false, // Czy testy mają być uruchamiane tylko raz
      restartOnFileChange: true // Restart serwera po zmianach w plikach
    });
  };