import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CartScreen from "../screens/CartScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import OrderHistoryScreen from "../screens/OrderHistoryScreen";
import { BlurView } from "@react-native-community/blur";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                // tabBarActiveTintColor: "tomato",
                // tabBarInactiveTintColor: "gray",
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBarStyle,
                // tabBarBackground: () => (
                //     // <View style={styles.tabBarBackground}></View>
                //     <BlurView overlayColor="" blurAmount={15} style={styles.BlurViewStyles} />
                // ),
            }}
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
        backgroundColor: "transparent",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        borderTopWidth: 0,
        elevation: 0,
    },
    BlurViewStyles: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 80,
    },
});
