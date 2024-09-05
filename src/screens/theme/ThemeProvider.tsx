import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { CombinedDarkTheme, CombinedLightTheme } from "./CustomTheme";
import { NavigationContainer } from "@react-navigation/native";

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);

    const theme = darkMode ? CombinedDarkTheme : CombinedLightTheme;
    return <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
            {children}
        </NavigationContainer>
    </PaperProvider>
};

export default ThemeProvider;