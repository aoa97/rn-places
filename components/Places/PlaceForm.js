import { ScrollView, View, StyleSheet, Text, TextInput } from "react-native";

import { Colors } from "../../constants/styles";
import { useState } from "react";
import PickImage from "./PickImage";
import PickLocation from "./PickLocation";
import Button from "../UI/Button";

export default function PlaceForm({ onCreatePlace }) {
  const [placeData, setPlaceData] = useState({
    title: "",
    imageUri: "",
    location: {},
  });

  const handlePlaceChange = (field, value) => {
    setPlaceData((curData) => ({ ...curData, [field]: value }));
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.titleLabel}>Title</Text>
        <TextInput
          style={styles.titleInput}
          value={placeData.title}
          onChangeText={handlePlaceChange.bind(this, "title")}
        />
      </View>

      <PickImage onPickImage={handlePlaceChange.bind(this, "imageUri")} />
      <PickLocation onPickLocation={handlePlaceChange.bind(this, "location")} />

      <Button
        title="Add Place"
        onPress={onCreatePlace.bind(this, placeData)}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  titleLabel: {
    color: Colors.primary500,
    marginBottom: 8,
  },
  titleInput: {
    padding: 8,
    color: Colors.gray700,
    backgroundColor: Colors.primary100,
  },
});
