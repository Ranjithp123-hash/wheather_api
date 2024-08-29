const axios = require('axios');


// Function to fetch weather data from Weatherstack API
async function getWeatherData(city) {
  const apiKey = process.env.WEATHERSTACK_API_KEY;
  const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

  try {
    const response = await axios.get(url);
    if (response.data.error) {
      return { error: 'Could not fetch weather data. Please check the city name and try again.' };
    }

    const { location, current } = response.data;
    console.log()
    return {
      location: `${location.name}, ${location.country}`,
      temperature: current.temperature,
      weather_descriptions: current.weather_descriptions[0],
      wind_speed: current.wind_speed,
      humidity: current.humidity,
    };
  } catch (error) {
    return { error: 'An error occurred while fetching the weather data.' };
  }
}

module.exports = { getWeatherData };
