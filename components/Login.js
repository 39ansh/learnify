import React from 'react';
import { View, Image, StyleSheet, Text} from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      <Image source={require('./Images/login.png')} style={styles.image} />
      <Text>Welcome to learnify</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
});
