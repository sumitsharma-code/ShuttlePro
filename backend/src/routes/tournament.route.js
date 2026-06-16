const express = require('express');
const tournamentController = require('../controllers/tournament.controller');
const router = express.Router();

router.post('/tournament', tournamentController.createTournament);

router.get('/tournament', tournamentController.getAllTournaments);

router.get('/tournament/:id', tournamentController.getTournamentById);

router.delete("/tournament/:id", tournamentController.deleteTournamentById);

module.exports = router;