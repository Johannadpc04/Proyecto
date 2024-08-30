const express = require('express');
const mongoose = require('mongoose');
const Question = require('./models/Question');
const UserScore = require('./models/UserScore');
const app = express();

mongoose.connect('mongodb://localhost:27017/100EstudiantesDicen', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.static('public'));
app.use(express.json()); 

app.get('/questions', async (req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (err) {
        res.status(500).send('Error al obtener las preguntas');
    }
});

app.post('/save-score', async (req, res) => {
    const { username, startTime, endTime, score, correctAnswers, incorrectAnswers } = req.body;

    try {
        const newUserScore = new UserScore({
            username,
            startTime,
            endTime,
            score,
            correctAnswers,
            incorrectAnswers
        });
        
        await newUserScore.save();
        res.status(201).send('Puntuación guardada exitosamente');
    } catch (err) {
        res.status(500).send('Error al guardar la puntuación');
    }
});

app.get('/leaderboard', async (req, res) => {
    try {
        const leaderboard = await UserScore.find().sort({ score: -1 }).limit(10);
        res.json(leaderboard);
    } catch (err) {
        res.status(500).send('Error al obtener la tabla de clasificación');
    }
});

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
