import React from 'react';
import { Text, StyleSheet, View, TabBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Search from '../screens/Search';
import Add from '../screens/Add';
import Chat from '../screens/Chat';
import Ionic from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
    return(
        <Tab.Navigator 
        screenOptions={({route}) => ({ 
            tabBarIcon: ({focused, size, colour}) => {
            let iconName;
            if(route.name === 'Feed'){
                iconName = focused ? "ios-home-sharp" : "ios-home-outline"; 
                size = focused ? size + 8 : size + 5;
            }else if(route.name === 'Buscar'){
                iconName = focused ? "search" : "search-outline";
                size = focused ? size + 8 : size + 5;
            }else if(route.name === 'Añadir'){
                iconName = focused ? "add-circle" : "add-circle-outline";
                size = focused ? size + 27 : size + 25;
            }else if(route.name === 'Chat'){
                iconName = focused ? "ios-chatbox-ellipses" : "ios-chatbox-ellipses-outline";
                size = focused ? size + 8 : size + 5;
            }else if(route.name === 'Perfil'){
                iconName = focused ? "person" : "person-outline";
                size = focused ? size + 8 : size + 5;
            }
            return <Ionic name={iconName} size={size} colour={colour} />;
        },
        })}
        tabBarOptions={{
            activeTintColor: 'blue',
            inactiveTintColor: 'black',
            showLabel: false,
            style: {
                backgroundColor: '#0085E6',
                height: 60,
            },
        }}>
            <Tab.Screen name = 'Feed' component = { Home } />
            <Tab.Screen name = 'Buscar' component = { Search } />
            <Tab.Screen name = 'Añadir' component = { Add } />
            <Tab.Screen name = 'Chat' component = { Chat } />
            <Tab.Screen name = 'Perfil' component = { Profile } />
        </Tab.Navigator>

    );
}

const styles = StyleSheet.create({})