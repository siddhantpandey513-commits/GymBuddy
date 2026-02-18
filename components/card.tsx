import { Pressable, StyleSheet, Text } from "react-native";

type CardProps = {
  title: string;
  onPress?: () => void;
};

export function Card({ title, onPress }: CardProps) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "47%",
    height: 140,
    backgroundColor: "#1e293b",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
