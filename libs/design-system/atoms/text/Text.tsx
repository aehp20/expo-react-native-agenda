import { componentsName, useThemeStyles } from "@/libs/theme";

import {
  StyleSheet,
  Text as TextReactNative,
  type TextProps as TextPropsReactNative,
} from "react-native";

export type TextProps = TextPropsReactNative & {
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

export default function Text(props: Readonly<TextProps>) {
  const { type = "default", style, ...otherProps } = props;

  const { styles, stylesPropertiesName } = useThemeStyles(componentsName.text);

  const { COLOR } = stylesPropertiesName;

  const textByTypeStyles = {
    default: styleSheet.default,
    title: styleSheet.title,
    defaultSemiBold: styleSheet.defaultSemiBold,
    subtitle: styleSheet.subtitle,
    link: styleSheet.link,
  };

  const textStyles = {
    color: styles[COLOR],
  };

  return (
    <TextReactNative
      style={[textStyles, textByTypeStyles[type], style]}
      {...otherProps}
    />
  );
}

const styleSheet = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
});
