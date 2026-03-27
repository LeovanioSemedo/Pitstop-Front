import { StyleSheet, Platform } from "react-native";

export const historyStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#022B30",
    },
    contentContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: Platform.OS === 'ios' ? 120 : 90, // Espaço para o Header
        paddingBottom: 90, // Espaço para o Footery
        paddingHorizontal: 20,
        width: '100%',
    },
    text: {
        fontSize: 18,
        color: "#FFFFFF",
        textAlign: "center",
    },
    title: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
        color: "#fff",
        marginBottom: 20,
        textAlign: "center",
    },
    item: {
        backgroundColor: "#0A4D55",
        padding: 15,
        width: '100%',
        marginVertical: 8,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    itemData: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#fff",
        marginBottom: 5,
    },
    itemDescricao: {
        fontSize: 14,
        color: "#fff",
        marginBottom: 5,
    },
    itemErro: {
        fontSize: 14,
        color: "#00ff00",
        fontWeight: 'bold',
    }

});
