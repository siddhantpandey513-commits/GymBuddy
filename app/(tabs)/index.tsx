import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "../../components/card";
import { Colors } from "../../constants/colors";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GymBuddy 💪</Text>
      <Text style={styles.subtitle}>Your Personal Gym Trainer</Text>

      <View style={styles.grid}>
        <Card title="🏋️ Workout" onPress={() => router.push("/workout")} />
        <Card title="🍎 Diet" />
        <Card title="🧘 Yoga" />
        <Card title="💧 Water" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.textPrimary,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginBottom: 30,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
