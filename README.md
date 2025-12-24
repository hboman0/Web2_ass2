# Weather API Application

## Description
A backend-focused web application that retrieves real-time weather data using the OpenWeather API.
Additional API - News API, handled strictly on the server side.

## Technologies
- Node.js
- Express.js
- OpenWeather API
- News API

## Setup Instructions
1. Clone the repository
2. Run `npm install`
3. Create a `.env` file and add:
   OPENWEATHER_API_KEY=your_key
   NEWS_API_KEY=your_key
4. Run `node server.js`
5. Open http://localhost:3000

## API Endpoint
GET /api/weather?city=CityName

Fetches real-time weather data for the specified city and enriches it with:

country information
regional news headlines