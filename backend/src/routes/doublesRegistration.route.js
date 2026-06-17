const express = require("express");
const doublesRegistrationController = require('../controllers/doublesRegistration.controller');
const validateObjectId = require("../middlewares/validateObjectId");
const router = express.Router();


router.post("/doublesRegistration", doublesRegistrationController.createDoublesRegistration);

router.get("/doublesRegistration", doublesRegistrationController.getAllDoublesRegistrations);

router.get("/doublesRegistration/:id", validateObjectId, doublesRegistrationController.getDoublesRegistrationById);

router.delete("/doublesRegistration/:id",validateObjectId , doublesRegistrationController.deleteDoublesRegistrationById);

module.exports = router;