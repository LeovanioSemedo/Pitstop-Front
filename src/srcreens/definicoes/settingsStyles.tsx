import { StyleSheet, Platform } from "react-native";

export const settingsStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#BFBFBF",
    },

    Maintext: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#0098A9",
        marginBottom: 10,
        marginTop: 20,
        textAlign: "left",
        marginLeft: -200,
    },
        header: {
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
        marginLeft: 10,
        marginTop: 5,
        marginBottom: 5,
        fontWeight: "bold",
    },
    userText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "left",
        marginLeft: 10,
    },
    emailText: {
        fontSize: 14,
        color: "#fff",
        textAlign: "left",
        marginLeft: 10,
    },

    UserInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        justifyContent: 'center',
        //justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderBottomColor: '#022B30',
        marginTop: -80,
        marginBottom: 40,
        borderRadius: 50,
        marginLeft: 10,
        marginRight: 10,
        gap: 50,
    },

    UserInfo: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },

    optionsContainer: {
        backgroundColor: "#D9D9D9", 
        borderRadius: 10,
        marginHorizontal: 10,
        paddingVertical: 15,
        shadowColor: "#022B30",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        width: "80%",
        alignSelf: "center",
    },

    Options: {
        flexDirection: 'row', 
        alignItems: 'center', 
        padding: 20, 
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderBottomColor: '#022B30',
    },

    LastOptions: {
         flexDirection: 'row', 
        alignItems: 'center', 
        padding: 20, 
        justifyContent: 'space-between',
    },
});
