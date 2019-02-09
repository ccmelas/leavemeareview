const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'Hi. This is the "Leave me a Review" API'
    });
})

module.exports = router;