import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "react-native";

import { ThemeProvider, themes } from "@/libs/theme";
import Screen from "../../templates/screen/Screen";
import Box, { BoxProps } from "./Box";

const meta: Meta<typeof Box> = {
  title: "Box",
  component: Box,
  args: {
    style: { padding: 4, backgroundColor: "yellow" },
  },
};

export default meta;

export const LightBox: StoryObj<typeof Box> = {
  render: (props: BoxProps) => {
    return (
      <ThemeProvider theme={themes.light}>
        <Screen>
          <Box {...props}>
            <Text>Hello</Text>
          </Box>
        </Screen>
      </ThemeProvider>
    );
  },
};

export const DarkBox: StoryObj<typeof Box> = {
  render: (props: BoxProps) => {
    return (
      <ThemeProvider theme={themes.dark}>
        <Screen>
          <Box {...props}>
            <Text>Hello</Text>
          </Box>
        </Screen>
      </ThemeProvider>
    );
  },
};
