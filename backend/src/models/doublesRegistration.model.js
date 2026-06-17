const mongoose = require('mongoose');

const doublesSchema = new mongoose.Schema({
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
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