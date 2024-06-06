import React, { useState } from "react";
import { Button, TextInput, StyleSheet, View } from "react-native";

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
        placeholder="Enter City"
        style={styles.input}
      />
      <Button title="Search" onPress={handleSubmit} />
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
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default WeatherInput;
