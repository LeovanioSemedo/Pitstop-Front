import { StyleSheet, Platform } from "react-native";

export const dashboardStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
    },
    contentContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: Platform.OS === 'ios' ? 120 : 90, // Espaço para o Header
        paddingBottom: 90, // Espaço para o Footery
        paddingHorizontal: 20,
    },
    text: {
        fontSize: 18,
        color: "#022B30",
        textAlign: "center",
    }
});
