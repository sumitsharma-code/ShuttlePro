const tournamentModel = require('../models/tournament.model');

async function createTournament(req, res) {
    try {
        const tour = await tournamentModel.create(req.body);

        res.status(201).json({
            success: true,
            message: "Tournament Created Successfully!",
            tour
        });
    }
    catch (error){
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

async function getAllTournaments(req, res) {
    try {
        const tour = await tournamentModel.find();
        res.status(200).json({
            success: true,
            message: "Tournament Fetched!",
            tour
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

async function getTournamentById(req, res) {
    try {
        const tour = await tournamentModel.findById(req.params.id);

        if(!tour) {
            return res.status(404).json({
                success: false,
                message: "No tournament found with this id"
            });
        }
        res.status(200).json({
            success: true,
            message: "tournament fetched!",
            tour
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

async function deleteTournamentById(req, res) {
    try {
        const tour = await tournamentModel.findByIdAndDelete(req.params.id);

        if(!tour) {
            return res.status(404).json({
                success: false,
                message: "No tournament found with this id"
            });
        }

        res.status(200).json({
            success: true,
            message: "tournament deleted successfully"
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
    createTournament,
    getAllTournaments,
    getTournamentById,
    deleteTournamentById
}