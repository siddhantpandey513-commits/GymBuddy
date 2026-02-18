import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";

const EXERCISES = [
  { name: "Jumping Jacks", duration: 10 },
  { name: "Push Ups", duration: 10 },
  { name: "Squats", duration: 10 },
];

export default function WorkoutScreen() {
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);

  const currentExercise = EXERCISES[currentIndex];

  useEffect(() => {
    if (!started || timeLeft <= 0) return;

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, started]);

  useEffect(() => {
    if (!started) return;

    if (timeLeft === 0) {
      if (currentIndex < EXERCISES.length - 1) {
        const nextIndex = currentIndex + 1;
        setCurrentIndex(nextIndex);
        setTimeLeft(EXERCISES[nextIndex].duration);
      } else {
        setStarted(false);
      }
    }
  }, [timeLeft]);

  const startWorkout = () => {
    setStarted(true);
    setCurrentIndex(0);
    setTimeLeft(EXERCISES[0].duration);
  };

  if (!started) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Workout Session</Text>

        <Pressable style={styles.button} onPress={startWorkout}>
          <Text style={styles.buttonText}>Start Workout</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.exercise}>{currentExercise.name}</Text>
      <Text style={styles.timer}>{timeLeft}s</Text>
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
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.textPrimary,
    marginBottom: 20,
  },
  exercise: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  timer: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#2563eb",
  },
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 14,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
