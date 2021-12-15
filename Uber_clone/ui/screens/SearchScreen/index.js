import React, {useState} from 'react';
import {Text, TextInput, View, SafeAreaV, SafeAreaView} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import styles from './styles';
import {apiKey} from '../../../config/places';

const SearchScreen = () => {
  const [from, setFrom] = useState('');
  const [destination, setDestination] = useState('');
  const [startPlace, setStartPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          value={from}
          onChangeText={setFrom}
          style={styles.textInput}
          placeholder="From"
        />
        <TextInput
          value={destination}
          onChangeText={setDestination}
          style={styles.textInput}
          placeholder="Where to?"
        />
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
          }}
          style={{textInput: styles.textInput}}
          fetchDetails
          query={{
            key: apiKey,
            language: 'en'
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
un;
