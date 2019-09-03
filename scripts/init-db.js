"use strict";

const fs = require("fs");
const lowdb = require("lowdb");
const FileAsync = require("lowdb/adapters/FileAsync");

const constants = require("../src/constants");

async function init() {
  if (fs.existsSync(constants.DB_PATH)) {
    fs.unlinkSync(constants.DB_PATH);
  }

  const db = await lowdb(new FileAsync(constants.DB_PATH));

  await db
    .defaults({
      butterflies: [
        {
          id: "GI9_EuH8s1",
          commonName: "Zebra Swallowtail",
          species: "Protographium marcellus",
          article: "https://en.wikipedia.org/wiki/Protographium_marcellus"
        },
        {
          id: "xRKSdjkBt4",
          commonName: "Plum Judy",
          species: "Abisara echerius",
          article: "https://en.wikipedia.org/wiki/Abisara_echerius"
        },
        {
          id: "0MUBKMu07U",
          commonName: "Red Pierrot",
          species: "Talicada nyseus",
          article: "https://en.wikipedia.org/wiki/Talicada_nyseus"
        },
        {
          id: "NLktii5zvK",
          commonName: "Texan Crescentspot",
          species: "Anthanassa texana",
          article: "https://en.wikipedia.org/wiki/Anthanassa_texana"
        },
        {
          id: "SMyaT24g-N",
          commonName: "Guava Skipper",
          species: "Phocides polybius",
          article: "https://en.wikipedia.org/wiki/Phocides_polybius"
        },
        {
          id: "DCenP4kQNQ",
          commonName: "Mexican Bluewing",
          species: "Myscelia ethusa",
          article: "https://en.wikipedia.org/wiki/Myscelia_ethusa"
        }
      ],
      users: [
        { id: "OOWzUaHLsK", username: "iluvbutterflies" },
        { id: "sdmU7-wkQX", username: "flutterby" },
        { id: "aqekk3t4kw", username: "metamorphosize_me" }
      ],
      ratings: [
        { butterflyId: "GI9_EuH8s1", userId: "OOWzUaHLsK", rating: 3 },
        { butterflyId: "xRKSdjkBt4", userId: "OOWzUaHLsK", rating: 5 },
        { butterflyId: "0MUBKMu07U", userId: "OOWzUaHLsK", rating: 2 },
        { butterflyId: "NLktii5zvK", userId: "OOWzUaHLsK", rating: 4 },
        { butterflyId: "SMyaT24g-N", userId: "OOWzUaHLsK", rating: 5 },
        { butterflyId: "SMyaT24g-N", userId: "sdmU7-wkQX", rating: 1 },
        { butterflyId: "DCenP4kQNQ", userId: "sdmU7-wkQX", rating: 3 }
      ]
    })
    .write();
}

if (require.main === module) {
  (async () => await init())();
}
