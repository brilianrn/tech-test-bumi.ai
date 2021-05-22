const router = require('express').Router();
const photoRoute = require('./photoRoute');

router.use('/photos', photoRoute);

module.exports = router;