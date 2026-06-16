const express = require('express');
const router = express.Router();

const matchController = require('../controllers/match.controller');

router.post("/match", matchController.createMatch);
router.get("/match", matchController.getAllMatches);
router.get("/match/:id", matchController.getMatchById);
router.delete("/match/:id", matchController.deleteMatchById);

module.exports = router;