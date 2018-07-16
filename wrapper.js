var hasProfanity = require("./hasProfanity")


module.exports = function (fn) {
    return function () {
        while (true) {
            var id = fn.apply(this, arguments);
            if (!hasProfanity(id)) return id;
        }
    };
};