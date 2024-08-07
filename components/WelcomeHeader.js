// WelcomeHeader.js
import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { AuthContext } from "./../app/Context/AuthContext";
import { useContext } from "react";
import { HelloWave } from "./HelloWave";

const WelcomeHeader = () => {
  const { userData } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>
        Hello <HelloWave />
      </Text>
      <Text style={styles.userName}>{userData.name}</Text>
      <Image source={{ uri: userData.picture }} style={styles.avatar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  greeting: {
    fontSize: 18,
    color: "#000",
    fontWeight:"500"
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default WelcomeHeader;
