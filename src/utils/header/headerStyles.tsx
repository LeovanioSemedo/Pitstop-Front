import { StyleSheet, Platform } from "react-native";

export const headerStyles = StyleSheet.create({
    container: {
        height: Platform.OS === 'ios' ? 110 : 80,
        backgroundColor: "#0098A9",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 20,
        paddingTop: Platform.OS === 'ios' ? 30 : 0,
        position: "absolute",
        top: 0,
        zIndex: 10,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
    },
    leftContainer: {
        flex: 1,
        alignItems: 'flex-start',
    },
    centerContainer: {
        flex: 2,
        alignItems: 'center',
    },
    rightContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    logo: {
        width: 72,
        height: 72,
        resizeMode: "contain",
    },
    title: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "bold",
    },

    Centerlogo: {
        width: 100,
        height: 100,
        resizeMode: "contain",
    }
});
