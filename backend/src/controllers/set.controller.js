const setModel = require('../models/set.model');

async function createSet(req, res) {
    try {
        const set = await setModel.create(req.body);

        res.status(201).json({
            success: true,
            message: "Set Created Successfully",
            set
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

async function getAllSets(req, res) {
    try {
        const sets = await setModel.find();

        res.status(200).json({
            success: true,
            message: "Sets Fetched Successfully",
            sets
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

async function getSetById(req, res) {
    try {
        const set = await setModel.findById(req.params.id);

        if(!set) {
            return res.status(404).json({
                success: false,
                message: "Set Not Found"
            });
        }
        
        res.status(200).json({
            success: true,
            message: "Set Fetched Successfully",
            set
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

async function deleteSetById(req, res) {
    try {
        const set = await setModel.findByIdAndDelete(req.params.id);
        
        if(!set) {
            return res.status(404).json({
                success: false,
                message: "Set Not Found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Set Deleted Successfully"
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
    createSet,
    getAllSets,
    getSetById,
    deleteSetById
};