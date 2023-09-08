const express = require('express');
const app = express();
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const questionRouter = require('./router/questionRouter');

const corsOptions = {
    origin: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002', 'http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175'], // react app origin 
    credentials: true
};
app.use(cors(corsOptions));

const rateLimitOptions = {
    max: 200,
    windowMs: 1000 * 60 * 60,
    message: "Too many requests from this IP. please try again later!",
    skip: (req) => req.ip === '::1' ? true : false
};

app.use('/api', rateLimit(rateLimitOptions));
app.use(express.json({ limit: '10kb' }));

app.use('/api/v1/questions', questionRouter);

// Handling undefined routes 404
app.all('*', (req, res, next) => {
    res.status(404).json({
        status: 'fail',
        message: `Can't find ${req.originalUrl} on this server !`
    });
});

app.use((err, req, res, next) => {
    console.error(`error ${err.message}`)
    const status = err.status || 400;
    res.status(status).send(err.message)
});

module.exports = app;