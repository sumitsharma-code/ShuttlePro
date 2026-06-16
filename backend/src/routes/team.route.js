const express = require('express');
const teamcontroller = require('../controllers/team.controller');
const router = express.Router();

router.post('/team', teamcontroller.createTeam);

router.get('/team', teamcontroller.getAllTeams);

router.get('/team/:id', teamcontroller.getTeamById);

router.delete("/team/:id", teamcontroller.deleteTeamById);

module.exports = router;