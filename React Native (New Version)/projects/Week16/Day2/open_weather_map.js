// OpenWeatherMap API key used to authenticate requests (replace with your own key if needed)
const WEATHER_API_KEY = "bbeb34ebf60ad50f7893e7440a1e2b0b";

// Base URL for the OpenWeatherMap API endpoint
const API_STEM = "http://api.openweathermap.org/data/2.5/weather?";

// Function that creates the full URL to fetch weather data based on the given ZIP code
function zipUrl(zip) {
  // Template literal to build a URL with query parameters:
  // - q: the location (zip or city name)
  // - units: 'imperial' means temperature is in Fahrenheit
  // - APPID: the API key for authentication
  return `${API_STEM}q=${zip}&units=imperial&APPID=${WEATHER_API_KEY}`;
}

// Function to fetch the weather forecast data based on a ZIP code
function fetchForecast(zip) {
  // Use fetch() to call the weather API
  return fetch(zipUrl(zip))
    // Convert the raw HTTP response into JSON format
    .then(response => response.json())

    // Process the JSON data and extract only the relevant information
    .then(responseJSON => {
      return {
        // Main weather condition (e.g., Rain, Clear, Clouds)
        main: responseJSON.weather[0].main,

        // More detailed description (e.g., light rain, scattered clouds)
        description: responseJSON.weather[0].description,

        // Current temperature in Fahrenheit
        temp: responseJSON.main.temp,

        // Feels-like temperature
        feels_like: responseJSON.main.feels_like,

        // Minimum temperature
        temp_min: responseJSON.main.temp_min,

        // Maximum temperature
        temp_max: responseJSON.main.temp_max,

        // Humidity percentage
        humidity: responseJSON.main.humidity,

        // Wind speed in miles/hour
        wind_speed: responseJSON.wind.speed,

        // Wind direction in degrees (e.g., 180 = south)
        wind_deg: responseJSON.wind.deg,

        // Atmospheric pressure in hPa (hectopascals)
        pressure: responseJSON.main.pressure,

        // Visibility in meters
        visibility: responseJSON.visibility,

        // Time of sunrise converted to a readable local time string
        sunrise: new Date(responseJSON.sys.sunrise * 1000).toLocaleTimeString(),

        // Time of sunset converted to a readable local time string
        sunset: new Date(responseJSON.sys.sunset * 1000).toLocaleTimeString(),

        // Name of the city
        city: responseJSON.name,

        // Country code (e.g., US)
        country: responseJSON.sys.country,

        // Icon code used to display the weather image
        icon: responseJSON.weather[0].icon
      };
    })

    // Catch and log any error that happens during the fetch or data processing
    .catch(error => {
      console.error(error);
    });
}

// Export an object that exposes fetchForecast function,
// so it can be used in other files like WeatherForecast.js
export default { fetchForecast: fetchForecast };
