// import { DefaultTheme } from 'react-native-paper';
import { fonts } from ".";
import { colors } from ".";
import { DefaultTheme as NavigationDefaultTheme } from "@react-navigation/native";
import merge from "deepmerge";
import { Platform } from "react-native";

export const theme = {
  // ...DefaultTheme,
  roundness: 2,
  colors: {
    // ...DefaultTheme.colors,
    ...colors,
  },
  fonts: { ...fonts },
  shadow: {
    shadowColor: "rgba(0,0,0,0.15)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.29,
    shadowRadius: Platform.OS === "ios" ? 10.65 : 6,
    elevation: Platform.OS === "ios" ? 8 : 5,
  },
  smallShadow: {
    shadowColor: "rgba(17, 17, 17, 0.4)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.29,
    shadowRadius: 8,
    elevation: 8,
  },
  mediumShadow: {
    shadowColor: "rgba(17, 17, 17, 0.4)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.29,
    shadowRadius: 24,
    elevation: 20,
  },
  largeShadow: {
    shadowColor: "rgba(17, 17, 17, 0.8)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.29,
    shadowRadius: 64,
    elevation: 32,
  },
};

export default merge(NavigationDefaultTheme, theme);
