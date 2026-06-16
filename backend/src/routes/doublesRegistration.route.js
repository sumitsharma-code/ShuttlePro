const express = require("express");
const doublesRegistrationController = require('../controllers/doublesRegistration.controller')
const router = express.Router();


router.post("/doublesRegistration", doublesRegistrationController.createDoublesRegistration);

router.get("/doublesRegistration", doublesRegistrationController.getAllDoublesRegistrations);

router.get("/doublesRegistration/:id", doublesRegistrationController.getDoublesRegistrationById);

router.delete("/doublesRegistration/:id", doublesRegistrationController.deleteDoublesRegistrationById);

module.exports = router;