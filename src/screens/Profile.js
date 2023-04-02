import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, FlatList } from 'react-native';
import React from 'react'
import Grid from '../components/Grid'

const Profile = () => {
  return (
    <SafeAreaView style={styles.area}>
      <Text style={styles.name}>Angela Gómez</Text>
      <ScrollView style={styles.container} contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
      showsVerticalScrollIndicator={false}
      >
        <Image style={styles.Img} source={require('../../assets/perfil.jpg')}
        />
        <Text style={styles.userName}>Angela Gómez</Text>
        <Text style={styles.userSubName}>- Estudiante</Text>
        <Text style={styles.userSubName}>- Artes y Moda</Text>
        <Text style={styles.userSubName}>- 20 Años</Text>
        
        <View style={styles.follow}>
        <View style={styles.userInfo}>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>22</Text>
            <Text style={styles.userInfoSubTitle}>Posts</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>10,000</Text>
            <Text style={styles.userInfoSubTitle}>Followers</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>100</Text>
            <Text style={styles.userInfoSubTitle}>Following</Text>
          </View>
          </View>

          <View style={styles.colum}>
            <Grid />
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  area: {
    flex: 1,
    backgroundColor: '#fff'
  },
  follow:{
    textAlign: 'right',
    padding: 20
  },
  Img:{
    height: 150,
    width: 150,
    borderRadius: 75
  },
  name:{
    color: 'white',
    padding: 10,
    backgroundColor: 'black'
  },
  userName:{
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white',
    marginBottom: 10,
  },
  userSubName:{
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#666',
    },
  userInfo:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
    color: '#666'
  },
  userInfoItem:{
    justifyContent: 'center',
    color: '#666',
  },
  userInfoTitle:{
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
    textAlign: 'center',
  },
  userInfoSubTitle:{
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  colum:{
    flexDirection: 'row'
  }
});