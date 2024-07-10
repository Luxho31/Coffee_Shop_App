import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import DetailsScreen from "./src/screens/DetailsScreen";
import PaymentScreen from "./src/screens/PaymentScreen";
import TabNavigator from "./src/navigators/TabNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        // <View style={styles.container}>
        //   <Text>Open up App.tsx to start working on your app!</Text>
        //   <StatusBar style="auto" />
        // </View>

        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name="Tab"
                    component={TabNavigator}
                    options={{ animation: "slide_from_bottom" }}
                />
                <Stack.Screen
                    name="Details"
                    component={DetailsScreen}
                    options={{ animation: "slide_from_bottom" }}
                />
                <Stack.Screen
                    name="Payment"
                    component={PaymentScreen}
                    options={{ animation: "slide_from_bottom" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
