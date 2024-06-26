import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "react-native";

import Box, { BoxProps } from "./Box";

const meta: Meta<typeof Box> = {
  title: "Box",
  component: Box,
};

export default meta;

export const Basic: StoryObj<typeof Box> = {
  args: {
    style: { padding: 4, backgroundColor: "yellow" },
  },
  render: (props: BoxProps) => {
    return (
      <Box {...props}>
        <Text>Hello</Text>
      </Box>
    );
  },
};
