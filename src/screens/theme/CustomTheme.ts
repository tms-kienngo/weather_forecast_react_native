import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
  Theme as NavigationTheme,
} from "@react-navigation/native";
import {
  MD3LightTheme as PaperLightTheme,
  MD3DarkTheme as PaperDarkTheme,
  MD3Theme as PaperTheme,
} from "react-native-paper";

const colors = {
  primary: "#007A84",
  secondary: "#C2944A",
  accent: "#335C67",
  backgroundLight: "#F0F0F0",
  backgroundDark: "#1B2B34",
  textLight: "#333333",
  textDark: "#E0E0E0",
  border: "#CCCCCC",
  notification: "#FF80AB",
};

const CombinedLightTheme: NavigationTheme & PaperTheme = {
  ...NavigationDefaultTheme,
  ...PaperLightTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperLightTheme.colors,
    primary: colors.primary,
    background: colors.backgroundLight,
    card: colors.backgroundLight,
    text: colors.textLight,
    border: colors.border,
    notification: colors.notification,
    secondary: colors.secondary,
  },
};

const CombinedDarkTheme: NavigationTheme & PaperTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
    primary: colors.primary,
    background: colors.backgroundDark,
    card: colors.backgroundDark,
    text: colors.textDark,
    border: colors.border,
    notification: colors.notification,
    secondary: colors.secondary,
  },
};

export { CombinedLightTheme, CombinedDarkTheme };
