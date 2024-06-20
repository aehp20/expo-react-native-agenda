import { colors } from "../colors";
import { themes } from "../themes";

const COLOR = "COLOR";

export const stylesCollapsiblePropertiesName = {
  COLOR,
};

export const stylesCollapsible = {
  [themes.light]: {
    [COLOR]: colors.MetallicSeaweed,
  },
  [themes.dark]: {
    [COLOR]: colors.ChromeYellow,
  },
};
