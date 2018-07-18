var hasProfanity = require("./hasProfanity");

var wrapper = function (fn) {
    return function () {
        while (true) {
            var id = fn.apply(this, arguments);
            if (!hasProfanity(id)) return id;
        }
    };
};

module.exports = wrapper;