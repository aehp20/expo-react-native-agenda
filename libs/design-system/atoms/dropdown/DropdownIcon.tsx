import { componentsName, useThemeStyles } from "@/libs/theme";

import { View } from "react-native";

import { makeDropdownIconStyles } from "./styles";

export default function DropdownIcon() {
  const { styles, stylesPropertiesName } = useThemeStyles(
    componentsName.dropdown,
  );

  const pickerIconSelectStyles = makeDropdownIconStyles(
    styles,
    stylesPropertiesName,
  );

  return <View style={pickerIconSelectStyles.icon} />;
}
