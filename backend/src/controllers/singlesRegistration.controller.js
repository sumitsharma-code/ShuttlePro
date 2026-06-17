const singlesRegistrationModel = require("../models/singlesRegistration.model");
const asyncHandler = require("../middlewares/asyncHandler");

const ApiError = require("../utils/apiError");

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
        const registrations = await singlesRegistrationModel.find();

        res.status(200).json({
            success: true,
            message: "All Registrations Fetched Successfully",
            registrations
        });
    }
);

const getSinglesRegistrationById = asyncHandler(
    async (req, res) => {
        const singlesRegistration = await singlesRegistrationModel.findById(req.params.id);

        if(!singlesRegistration) {
            throw new ApiError(404, "Singles registration not found");
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

        if(!singlesRegistration) {
            throw new ApiError(404, "Singles registration not found");
        }

        res.status(200).json({
            success: true,
            message: "Singles Registration Deleted Successfully"
        });
    }
);

const updateSinglesRegistrationById = asyncHandler(
    async (req, res) => {
        const singlesRegistration = await singlesRegistrationModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if(!singlesRegistration) {
            throw new ApiError(404, "Singles registration not found");
        }

        res.status(200).json({
            success: true,
            message: "Singles Registration Updated Successfully",
            singlesRegistration
        });
    }
);

module.exports = {
    createSinglesRegistration,
    getAllSinglesRegistrations,
    getSinglesRegistrationById,
    deleteSinglesRegistrationById,
    updateSinglesRegistrationById
};