import { StyleSheet } from "react-native";

export const makeDropdownStyles = (
  styles: Record<string, string>,
  stylesPropertiesName: Record<string, string>,
) => {
  const { COLOR, BG_COLOR, BORDER_COLOR } = stylesPropertiesName;

  const color = styles[COLOR];
  const backgroundColor = styles[BG_COLOR];
  const borderColor = styles[BORDER_COLOR];

  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderRadius: 4,
      paddingRight: 30, // to ensure the text is never behind the icon
      borderColor,
      color,
      backgroundColor,
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 1,
      borderRadius: 8,
      paddingRight: 30, // to ensure the text is never behind the icon
      borderColor,
      color,
      backgroundColor,
    },
    iconContainer: {
      right: 10,
    },
  });

  return pickerSelectStyles;
};

export const makeDropdownIconStyles = (
  styles: Record<string, string>,
  stylesPropertiesName: Record<string, string>,
) => {
  const { BORDER_COLOR } = stylesPropertiesName;

  const borderColor = styles[BORDER_COLOR];

  const pickerIconSelectStyles = StyleSheet.create({
    icon: {
      backgroundColor: "transparent",
      borderTopColor: borderColor,
      borderTopWidth: 10,
      borderRightWidth: 10,
      borderLeftWidth: 10,
      alignItems: "center",
      justifyContent: "center",
      borderRightColor: "transparent",
      borderLeftColor: "transparent",
      marginTop: "100%",
      width: 0,
      height: 0,
    },
  });

  return pickerIconSelectStyles;
};
