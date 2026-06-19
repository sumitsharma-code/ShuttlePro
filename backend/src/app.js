const express = require('express');
const app = express();

app.use(express.json());

const playerRoutes = require("./routes/player.route");
const tournamentRoutes = require("./routes/tournament.route");
const teamRoutes = require("./routes/team.route");
const matchRoutes = require("./routes/match.route");
const setRoutes = require("./routes/set.route");
const singlesRegistrationRoutes = require("./routes/singlesRegistration.route");
const doublesRegistrationRoutes = require("./routes/doublesRegistration.route");
const categoryRoutes = require('./routes/category.route');

const errorHandler = require('./middlewares/errorHandler');
const notFound = require('./middlewares/notFound');

app.use("/api", playerRoutes);
app.use("/api", tournamentRoutes);
app.use("/api", teamRoutes);
app.use('/api', matchRoutes)
app.use('/api', singlesRegistrationRoutes);
app.use("/api", doublesRegistrationRoutes);
app.use("/api", setRoutes);
app.use("/api", categoryRoutes);



// route not found
app.use(notFound);
// this is the global error handler
app.use(errorHandler);
module.exports = app;