var nsnanoid = require('nanoid/non-secure');
var nanoid = require('nanoid');
var wrapper = require('../wrapper');

module.exports = {
    nanoid: wrapper(nsnanoid.nanoid),
    customAlphabet: (...locales) => (alphabet, size) => wrapper(nsnanoid.customAlphabet(alphabet, size))(...locales),
    customRandom: (...locales) => (alphabet, size, randomFunc) => wrapper(nanoid.customRandom(alphabet, size, randomFunc))(...locales), 
    urlAlphabet: nanoid.urlAlphabet, 
    random: nanoid.random
}