import { colors } from "../colors";
import { themes } from "../themes";

const BG_COLOR = "BG_COLOR";

export const stylesScreenPropertiesName = {
  BG_COLOR,
};

export const stylesScreen = {
  [themes.light]: {
    [BG_COLOR]: colors.Alabaster,
  },
  [themes.dark]: {
    [BG_COLOR]: colors.Kurotobi,
  },
};
