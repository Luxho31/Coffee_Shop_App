import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ProfilePic = () => {
    return (
        <View style={styles.ImageContainer}>
            <Image source={require("../assets/24d44189-3d24-4bd2-a9fb-cb50576779b6.jpg")} style={styles.Image} />
        </View>
    );
};

export default ProfilePic;

const styles = StyleSheet.create({
    ImageContainer: {
        height: 36,
        width: 36,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#333",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
    },
    Image: {
        height: 36,
        width: 36,
    },
});
