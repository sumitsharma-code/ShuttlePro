const teamModel = require("../models/team.model");
const asyncHandler = require("../middlewares/asyncHandler");

const ApiError = require("../utils/apiError");

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
        const teams = await teamModel.find();

        res.status(200).json({
            success: true,
            message: "Teams Fetched Successfully",
            teams: teams
        });
    }
);

const getTeamById = asyncHandler(
    async (req, res) => {
        const team = await teamModel.findById(req.params.id);

        if(!team) {
            throw new ApiError(404, "Team not found");
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

        if(!team) {
            throw new ApiError(404, "Team not found");
        }

        res.status(200).json({
            success: true,
            message: "Team Deleted Successfully"
        });
    }
);

const updateTeamById = asyncHandler(
    async (req, res) => {
        const team = await teamModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if(!team) {
            throw new ApiError(404, "Team not found");
        }

        res.status(200).json({
            success: true,
            message: "Team Updated Successfully",
            team
        });
    }
);

module.exports = {
    createTeam,
    getAllTeams,
    getTeamById,
    deleteTeamById,
    updateTeamById
};