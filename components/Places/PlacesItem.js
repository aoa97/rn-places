import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Colors } from "../../constants/styles";

export default function PlacesItem({ item }) {
  const { navigate } = useNavigation();

  const handleItemPress = () => {
    navigate("PlaceOverview", { id: item.id });
  };

  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={handleItemPress}
    >
      <Image style={styles.image} source={{ uri: item.imageUri }} />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>

        <Text style={styles.location}>
          Lat: {item.lat}, Lng: {item.lng}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary500,
    flexDirection: "row",
    marginBottom: 16,
    borderRadius: 8,
  },
  image: {
    height: "100%",
    width: "30%",
  },
  textContainer: {
    paddingHorizontal: 8,
    paddingVertical: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 8,
  },
  pressed: {
    opacity: 0.7,
  },
});
