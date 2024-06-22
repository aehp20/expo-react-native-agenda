import { componentsName, useThemeStyles } from "@/libs/theme";
import { makeDropdownStyles } from "./styles";
import { DropdownProps } from "./types";

export default function useDropdown(props: DropdownProps) {
  const { value, options, onChange, placeholder, isDisabled } = props;

  const { styles, stylesPropertiesName } = useThemeStyles(
    componentsName.dropdown,
  );

  const pickerSelectStyles = makeDropdownStyles(styles, stylesPropertiesName);

  return {
    value,
    options,
    onChange,
    placeholder,
    isDisabled,
    pickerSelectStyles,
  };
}
