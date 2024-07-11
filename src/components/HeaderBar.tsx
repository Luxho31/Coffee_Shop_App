import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GradientBgIcon from "./GradientBGIcon";
import ProfilePic from "./ProfilePic";

interface HeaderBarProps {
    title?: string;
}

const HeaderBar: React.FC<HeaderBarProps> = ({title}) => {
    return (
        <View style={styles.HeaderContainer}>
            <GradientBgIcon name="home" color="#fff" size={16} />
            <Text style={styles.HeaderText}>{title}</Text>
            <ProfilePic />
        </View>
    );
};

export default HeaderBar;

const styles = StyleSheet.create({
    HeaderContainer: {
        // backgroundColor: "#1c1c1c",
        padding: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    HeaderText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },
});
