const express = require('express');
const teamController = require('../controllers/team.controller');
const validateObjectId = require('../middlewares/validateObjectId');
const router = express.Router();

router.post('/team', teamController.createTeam);

router.get('/team', teamController.getAllTeams);

router.get('/team/:id',validateObjectId, teamController.getTeamById);

router.delete("/team/:id",validateObjectId, teamController.deleteTeamById);

router.put("/team/:id",validateObjectId, teamController.updateTeamById);

module.exports = router;