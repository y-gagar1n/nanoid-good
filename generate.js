var generate = require('nanoid/generate');
var Filter = require('bad-words');

module.exports = function () {
    var filter = new Filter();

    while (true) {
        var id = generate.apply(this, arguments);
        if (!filter.isProfane(id)) return id; 
    }
};