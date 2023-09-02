const express = require('express');
const mongoose = require('mongoose');
const app = require('./app');

const dbString = `mongodb+srv://courageTheCowardlyDog:e2VkXTwpdQzDa19v@dummyprojects.hykmfdu.mongodb.net/usepopcorn`;
const port = 5050;

mongoose.connect(dbString).then((con) => {
    console.log('Connection done at - ', dbString)
});



app.listen(port, () => {
    console.log('App started');
})
