import { componentsName, useThemeStyles } from "@/libs/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from "react-native";

import Box from "../../atoms/box/Box";
import Text from "../../atoms/text/Text";
import Screen from "../../templates/screen/Screen";

type ErrorBoundaryProps = {
  error: Error;
};

export default function ErrorBoundary(props: Readonly<ErrorBoundaryProps>) {
  const { error } = props;

  const { styles, stylesPropertiesName } = useThemeStyles(
    componentsName.errorBoundary,
  );

  const { COLOR_HEADER, BG_COLOR_HEADER, BORDER_COLOR } = stylesPropertiesName;

  const colorHeader = styles[COLOR_HEADER];
  const bgColorHeader = styles[BG_COLOR_HEADER];
  const borderColor = styles[BORDER_COLOR];

  const styleSheet = StyleSheet.create({
    headerImage: {
      color: colorHeader,
      backgroundColor: bgColorHeader,
      bottom: -20,
      left: 0,
      position: "absolute",
      width: "100%",
    },
    container: {
      flexDirection: "column",
      width: "100%",
      gap: 4,
    },
    title: {
      justifyContent: "center",
    },
    subTitle: {
      justifyContent: "center",
    },
    messageContainer: {
      flexDirection: "column",
    },
    messageHeader: {
      justifyContent: "center",
      borderWidth: 1,
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
      padding: 8,
      borderColor,
      backgroundColor: bgColorHeader,
    },
    messageContent: {
      color: colorHeader,
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
        <Box style={styleSheet.title}>
          <Text type="title">Whoops, something went wrong.</Text>
        </Box>
        <Box style={styleSheet.subTitle}>
          <Text type="subtitle">
            Please either refresh the page or return home to try again.
          </Text>
        </Box>
        <Box style={styleSheet.messageContainer}>
          <Box style={styleSheet.messageHeader}>
            <Text style={styleSheet.messageContent}>{error.message}</Text>
          </Box>
          <Box style={styleSheet.stack}>
            <Text>{error.stack}</Text>
          </Box>
        </Box>
      </Box>
    </Screen>
  );
}
