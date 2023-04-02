import { View, Dimensions, StyleSheet, Image, ScrollView } from 'react-native'
import React, {Component} from 'react'

export default class Grid extends Component {
    render(){
        return (
            <ScrollView>
            <View style={styles.grid}>

              <View style={styles.wrap}>
               <Image style={styles.pic} source={require('../../assets/perfil.jpg')} />
              </View>
              <View style={styles.wrap}>
               <Image style={styles.pic} source={require('../../assets/perfil.jpg')} />
              </View>
              <View style={styles.wrap}>
               <Image style={styles.pic} source={require('../../assets/perfil.jpg')} />
              </View>
              <View style={styles.wrap}>
               <Image style={styles.pic} source={require('../../assets/perfil.jpg')} />
              </View>
            </View>
            </ScrollView>
          );
    }
  
}

const styles = StyleSheet.create({
    grid: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        textAlign: 'center'
    },
    wrap: {
        margin: 20,
        height: 150,
        width: (Dimensions.get('window').width / 2) - 4,
    },
    pic:{
        flex: 2,
        width: null,
        alignSelf: 'stretch',
        borderRadius: 10
    }
})