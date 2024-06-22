import type { PropsWithChildren, ReactElement } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";

import Box from "@/libs/design-system/atoms/box/Box";
import { componentsName, useThemeStyles } from "@/libs/theme";

const HEADER_HEIGHT = 250;

type Props = PropsWithChildren<{
  headerImage: ReactElement;
}>;

export default function Screen({ children, headerImage }: Props) {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const { styles, stylesPropertiesName } = useThemeStyles(
    componentsName.screen,
  );

  const { BG_COLOR } = stylesPropertiesName;

  const screenStyles = { backgroundColor: styles[BG_COLOR] };

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75],
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [2, 1, 1],
          ),
        },
      ],
    };
  });

  return (
    <Box>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        <Animated.View
          style={[screenStyles, styleSheet.header, headerAnimatedStyle]}
        >
          {headerImage}
        </Animated.View>
        <Box style={styleSheet.content}>{children}</Box>
      </Animated.ScrollView>
    </Box>
  );
}

const styleSheet = StyleSheet.create({
  header: {
    height: 250,
    overflow: "hidden",
  },
  content: {
    padding: 32,
    gap: 16,
    overflow: "hidden",
  },
});
