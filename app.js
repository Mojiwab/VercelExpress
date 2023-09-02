const express = require('express');
const mongoose = require('mongoose');

const app = express();

const dbString = `mongodb+srv://courageTheCowardlyDog:e2VkXTwpdQzDa19v@dummyprojects.hykmfdu.mongodb.net/usePopcorn`;
const port = 5050;

mongoose.connect(dbString).then((con) => {
    console.log('Connection done at - ', dbString)
});

app.use('/', (req, res, next) => {
    res.json('Hello and welcome.').status(200);
});

app.use('/test', (req, res, next) => {
    res.json('Hello and welcome.').status(200);
});

app.listen(port, () => {
    console.log('App started');
})
