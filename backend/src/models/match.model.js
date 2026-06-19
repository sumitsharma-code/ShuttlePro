const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    playerId1: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player",
        default: null
    },
    playerId2: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player",
        default: null
    },
    teamId1: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team",
        default: null
    },
    teamId2: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team",
        default: null
    },
    round: {
        type: Number,
    },
    courtNo: {
        type: Number,
        default: 1
    },
    scheduledDate: {
        type: Date,
        default: null
    },
    status: {
        type: String,
        enum: ["scheduled", "live", "ended", "walkover"],
        default: "scheduled"
    },
    winnerParticipantId: {
        type: mongoose.Schema.Types.ObjectId,
        default: null
    }
}); 

const matchModel = mongoose.model("Match", matchSchema);

module.exports = matchModel;