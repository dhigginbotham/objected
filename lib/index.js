var objection = {};

objection.strictExtend = function (src, dest) {

  Object.keys(src).forEach(function (key) {

    if (dest.hasOwnProperty(key)) {

        src[key] = dest[key];

    };

  });

  return src;

};

objection.collectionIndex = function (collection, key, val) {

  var col = collection,
      ln = col.length;

  if (ln) {
    
    for (var i=0;i<ln;++i) {

      return (col[i][key] === val) ? i : void 0;

    };

  };

};

module.exports = objection;