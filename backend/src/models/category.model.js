const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    tournamentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tournament"
    },
    matchType: {
        type: String,
        enum: ["singles", "doubles"],
        required: true
    },
    gender: {
        type: String,
        enum: ["male", "female"],
    },
    name : {
        type: String,
        required: true
    },
    minAge : {
        type: Number,
        dafault: null,
        min: 0
    },
    maxAge: {
        type: Number,
        default: null,
        min: 0
    }
});

const categoryModel = mongoose.model("Category", categorySchema);

module.exports = categoryModel;