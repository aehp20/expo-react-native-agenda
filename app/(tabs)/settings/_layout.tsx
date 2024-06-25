import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from "react-native";

import { Box, Screen, Text } from "@/libs/design-system";
import ThemeField from "./theme";

export { ErrorBoundary } from "@/libs/design-system";

export default function SettingsScreen() {
  return (
    <Screen
      headerImage={
        <Ionicons size={280} name="settings" style={styles.headerImage} />
      }
    >
      <Box style={styles.titleContainer}>
        <Text type="title">Settings</Text>
      </Box>

      <Box style={styles.field}>
        <ThemeField />
      </Box>
    </Screen>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  field: {
    flexDirection: "column",
    gap: 4,
  },
});
