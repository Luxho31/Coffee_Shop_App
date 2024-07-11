import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CartScreen from "../screens/CartScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import OrderHistoryScreen from "../screens/OrderHistoryScreen";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarActiveTintColor: "tomato",
                tabBarInactiveTintColor: "gray",
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBarStyle,
                // tabBarBackground: () => (
                //     <BlurView
                //         tint="light"
                //         intensity={50}
                //         style={StyleSheet.absoluteFill}
                //     />
                // ),
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: keyof typeof Ionicons.glyphMap;

                    switch (route.name) {
                        case "Home":
                            iconName = focused ? "home" : "home-outline";
                            break;
                        case "Cart":
                            iconName = focused ? "cart" : "cart-outline";
                            break;
                        case "Favorite":
                            iconName = focused ? "heart" : "heart-outline";
                            break;
                        case "History":
                            iconName = focused ? "time" : "time-outline";
                            break;
                        case "Profile":
                            iconName = focused ? "person" : "person-outline";
                            break;
                        default:
                            iconName = "alert";
                    }

                    // You can return any component that you like here!
                    return (
                        <Ionicons name={iconName} size={size} color={color} />
                    );
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Cart" component={CartScreen} />
            <Tab.Screen name="Favorite" component={FavoritesScreen} />
            <Tab.Screen name="History" component={OrderHistoryScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
};

export default TabNavigator;

const styles = StyleSheet.create({
    tabBarStyle: {
        height: 80,
        position: "absolute",
        // backgroundColor: "rgba(255, 255, 255, 0.8)",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderTopWidth: 0,
        elevation: 0,
        borderTopColor: "transparent",
    },
    // BlurViewStyles: {
    //     position: "absolute",
    //     bottom: 0,
    //     left: 0,
    //     right: 0,
    //     height: 80,
    // },
});
