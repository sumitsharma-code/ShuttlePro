const singlesRegistrationModel = require("../models/singlesRegistration.model");

async function createSinglesRegistration(req, res) {
    try {
        const registeration = await singlesRegistrationModel.create(req.body);

        res.status(201).json({
            success: true,
            message:"Singles Registeration Successful",
            registeration
        });
    }
    catch (error){
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

async function getAllSinglesRegistrations(req, res) {
    try {
        const allSinglesRegistrations = await singlesRegistrationModel.find();

        res.status(200).json({
            success: true,
            message: "All Registrations Fetched Successfully",
            allSinglesRegistrations
        });
    }
    catch (error){
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

async function getSinglesRegistrationById(req, res) {
    try {
        const singlesRegistration = await singlesRegistrationModel.findById(req.params.id);

        if(!singlesRegistration) {
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
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

async function deleteSinglesRegistrationById(req, res) {
    try {
        const singlesRegistration = await singlesRegistrationModel.findByIdAndDelete(req.params.id);

        if(!singlesRegistration) {
            return res.status(404).json({
                success: false,
                message: "This Singles Registration Is Not Found"
            })
        }

        res.status(200).json({
            success: true,
            message: "Singles Registration Deleted Successfully"
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
    createSinglesRegistration,
    getAllSinglesRegistrations,
    getSinglesRegistrationById,
    deleteSinglesRegistrationById
};
