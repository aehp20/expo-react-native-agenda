import type { PropsWithChildren, ReactElement } from "react";
import Animated, {
  useAnimatedRef,
  useScrollViewOffset,
} from "react-native-reanimated";

import Box from "@/libs/design-system/atoms/box/Box";
import useHeaderAnimatedStyle from "./useHeaderAnimatedStyle";
import useScreenStyles from "./useScreenStyles";

type ScreenProps = PropsWithChildren<{
  headerImage?: ReactElement;
}>;

export default function Screen({
  children,
  headerImage,
}: Readonly<ScreenProps>) {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const styleSheet = useScreenStyles();
  const headerAnimatedStyle = useHeaderAnimatedStyle(scrollOffset);

  return (
    <Box style={[styleSheet.main]}>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        {headerImage && (
          <Animated.View style={[styleSheet.header, headerAnimatedStyle]}>
            {headerImage}
          </Animated.View>
        )}
        <Box style={styleSheet.content}>{children}</Box>
      </Animated.ScrollView>
    </Box>
  );
}
