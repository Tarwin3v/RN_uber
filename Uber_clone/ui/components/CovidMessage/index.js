import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const CovidMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>
        Upgrading this package often requires the font files linked to your
        projects, running this again should update the fonts.
      </Text>
      <Text style={styles.learnMore}>Learn more</Text>
    </View>
  );
};

export default CovidMessage;
