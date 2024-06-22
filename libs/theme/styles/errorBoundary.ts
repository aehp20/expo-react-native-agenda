import { colors } from "../colors";
import { themes } from "../themes";

const COLOR_HEADER = "COLOR_HEADER";
const BG_COLOR_HEADER = "BG_COLOR_HEADER";
const BORDER_COLOR = "BORDER_COLOR";

export const stylesErrorBoundaryPropertiesName = {
  COLOR_HEADER,
  BG_COLOR_HEADER,
  BORDER_COLOR,
};

export const stylesErrorBoundary = {
  [themes.light]: {
    [COLOR_HEADER]: colors.Alabaster,
    [BG_COLOR_HEADER]: colors.MetallicSeaweed,
    [BORDER_COLOR]: colors.MetallicSeaweed,
  },
  [themes.dark]: {
    [COLOR_HEADER]: colors.Kurotobi,
    [BG_COLOR_HEADER]: colors.ChromeYellow,
    [BORDER_COLOR]: colors.ChromeYellow,
  },
};
