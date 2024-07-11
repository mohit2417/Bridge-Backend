// controllers/apiController.js
const xyFinanceService = require('../services/xyFinanceService');

const getTokens = async (req, res, next) => {
  try {
    const tokens = await xyFinanceService.fetchTokens();
    res.json(tokens);
  } catch (error) {
    next(error);
  }
};

const getQuote = async (req, res, next) => {
  try {
    const { token, chain } = req.body;
    const quote = await xyFinanceService.fetchQuote(token, chain);
    res.json(quote);
  } catch (error) {
    next(error);
  }
};

const getTransactionParams = async (req, res, next) => {
  try {
    const { token, chain } = req.body;
    const params = await xyFinanceService.fetchTransactionParams(token, chain);
    res.json(params);
  } catch (error) {
    next(error);
  }
};

module.exports = { getTokens, getQuote, getTransactionParams };
