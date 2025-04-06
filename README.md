This project is a **simple weather app** where users can:

- Search for a city
- View the current weather conditions (temperature, description like "Cloudy" or "Sunny", and an icon)
- Handle errors gracefully (e.g., invalid city names)

The focus is on delivering a clean, responsive interface with basic weather functionality.

---

## 🚀 Features

- 🔍 **Search weather by city name**
- 🌡️ **Display current temperature**
- 🌦️ **Show weather description and icon**
- ⚠️ **Handle invalid city names with a clear error message**
- 📱 **Responsive and user-friendly UI**

---

## 🔗 API Used

**OpenWeatherMap - Current Weather Data API**  
🔗 [https://openweathermap.org/api](https://openweathermap.org/api)

Data fetched includes:

- Temperature
- Weather description
- Weather icon

To use the API, you’ll need to sign up at OpenWeatherMap and get a free API key.

---

## 🧩 React Components

The app uses the following components:

- `<SearchForm />`  
  Handles city name input and triggers the search.

- `<WeatherDetails />`  
  Displays weather details: temperature, description, and icon.
