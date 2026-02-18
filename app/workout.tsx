import { Audio } from "expo-av";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";

const EXERCISES = [
  { name: "Jumping Jacks", duration: 10 },
  { name: "Push Ups", duration: 10 },
  { name: "Squats", duration: 10 },
];

const REST_DURATION = 5;

export default function WorkoutScreen() {
  const [started, setStarted] = useState(false);
  const [paused, setPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [phase, setPhase] = useState<"exercise" | "rest">("exercise");
  const [whistle, setWhistle] = useState<Audio.Sound | null>(null);

  const currentExercise = EXERCISES[currentIndex];

  const totalSteps = EXERCISES.length * 2 - 1;
  const currentStep = currentIndex * 2 + (phase === "exercise" ? 1 : 2);
  const progress = currentStep / totalSteps;

  // 🎺 Load whistle sound once
  useEffect(() => {
    const loadSound = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require("../assets/sounds/whistle.mp3"),
      );
      setWhistle(sound);
    };

    loadSound();

    return () => {
      whistle?.unloadAsync();
    };
  }, []);

  const playWhistle = async () => {
    try {
      await whistle?.replayAsync();
    } catch (error) {
      console.log("Whistle error:", error);
    }
  };

  // ⏱ Countdown timer
  useEffect(() => {
    if (!started || paused) return;

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, started, paused]);

  // 🔁 Phase switching logic
  useEffect(() => {
    if (!started || paused || timeLeft > 0) return;

    if (phase === "exercise") {
      if (currentIndex < EXERCISES.length - 1) {
        playWhistle();
        setPhase("rest");
        setTimeLeft(REST_DURATION);
      } else {
        playWhistle();
        setStarted(false);
      }
    } else {
      const nextIndex = currentIndex + 1;
      playWhistle();
      setCurrentIndex(nextIndex);
      setPhase("exercise");
      setTimeLeft(EXERCISES[nextIndex].duration);
    }
  }, [timeLeft, paused]);

  const startWorkout = () => {
    setStarted(true);
    setPaused(false);
    setCurrentIndex(0);
    setPhase("exercise");
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
      {/* 📊 Progress Bar */}
      <View style={styles.progressBackground}>
        <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
      </View>

      {phase === "rest" ? (
        <>
          <Text style={styles.getReady}>Get Ready</Text>
          <Text style={styles.nextExercise}>
            Next: {EXERCISES[currentIndex + 1]?.name}
          </Text>
        </>
      ) : (
        <Text style={styles.exercise}>{currentExercise.name}</Text>
      )}

      <Text style={styles.timer}>{timeLeft}s</Text>

      {/* ⏸ Pause / Resume */}
      <Pressable
        style={[styles.button, { marginTop: 20 }]}
        onPress={() => setPaused(!paused)}
      >
        <Text style={styles.buttonText}>{paused ? "Resume" : "Pause"}</Text>
      </Pressable>
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
  progressBackground: {
    height: 8,
    width: "100%",
    backgroundColor: "#334155",
    borderRadius: 10,
    marginBottom: 30,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#2563eb",
    borderRadius: 10,
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
  getReady: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#f59e0b",
    marginBottom: 10,
  },
  nextExercise: {
    fontSize: 20,
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
