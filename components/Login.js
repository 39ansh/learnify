import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      <Image source={require('./Images/login.png')} style={styles.image} />
      <View>
      <Text style={styles.welcomeText}>Welcome to learnify</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:40,
  },
  image: {
    height: 300,
    width: 400,
  },
  welcomeText: {
    fontSize:35,
    textAlign:'center',
    fontWeight:'bold',
    
  },
});
