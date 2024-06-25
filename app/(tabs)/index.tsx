import { Image, Platform, StyleSheet } from "react-native";

import { Box, HelloWaveIcon, Screen, Text } from "@/libs/design-system";

export default function HomeScreen() {
  return (
    <Screen
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <Box style={styles.titleContainer}>
        <Text type="title">Welcome 2!</Text>
        <HelloWaveIcon />
      </Box>
      <Box style={styles.stepContainer}>
        <Text type="subtitle">Step 1: Try it</Text>
        <Text>
          Edit <Text type="defaultSemiBold">app/(tabs)/index.tsx</Text> to see
          changes. Press{" "}
          <Text type="defaultSemiBold">
            {Platform.select({ ios: "cmd + d", android: "cmd + m" })}
          </Text>{" "}
          to open developer tools.
        </Text>
      </Box>
      <Box style={styles.stepContainer}>
        <Text type="subtitle">Step 2: Explore</Text>
        <Text>
          Tap the Explore tab to learn more about what's included in this
          starter app.
        </Text>
      </Box>
      <Box style={styles.stepContainer}>
        <Text type="subtitle">Step 3: Get a fresh start</Text>
        <Text>
          When you're ready, run{" "}
          <Text type="defaultSemiBold">npm run reset-project</Text> to get a
          fresh <Text type="defaultSemiBold">app</Text> directory. This will
          move the current <Text type="defaultSemiBold">app</Text> to{" "}
          <Text type="defaultSemiBold">app-example</Text>.
        </Text>
      </Box>
    </Screen>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    flexDirection: "column",
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
