import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
export const Loading = () => {
  return (
    <View style={searchStyles.activityContainer}>
      <ActivityIndicator size={50} color="grey" />
      <Text style={{fontSize: 18}}>Loading...</Text>
    </View>
  );
};

const searchStyles = StyleSheet.create({
  activityContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'teal',
  },
});
