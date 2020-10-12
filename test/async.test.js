var en = require('../locale/en');
var nanoidGood = require('../async/').nanoid(en);
var customAlphabet = require('../async/').customAlphabet(en);

it('default doesnt throw', function () {
    return nanoidGood().then(function(id) {
        expect(typeof id).toEqual('string');
    });
});

it('default doesnt throw when length specified', function () {
    return nanoidGood(10).then(function(id) {
        expect(typeof id).toEqual('string');
    });
});

it('customAlphabet doesnt throw', function () {
    return customAlphabet("1234567abcdef", 10)().then(function(id) {
        expect(typeof id).toEqual('string');
    });
});