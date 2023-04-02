import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>HOMEE</Text>
    </View>
  );
};

export default Home;

const Styles = StyleSheet.create({
  container:{
    height: '100%',
    backgroundColor: 'black',
    justifyContent: 'center',
    color: 'white',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 50
  }
});