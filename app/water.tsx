import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";

const INTERVALS = [
  { label: "30 min", minutes: 30 },
  { label: "60 min", minutes: 60 },
  { label: "90 min", minutes: 90 },
];

export default function WaterScreen() {
  const scheduleReminder = async (minutes: number) => {
    // Cancel old reminders
    await Notifications.cancelAllScheduledNotificationsAsync();

    const trigger: Notifications.NotificationTriggerInput = {
      seconds: minutes * 60,
      repeats: true,
    };

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "💧 Drink Water",
        body: "Hydration check! Take a sip now.",
      },
      trigger,
    });

    await AsyncStorage.setItem("water_interval", minutes.toString());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>💧 Water Reminder</Text>
      <Text style={styles.subtitle}>Choose reminder interval</Text>

      {INTERVALS.map((item) => (
        <Pressable
          key={item.minutes}
          style={styles.button}
          onPress={() => scheduleReminder(item.minutes)}
        >
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
