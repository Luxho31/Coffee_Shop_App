import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GradientBgIcon from "./GradientBGIcon";
import ProfilePic from "./ProfilePic";
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../theme/theme";

interface HeaderBarProps {
    title?: string;
}

const HeaderBar: React.FC<HeaderBarProps> = ({title}) => {
    return (
        <View style={styles.HeaderContainer}>
            <GradientBgIcon name="home" color={COLORS.primaryLightGreyHex} size={FONTSIZE.size_16} />
            <Text style={styles.HeaderText}>{title}</Text>
            <ProfilePic />
        </View>
    );
};

export default HeaderBar;

const styles = StyleSheet.create({
    HeaderContainer: {
        // backgroundColor: "#1c1c1c",
        padding: SPACING.space_30,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    HeaderText: {
        color:  COLORS.primaryWhiteHex,
        fontSize: FONTSIZE.size_20,
        fontFamily: FONTFAMILY.poppins_semibold,
        // fontWeight: "bold",
    },
});
