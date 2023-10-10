const CityPopulation = require("../models/cityPopulation")

const getOne = async (req, res) => {
  try {
    const params = req.params;
    const city = params.city;
    const state = params.state;
    const data = await CityPopulation.findOne({
      state: state,
      city: city
    }).collation({ locale: "en", strength: 2 });
    // check if state/city exists
    if (!data) {
      return res.status(400).json(`Couldn't find population for ${city}, ${state}`);
    }
    return res.status(200).json({ population: data.population });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const putOne = async (req, res) => {
  try {
    const params = req.params;
    const city = params.city;
    const state = params.state;
    // check that population is present and an integer
    const population = parseInt(req.body);
    if (!population) {
      return res.status(400).json("Population is a required field to perform this operation. Please provide a body with plain text that contains just the population number.");
    }
    const updated = await CityPopulation.findOneAndUpdate(
      {
        state: state,
        city: city
      },
      {
        population: population
      }
    ).collation({ locale: "en", strength: 2 })
    // if data was updated return else create one
    if (updated) return res.status(200).json();
    const create = new CityPopulation({
      state: state,
      city: city,
      population: population
    });
    create.save();
    return res.status(201).json();
  }
  catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = { getOne, putOne }
