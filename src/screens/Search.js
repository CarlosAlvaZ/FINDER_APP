import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Search = () => {
  return (
    <View style={Styles.container}>
       <Text style={Styles.text}>BUSCADOR</Text>
    </View>
  );
};

export default Search;

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
    fontSize: 22
  }
});