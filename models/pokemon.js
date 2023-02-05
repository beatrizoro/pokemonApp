const mongoose = require("mongoose");


// STEP 2 - DEFINE THE SCHEMA


const pokemonSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  Type: {
    type: String,
    required: true
  },
  ImageUrl: {
    type: String,
    required: true
  },
  generation: {
    type: Number,
    required: true
  },
  PokedexNum: {
    type: Number,
    required: true,
    index: {
      unique: true
    }
  }

});
// STEP 3 - CREATE THE MODEL
module.exports  = mongoose.model("pokemon", pokemonSchema);