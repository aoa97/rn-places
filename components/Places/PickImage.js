import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import * as ImagePicker from "expo-image-picker";

import { Colors } from "../../constants/styles";
import OutlinedButton from "../UI/OutlinedButton";

export default function PickImage({ onPickImage }) {
  const [imageUri, setImageUri] = useState();

  const handlePickImage = async () => {
    const imageData = await ImagePicker.launchCameraAsync({
      aspect: [16, 9],
      quality: 0.5,
    });
    setImageUri(imageData.uri);
    onPickImage(imageData.uri);
  };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {imageUri && (
          <Image style={styles.previewImage} source={{ uri: imageUri }} />
        )}
        {!imageUri && (
          <Text style={styles.previewFallbackText}>No image taken yet.</Text>
        )}
      </View>

      <OutlinedButton
        mode="outlined"
        icon="camera"
        title="Take Image"
        onPress={handlePickImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  preview: {
    backgroundColor: Colors.primary100,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  previewFallbackText: {
    fontSize: 16,
    color: Colors.gray700,
  },
  previewImage: {
    width: "100%",
    height: "100%",
  },
});
