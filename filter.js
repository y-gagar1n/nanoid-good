var Filter = require('bad-words');

module.exports = function (fn) {
    return function () {
        var filter = new Filter();

        while (true) {
            var id = fn.apply(this, arguments);
            if (!filter.isProfane(id)) return id;
        }
    };
};