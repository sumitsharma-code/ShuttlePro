const playerModel = require("../models/player.model");
const asyncHandler = require("../middlewares/asyncHandler");

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
        const allPlayers = await playerModel.find();

        res.status(200).json({
            success: true,
            message: "Players Fetched Successfully",
            allPlayers
        });
    }
);

const getPlayerById = asyncHandler(
    async (req, res) => {
        const player = await playerModel.findById(req.params.id);

        if (!player) {
            return res.status(404).json({
                success: false,
                message: "Player Not Found"
            });
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

        if (!player) {
            return res.status(404).json({
                success: false,
                message: "Player Not Found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Player Deleted Successfully"
        });
    }
);

module.exports = {
    createPlayer,
    getAllPlayers,
    getPlayerById,
    deletePlayerById
};