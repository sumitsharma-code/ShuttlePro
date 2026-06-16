const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
    tournamentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tournament",
        required: true
    },
    matchType: {
        type: String,
        enum: ["singles", "doubles"],
        required: true,
    },
    playerId1: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player",
    },
    playerId2: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player",
    },
    teamId1: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team",
    },
    teamId2: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team",
    },
    round: {
        type: String,
    },
    courtNo: {
        type: Number,
        default: 1
    },
    scheduledDate: {
        type: Date
    },
    status: {
        type: String,
        enum: ["scheduled", "live", "ended"],
        default: "scheduled"
    },
    winnerId: {
        type: mongoose.Schema.Types.ObjectId,
    }
}); 

const matchModel = mongoose.model("Match", matchSchema);

module.exports = matchModel;