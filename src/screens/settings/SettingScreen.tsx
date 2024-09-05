import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Switch } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { toggleTheme } from "../../store/themeSlice";


const SettingScreen = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  const handleToggleSwitch = () => {
    dispatch(toggleTheme());
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Setting</Text>
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Dark Mode</Text>
        <Switch
          value={darkMode}
          onValueChange={handleToggleSwitch}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={darkMode ? '#f5dd4b' : '#f4f3f4'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchLabel: {
    fontSize: 18,
    marginRight: 10,
  },
});

export default SettingScreen;
