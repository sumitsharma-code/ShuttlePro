const mongoose = require('mongoose');

const setSchema = new mongoose.Schema({
    matchId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Match",
        required: true
    },
    participant1Score: {
        type: Number,
        default: 0,
        min: 0,
        required: true
    },
    participant2Score: {
        type: Number,
        default: 0,
        min: 0,
        required: true
    },
    setNo: {
        type: Number,
        required: true
    }
}); 

const setModel = mongoose.model("Set", setSchema);

module.exports = setModel;