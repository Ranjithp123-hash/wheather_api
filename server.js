require('dotenv').config();
const express = require('express');
const weatherController = require('./src/controllers/weatherController');

const app = express();
const PORT =  process.env.PORT || 8300;


// Defining route
app.use('/weather', weatherController);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
