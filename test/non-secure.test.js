var en = require('../locale/en');
var nanoidGood = require('../non-secure').nanoid(en)
var customAlphabet = require('../non-secure').customAlphabet(en)
var customRandom = require('../non-secure').customRandom(en)
var urlAlphabet = require('../non-secure').urlAlphabet;

it('default doesnt throw', function () {
    var id = nanoidGood();
    expect(typeof id).toEqual('string')
});

it('default doesnt throw when length specified', function () {
    var id = nanoidGood(10);
    expect(typeof id).toEqual('string')
});

it('customAlphabet doesnt throw', function () {
    var generator = customAlphabet("1234567abcdef", 10)
    var id = generator();
    expect(typeof id).toEqual('string')
});

it('urlAlphabet passes through', function () {
    var generator = customAlphabet(urlAlphabet, 10)
    var id = generator();
    expect(typeof id).toEqual('string')
});

it('customRandom doesnt throw', function () {

    var random = function(size) {
        var result = []
        for (var i = 0; i < size; i++) result.push(Math.random() * 255);
        return result
    }

    var id = customRandom("abcdef", 5, random)();
    expect(typeof id).toEqual('string')
});
