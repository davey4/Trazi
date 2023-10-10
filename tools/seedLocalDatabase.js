const db = require("../db");
const CityPopulation = require("../models/cityPopulation");
const csvtojson = require("csvtojson");
const fileName = "./data.csv"

const main = async () => {
  let arrayToInsert = [];
  await csvtojson().fromFile(fileName).then(source => {
    // Fetching the all data from each row
    for (let i = 0; i < source.length; i++) {
      const row = {
        city: source[i]["city"],
        state: source[i]["state"],
        population: parseInt(source[i]["population"]),
      };
      if (row.city && row.state && row.population) {
        arrayToInsert.push(row);
      }
    }
  });
  await CityPopulation.insertMany(arrayToInsert)
};

const run = async () => {
  await main();
  db.close()
};

run();
