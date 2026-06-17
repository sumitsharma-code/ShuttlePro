const express = require("express");
const singlesRegistrationController = require('../controllers/singlesRegistration.controller');
const validateObjectId = require("../middlewares/validateObjectId");
const router = express.Router();


router.post("/singlesRegistration", singlesRegistrationController.createSinglesRegistration);

router.get("/singlesRegistration", singlesRegistrationController.getAllSinglesRegistrations);

router.get("/singlesRegistration/:id",validateObjectId ,singlesRegistrationController.getSinglesRegistrationById);

router.delete("/singlesRegistration/:id",validateObjectId , singlesRegistrationController.deleteSinglesRegistrationById);

router.put("/singlesRegistration/:id",validateObjectId , singlesRegistrationController.updateSinglesRegistrationById);

module.exports = router;