import { componentsName, useThemeStyles } from "@/libs/theme";

import { View, ViewStyle, type ViewProps } from "react-native";

export type BoxProps = ViewProps;

export default function Box(props: BoxProps) {
  const { style, ...otherProps } = props;

  const { styles, stylesPropertiesName } = useThemeStyles(componentsName.box);

  const { BG_COLOR } = stylesPropertiesName;

  const viewStyles = {
    display: "flex",
    flexDirection: "row",
    backgroundColor: styles[BG_COLOR],
  } satisfies ViewStyle;

  return <View style={[viewStyles, style]} {...otherProps} />;
}
