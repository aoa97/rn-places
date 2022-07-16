import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert, StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";

import { Colors } from "../../constants/styles";
import OutlinedButton from "../UI/OutlinedButton";

export default function PickLocation({ onPickLocation }) {
  const { navigate } = useNavigation();
  const [userLocation, setUserLocation] = useState();

  const handleLocateUser = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission Denied",
        "You need to grant location permissions to use this app."
      );
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setUserLocation(location);
    onPickLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  };

  const handlePickOnMap = () => {
    navigate("Map");
  };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {userLocation && (
          <Text style={styles.previewFallbackText}>
            lat: {userLocation.coords.latitude}, lng: {userLocation.coords.longitude}
          </Text>
        )}
        {!userLocation && (
          <Text style={styles.previewFallbackText}>
            No location picked yet.
          </Text>
        )}
      </View>

      <View style={styles.buttonsRow}>
        <OutlinedButton
          mode="outlined"
          icon="location"
          title="Locate User"
          onPress={handleLocateUser}
        />
        <OutlinedButton
          mode="outlined"
          icon="map"
          title="Pick on Map"
          onPress={handlePickOnMap}
        />
      </View>
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
  buttonsRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
