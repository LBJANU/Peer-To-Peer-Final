import HomeScreen from "./HomeScreen";
import SignUpScreen from "./SignUpScreen";
import SignInScreen from "./SignInScreen";
import ProfilePage from "./ProfilePage";
import Onboarding from "./Onboarding";
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
       
        <Stack.Screen
          name = "SignUpScreen"
          component= {SignUpScreen}
          />

        <Stack.Screen
          name = "SignInScreen"
          component= {SignInScreen}
          />


        <Stack.Screen
          name = "Create Your Profile"
          component = {ProfilePage}
          />

        <Stack.Screen
        name = "Onboarding"
        component={Onboarding}
        />
      </Stack.Navigator>


    </NavigationContainer>
    
  );
}
