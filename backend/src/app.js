const express = require('express');
const app = express();

app.use(express.json());

const playerRoutes = require("./routes/player.route");
const tournamentRoutes = require("./routes/tournament.route");
const teamRoutes = require("./routes/team.route");

app.use("/api", playerRoutes);
app.use("/api", tournamentRoutes);

module.exports = app;