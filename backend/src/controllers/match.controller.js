const asyncHandler = require('../middlewares/asyncHandler');
const matchModel = require('../models/match.model');

const createMatch = asyncHandler(
    async (req, res) => {
        const match = await matchModel.create(req.body);

        res.status(201).json({
            success: true,
            message: "Match Created Successfully",
            match
        });
    }
);

const getAllMatches = asyncHandler(
    async (req, res) => {
        const matches = await matchModel.find();

        res.status(200).json({
            success: true,
            message: "Matches Fetched Successfully",
            matches
        });
    }
);

const getMatchById = asyncHandler(
    async (req, res) => {
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
);

const deleteMatchById = asyncHandler(
    async (req, res) => {
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
            throw new Error("Match not found");
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