var objection = {};

objection.strictExtend = function (src, dest) {

  Object.keys(src).forEach(function (key) {

    if (dest.hasOwnProperty(key)) {

        src[key] = dest[key];

    };

  });

  return src;

};

module.exports = objection;