var format = require('nanoid/async/format');
var wrapper = require('./wrapper');

module.exports = wrapper(format);