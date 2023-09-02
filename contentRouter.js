const express = require('express');
const router = express.Router();

const User = require('./userModel');

router.get('/', async (req, res) => {

    await User.create({
        name: 'Dvorak'
    })
    res.json(await User.find({})).status(200);
})

module.exports = router;