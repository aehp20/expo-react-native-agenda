import { Dropdown, Label, Option } from "@/libs/design-system";
import { themes, useThemeContext } from "@/libs/theme";

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
    <div className="flex flex-col w-1/2 md:w-1/4 gap-1">
      <Label>Theme</Label>
      <Dropdown
        // value={selectedValue}
        options={options}
        onChange={handleChange}
        placeholder={{ label: "Select a theme...", value: "select" }}
      />
    </div>
  );
}
