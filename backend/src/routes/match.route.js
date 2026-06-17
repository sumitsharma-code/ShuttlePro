const express = require('express');
const router = express.Router();

const matchController = require('../controllers/match.controller');
const validateObjectId = require('../middlewares/validateObjectId');

router.post("/match", matchController.createMatch);
router.get("/match", matchController.getAllMatches);
router.get("/match/:id",validateObjectId, matchController.getMatchById);
router.delete("/match/:id",validateObjectId, matchController.deleteMatchById);
router.put("/match/:id",validateObjectId, matchController.updateMatchById);

module.exports = router;