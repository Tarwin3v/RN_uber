import React from 'react';
import {View, Text} from 'react-native';
import CovidMessage from '../../components/CovidMessage';
import HomeMap from '../../components/HomeMap';

const HomeScreen = props => {
  return (
    <View>
      <HomeMap />
      <CovidMessage />
    </View>
  );
};

export default HomeScreen;
