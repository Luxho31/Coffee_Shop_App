import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, SPACING } from "../theme/theme";

interface GradientBgIconProps {
    name: keyof typeof Ionicons.glyphMap;
    // name: string;
    color: string;
    size: number;
}

const GradientBgIcon: React.FC<GradientBgIconProps> = ({
    name,
    color,
    size,
}) => {
    return (
        <View style={styles.Container}>
            <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
            style={styles.LinearGradientBG}
            >
                <Ionicons name={name} size={size} color={color} />
            </LinearGradient>
        </View>
    );
};

export default GradientBgIcon;

const styles = StyleSheet.create({
    Container: {
        borderWidth: 2,
        // borderColor: "#333",
        borderColor: COLORS.secondaryDarkGreyHex,
        borderRadius: SPACING.space_12,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.secondaryDarkGreyHex,
        overflow: "hidden",
    },
    LinearGradientBG: {
        height: SPACING.space_36,
        width: SPACING.space_36,
        alignItems: "center",
        justifyContent: "center",
    }
});
