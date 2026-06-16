const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    playerId1: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player",
        required: true
    },
    playerId2: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player",
        required: true
    },
});

const teamModel = mongoose.model("Team", teamSchema);

module.exports = teamModel;