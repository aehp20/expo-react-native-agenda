import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "react-native";

import { ThemeProvider, themes } from "@/libs/theme";
import Box, { BoxProps } from "./Box";

const meta: Meta<typeof Box> = {
  title: "Box",
  component: Box,
};

export default meta;

export const LightBox: StoryObj<typeof Box> = {
  args: {
    style: { padding: 4, backgroundColor: "yellow" },
  },
  render: (props: BoxProps) => {
    return (
      <ThemeProvider theme={themes.light}>
        <Box {...props}>
          <Text>Hello</Text>
        </Box>
      </ThemeProvider>
    );
  },
};

export const DarkBox: StoryObj<typeof Box> = {
  args: {
    style: { padding: 4, backgroundColor: "yellow" },
  },
  render: (props: BoxProps) => {
    return (
      <ThemeProvider theme={themes.dark}>
        <Box {...props}>
          <Text>Hello</Text>
        </Box>
      </ThemeProvider>
    );
  },
};
