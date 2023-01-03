import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {HomeScreen} from '../screens/HomeScreen';
import {SearchScreen} from '../screens/SearchScreen';
import {Navigator} from './Navigator';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#5856D6',
        tabBarLabelStyle: {
          marginBottom: Platform.OS === 'android' ? 10 : 0,
          fontSize: 18,
        },
        tabBarStyle: {
          // opacity: 0.8,
          // backgroundColor: 'red',
          borderWidth: 0,
          elevation: 0,
          // paddingVertical: 20,
          height: 70,
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255, .85)',
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={Navigator}
        options={{
          tabBarLabel: 'List',
          tabBarIcon: ({color}) => (
            <Icon color={color} size={20} name="list-ul" />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => (
            <Icon color={color} size={20} name="search" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
