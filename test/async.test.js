var en = require('../locale/en');
var nanoidGood = require('../async/')(en)
var format = require('../async/format')(en)
var generate = require('../async/generate')(en)

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


it('format doesnt throw', function () {
    var random = function(size) {
        return new Promise(function(resolve) {
            var result = [];
            for (var i = 0; i < size; i++) result.push(Math.random() * 255);
            resolve(result);
        });
    }

    return format(random, "abcdef", 5)
        .then(function(id) {
            expect(typeof id).toEqual('string');
        });
});

it('generate doesnt throw', function () {
    return generate("1234567abcdef", 10).then(function(id) {
        expect(typeof id).toEqual('string');
    });
});