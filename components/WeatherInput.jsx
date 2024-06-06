import React, { useState } from "react";
import { Text, TextInput, StyleSheet, View, Pressable } from "react-native";

const WeatherInput = ({ onSearch }) => {
  const [location, setLocation] = useState("");

  const handleSubmit = () => {
    onSearch(location);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={location}
        onChangeText={setLocation}
        placeholder="Enter City or US Zip Code"
        style={styles.input}
      />
      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>SEARCH</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 0,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 6,
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "green",
    borderRadius: 6,
    color: "white",
    alignItems: "center",
    padding: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "semibold",
  },
});

export default WeatherInput;
