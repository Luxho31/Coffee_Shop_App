import {
    FlatList,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useState } from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import HeaderBar from "../components/HeaderBar";
import { Ionicons } from "@expo/vector-icons";
import {
    BORDERRADIUS,
    COLORS,
    FONTFAMILY,
    FONTSIZE,
    SPACING,
} from "../theme/theme";
// import { StatusBar } from "expo-status-bar";
import { useStore } from "../store/store";
import CoffeeCard from "../components/CoffeeCard";

// const CoffeeList = [
//     {
//         name: "Hot Coffee",
//         image: "https://your-image-url.com",
//         title: "Cappuccino",
//         subtitle: "With Steamed Milk",
//         details: [
//             {
//                 icon: "cafe",
//                 text: "Coffee",
//             },
//             {
//                 icon: "water",
//                 text: "Milk",
//             },
//         ],
//         rating: 4.5,
//         reviews: 8879,
//         roast: "Medium Roasted",
//         description:
//             "Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top.",
//     },
//     {
//         name: "Cold Coffee",
//         image: "https://your-image-url.com",
//         title: "Iced Coffee",
//         subtitle: "With Ice Cubes",
//         details: [
//             {
//                 icon: "cafe",
//                 text: "Coffee",
//             },
//             {
//                 icon: "water",
//                 text: "Ice",
//             },
//         ],
//         rating: 4.2,
//         reviews: 9879,
//         roast: "Medium Roasted",
//         description:
//             "Iced coffee is a type of coffee beverage served chilled, brewed variously with the fundamental division being cold brew – brewing the coffee cold, yielding a different flavor, and not requiring cooling – or brewing normally (hot) and then cooling, generally by simply pouring over ice or into ice cold milk.",
//     },
//     {
//         name: "Hot Coffee",
//         image: "https://your-image-url.com",
//         title: "Espresso",
//         subtitle: "With Steamed Milk",
//         details: [
//             {
//                 icon: "cafe",
//                 text: "Coffee",
//             },
//             {
//                 icon: "water",
//                 text: "Milk",
//             },
//         ],
//         rating: 4.8,
//         reviews: 7879,
//         roast: "Medium Roasted",
//         description:
//             "Espresso is a coffee-making method of Italian origin, in which a small amount of nearly boiling water is forced under pressure through finely-ground coffee beans.",
//     },
// ];

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

const HomeScreen = () => {
    const CoffeeList = useStore((state: any) => state.CoffeeList);
    const BeanList = useStore((state: any) => state.BeanList);
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

    // console.log("categories = ", categories);
    // console.log("sortedCoffee = ", sortedCoffee.length);

    return (
        <View style={styles.ScreenContainer}>
            <StatusBar backgroundColor={COLORS.primaryBlackHex} />
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
                        <Ionicons
                            name="search"
                            size={FONTSIZE.size_18}
                            color={
                                searchText.length > 0
                                    ? COLORS.primaryOrangeHex
                                    : COLORS.primaryLightGreyHex
                            }
                            style={styles.InputIcon}
                        />
                    </TouchableOpacity>
                    <TextInput
                        placeholder="Find your Coffee..."
                        placeholderTextColor={COLORS.primaryLightGreyHex}
                        value={searchText}
                        onChangeText={(text) => setSearchText(text)}
                        style={styles.TextInputContainer}
                    />
                </View>

                {/* Categories Scroller */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.CategoryScrollViewStyle}
                >
                    {categories.map((data, index) => (
                        <View
                            key={index.toString()}
                            style={styles.CategoryScrollViewContainer}
                        >
                            <TouchableOpacity
                                style={styles.CategoryScrollViewItem}
                                onPress={() => {
                                    setCategoryIndex({
                                        index,
                                        category: categories[index],
                                    });
                                    setSortedCoffee([
                                        ...getCoffeeList(
                                            categories[index],
                                            CoffeeList
                                        ),
                                    ]);
                                }}
                            >
                                <Text
                                    style={[
                                        styles.CategoryText,
                                        categoryIndex.index == index
                                            ? { color: COLORS.primaryOrangeHex }
                                            : {},
                                    ]}
                                >
                                    {data}
                                </Text>
                                {categoryIndex.index == index ? (
                                    <View style={styles.ActiveCategory}></View>
                                ) : (
                                    <></>
                                )}
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>

                {/* Coffee FlatList */}
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={sortedCoffee}
                    contentContainerStyle={styles.FlatListContainer}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        // <View>
                        //     <Text>{item.title}</Text>
                        // </View>
                        return <TouchableOpacity>
                            <CoffeeCard name={item.name} />
                        </TouchableOpacity>
                    }}
                />
            </ScrollView>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    ScreenContainer: {
        flex: 1,
        backgroundColor: COLORS.primaryBlackHex,
    },
    ScrollViewFlex: {
        flexGrow: 1,
    },
    ScreenTitle: {
        fontSize: FONTSIZE.size_28,
        fontFamily: FONTFAMILY.poppins_semibold,
        color: COLORS.primaryWhiteHex,
        paddingLeft: SPACING.space_30,
    },
    InputContainerComponent: {
        flexDirection: "row",
        margin: SPACING.space_30,
        borderRadius: BORDERRADIUS.radius_20,
        backgroundColor: COLORS.primaryDarkGreyHex,
        alignItems: "center",
    },
    InputIcon: {
        marginHorizontal: SPACING.space_20,
    },
    TextInputContainer: {
        flex: 1,
        height: SPACING.space_20 * 3,
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_14,
        color: COLORS.primaryWhiteHex,
    },
    CategoryScrollViewStyle: {
        paddingHorizontal: SPACING.space_20,
        marginBottom: SPACING.space_20,
    },
    CategoryScrollViewContainer: {
        paddingHorizontal: SPACING.space_15,
    },
    CategoryScrollViewItem: {
        alignItems: "center",
    },
    CategoryText: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_16,
        color: COLORS.primaryLightGreyHex,
        marginBottom: SPACING.space_4,
    },
    ActiveCategory: {
        height: SPACING.space_10,
        width: SPACING.space_10,
        borderRadius: SPACING.space_10,
        backgroundColor: COLORS.primaryOrangeHex,
    },
    FlatListContainer: {
        gap: SPACING.space_20,
        paddingVertical: SPACING.space_20,
        paddingHorizontal: SPACING.space_30,
    },
});
