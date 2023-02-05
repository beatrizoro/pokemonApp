const express = require("express");
const database = require("./database.js");

const pokemonRoutes = require("./routes/pokemonRoute.js");
const userRoutes = require("./routes/userRoute.js");
const app = express();

app.use(express.static("./public"));
app.use(express.json());


app.use("/api/pokemons", pokemonRoutes);
app.use("/api/users", userRoutes);




app.listen(3000);