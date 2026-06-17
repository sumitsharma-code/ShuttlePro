const singlesRegistrationModel = require("../models/singlesRegistration.model");
const asyncHandler = require("../middlewares/asyncHandler");

const createSinglesRegistration = asyncHandler(
    async (req, res) => {
        const registration = await singlesRegistrationModel.create(req.body);

        res.status(201).json({
            success: true,
            message: "Singles Registration Successful",
            registration
        });
    }
);

const getAllSinglesRegistrations = asyncHandler(
    async (req, res) => {
        const allSinglesRegistrations = await singlesRegistrationModel.find();

        res.status(200).json({
            success: true,
            message: "All Registrations Fetched Successfully",
            allSinglesRegistrations
        });
    }
);

const getSinglesRegistrationById = asyncHandler(
    async (req, res) => {
        const singlesRegistration = await singlesRegistrationModel.findById(req.params.id);

        if (!singlesRegistration) {
            return res.status(404).json({
                success: false,
                message: "This Singles Registration Is Not Found"
            });
        }

        res.status(200).json({
            success: true,
            singlesRegistration
        });
    }
);

const deleteSinglesRegistrationById = asyncHandler(
    async (req, res) => {
        const singlesRegistration = await singlesRegistrationModel.findByIdAndDelete(req.params.id);

        if (!singlesRegistration) {
            return res.status(404).json({
                success: false,
                message: "This Singles Registration Is Not Found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Singles Registration Deleted Successfully"
        });
    }
);

module.exports = {
    createSinglesRegistration,
    getAllSinglesRegistrations,
    getSinglesRegistrationById,
    deleteSinglesRegistrationById
};