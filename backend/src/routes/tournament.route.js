const express = require('express');
const tournamentController = require('../controllers/tournament.controller');
const validateObjectId = require('../middlewares/validateObjectId');
const router = express.Router();

// CRUD
router.post('/tournament', tournamentController.createTournament);

router.get('/tournament', tournamentController.getAllTournaments);

router.get('/tournament/:id',validateObjectId, tournamentController.getTournamentById);

router.delete("/tournament/:id",validateObjectId, tournamentController.deleteTournamentById);

router.put("/tournament/:id",validateObjectId, tournamentController.updateTournamentById);

// specific tournament data
router.get("/tournament/:id/singles-registrations", validateObjectId, tournamentController.getSinglesRegistrationByTournamentId );
router.get("/tournament/:id/doubles-registrations", validateObjectId, tournamentController.getDoublesRegistrationByTournamentId );
router.get("/tournament/:id/matches", validateObjectId, tournamentController.getMatchesByTournamentId);

module.exports = router;