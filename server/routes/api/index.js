const router = require('express').Router();
const authRoutes = require('./auth');
const userRoutes = require('./user');

router.get('/', (req, res) => {
    res.json({ message: 'Hi. This is the "Leave me a Review" API' });
})

router.use('/', authRoutes);
router.use('/user', userRoutes);

module.exports = router;