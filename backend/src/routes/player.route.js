const express = require("express");
const playerController = require('../controllers/player.controller')
const router = express.Router();


router.post("/player", playerController.createPlayer);

router.get("/player", playerController.getAllPlayers);

router.get("/player/:id", playerController.getPlayerById);

router.delete("/player/:id", playerController.deletePlayerById);

module.exports = router;