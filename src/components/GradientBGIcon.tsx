import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

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
            colors={["#aaa", "#333"]}
            style={styles.LinearGradient}
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
        borderColor: "#333",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#333",
        overflow: "hidden",
    },
    LinearGradient: {
        height: 36,
        width: 36,
        alignItems: "center",
        justifyContent: "center",
    }
});
