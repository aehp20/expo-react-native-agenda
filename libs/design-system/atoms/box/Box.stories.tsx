import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "react-native";

import Box from "./Box";

const meta: Meta<typeof Box> = {
  title: "Box",
  component: Box,
};

export default meta;

export const Basic: StoryObj<typeof Box> = {
  args: {
    style: { padding: 4, backgroundColor: "yellow" },
    children: <Text>Hello</Text>,
  },
};
