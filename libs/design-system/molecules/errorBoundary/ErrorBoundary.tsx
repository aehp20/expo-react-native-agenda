import { componentsName, useThemeStyles } from "@/libs/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from "react-native";

import Box from "../../atoms/box/Box";
import Text from "../../atoms/text/Text";
import Screen from "../../templates/screen/Screen";

type ErrorBoundaryProps = {
  error: Error;
  retry: () => Promise<void>;
};

export default function ErrorBoundary(props: ErrorBoundaryProps) {
  const { error, retry } = props;

  const { styles, stylesPropertiesName } = useThemeStyles(
    componentsName.errorBoundary,
  );

  const { BG_COLOR, BORDER_COLOR } = stylesPropertiesName;

  const bgColor = `bg-${styles[BG_COLOR]}`;
  const borderColor = `border-${styles[BORDER_COLOR]}`;

  const styleSheet = StyleSheet.create({
    headerImage: {
      color: "#808080",
      bottom: -20,
      left: 0,
      position: "absolute",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
    message: {
      display: "flex",
      justifyContent: "center",
      borderWidth: 1,
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
      padding: 8,
      borderColor,
    },
    stack: {
      display: "flex",
      justifyContent: "center",
      borderTopWidth: 0,
      borderWidth: 1,
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4,
      padding: 8,
      borderColor,
    },
  });

  return (
    <Screen
      headerImage={
        <Ionicons size={220} name="chatbox" style={styleSheet.headerImage} />
      }
    >
      <Box style={styleSheet.container}>
        <Box>
          <Text>Whoops, something went wrong.</Text>
        </Box>
        <Box>
          <Text>
            Please either refresh the page or return home to try again.
          </Text>
        </Box>
        <Box style={styleSheet.message}>
          <Text>{error.message}</Text>
        </Box>
        <Box style={styleSheet.stack}>
          <Text>{error.stack}</Text>
        </Box>
      </Box>
    </Screen>
  );
}
