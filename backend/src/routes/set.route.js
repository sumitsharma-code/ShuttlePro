const express = require("express");
const setController = require('../controllers/set.controller');
const validateObjectId = require("../middlewares/validateObjectId");
const router = express.Router();


router.post("/set", setController.createSet);

router.get("/set", setController.getAllSets);

router.get("/set/:id",validateObjectId, setController.getSetById);

router.delete("/set/:id",validateObjectId, setController.deleteSetById);

router.put("/set/:id",validateObjectId, setController.updateSetById);

module.exports = router;