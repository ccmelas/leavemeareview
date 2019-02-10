const router = require('express').Router();
const auth = require('./auth');

router.get('/', (req, res) => {
    res.json({ message: 'Hi. This is the "Leave me a Review" API' });
})

router.use('/', auth);

module.exports = router;