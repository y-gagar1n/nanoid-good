var filter = require('../filter');

it('returns false on innocent id', function() {
    expect(filter("qwerty")).toEqual(false);
});

it('returns true on bad word', function() {
    expect(filter("sex")).toEqual(true);
});