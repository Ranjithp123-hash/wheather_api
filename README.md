# Weather Information Service

## Description

The Weather Information Service is a Node.js application that fetches and displays weather information for a given city or location based on user input. The application uses the Weatherstack API to retrieve real-time weather data.

## Features

- Fetches current weather data based on city input.
- Displays temperature, weather description, wind speed, and humidity.
- Error handling for invalid inputs and API errors.

## Project Structure

weather-info-service/
│
├── src/
│   ├── controllers/
│   │   └── weatherController.js
│   ├── services/
│       └── weatherService.js
│   
├── server.js
├── .env
├── .gitignore
├── package.json
└── README.md
