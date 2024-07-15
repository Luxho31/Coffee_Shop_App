import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SPACING } from "../theme/theme";

const ProfilePic = () => {
    return (
        <View style={styles.ImageContainer}>
            {/* <Image source={require("../assets/24d44189-3d24-4bd2-a9fb-cb50576779b6.jpg")} style={styles.Image} /> */}
            <Image source={require("../assets/app_images/avatar.png")} style={styles.Image} />
        </View>
    );
};

export default ProfilePic;

const styles = StyleSheet.create({
    ImageContainer: {
        height: SPACING.space_36,
        width: SPACING.space_36,
        borderRadius: SPACING.space_12,
        borderWidth: 2,
        borderColor: COLORS.secondaryDarkGreyHex,
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
    },
    Image: {
        height: SPACING.space_36,
        width: SPACING.space_36,
    },
});
