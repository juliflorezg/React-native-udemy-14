import React from 'react';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabHome} from './TabHome';
import {TabSearchScreen} from './TabSearch';

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
        component={TabHome}
        options={{
          tabBarLabel: 'List',
          tabBarIcon: ({color}) => (
            <Icon color={color} size={20} name="list-ul" />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={TabSearchScreen}
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
