const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        unique: true
    },
    options: {
        type: [String]
    },
    correctOption: {
        type: Number
    },
    points: {
        type: Number
    }
});

const Question = mongoose.model('Question', questionSchema);



router.get('/', async (req, res) => {
    const questions = await Question.find({});
    res.json(questions).status(200);
});

router.get('/seed', async (req, res) => {
    const questions = await Question.insertMany([
        {
            "question": "Which is the most popular Javascript framework?",
            "options": ["Angular", "React", "Swelte", "Vue"],
            "correctOption": 1,
            "points": 10
        },
        {
            "question": "Which company created React?",
            "options": ["Google", "Apple", "Netflix", "Facebook"],
            "correctOption": 3,
            "points": 10
        },
        {
            "question": "What's the fundamental building block of React apps?",
            "options": ["Components", "Blocks", "Elements", "Effects"],
            "correctOption": 0,
            "points": 10
        }
    ]);
    res.json(questions).status(201);
});

module.exports = router;