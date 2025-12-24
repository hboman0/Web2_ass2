require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

const WEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;
const NEWS_API_KEY = process.env.NEWS_API_KEY;


app.get("/api/weather", async (req, res) => {
    const city = req.query.city;

    if (!city) {
        return res.status(400).json({ message: "City parameter is required" });
    }

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
            city
        )}&units=metric&appid=${WEATHER_API_KEY}`;

        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json(data);
        }

        const result = {
            temperature: data.main.temp,
            feels_like: data.main.feels_like,
            description: data.weather[0].description,
            coordinates: data.coord,
            wind_speed: data.wind.speed,
            country_code: data.sys.country,
            rain_volume_last_3h: data.rain ? data.rain["3h"] : null
        };
        
        const newsUrl = `https://newsapi.org/v2/top-headlines?country=${result.country_code.toLowerCase()}&pageSize=3&apiKey=${NEWS_API_KEY}`;
        const newsResponse = await fetch(newsUrl);
        const newsData = await newsResponse.json();

        result.news = newsData.articles
            ? newsData.articles.map(article => ({
                title: article.title,
                source: article.source.name,
                url: article.url
            }))
            : [];
            
        res.json(result);

    } catch (error) {
        console.error("SERVER ERROR:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
