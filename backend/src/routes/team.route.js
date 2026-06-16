const express = require('express');
const teamController = require('../controllers/team.controller');
const router = express.Router();

router.post('/team', teamController.createTeam);

router.get('/team', teamController.getAllTeams);

router.get('/team/:id', teamController.getTeamById);

router.delete("/team/:id", teamController.deleteTeamById);

module.exports = router;