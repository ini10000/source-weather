import React, { useState } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import axios from "axios";
import WeatherInput from "../components/WeatherInput";
import WeatherDisplay from "../components/WeatherDisplay";

const API_KEY = "9900e340dbaa4eaba4e12723240606";

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (location: string) => {
    if (!location) return;
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
      setError("An error occurred fetching weather data.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <WeatherInput onSearch={handleSearch} />
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : weatherData ? (
        <WeatherDisplay weatherData={weatherData} />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
});
