var en = require('../locale/en');
var nanoidGood = require('../async/')(en)
var format = require('../format')(en)
var generate = require('../generate')(en)
var nonSecure = require('../non-secure')(en)

it('default doesnt throw', function () {
    return nanoidGood().then(function(id) {
        expect(typeof id).toEqual('string')
    });
});

// it('default doesnt throw when length specified', function () {
//     var id = nanoidgood(10);
//     expect(typeof id).toEqual('string')
// });


// it('format doesnt throw', function () {

//     var random = function(size) {
//         var result = []
//         for (var i = 0; i < size; i++) result.push(Math.random() * 255);
//         return result
//     }

//     var id = format(random, "abcdef", 5);
//     expect(typeof id).toEqual('string')
// });

// it('generate doesnt throw', function () {
//     var id = generate("1234567abcdef", 10);
//     expect(typeof id).toEqual('string')
// });

// it('nonSecure doesnt throw', function () {
//     var id = nonSecure();
//     expect(typeof id).toEqual('string')
// });