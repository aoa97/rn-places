import { FlatList } from "react-native";

import PlacesItem from "./PlacesItem";

export default function PlacesList({ list }) {
  return (
    <FlatList
      data={list}
      style={{ padding: 20 }}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PlacesItem item={item} />}
    />
  );
}
