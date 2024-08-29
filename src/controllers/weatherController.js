const express = require('express');
const router = express.Router();
const weatherService = require('../services/weatherService');

// Route to handle weather requests
router.get('/', async (req, res) => {
  const city = req.query.city;
  if (!city) {
    return res.status(400).json({ error: 'Please provide a city name.' });
  }

  const weatherData = await weatherService.getWeatherData(city);
//   console.log(weatherData)
  if (weatherData.error) {
    return res.status(500).json({ error: weatherData.error });
  }

  res.json(weatherData);
});

module.exports = router;
