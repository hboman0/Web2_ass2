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

## Images

<img width="542" height="514" alt="image" src="https://github.com/user-attachments/assets/a9fff365-7051-4a82-b99f-102cd50c3d0a" />
<img width="827" height="915" alt="Снимок экрана 2025-12-23 174841" src="https://github.com/user-attachments/assets/f63872e5-f8c3-4e79-8610-9803616a00b1" />


