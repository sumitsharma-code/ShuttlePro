const mongoose = require('mongoose');

const singlesSchema = new mongoose.Schema({
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    playerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player",
        required: true
    }
}); 

const singlesModel = mongoose.model("SinglesRegistration", singlesSchema);

module.exports = singlesModel;