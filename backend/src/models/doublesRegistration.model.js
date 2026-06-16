const mongoose = require('mongoose');

const doublesSchema = new mongoose.Schema({
    tournamentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tournament"
    },
    doublesType: {
        type: String,
        enum: ["Males", "Females", "Mixed"],
        required: true
    },
    teamId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team",
        required: true
    }
}); 

const doublesModel = mongoose.model("DoublesRegistration", doublesSchema);

module.exports = doublesModel;