import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "../../constants/styles";

export default function Button({ mode, icon, title, onPress, ...props }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={onPress}
      {...props}
    >
      <Ionicons name={icon} size={24} color={Colors.primary500} />
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    backgroundColor: Colors.primary800,
  },
  title: {
    color: Colors.primary50,
    marginLeft: 8,
    fontSize: 16,
  },
  pressed: {
    opacity: 0.7,
  },
});
