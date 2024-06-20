import { componentsName, useThemeStyles } from "@/libs/theme";

import RNPickerSelect from "react-native-picker-select";

export type Option = {
  value: string;
  label: string;
};

// export type DropdownProps = Omit<Props, "onChange" | "noOptionsMessage"> & {
//   customStyles?: Record<string, string>;
//   noOptionsMessage?: string;
//   onChange: (option: Option) => void;
// };

export type DropdownProps = any;

export function Dropdown({
  value,
  options,
  onChange,
  placeholder,
  customStyles,
  noOptionsMessage,
  isDisabled,
  isSearchable = false,
  blurInputOnSelect = true,
  ...props
}: DropdownProps) {
  const { styles, stylesPropertiesName } = useThemeStyles(
    componentsName.dropdown,
  );

  const {
    BG_COLOR,
    BG_COLOR_HOVER,
    BG_COLOR_DISABLED,
    BORDER_COLOR,
    BORDER_COLOR_HOVER,
  } = stylesPropertiesName;

  return (
    <RNPickerSelect
      onValueChange={onChange}
      items={options}
      placeholder={placeholder}
    />
  );
}
