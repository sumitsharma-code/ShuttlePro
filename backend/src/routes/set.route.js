const express = require("express");
const setController = require('../controllers/set.controller')
const router = express.Router();


router.post("/set", setController.createSet);

router.get("/set", setController.getAllSets);

router.get("/set/:id", setController.getSetById);

router.delete("/set/:id", setController.deleteSetById);

module.exports = router;