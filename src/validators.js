"use strict";

const v = require("@mapbox/fusspot");

const validateButterfly = v.assert(
  v.strictShape({
    commonName: v.required(v.string),
    species: v.required(v.string),
    article: v.required(v.string)
  })
);

const validateUser = v.assert(
  v.strictShape({
    username: v.required(v.string)
  })
);

const validateRating = v.assert(
  v.strictShape({
    butterflyId: v.required(v.string),
    userId: v.required(v.string),
    rating: v.required(v.number(v.range[(0, 5)]))
  })
);

module.exports = {
  validateButterfly,
  validateUser,
  validateRating
};
