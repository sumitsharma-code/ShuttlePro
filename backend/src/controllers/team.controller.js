const teamModel = require("../models/team.model");
const asyncHandler = require("../middlewares/asyncHandler");

const createTeam = asyncHandler(
    async (req, res) => {
        const team = await teamModel.create(req.body);

        res.status(201).json({
            success: true,
            message: "Team Added Successfully",
            team
        });
    }
);

const getAllTeams = asyncHandler(
    async (req, res) => {
        const allTeams = await teamModel.find();

        res.status(200).json({
            success: true,
            message: "Teams Fetched Successfully",
            teams: allTeams
        });
    }
);

const getTeamById = asyncHandler(
    async (req, res) => {
        const team = await teamModel.findById(req.params.id);

        if (!team) {
            return res.status(404).json({
                success: false,
                message: "Team Not Found"
            });
        }

        res.status(200).json({
            success: true,
            team
        });
    }
);

const deleteTeamById = asyncHandler(
    async (req, res) => {
        const team = await teamModel.findByIdAndDelete(req.params.id);

        if (!team) {
            return res.status(404).json({
                success: false,
                message: "Team Not Found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Team Deleted Successfully"
        });
    }
);

module.exports = {
    createTeam,
    getAllTeams,
    getTeamById,
    deleteTeamById
};