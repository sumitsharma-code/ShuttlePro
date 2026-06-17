const doublesRegistrationModel = require("../models/doublesRegistration.model");
const asyncHandler = require('../middlewares/asyncHandler');

const createDoublesRegistration = asyncHandler(
    async (req, res) => {
        const registration = await doublesRegistrationModel.create(req.body);

        res.status(201).json({
            success: true,
            message:"Doubles Registeration Successful",
            registration
        });
    }
);

const getAllDoublesRegistrations = asyncHandler(
    async (req, res) => {
        const allDoublesRegistrations = await doublesRegistrationModel.find();

        res.status(200).json({
            success: true,
            message: "All Registrations Fetched Successfully",
            allDoublesRegistrations
        });
    }
);

const getDoublesRegistrationById = asyncHandler(
    async (req, res) => {
        const doublesRegistration = await doublesRegistrationModel.findById(req.params.id);

        if(!doublesRegistration) {
            return res.status(404).json({
                success: false,
                message: "This Doubles Registration Is Not Found"
            });
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
            return res.status(404).json({
                success: false,
                message: "This Doubles Registration Is Not Found"
            })
        }

        res.status(200).json({
            success: true,
            message: "Doubles Registration Deleted Successfully"
        });
    }
);

module.exports = {
    createDoublesRegistration,
    getAllDoublesRegistrations,
    getDoublesRegistrationById,
    deleteDoublesRegistrationById
};
