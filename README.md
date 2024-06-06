# React Native Weather App

This is a simple weather application built with React Native and Expo. The app allows users to enter a city or zip code and fetch the current weather information for that location using the WeatherAPI service.

## Features

- User can input a city name or zip code to get weather information.
- Displays current temperature, weather description, and an icon representing the weather.
- Loading indicator while fetching data.
- Error handling for invalid locations or API failures.
- Clean and user-friendly interface.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (>= 12)
- npm or yarn
- Expo CLI

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ini10000/source-weather.git
   cd WeatherApp

   ```

2. **Install dependencies:**

   `npm install` or `yarn install`

3. **Add your WeatherAPI key:**

   Replace [YOUR_WEATHERAPI_KEY] in App.js with your actual WeatherAPI key.

   `const API_KEY = '[YOUR_WEATHERAPI_KEY]'; // Replace with your WeatherAPI key`

4. **Start the project:**

   `expo start`
