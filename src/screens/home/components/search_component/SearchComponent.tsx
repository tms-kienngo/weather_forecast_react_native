import { DebouncedFunc } from "lodash";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { MagnifyingGlassPlusIcon } from "react-native-heroicons/outline";
import { MapPinIcon } from "react-native-heroicons/solid";
import styles from "./style";

type SearchProps = {
  isShow: Boolean;
  handleTextDebounce: DebouncedFunc<(value: string) => void>;
  searchAction: () => void;
  locations: LocationSearch[] | [];
  onLocationSelect: (location: LocationSearch)=> void;
};
const SearchComponents = (props: SearchProps) => {
  const handleItemPress = (item: LocationSearch) => {
    props.onLocationSelect(item);
  };
  console.log("Search locations ==>", props.locations.length);
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.inputContainer,
          {
            backgroundColor: props.isShow
              ? "rgba(255, 255, 255, 0.2)"
              : "transparent",
          },
        ]}
      >
        {props.isShow ? (
          <TextInput
            onChangeText={props.handleTextDebounce}
            placeholder="Search city"
            placeholderTextColor={"lightgray"}
            style={styles.textInput}
          />
        ) : null}
        <TouchableOpacity
          onPress={props.searchAction}
          style={styles.iconSearch}
        >
          <MagnifyingGlassPlusIcon size={25} color="white" />
        </TouchableOpacity>
      </View>
      {props?.locations?.length != 0 && props.isShow ?
        
        <View style={styles.showSearchContainer}>
          
          {props?.locations?.map((loc, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => handleItemPress(loc)}
                style={styles.touchLocationContainer}
              >
                <MapPinIcon size={20} color="grey" />
                <Text style={styles.textLocation}>
                  {loc?.name}, {loc?.country}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        : null}
    </View>
  );
};

export default SearchComponents;
