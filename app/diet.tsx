import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";

export default function DietScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍎 Diet</Text>
      <Text style={styles.text}>
        Personalized diet plans, macros & nutrition guidance.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.textPrimary,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: "center",
  },
});
