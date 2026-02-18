import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";

const INTERVALS = [
  { label: "30 min", minutes: 30 },
  { label: "60 min", minutes: 60 },
  { label: "90 min", minutes: 90 },
];

export default function WaterScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>💧 Water Reminder</Text>
      <Text style={styles.subtitle}>
        Notifications require Dev Build (SDK 53+)
      </Text>

      {INTERVALS.map((item) => (
        <Pressable key={item.minutes} style={styles.button}>
          <Text style={styles.buttonText}>{item.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: Colors.textPrimary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 14,
    marginBottom: 12,
    width: 160,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
