var nonSecure = require('nanoid/non-secure');
var filter = require('./filter');

module.exports = filter(nonSecure);