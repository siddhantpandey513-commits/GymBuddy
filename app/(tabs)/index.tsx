import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 26, fontWeight: "bold" }}>GymBuddy 💪</Text>

      <Text style={{ fontSize: 16, marginTop: 10 }}>
        Your Personal Gym Trainer
      </Text>
    </View>
  );
}
