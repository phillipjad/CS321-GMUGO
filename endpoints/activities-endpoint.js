// Mock data for activities
const activitiesData = require('./activitiesData.json');

exports.getActivities = (req, res) => {
  res.json(activitiesData);
};

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
