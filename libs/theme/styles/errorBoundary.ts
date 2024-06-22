import { colors } from "../colors";
import { themes } from "../themes";

const BG_COLOR = "BG_COLOR";
const BORDER_COLOR = "BORDER_COLOR";

export const stylesErrorBoundaryPropertiesName = {
  BG_COLOR,
  BORDER_COLOR,
};

export const stylesErrorBoundary = {
  [themes.light]: {
    [BG_COLOR]: colors.Gray300,
    [BORDER_COLOR]: colors.MetallicSeaweed,
  },
  [themes.dark]: {
    [BG_COLOR]: colors.Grilled,
    [BORDER_COLOR]: colors.ChromeYellow,
  },
};
