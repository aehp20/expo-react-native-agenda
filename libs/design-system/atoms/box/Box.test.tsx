import { StoryFn, composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react-native";

import { BoxProps } from "./Box";
import * as stories from "./Box.stories";

const storiesForTesting: Record<
  string,
  StoryFn<Partial<BoxProps>>
> = composeStories(stories);

describe("Box", () => {
  for (let key in storiesForTesting) {
    const Story = storiesForTesting[key];
    it(`should render successfully ${key}`, () => {
      render(<Story />);
      expect(screen.getByText("Hello")).not.toBeNull();
    });
  }
});
