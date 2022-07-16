import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import PlaceOverview from "./screens/PlaceOverview";
import Map from "./screens/Map";
import IconButton from "./components/UI/IconButton";
import { Colors } from "./constants/styles";
import { initDB } from "./utils/database";

export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false);
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    initDB()
      .then(() => setDbInitialized(true))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary500,
          },
          headerTintColor: Colors.gray700,
          contentStyle: {
            backgroundColor: Colors.gray700,
          },
        }}
      >
        <Stack.Screen
          name="AllPlaces"
          component={AllPlaces}
          options={({ navigation }) => ({
            title: "Your Favorite Places",
            headerRight: ({ tintColor }) => (
              <IconButton
                icon="add"
                color={tintColor}
                onPress={() => navigation.navigate("AddPlace")}
              />
            ),
          })}
        />
        <Stack.Screen
          name="AddPlace"
          component={AddPlace}
          options={{
            title: "Add a new place",
          }}
        />
        <Stack.Screen name="PlaceOverview" component={PlaceOverview} />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
