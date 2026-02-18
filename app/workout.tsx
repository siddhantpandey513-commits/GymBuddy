import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";

const WORKOUT_PLAN = [
  {
    section: "🔥 Warm Up",
    exercises: [
      { name: "Jumping Jacks", detail: "2 min" },
      { name: "Arm Circles", detail: "1 min" },
    ],
  },
  {
    section: "🏋️ Main Workout",
    exercises: [
      { name: "Push Ups", detail: "15 reps" },
      { name: "Squats", detail: "20 reps" },
    ],
  },
  {
    section: "🧘 Stretch",
    exercises: [
      { name: "Hamstring Stretch", detail: "30 sec" },
      { name: "Shoulder Stretch", detail: "30 sec" },
    ],
  },
];

export default function WorkoutScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Workout Plan</Text>

      {WORKOUT_PLAN.map((group) => (
        <View key={group.section} style={styles.section}>
          <Text style={styles.sectionTitle}>{group.section}</Text>

          {group.exercises.map((exercise) => (
            <View key={exercise.name} style={styles.card}>
              <Text style={styles.exercise}>{exercise.name}</Text>
              <Text style={styles.detail}>{exercise.detail}</Text>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.textPrimary,
    marginBottom: 20,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.textSecondary,
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#1e293b",
    padding: 14,
    borderRadius: 12,
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  exercise: {
    color: "#fff",
    fontSize: 16,
  },
  detail: {
    color: "#94a3b8",
    fontSize: 14,
  },
});
