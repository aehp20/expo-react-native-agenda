import {
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

const HEADER_HEIGHT = 250;

export default function useHeaderAnimatedStyle(
  scrollOffset: SharedValue<number>,
) {
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

  return headerAnimatedStyle;
}
