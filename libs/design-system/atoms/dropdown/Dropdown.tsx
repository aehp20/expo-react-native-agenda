import RNPickerSelect from "react-native-picker-select";

import DropdownIcon from "./DropdownIcon";
import type { DropdownProps } from "./types";
import useDropdown from "./useDropdown";

export default function Dropdown(props: Readonly<DropdownProps>) {
  const {
    value,
    options,
    onChange,
    placeholder,
    isDisabled,
    pickerSelectStyles,
  } = useDropdown(props);

  return (
    <RNPickerSelect
      onValueChange={onChange}
      items={options}
      placeholder={placeholder}
      value={value}
      style={pickerSelectStyles}
      useNativeAndroidPickerStyle={false}
      disabled={isDisabled}
      Icon={DropdownIcon}
    />
  );
}
