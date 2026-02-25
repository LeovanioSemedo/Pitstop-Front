import { StyleSheet } from "react-native";

export const footerStyles = StyleSheet.create({
    container: {
        height: 80,
        position: "absolute",
        bottom: 0,
        backgroundColor: "#0098A9",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingBottom: 10,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    iconBtn: {
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
    centerBtn: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#022B30", // Darker accent color
        width: 65,
        height: 65,
        borderRadius: 30,
        marginBottom: 50, // Lifts the button up
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    }
});
