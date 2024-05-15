const apiKey = "c83e9da8cb3f4ccca12d58154a3ac9cb"; 
const cityNameSpan = document.getElementById("city-name");
const getWeatherButton = document.getElementById("get-weather");
const cityInput = document.getElementById("cityInput");
const temperatureNumber = document.getElementById("temperature");
const windNumber = document.getElementById("vento");
const humidityNumber = document.getElementById("humidity");
const descriptionSpan = document.getElementById("description");
const images = ['img\\mail.gif', 'img\\grrreat.gif', 'img\\fired_up.gif', 'img\\blinkblinkblink.gif', 'img\\Checking.gif', 'img\\Ohverygood.gif'],
                i = 0;

            // preload
            for (let j=images.length; j--;) {
                let img = new Image();
                img.src = images[j];
            }


async function getWeather(city) {
  const apiUrl = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=c83e9da8cb3f4ccca12d58154a3ac9cb`; 

  try {
    const response = await fetch(apiUrl);
    const randomIndex = Math.floor(Math.random() * images.length);
    const weatherIcon = document.getElementById("welcome-picture");
    if (!response.ok) {
      throw new Error(`Error fetching weather data: ${response.status}`);
    }
    const weatherData = await response.json();
    updateWeatherDisplay(weatherData);
    weatherIcon.src = images[randomIndex];
    weatherIcon.style.display = "block";
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to get weather data. Please try again.");
  }
}

function updateWeatherDisplay(data) {
  cityNameSpan.textContent = data.city_name;
  temperatureNumber.textContent = `${Math.round(data.data[0].temp)}°`; // Using data.data[0].temp for current day's temperature
  windNumber.textContent = `${data.data[0].wind_spd} m/s`; // Added wind speed data
  humidityNumber.textContent = `${data.data[0].rh}%`; // Added humidity data
}

getWeatherButton.addEventListener("click", () => {
  const cityName = cityInput.value.trim();
  if (!cityName) {
    alert("Please enter a city name.");
    return;
  }
  getWeather(cityName);
});



            // event handler
            document.getElementById('welcome-picture').addEventListener('click', function() {
                this.src = images[i >= images.length - 1 ? i = 0 : ++i];
            }, false);

