var obj = require('../lib'),
    expect = require('expect.js');

describe('strictExtend tests', function () {

  it('should be able to extend an object', function (done) {

    var defaults = {
      first: '1',
      second: '2',
      third: '3'
    };

    var extended = {
      first: /[A-z0-9 ]/gi,
      second: [1,2,3],
      third: {
        one: 'levels',
        two: {
          three: 'levels',
          four: 'levels',
          five: function () {
            return 'levels';
          }
        }
      },
      fourth: 'i wont be extended because this is strict extending'
    };

    obj.strictExtend(defaults, extended);

    expect(defaults.fourth).to.be(undefined);
    expect(defaults.third.two.five()).to.eql('levels');

    Object.keys(defaults).forEach(function (item) {

      expect(defaults[item]).to.eql(extended[item]);

    });

    return done();

  });

  it('should be able to get the index of a collection', function (done) {

    var col = [
      {
        id: 1,
        name: 'first'
      },
      {
        id: 2,
        name: 'second'
      }
    ];

    var index = obj.collectionIndex(col, 'id', 1);

    expect(index).to.eql(0);
    expect(col[index].id).to.eql(1);

    return done();


  });

});