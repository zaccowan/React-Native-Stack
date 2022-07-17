import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TailwindProvider } from "tailwindcss-react-native";
import { store } from "./app/store";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
