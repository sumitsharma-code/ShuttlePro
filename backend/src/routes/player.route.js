const express = require("express");
const playerController = require('../controllers/player.controller');
const validateObjectId = require("../middlewares/validateObjectId");
const router = express.Router();


router.post("/player", playerController.createPlayer);

router.get("/player", playerController.getAllPlayers);

router.get("/player/:id",validateObjectId, playerController.getPlayerById);

router.delete("/player/:id",validateObjectId, playerController.deletePlayerById);

module.exports = router;