var hasProfanity = require('../hasProfanity')(require('../locale/en'));

it('returns false on innocent id', function () {
    expect(hasProfanity("qwerty")).toEqual(false);
});

it('returns true on bad word', function () {
    expect(hasProfanity("aSs")).toEqual(true);
});

it('returns true on bad word with numbers', function () {
    expect(hasProfanity("aS5")).toEqual(true);
    expect(hasProfanity("p0rn")).toEqual(true);
    expect(hasProfanity("sh1t")).toEqual(true);
    expect(hasProfanity("3rotic")).toEqual(true);
    expect(hasProfanity("camgir1")).toEqual(true);
    expect(hasProfanity("8astard")).toEqual(true);
});

it('returns true on bad word in between of larger word', function () {
    expect(hasProfanity("abcaSsqwe")).toEqual(true);
    expect(hasProfanity("abcaS5qwe")).toEqual(true);
});

it('returns true on bad word in non-english', function () {
    var hasProfanityDe = require('../hasProfanity')(require('../locale/de'));
    expect(hasProfanityDe("arScH")).toEqual(true);
    expect(hasProfanity("arScH")).toEqual(false);
});

it('can accept several locales', function () {
    var hasProfanityEnDe = require('../hasProfanity')(require('../locale/en'), require('../locale/de'));
    expect(hasProfanityEnDe("arScH")).toEqual(true);
    expect(hasProfanityEnDe("ass")).toEqual(true);
});