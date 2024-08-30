const mongoose = require('mongoose');

const userScoreSchema = new mongoose.Schema({
    username: { type: String, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    score: { type: Number, required: true },
    correctAnswers: { type: Number, required: true },
    incorrectAnswers: { type: Number, required: true }
});

module.exports = mongoose.model('UserScore', userScoreSchema);
