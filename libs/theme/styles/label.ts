import { colors } from "../colors";
import { themes } from "../themes";

const COLOR = "COLOR";

export const stylesLabelPropertiesName = {
  COLOR,
};

export const stylesLabel = {
  [themes.light]: {
    [COLOR]: colors.MetallicSeaweed,
  },
  [themes.dark]: {
    [COLOR]: colors.ChromeYellow,
  },
};
