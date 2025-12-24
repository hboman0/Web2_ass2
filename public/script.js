const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

const resultDiv = document.getElementById("result");
const errorP = document.getElementById("error");

searchBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();

    if (!city) {
        errorP.textContent = "Please enter a city name";
        return;
    }

    errorP.textContent = "";
    resultDiv.classList.add("hidden");

    try {
        const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Server error");
        }

        const weather = data.weather;

        document.getElementById("cityName").textContent = city;
document.getElementById("description").textContent = data.description;
document.getElementById("temperature").textContent = data.temperature;
document.getElementById("feelsLike").textContent = data.feels_like;
document.getElementById("wind").textContent = data.wind_speed;
document.getElementById("country").textContent = data.country_code;
document.getElementById("rain").textContent =
    data.rain_volume_last_3h ? `${data.rain_volume_last_3h} mm` : "No rain";

        resultDiv.classList.remove("hidden");

    } catch (error) {
        errorP.textContent = error.message || "Something went wrong";
    }
});
