const matchModel = require('../models/match.model');

async function createMatch(req, res) {
    try {
        const match = await matchModel.create(req.body);

        res.status(201).json({
            success: true,
            message: "Match Created Successfully",
            match
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

async function getAllMatches(req, res) {
    try {
        const matches = await matchModel.find();

        res.status(200).json({
            success: true,
            message: "Matches Fetched Successfully",
            matches
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

async function getMatchById(req, res) {
    try {
        const match = await matchModel.findById(req.params.id);

        if(!match) {
            return res.status(404).json({
                success: false,
                message: "Match Not Found"
            });
        }
        
        res.status(200).json({
            success: true,
            message: "Match Fetched Successfully",
            match
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

async function deleteMatchById(req, res) {
    try {
        const match = await matchModel.findByIdAndDelete(req.params.id);
        
        if(!match) {
            return res.status(404).json({
                success: false,
                message: "Match Not Found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Match Deleted Successfully"
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
    createMatch,
    getAllMatches,
    getMatchById,
    deleteMatchById
};