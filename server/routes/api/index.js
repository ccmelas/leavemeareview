const router = require('express').Router();
const authRoutes = require('./auth');
const userRoutes = require('./user');
const reviewRoutes = require('./reviews');
const dashboardRoutes = require('./dashboard');

router.get('/', (req, res) => {
    res.json({ message: 'Hi. This is the "Leave me a Review" API' });
})

router.use('/', authRoutes);
router.use('/user', userRoutes);
router.use('/reviews', reviewRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;