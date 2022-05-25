const report = require('multiple-cucumber-html-reporter');
//const elemento = require('./').ELEMENTS;
report.generate({
    jsonDir: './cypress/cucumber-json',
    reportPath: './cypress/cucumber-report'
});