import { componentsName, useThemeStyles } from "@/libs/theme";

import {
  StyleSheet,
  Text as TextReactNative,
  type TextProps as TextPropsReactNative,
} from "react-native";

export type LabelProps = TextPropsReactNative;

export default function Label(props: LabelProps) {
  const { style, ...otherProps } = props;

  const { styles, stylesPropertiesName } = useThemeStyles(componentsName.label);

  const { COLOR } = stylesPropertiesName;

  const textStyles = {
    color: styles[COLOR],
  };

  return (
    <TextReactNative
      style={[textStyles, styleSheet.default, style]}
      {...otherProps}
    />
  );
}

const styleSheet = StyleSheet.create({
  default: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
