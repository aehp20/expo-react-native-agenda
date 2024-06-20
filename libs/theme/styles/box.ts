import { colors } from "../colors";
import { themes } from "../themes";

const COLOR = "COLOR";
const BG_COLOR = "BG_COLOR";

export const stylesBoxPropertiesName = {
  COLOR,
  BG_COLOR,
};

export const stylesBox = {
  [themes.light]: {
    [COLOR]: colors.MediumJungleGreen,
    [BG_COLOR]: colors.Alabaster,
  },
  [themes.dark]: {
    [COLOR]: colors.PenguinWhite,
    [BG_COLOR]: colors.Kurotobi,
  },
};
