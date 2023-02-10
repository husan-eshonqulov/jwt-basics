const express = require('express');

const authMiddleware = require('../middleware/auth');
const { login, dashboard } = require('../controllers/main');

const router = express.Router();

router.post('/login', login);
router.get('/dashboard', authMiddleware, dashboard);

module.exports = router;
