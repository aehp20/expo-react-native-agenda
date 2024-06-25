import { StorybookConfig } from "@storybook/react-native";

const main: StorybookConfig = {
  stories: ["../libs/**/*.stories.?(ts|tsx|js|jsx)"],
  addons: [
    "@storybook/addon-ondevice-controls",
    "@storybook/addon-ondevice-actions",
  ],
};

export default main;
