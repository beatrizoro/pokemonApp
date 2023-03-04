const mongoose = require("mongoose");

// STEP 1 - ESTABLISH THE CONNECTION
module.exports = mongoose.connect(
  // Connection String
    "-------------------------------------------------",
  // Options we can pass to Mongoose
  {
  },
  // Callback result of our connection attempt
  function(err) {
    if (!err) {
      console.log("Connected!");
    } else {
      console.log(err);
    }
  }
);
