import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";

export default function WorkoutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏋️ Workout</Text>
      <Text style={styles.text}>Exercises, warmups, cardio & stretches.</Text>
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
