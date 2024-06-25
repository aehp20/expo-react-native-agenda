import { componentsName, useThemeStyles } from "@/libs/theme";
import { StyleSheet } from "react-native";

export default function useScreenStyles() {
  const { styles, stylesPropertiesName } = useThemeStyles(
    componentsName.screen,
  );

  const { BG_COLOR } = stylesPropertiesName;

  const styleSheet = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: styles[BG_COLOR],
    },
    header: {
      height: 250,
      overflow: "hidden",
      backgroundColor: styles[BG_COLOR],
    },
    content: {
      padding: 32,
      gap: 16,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
    },
  });

  return styleSheet;
}
