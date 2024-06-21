import { Box, Dropdown, Label, Option } from "@/libs/design-system";
import { themes, useThemeContext } from "@/libs/theme";

import { StyleSheet } from "react-native";

export default function ThemeField() {
  const { theme, setTheme } = useThemeContext();

  const options: Option[] = [
    {
      label: "Light",
      value: themes.light,
    },
    {
      label: "Dark",
      value: themes.dark,
    },
  ];

  const selectedValue = options.find((option) => option.value === theme);

  const handleChange = (value: string) => {
    if (value !== "select") {
      setTheme(value);
    }
  };

  return (
    <Box style={styleSheet.container}>
      <Label>Theme</Label>
      <Dropdown
        value={selectedValue ? selectedValue.value : undefined}
        options={options}
        onChange={handleChange}
        placeholder={{ label: "Select a theme...", value: "select" }}
      />
    </Box>
  );
}

const styleSheet = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
});
