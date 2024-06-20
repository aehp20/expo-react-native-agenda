import { colors } from "../colors";
import { themes } from "../themes";

const COLOR = "COLOR";

export const stylesTabsPropertiesName = {
  COLOR,
};

export const stylesTabs = {
  [themes.light]: {
    [COLOR]: colors.MetallicSeaweed,
  },
  [themes.dark]: {
    [COLOR]: colors.ChromeYellow,
  },
};
