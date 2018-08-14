var builder = require('jest-trx-results-processor');

var processor = builder({
    outputFile: './TestResults.trx'
});

module.exports = processor;
