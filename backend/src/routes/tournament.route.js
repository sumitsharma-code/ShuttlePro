const express = require('express');
const tournamentController = require('../controllers/tournament.controller');
const validateObjectId = require('../middlewares/validateObjectId');
const router = express.Router();

router.post('/tournament', tournamentController.createTournament);

router.get('/tournament', tournamentController.getAllTournaments);

router.get('/tournament/:id',validateObjectId, tournamentController.getTournamentById);

router.delete("/tournament/:id",validateObjectId, tournamentController.deleteTournamentById);

module.exports = router;