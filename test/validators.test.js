"use strict";

const {
  validateButterfly,
  validateUser,
  validateRating
} = require("../src/validators");

describe("validateButterfly", () => {
  const validButterfly = {
    commonName: "Butterfly Name",
    species: "Species name",
    article: "http://example.com/article"
  };

  it("is ok for a valid butterfly", () => {
    const result = validateButterfly(validButterfly);
    expect(result).toBe(undefined);
  });

  it("throws an error when invalid", () => {
    expect(() => {
      validateButterfly({});
    }).toThrow("The following properties have invalid values:");

    expect(() => {
      validateButterfly({
        ...validButterfly,
        commonName: 123
      });
    }).toThrow("commonName must be a string.");

    expect(() => {
      validateButterfly({
        extra: "field",
        ...validButterfly
      });
    }).toThrow("The following keys are invalid: extra");
  });
});

describe("validateUser", () => {
  const validUser = {
    username: "test-user"
  };

  it("is ok for a valid user", () => {
    const result = validateUser(validUser);
    expect(result).toBe(undefined);
  });

  it("throws an error when invalid", () => {
    expect(() => {
      validateUser({});
    }).toThrow("username is required");

    expect(() => {
      validateUser({
        extra: "field",
        ...validUser
      });
    }).toThrow("The following keys are invalid: extra");

    expect(() => {
      validateUser({
        username: [555]
      });
    }).toThrow("username must be a string");
  });
});

describe("validateRating", () => {
  const validRating = {
    butterflyId: "monarch",
    userId: "test-user-id",
    rating: 5
  };

  it("is ok for a valid rating", () => {
    const result = validateRating(validRating);
    expect(result).toBe(undefined);
  });

  it("throws an error when invalid", () => {
    expect(() => {
      validateRating({});
    }).toThrow("butterflyId is required");

    expect(() => {
      validateRating({
        extra: "field",
        ...validRating
      });
    }).toThrow("The following keys are invalid: extra");

    expect(() => {
      validateRating({
        butterflyId: [555]
      });
    }).toThrow("butterflyId must be a string");
  });
});
