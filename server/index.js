const app = require('./app');

const PORT = 3030;
app.listen(PORT, (err) => {
  if (err) console.error('❌ Unable to connect to the server: ', err);
  console.log(`🌍 Server listening on port ${PORT}`);
});

module.exports = app;
