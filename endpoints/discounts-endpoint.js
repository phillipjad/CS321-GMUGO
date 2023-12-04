const express = require('express');
const app = express();
const port = 3000;

// Mock data for discounts
const discountsData = require('./discountsData.json');

app.get('/api/discounts', (req, res) => {
  res.json(discountsData);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
