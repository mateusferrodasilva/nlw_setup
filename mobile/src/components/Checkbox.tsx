import { TouchableOpacity, View, Text, TouchableOpacityProps } from "react-native";
import Animated, { ZoomIn, ZoomOut } from "react-native-reanimated";
import colors from "tailwindcss/colors";
import { Feather } from "@expo/vector-icons";

interface Props extends TouchableOpacityProps {
  title: string;
  checked?: boolean;
}

export function Checkbox({ checked = false, title, ...rest }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.7} className="flex-row mb-2 items-center" {...rest}>
      {checked ? (
        <Animated.View
          entering={ZoomIn}
          exiting={ZoomOut}
          className="h-8 w-8 bg-green-500 rounded-lg items-center justify-center"
        >
          <Feather name="check" size={20} color={colors.white} />
        </Animated.View>
      ) : (
        <View className="h-8 w-8 bg-zinc-900 rounded-lg" />
      )}
      <Text className="text-white text-base ml-3 font-semibold">{title}</Text>
    </TouchableOpacity>
  );
}
