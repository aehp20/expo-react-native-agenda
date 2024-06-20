import { componentsName } from "../componentsName";
import { themes } from "../themes";

import { stylesApp, stylesAppPropertiesName } from "./app";
import { stylesBox, stylesBoxPropertiesName } from "./box";
import {
  stylesCollapsible,
  stylesCollapsiblePropertiesName,
} from "./collapsible";
import { stylesScreen, stylesScreenPropertiesName } from "./screen";
import { stylesTabs, stylesTabsPropertiesName } from "./tabs";
import { stylesText, stylesTextPropertiesName } from "./text";

export type StylesProps = {
  [key: string]: Record<string, string>;
};

export type StylesPropertiesNameProps = {
  [key: string]: Record<string, string>;
};

export type ThemesProps = {
  [key: string]: StylesProps;
};

export const styles: ThemesProps = {
  [themes.light]: {
    [componentsName.app]: stylesApp[themes.light],
    [componentsName.screen]: stylesScreen[themes.light],
    [componentsName.box]: stylesBox[themes.light],
    [componentsName.text]: stylesText[themes.light],
    [componentsName.collapsible]: stylesCollapsible[themes.light],
    [componentsName.tabs]: stylesTabs[themes.light],
  },
  [themes.dark]: {
    [componentsName.app]: stylesApp[themes.dark],
    [componentsName.screen]: stylesScreen[themes.dark],
    [componentsName.box]: stylesBox[themes.dark],
    [componentsName.text]: stylesText[themes.dark],
    [componentsName.collapsible]: stylesCollapsible[themes.dark],
    [componentsName.tabs]: stylesTabs[themes.dark],
  },
};

export const stylesPropertiesName: StylesPropertiesNameProps = {
  [componentsName.app]: stylesAppPropertiesName,
  [componentsName.screen]: stylesScreenPropertiesName,
  [componentsName.box]: stylesBoxPropertiesName,
  [componentsName.text]: stylesTextPropertiesName,
  [componentsName.collapsible]: stylesCollapsiblePropertiesName,
  [componentsName.tabs]: stylesTabsPropertiesName,
};
