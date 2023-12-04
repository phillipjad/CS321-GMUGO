// Mock data for events
const eventsData = require('./eventsData.json');

exports.getEvents = (req, res) => {
  res.json(eventsData);
};

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
