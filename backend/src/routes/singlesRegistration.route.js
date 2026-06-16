const express = require("express");
const singlesRegistrationController = require('../controllers/singlesRegistration.controller')
const router = express.Router();


router.post("/singlesRegistration", singlesRegistrationController.createSinglesRegistration);

router.get("/singlesRegistration", singlesRegistrationController.getAllSinglesRegistrations);

router.get("/singlesRegistration/:id", singlesRegistrationController.getSinglesRegistrationById);

router.delete("/singlesRegistration/:id", singlesRegistrationController.deleteSinglesRegistrationById);

module.exports = router;