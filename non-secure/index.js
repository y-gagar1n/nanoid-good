var nsnanoid = require('nanoid/non-secure');
var nanoid = require('nanoid');
var wrapper = require('../wrapper');

module.exports = {
    nanoid: wrapper(nsnanoid.nanoid),
    customAlphabet: wrapper(nsnanoid.customAlphabet),
    customRandom: wrapper(nanoid.customRandom), 
    urlAlphabet: nanoid.urlAlphabet, 
    random: nanoid.random
}