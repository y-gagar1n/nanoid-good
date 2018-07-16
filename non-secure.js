var nonSecure = require('nanoid/non-secure');
var wrapper = require('./wrapper');

module.exports = wrapper(nonSecure);