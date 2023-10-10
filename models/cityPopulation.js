const { Schema, model } = require("mongoose");

const CityPopulation = new Schema(
  {
    city: { type: String, required: true },
    state: { type: String, required: true },
    population: { type: Number, required: true },
  },
  { timestamps: true, versionKey: false }
);

CityPopulation.index({ city: 1 }, { collation: { locale: "en", strength: 2 } })
CityPopulation.index({ state: 1 }, { collation: { locale: "en", strength: 2 } })

module.exports = model("cityPopulations", CityPopulation);
