import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../store';
import { fetchLocations, clearLocations } from '../../../../store/searchSlice';
import { fetchWeather } from '../../../../store/weatherSlice';
import styles from './style';
import { MagnifyingGlassPlusIcon } from "react-native-heroicons/outline";
import { MapPinIcon } from "react-native-heroicons/solid";

const SearchComponent = () => {
  const [showInput, setShowInput] = useState(false);
  const [query, setQuery] = useState('');
  const dispatch: AppDispatch = useDispatch();
  const { locations, loading } = useSelector((state: RootState) => state.search);

  const handleSearch = () => {
    if (query.trim().length > 2) {
      dispatch(fetchLocations({ query }));
    }
  };

  const handleLocationSelect = (location: string) => {
    dispatch(fetchWeather({ cityName: location, day: 7 }));
    setShowInput(false);
    setQuery('');
    dispatch(clearLocations());
  };

  return (
    <View style={styles.container}>
      <View style={[styles.inputContainer,
      {
        backgroundColor: showInput
          ? "rgba(255, 255, 255, 0.2)"
          : "transparent",
      },
      ]}>
        {showInput ? (
          <TextInput
            placeholder="Enter location"
            placeholderTextColor={"lightgray"}
            style={styles.textInput}
            value={query}
            onChangeText={setQuery}
            onSubmitEditing={handleSearch}
            autoFocus
          />
        ) : null}
        <TouchableOpacity
          onPress={() => {
            setShowInput(!showInput);
            setQuery('');
            dispatch(clearLocations());
          }}
          style={styles.iconSearch}>
          <MagnifyingGlassPlusIcon size={25} color="white" />
        </TouchableOpacity>
      </View>

      {
        locations.length != 0 && showInput ? (
          <View style={styles.showSearchContainer}>
            {
              locations.map((loc, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleLocationSelect(loc.name)}
                    style={styles.touchLocationContainer}
                  >
                    <MapPinIcon size={20} color="grey" />
                    <Text style={styles.textLocation}>
                      {loc?.name}, {loc?.country}
                    </Text>
                  </TouchableOpacity>
                );
              })
            }
          </View>
        ) : null
      }
    </View>
  );
};



export default SearchComponent;

