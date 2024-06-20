import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from "react-native";

import { Box, Screen, Text } from "@/libs/design-system";

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
      <Text>This app includes example code to help you get started.</Text>
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
});
