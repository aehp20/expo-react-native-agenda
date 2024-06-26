import Ionicons from "@expo/vector-icons/Ionicons";
import { ReactNode, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import Box from "@/libs/design-system/atoms/box/Box";
import Text from "@/libs/design-system/atoms/text/Text";
import { componentsName, useThemeStyles } from "@/libs/theme";

type CollapsibleProps = {
  children?: ReactNode;
  title: string;
};

export default function Collapsible(props: Readonly<CollapsibleProps>) {
  const { children, title } = props;

  const [isOpen, setIsOpen] = useState(false);

  const { styles, stylesPropertiesName } = useThemeStyles(
    componentsName.collapsible,
  );

  const { COLOR } = stylesPropertiesName;
  const color = styles[COLOR];

  return (
    <Box>
      <TouchableOpacity
        style={styleSheet.heading}
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}
      >
        <Ionicons
          name={isOpen ? "chevron-down" : "chevron-forward-outline"}
          size={18}
          color={color}
        />
        <Text type="defaultSemiBold">{title}</Text>
      </TouchableOpacity>
      {isOpen && <Box style={styleSheet.content}>{children}</Box>}
    </Box>
  );
}

const styleSheet = StyleSheet.create({
  heading: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  content: {
    marginTop: 6,
    marginLeft: 24,
  },
});
