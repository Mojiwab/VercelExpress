const express = require('express');
const app = express();
const rateLimit = require('express-rate-limit');
const contentRouter = require('./contentRouter');

const rateLimitOptions = {
    max: 200,
    windowMs: 1000 * 60 * 60,
    message: "Too many requests from this IP. please try again later!",
    skip: (req) => req.ip === '::1' ? true : false
};

app.use('/api', rateLimit(rateLimitOptions));
app.use(express.json({ limit: '10kb' }));


// app.use('/api/v1/auth', authHandler);
app.use('/api/v1/user', contentRouter);

// Handling undefined routes 404
app.all('*', (req, res, next) => {
    res.status(404).json({
        status: 'fail',
        message: `Can't find ${req.originalUrl} on this server !`
    });
});









module.exports = app;