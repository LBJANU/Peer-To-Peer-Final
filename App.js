import HomeScreen from "./HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name = "Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        //  options={{title: "Welcome"}}

        />
       

      </Stack.Navigator>


    </NavigationContainer>
    
  );
}
