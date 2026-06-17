const tournamentModel = require('../models/tournament.model');
const singlesRegistrationModel = require("../models/singlesRegistration.model")
const doublesRegistrationModel = require("../models/doublesRegistration.model")
const matchModel = require("../models/match.model")

const asyncHandler = require("../middlewares/asyncHandler");
const ApiError = require('../utils/apiError');

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
        const tournaments = await tournamentModel.find();
        res.status(200).json({
            success: true,
            message: "Tournament Fetched!",
            tournaments: tournaments
        });
    }
);

const getTournamentById = asyncHandler(
    async (req, res) => {
        const tournament = await tournamentModel.findById(req.params.id);

        if(!tournament) {
            throw new ApiError(404, "Tournament not found");
        }

        res.status(200).json({
            success: true,
            message: "tournament fetched!",
            tournament
        });
    }
);

const deleteTournamentById = asyncHandler(
    async (req, res) => {
        const tournament = await tournamentModel.findByIdAndDelete(req.params.id);

        if(!tournament) {
            throw new ApiError(404, "Tournament not found");
        }

        res.status(200).json({
            success: true,
            message: "tournament deleted successfully"
        });
    }
);

const updateTournamentById = asyncHandler(
    async (req, res) => {
        const tournament = await tournamentModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if(!tournament) {
            throw new ApiError(404, "Tournament not found");
        }

        res.status(200).json({
            success: true,
            message: "Tournament Updated Successfully",
            tournament
        });
    }
);

const getSinglesRegistrationByTournamentId = asyncHandler(
    async (req, res) => {
        const singlesRegistration = await singlesRegistrationModel
            .find({tournamentId: req.params.id})
            .populate("playerId");
        
        res.status(200).json({
            success: true,
            message: "Tournament Players Fetched Successfully",
            count: singlesRegistration.length,
            singlesRegistration
        })
    }
);

const getDoublesRegistrationByTournamentId = asyncHandler(
    async (req, res) => {
        const doublesRegistration = await doublesRegistrationModel
            .find({tournamentId: req.params.id})
            .populate("teamId");

        res.status(200).json({
            success: true,
            message: "Tournament Doubles Registrations Fetched Successfully",
            count: doublesRegistration.length,
            doublesRegistration
        })
    }
);

const getMatchesByTournamentId = asyncHandler(
    async (req, res) => {
        const matches = await matchModel
            .find({ tournamentId: req.params.id })
            .populate("playerId1")
            .populate("playerId2")
            .populate("teamId1")
            .populate("teamId2");

        res.status(200).json({
            success: true,
            count: matches.length,
            message: "Tournament Matches Fetched Successfully",
            matches
        });
    }
);

module.exports = {
    createTournament,
    getAllTournaments,
    getTournamentById,
    deleteTournamentById,
    updateTournamentById,
    getSinglesRegistrationByTournamentId,
    getDoublesRegistrationByTournamentId,
    getMatchesByTournamentId
}