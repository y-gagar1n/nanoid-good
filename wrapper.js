var hasProfanity = require("./hasProfanity");

var wrapper = function (fn) {
    return function (locales) {
        return function () {
            while (true) {
                var id = fn.apply(this, arguments);
                console.log(id)
                if (!hasProfanity(locales)(id)) return id;
            }
        }
    };
};

module.exports = wrapper;