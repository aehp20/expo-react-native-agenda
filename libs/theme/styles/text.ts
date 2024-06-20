import { colors } from "../colors";
import { themes } from "../themes";

const COLOR = "COLOR";

export const stylesTextPropertiesName = {
  COLOR,
};

export const stylesText = {
  [themes.light]: {
    [COLOR]: colors.MediumJungleGreen,
  },
  [themes.dark]: {
    [COLOR]: colors.PenguinWhite,
  },
};
