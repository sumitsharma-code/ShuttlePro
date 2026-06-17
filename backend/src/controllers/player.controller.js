const playerModel = require("../models/player.model");
const asyncHandler = require("../middlewares/asyncHandler");

const ApiError = require("../utils/apiError");

const createPlayer = asyncHandler(
    async (req, res) => {
        const player = await playerModel.create(req.body);

        res.status(201).json({
            success: true,
            message: "Player Added Successfully",
            player
        });
    }
);

const getAllPlayers = asyncHandler(
    async (req, res) => {
        const players = await playerModel.find();

        res.status(200).json({
            success: true,
            message: "Players Fetched Successfully",
            players
        });
    }
);

const getPlayerById = asyncHandler(
    async (req, res) => {
        const player = await playerModel.findById(req.params.id);

        if(!player) {
            throw new ApiError(404, "Player not found");
        }

        res.status(200).json({
            success: true,
            player
        });
    }
);

const deletePlayerById = asyncHandler(
    async (req, res) => {
        const player = await playerModel.findByIdAndDelete(req.params.id);

        if(!player) {
            throw new ApiError(404, "Player not found");
        }

        res.status(200).json({
            success: true,
            message: "Player Deleted Successfully"
        });
    }
);

const updatePlayerById = asyncHandler(
    async (req, res) => {
        const player = await playerModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if(!player) {
            throw new ApiError(404, "Player not found");
        }

        res.status(200).json({
            success: true,
            message: "Player Updated Successfully",
            player
        });
    }
);

module.exports = {
    createPlayer,
    getAllPlayers,
    getPlayerById,
    deletePlayerById,
    updatePlayerById
};