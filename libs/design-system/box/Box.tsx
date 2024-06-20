import { componentsName } from "@/libs/theme";
import { useThemeStyles } from "@/libs/theme/ThemeProvider";

import { View, type ViewProps } from "react-native";

export type BoxProps = ViewProps;

export default function Box(props: BoxProps) {
  const { style, ...otherProps } = props;

  const { styles, stylesPropertiesName } = useThemeStyles(componentsName.box);

  const { COLOR, BG_COLOR } = stylesPropertiesName;

  const viewStyles = {
    flex: 1,
    backgroundColor: styles[BG_COLOR],
    color: styles[COLOR],
  };

  return <View style={[viewStyles, style]} {...otherProps} />;
}
