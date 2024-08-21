import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const UVIndicator = ({ uvIndex }) => {
    const colors = ['green', 'yellow', 'orange', 'red', 'purple'];
    const getColorIndex = (uvIndex) => Math.floor(uvIndex / 2);
    const gradientColor = colors[getColorIndex(uvIndex)];

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={[gradientColor, 'white']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ width: '100%', height: 16, borderRadius: 12,flex:1, }}
            />
             <Text style={{ marginLeft: 10, color: 'white', fontSize: 16, }}>UV: {uvIndex}</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export default UVIndicator;