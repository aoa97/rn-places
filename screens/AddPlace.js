import PlaceForm from "../components/Places/PlaceForm";
import { insertPlace } from "../utils/database";

export default function AddPlace({ navigation }) {
  const handleCreatePlace = async (placeData) => {
    try {
      await insertPlace(placeData);
      navigation.navigate("AllPlaces");
    } catch (error) {
      console.log(error);
    }
  };

  return <PlaceForm onCreatePlace={handleCreatePlace} />;
}
