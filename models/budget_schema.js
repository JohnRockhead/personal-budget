const mongoose = require("mongoose");

const budgetSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        trim: true,
        required: true,
        uppercase: true
    },
    budget:  {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        minlength: 7,
        required: true,
        unique: true
    }
}, { collection: 'personal_budget_collection'});

module.exports = mongoose.model('personal_budget_collection', budgetSchema);