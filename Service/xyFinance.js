// services/xyFinanceService.js
const axios = require('axios');

const fetchTokens = async () => {
  const response = await axios.get('https://api.xy.finance/tokens');
  return response.data;
};

const fetchQuote = async (token, chain) => {
  const response = await axios.post('https://api.xy.finance/quotes', { token, chain });
  return response.data;
};

const fetchTransactionParams = async (token, chain) => {
  const response = await axios.post('https://api.xy.finance/params', { token, chain });
  return response.data;
};

module.exports = { fetchTokens, fetchQuote, fetchTransactionParams };
