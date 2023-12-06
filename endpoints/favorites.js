let userFavorites = [];

exports.getFavorites = (req, res) => {
  res.json(userFavorites);
};

exports.addToFavorites = (req, res) => {
  const newItem = req.body;
  userFavorites.push(newItem);
  res.json({ success: true, message: 'Item added to favorites' });
};
