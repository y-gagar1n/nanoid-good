var Filter = require('bad-words');
var en = require('naughty-words/en.json');


module.exports = function (fn) {
    return function () {
        var filter = new Filter();

        while (true) {
            var id = fn.apply(this, arguments);
            if (!filter.isProfane(id)) return id;
        }
    };
};