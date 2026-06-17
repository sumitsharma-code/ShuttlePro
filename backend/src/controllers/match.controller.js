const asyncHandler = require('../middlewares/asyncHandler');
const matchModel = require('../models/match.model');

const ApiError = require("../utils/apiError");

const createMatch = asyncHandler(
    async (req, res) => {
        const match = await matchModel.create(req.body);

        res.status(201).json({
            success: true,
            message: "Match created successfully",
            match
        });
    }
);

const getAllMatches = asyncHandler(
    async (req, res) => {
        const matches = await matchModel.find();

        res.status(200).json({
            success: true,
            message: "Matches fetched successfully",
            matches
        });
    }
);

const getMatchById = asyncHandler(
    async (req, res) => {
        const match = await matchModel.findById(req.params.id);

        if(!match) {
            throw new ApiError(404, "Match not found");
        }
        
        res.status(200).json({
            success: true,
            message: "Match Fetched Successfully",
            match
        });
    }
);

const deleteMatchById = asyncHandler(
    async (req, res) => {
        const match = await matchModel.findByIdAndDelete(req.params.id);
        
        if(!match) {
            throw new ApiError(404, "Match not found");
        }

        res.status(200).json({
            success: true,
            message: "Match Deleted Successfully"
        });
    }
);

const updateMatchById = asyncHandler(
    async (req, res) => {
        const match = await matchModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if(!match) {
            throw new ApiError(404, "Match not found");
        }

        res.status(200).json({
            success: true,
            message: "Match Updated Successfully",
            match
        });
    }
);

module.exports = {
    createMatch,
    getAllMatches,
    getMatchById,
    deleteMatchById,
    updateMatchById
};