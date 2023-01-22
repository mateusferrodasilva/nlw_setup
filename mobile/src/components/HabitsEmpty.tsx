import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";

interface Params {
  date: string;
}

export function HabitsEmpty({ date }: Params) {
  const { navigate } = useNavigation();
  return (
    <Text className="text-zinc-400 text-base">
      Não existem hábitos para {date},{" "}
      <Text
        className="text-violet-400 text-base underline active:text-violet-500"
        onPress={() => navigate("new")}
      >
        cadastre um.
      </Text>
    </Text>
  );
}
