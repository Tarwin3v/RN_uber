import React, {useState, useEffect} from 'react';
import {Text, TextInput, View, SafeAreaV, SafeAreaView} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import styles from './styles';
import {apiKey} from '../../../config/places';

const SearchScreen = () => {
  const [from, setFrom] = useState('');
  const [destination, setDestination] = useState('');
  const [startPlace, setStartPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  useEffect(() => {
    if (startPlace && destinationPlace) {
      console.warn('Redirect to result');
    }
  }, [startPlace, destinationPlace]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            setStartPlace({data, details});
          }}
          fetchDetails
          styles={{textInput: styles.textInput}}
          query={{
            key: apiKey,
            language: 'en'
          }}
        />
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
          }}
          fetchDetails
          styles={{textInput: styles.textInput}}
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
