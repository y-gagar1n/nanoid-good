var hasProfanity = require("../hasProfanity");

var wrapper = function (fn) {
    return function (locales) {
        return function () {
            var outerArgs = arguments;
            var result = new Promise(function(resolve, reject) {
                try {
                fn.apply(this, outerArgs)
                    .catch(reject)
                    .then(function(id) {
                        if (!hasProfanity(locales)(id)) 
                            resolve(id);
                        else
                            return result;
                    });
                }
                catch(err) {
                    reject(err);
                }
            });
            return result;
        }
    };
};

module.exports = wrapper;