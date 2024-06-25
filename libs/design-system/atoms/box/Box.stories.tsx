import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";

import Box from "./Box";

const meta: Meta<typeof Box> = {
  title: "Box",
  component: Box,
  argTypes: {},
  args: {},
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;

export const Basic: StoryObj<typeof Box> = {};

// export const AnotherExample: StoryObj<typeof Box> = {
//   args: {
//     text: "Another example",
//   },
// };
