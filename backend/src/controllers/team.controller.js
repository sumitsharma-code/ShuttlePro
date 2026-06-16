const teamModel = require("../models/team.model");

async function createTeam(req, res) {
    try {
        const team = await teamModel.create(req.body);

        res.status(201).json({
            success: true,
            message:"Team Added Successfully",
            team
        });
    }
    catch (error){
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

async function getAllTeams(req, res) {
    try {
        const allTeams = await teamModel.find();

        res.status(200).json({
            "success": true,
            message: "Teams fetched successfully",
            allTeams
        });
    }
    catch (error){
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

async function getTeamById(req, res) {
    try {
        const team = await teamModel.findById(req.params.id);

        if(!team) {
            return res.status(404).json({
                "success": false,
                message: "team Not Found"
            })
        }

        res.status(200).json({
            success: true,
            team
        });
    }
    catch (error) {
        res.status(500).json({
            "success": false,
            message: error.message
        });
    }
}

async function deleteTeamById(req, res) {
    try {
        const team = await teamModel.findByIdAndDelete(req.params.id);

        if(!team) {
            return res.status(404).json({
                "success": false,
                message: "team Not Found"
            })
        }

        res.status(200).json({
            success: true,
            message: "team Deleted Successfully"
        });
    }
    catch (error) {
        res.status(500).json({
            "success": false,
            message: error.message
        });
    }
}

module.exports = {
    createTeam,
    getAllTeams,
    getTeamById,
    deleteTeamById
};
