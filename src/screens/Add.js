import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Add = () => {
  return (
    <View style={Styles.container}>
       <Text style={Styles.text}>AÑADIIR</Text>
    </View>
  )
}

export default Add;

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