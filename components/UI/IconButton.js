import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function IconButton({ icon, size, color, ...props }) {
  return (
    <Pressable {...props}>
      <Ionicons name={icon} size={size || 24} color={color} />
    </Pressable>
  );
}
