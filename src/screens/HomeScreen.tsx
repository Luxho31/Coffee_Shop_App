import { ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import HeaderBar from "../components/HeaderBar";
import { Ionicons } from "@expo/vector-icons";
// import { StatusBar } from "expo-status-bar";

const CoffeeList = [
    {
        name: "Hot Coffee",
        image: "https://your-image-url.com",
        title: "Cappuccino",
        subtitle: "With Steamed Milk",
        details: [
            {
                icon: "cafe",
                text: "Coffee",
            },
            {
                icon: "water",
                text: "Milk",
            },
        ],
        rating: 4.5,
        reviews: 8879,
        roast: "Medium Roasted",
        description:
            "Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top.",
    },
    {
        name: "Cold Coffee",
        image: "https://your-image-url.com",
        title: "Iced Coffee",
        subtitle: "With Ice Cubes",
        details: [
            {
                icon: "cafe",
                text: "Coffee",
            },
            {
                icon: "water",
                text: "Ice",
            },
        ],
        rating: 4.2,
        reviews: 9879,
        roast: "Medium Roasted",
        description:
            "Iced coffee is a type of coffee beverage served chilled, brewed variously with the fundamental division being cold brew – brewing the coffee cold, yielding a different flavor, and not requiring cooling – or brewing normally (hot) and then cooling, generally by simply pouring over ice or into ice cold milk.",
    },
    {
        name: "Hot Coffee",
        image: "https://your-image-url.com",
        title: "Espresso",
        subtitle: "With Steamed Milk",
        details: [
            {
                icon: "cafe",
                text: "Coffee",
            },
            {
                icon: "water",
                text: "Milk",
            },
        ],
        rating: 4.8,
        reviews: 7879,
        roast: "Medium Roasted",
        description:
            "Espresso is a coffee-making method of Italian origin, in which a small amount of nearly boiling water is forced under pressure through finely-ground coffee beans.",
    },
];

const HomeScreen = () => {
    const getCategoriesFromData = (data: any) => {
        let temp: any = {};
        data.forEach((item: any) => {
            if (!temp[item.name]) {
                temp[item.name] = [];
            }
            temp[item.name].push(item);
        });

        let categories = Object.keys(temp);
        categories.unshift("All");
        return categories;
    };

    const getCoffeeList = (category: string, data: any) => {
        if (category === "All") {
            return data;
        } else {
            let coffeeList = data.filter((item: any) => item.name === category);
            return coffeeList;
        }
    };

    const [categories, setCategories] = useState(
        getCategoriesFromData(CoffeeList)
    );
    const [searchText, setSearchText] = useState("");
    const [categoryIndex, setCategoryIndex] = useState({
        index: 0,
        category: categories[0],
    });
    const [sortedCoffee, setSortedCoffee] = useState(
        getCoffeeList(categoryIndex.category, CoffeeList)
    );

    // const handleCategoryChange = (index: number, category: string) => {
    //   setCategoryIndex({ index, category });
    //   setSortedCoffee(getCoffeeList(category, CoffeeList));
    // };

    const tabBarHeight = useBottomTabBarHeight();

    return (
        <View style={styles.ScreenContainer}>
            <StatusBar backgroundColor={"#1c1c1c"} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.ScrollViewFlex}
            >
                <HeaderBar title="HomeScreen" />
                <Text style={styles.ScreenTitle}>
                    Find the Best{"\n"}coffee for you
                </Text>

                {/* Search Input */}

                <View style={styles.InputContainerComponent}>
                  <TouchableOpacity
                    // onPress={() => navigation.navigate("Details", { item })}
                  >
                    <Ionicons name="search" size={18} color={searchText.length > 0 ? "#fff" : "#1c1c1c"} style={styles.InputIcon} />
                  </TouchableOpacity>
                    <TextInput
                        placeholder="Find your Coffee..."
                        placeholderTextColor="#666"
                        value={searchText}
                        onChangeText={(text) => setSearchText(text)}
                        style={styles.TextInputContainer}
                    />
                </View>

                {/* Categories Scroller */}
                {/* <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 30 }}
                >
                    {categories.map((category, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => handleCategoryChange(index, category)}
                        >
                            <Text
                                style={{
                                    color:
                                        categoryIndex.index === index ? "#fff" : "#666",
                                    fontSize: 16,
                                    marginRight: 30,
                                }}
                            >
                                {category}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView> */}
            </ScrollView>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    ScreenContainer: {
        flex: 1,
        backgroundColor: "#1c1c1c",
    },
    ScrollViewFlex: {
        flexGrow: 1,
    },
    ScreenTitle: {
      fontSize: 28,
      fontFamily: "Roboto",
        color: "#fff",
        paddingLeft: 30,
    },
    InputContainerComponent: {
      flexDirection: "row",
      margin: 30,
      borderRadius: 20,
        backgroundColor: "#333",
        alignItems: "center",
    },
    InputIcon: {
        marginHorizontal: 20,
    },
    TextInputContainer: {
      flex: 1,
        height: 20 * 3,
        fontFamily: "Roboto",
        fontSize: 14,
        color: "#fff",
    },
});
