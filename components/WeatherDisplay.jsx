import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const WeatherDisplay = ({ weatherData }) => {
  const { current, location } = weatherData;

  return (
    <View style={styles.container}>
      <Text style={styles.city}>{location.name}</Text>
      <Text style={styles.temp}>{current.temp_c} °C</Text>
      <Image
        style={styles.icon}
        source={{ uri: `http:${current.condition.icon}` }}
      />
      <Text style={styles.description}>{current.condition.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 20,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  city: {
    fontSize: 24,
    fontWeight: "bold",
  },
  temp: {
    fontSize: 32,
  },
  icon: {
    width: 100,
    height: 100,
  },
  description: {
    fontSize: 18,
    fontStyle: "italic",
  },
});

export default WeatherDisplay;
