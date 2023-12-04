// Mock data for search
const searchData = require('./searchData.json');

exports.search = (req, res) => {
  const query = req.query.q;
  const results = searchData.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
  res.json(results);
};
