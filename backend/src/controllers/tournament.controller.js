const tournamentModel = require('../models/tournament.model');
const asyncHandler = require("../middlewares/asyncHandler");

const createTournament = asyncHandler(
    async (req, res) => {
        const tournament = await tournamentModel.create(req.body);

        res.status(201).json({
            success: true,
            message: "Tournament Created Successfully!",
            tournament
        });
    }
);

const getAllTournaments = asyncHandler(
    async (req, res) => {
        const tour = await tournamentModel.find();
        res.status(200).json({
            success: true,
            message: "Tournament Fetched!",
            tour
        });
    }
);

const getTournamentById = asyncHandler(
    async (req, res) => {
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
);

const deleteTournamentById = asyncHandler(
    async (req, res) => {
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
);


module.exports = {
    createTournament,
    getAllTournaments,
    getTournamentById,
    deleteTournamentById
}