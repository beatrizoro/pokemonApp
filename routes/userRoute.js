const express = require("express");
const User = require("../models/user.js");

const router = express.Router();


// GET (Read All Users)
router.get("/", (req, res) => {
  User.find().exec(function(err, result) {
    if (!err) {
      res.status(200).send(result);
    } else {
      res.status(500).send(err);
    }
  })
})

router.post("/login", (req, res) => {
  // Look for the user to see if they exist
  User.findOne({ $and: [{ Email: req.body.email }, { Password: req.body.password }] }, (err, result) => {
    if (!err) {

      if (result) {
        res.status(200).send(result);
      } else {
        res.status(404).send("Not Found!");
      }
    }

    else {
      res.status(400).send("Invalid email/password");
    }


  })
})


router.post("/register", (req, res) => {
  // Check to see if the user's account exists or not

  User.findOne({ Email: req.body.email }, (err, result) => {
    if (err) {
      res.status(500).send(err);
    }

    if (result) {
      res.status(400).send("User already exists");
    }

    // Create a new User object
    let newUser = new User(req.body);

    // Save the user account
    newUser.save((err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(result);
      }
    })
  })
})


// POST (New User)
router.post("/", (req, res) => {
  let newUser = new User(req.body);

  newUser.save(function(err, result) {
    if (!err) {
      res.status(200).send(result);
    } else {
      res.status(400).send(err);
    }
  })
})

//find user by name or email
router.get("/:id", (req, res) => {
  User.findById(req.params.id, function(err, result) {
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


//add pokemon to your team
router.patch("/:id", (req, res) => {
 User.findByIdAndUpdate(
    req.params.id, // The id of the document
   {$push:{Teams:req.body}}, // The object that contains the changes
    {
      new: true, // return the updated object
      runValidators: true // make sure the updates are validated against the schema
    },
    function(err, result) {
      if (!err) {
        res.status(200).send(result);
      } else {
        res.status(400).send(err);
      }
    }
  )
})


//remove pokemon from your team
router.patch("/remove/:id", (req, res) => {
 User.findByIdAndUpdate(
    req.params.id, // The id of the document
   {$pull:{Teams:req.body}}, // The object that contains the changes
    function(err, result) {
      if (!err) {
        res.status(200).send(result);
      } else {
        res.status(400).send(err);
      }
    }
  )
})
module.exports = router;