const { Router } = require('express');
const router = Router();

router.use('/register', require('./register'));

module.exports = router;