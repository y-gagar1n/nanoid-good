var generate = require('nanoid/generate');
var filter = require('./filter');

module.exports = filter(generate);