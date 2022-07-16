import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import OutlinedButton from "../components/UI/OutlinedButton";
import { Colors } from "../constants/styles";

import { fetchPlaceDetails } from "../utils/database";

export default function PlaceOverview({ route, navigation }) {
  const placeId = route.params.id;
  const [place, setPlace] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const res = await fetchPlaceDetails(placeId);
        setPlace(res);
        navigation.setOptions({ title: res.title });
      } catch (error) {
        console.log(error);
      }
    })();
  }, [placeId]);

  const handleViewOnMap = () => {
    navigation.navigate("Map");
  };

  if (!place) {
    return <Text>Loading..</Text>;
  }

  return (
    <View>
      <Image style={styles.image} source={{ uri: place.imageUri }} />

      <Text style={styles.location}>
        Lat: {place.lat}, Lng: {place.lng}
      </Text>

      <OutlinedButton
        icon="map"
        title="View on Map"
        onPress={handleViewOnMap}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "60%",
  },
  location: {
    fontSize: 16,
    textAlign: "center",
    color: Colors.primary500,
    marginVertical: 16
  },
});
