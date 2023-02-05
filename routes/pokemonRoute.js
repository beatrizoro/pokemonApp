const express = require("express");
const pokemon = require("../models/pokemon.js");

const router = express.Router();

//get all
router.get("/", (req, res) => {
  pokemon.find().sort({PokedexNum:1}).exec(function(err, result) {
    if (!err) {
      res.status(200).send(result);
    } else {
      res.status(500).send(err);
    }
  })
})


// POST (New Pokemon)
router.post("/", (req, res) => {
  let newPokemon = new pokemon(req.body);

  newPokemon.save(function(err, result) {
    if (!err) {
      res.status(200).send(result);
    } else {
      res.status(400).send(err);
    }
  })
})


router.get("/:id", (req, res) => {
  pokemon.findById(req.params.id).exec(function(err, result) {
    if (!err) {
      if (result) {
        res.status(200).send(result);
      } else {
        res.status(404).send("Not Found!");
      }
    } else {
      res.status(500).send(err);
    }
  })
})


//find pokemon based on pokemon pokedex number
router.get("/pokedexnum=/:id", (req, res) => {
  pokemon.findOne({PokedexNum:req.params.id}).exec(function(err, result) {
    if (!err) {
      if (result) {
        res.status(200).send(result);
      } else {
        res.status(404).send("Not Found!");
      }
    } else {
      res.status(500).send(err);
    }
  })
})


//find pokemon based on pokemon name 
router.get("/name=/:id", (req, res) => {
  let partialToMatch= new RegExp(req.params.id,'i'); 
  pokemon.find({Name:partialToMatch}).sort({PokedexNum:1}).exec(function(err, result) {
    if (!err) {
      if (result) {
        res.status(200).send(result);
      } else {
        res.status(404).send("Not Found!");
      }
    } else {
      res.status(500).send(err);
    }
  })
})
//find pokemon based on pokemon type 
router.get("/type=/:id", (req, res) => {
  let partialToMatch= new RegExp(req.params.id,'i'); 
  pokemon.find({Type:partialToMatch}).sort({PokedexNum:1}).exec(function(err, result) {
    if (!err) {
      if (result) {
        res.status(200).send(result);
      } else {
        res.status(404).send("Not Found!");
      }
    } else {
      res.status(500).send(err);
    }
  })
})

module.exports = router;