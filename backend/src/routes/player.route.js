const express = require("express");
const playerController = require('../controllers/player.controller')
const router = express.Router();


// add player
router.post("/player", playerController.createPlayer);

// get all players
router.get("/player", playerController.getAllPlayers);

// get player by id
router.get("/player/:id", playerController.getPlayerById);

// delete player by id
router.delete("/player/:id", playerController.deletePlayerById);

module.exports = router;