const doublesRegistrationModel = require("../models/doublesRegistration.model");

async function createDoublesRegistration(req, res) {
    try {
        const registration = await doublesRegistrationModel.create(req.body);

        res.status(201).json({
            success: true,
            message:"Doubles Registeration Successful",
            registration
        });
    }
    catch (error){
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

async function getAllDoublesRegistrations(req, res) {
    try {
        const allDoublesRegistrations = await doublesRegistrationModel.find();

        res.status(200).json({
            success: true,
            message: "All Registrations Fetched Successfully",
            allDoublesRegistrations
        });
    }
    catch (error){
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

async function getDoublesRegistrationById(req, res) {
    try {
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
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

async function deleteDoublesRegistrationById(req, res) {
    try {
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
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

module.exports = {
    createDoublesRegistration,
    getAllDoublesRegistrations,
    getDoublesRegistrationById,
    deleteDoublesRegistrationById
};
