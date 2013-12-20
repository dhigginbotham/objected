var objection = {};

objection.strictExtend = function (src, dest) {

  for (var o in src) {

    if (dest.hasOwnProperty(o)) {

      src[o] = dest[o];

    };

  };

};

module.exports = objection;