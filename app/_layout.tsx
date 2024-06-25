import Constants from "expo-constants";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import App from "@/components/App";
import { ThemeProvider } from "@/libs/theme/ThemeProvider";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  // Default to rendering your app
  let AppEntryPoint = App;

  // Render Storybook if storybookEnabled is true
  if (Constants?.expoConfig?.extra?.storybookEnabled === "true") {
    AppEntryPoint = require("../.storybook").default;
  }

  return (
    <ThemeProvider theme="light">
      <AppEntryPoint />
    </ThemeProvider>
  );
}
