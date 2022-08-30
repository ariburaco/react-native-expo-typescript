import { StyleSheet } from "react-native";

import { View, Text } from "components/Themed";
import EditScreenInfo from "components/EditScreenInfo";
import { useAppSelector } from "store/hooks";
import { selectCount } from "store/slices/counterSlice";

export default function TabTwoScreen() {
  const count = useAppSelector(selectCount);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text style={styles.title}>Count: {count}</Text>
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
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
