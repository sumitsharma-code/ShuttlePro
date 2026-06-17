const doublesRegistrationModel = require("../models/doublesRegistration.model");
const asyncHandler = require('../middlewares/asyncHandler');
const ApiError = require("../utils/apiError");

const createDoublesRegistration = asyncHandler(
    async (req, res) => {
        const registration = await doublesRegistrationModel.create(req.body);

        res.status(201).json({
            success: true,
            message:"Doubles registration successful",
            registration
        });
    }
);

const getAllDoublesRegistrations = asyncHandler(
    async (req, res) => {
        const registrations = await doublesRegistrationModel.find();

        res.status(200).json({
            success: true,
            message: "Doubles registrations fetched successfully",
            registrations
        });
    }
);

const getDoublesRegistrationById = asyncHandler(
    async (req, res) => {
        const doublesRegistration = await doublesRegistrationModel.findById(req.params.id);

        if(!doublesRegistration) {
            throw new ApiError(404, "Doubles Registration not found");
        }

        res.status(200).json({
            success: true,
            doublesRegistration
        });
    }
);

const deleteDoublesRegistrationById = asyncHandler(
    async (req, res) => {
        const doublesRegistration = await doublesRegistrationModel.findByIdAndDelete(req.params.id);

        if(!doublesRegistration) {
            throw new ApiError(404, "Doubles Registration not found");
        }

        res.status(200).json({
            success: true,
            message: "Doubles Registration Deleted Successfully"
        });
    }
);

const updateDoublesRegistrationById = asyncHandler(
    async (req, res) => {
        const registration = await doublesRegistrationModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if(!registration) {
            throw new ApiError(404, "Doubles Registration not found");
        }

        res.status(200).json({
            success: true,
            message: "Doubles Registration Updated Successfully",
            registration
        });
    }
);

module.exports = {
    createDoublesRegistration,
    getAllDoublesRegistrations,
    getDoublesRegistrationById,
    deleteDoublesRegistrationById,
    updateDoublesRegistrationById
};
