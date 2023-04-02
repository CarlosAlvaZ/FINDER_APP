import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Chat = () => {
  return (
    <View style={Styles.container}>
       <Text style={Styles.text}>CHAT</Text>
    </View>
  );
};

export default Chat;

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