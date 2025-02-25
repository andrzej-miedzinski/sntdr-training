
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  preset: 'jest-preset-angular', // Preset dla Angulara
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'], // Plik konfiguracyjny dla Jest
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: '<rootDir>/'
  }),
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'], // Wzorce plików testowych
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json', // Konfiguracja TypeScript
      stringifyContentPathRegex: '\\.(html|svg)$' // Obsługa plików HTML/SVG
    }
  },
  coverageDirectory: '<rootDir>/coverage', // Katalog dla raportów pokrycia kodu
  collectCoverage: true, // Włączanie generowania raportów pokrycia
  coverageReporters: ['html', 'text-summary'],
  snapshotSerializers: [
    "jest-preset-angular/build/serializers/no-ng-attributes",
    "jest-preset-angular/build/serializers/ng-snapshot",
    "jest-preset-angular/build/serializers/html-comment"
  ]
};