import { useState, useEffect } from "react";

import PlacesList from "../components/Places/PlacesList";
import { fetchPlaces } from "../utils/database";

export default function AllPlaces() {
  const [placesList, setPlacesList] = useState([]);

  useEffect(() => {
    fetchPlaces()
      .then((res) => setPlacesList(res))
      .catch((error) => console.log(error));
  }, []);

  return <PlacesList list={placesList} />;
}
