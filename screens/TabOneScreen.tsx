import EditScreenInfo from "components/EditScreenInfo";
import { View, Text } from "components/Themed";
import { Button, StyleSheet } from "react-native";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { decrement, increment, selectCount } from "store/slices/counterSlice";
import { RootTabScreenProps } from "types";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Button title="Up" onPress={() => dispatch(increment())} />
      <Text style={styles.title}>Count: {count}</Text>
      <Button title="Down" onPress={() => dispatch(decrement())} />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
