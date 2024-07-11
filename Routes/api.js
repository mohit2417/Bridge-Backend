
// routes/api.js
const express = require('express');
const router = express.Router();
const { getTokens, getQuote, getTransactionParams } = require('../controllers/apiController');

router.get('/tokens', getTokens);
router.post('/quotes', getQuote);
router.post('/params', getTransactionParams);

module.exports = router;
