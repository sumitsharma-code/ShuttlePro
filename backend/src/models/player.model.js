const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female"],
        required:true
    },
    dob: {
        type: Date,
        required:true
    },
    photo: {
        type: String,
        default: "defaultphotolink"
    }
});

const playerModel = mongoose.model("Player", playerSchema);

module.exports = playerModel;