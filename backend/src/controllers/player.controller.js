const playerModel = require("../models/player.model");

async function createPlayer(req, res) {
    try {
        const player = await playerModel.create(req.body);

        res.status(201).json({
            success: true,
            message:"Player Added Successfully",
            player
        });
    }
    catch (error){
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

async function getAllPlayers(req, res) {
    try {
        const allPlayers = await playerModel.find();

        res.status(200).json({
            "success": true,
            message: "Players fetched successfully",
            allPlayers
        });
    }
    catch (error){
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

async function getPlayerById(req, res) {
    try {
        const player = await playerModel.findById(req.params.id);

        if(!player) {
            return res.status(404).json({
                "success": false,
                message: "Player Not Found"
            })
        }

        res.status(200).json({
            success: true,
            player
        });
    }
    catch (error) {
        res.status(500).json({
            "success": false,
            message: error.message
        });
    }
}

async function deletePlayerById(req, res) {
    try {
        const player = await playerModel.findByIdAndDelete(req.params.id);

        if(!player) {
            return res.status(404).json({
                "success": false,
                message: "Player Not Found"
            })
        }

        res.status(200).json({
            success: true,
            message: "Player Deleted Successfully"
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
    createPlayer,
    getAllPlayers,
    getPlayerById,
    deletePlayerById
};
