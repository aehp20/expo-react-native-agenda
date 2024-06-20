import { colors } from "../colors";
import { themes } from "../themes";

const BG_COLOR = "BG_COLOR";
const BG_COLOR_HOVER = "BG_COLOR_HOVER";
const BG_COLOR_DISABLED = "BG_COLOR_DISABLED";
const BORDER_COLOR = "BORDER_COLOR";
const BORDER_COLOR_HOVER = "BORDER_COLOR_HOVER";

export const stylesDropdownPropertiesName = {
  BG_COLOR,
  BG_COLOR_HOVER,
  BG_COLOR_DISABLED,
  BORDER_COLOR,
  BORDER_COLOR_HOVER,
};

export const stylesDropdown = {
  [themes.light]: {
    [BG_COLOR]: colors.Alabaster,
    [BG_COLOR_HOVER]: colors.Eggshell,
    [BG_COLOR_DISABLED]: colors.Gray300,
    [BORDER_COLOR]: colors.MetallicSeaweed,
    [BORDER_COLOR_HOVER]: colors.MetallicSeaweedHover,
  },
  [themes.dark]: {
    [BG_COLOR]: colors.Kurotobi,
    [BG_COLOR_HOVER]: colors.DarkLava,
    [BG_COLOR_DISABLED]: colors.Gray300,
    [BORDER_COLOR]: colors.ChromeYellow,
    [BORDER_COLOR_HOVER]: colors.ChromeYellowHover,
  },
};
