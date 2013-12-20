var obj = require('../lib'),
    expect = require('expect.js');

describe('strictExtend tests', function () {

  it('it should be able to extend an object', function (done) {

    var defaults = {
      first: '1',
      second: '2',
      third: '3'
    };

    var extended = {
      first: 'one',
      second: 'two',
      third: 'three',
      fourth: 'four'
    };

    obj.strictExtend(defaults, extended);

    Object.keys(defaults).forEach(function (item) {

      expect(defaults[item]).to.eql(extended[item]);

    });

    return done();

  });

});