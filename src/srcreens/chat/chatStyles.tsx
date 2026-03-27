import { StyleSheet, Platform } from "react-native";

export const chatStyles = StyleSheet.create({
   
     container: { 
        flex: 1,
        backgroundColor: "#022B30",
        paddingTop: Platform.OS === 'ios' ? 120 : 90,
        paddingBottom: 0,
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
    },

    // Container principal: ocupa toda a tela com fundo escuro
    
    // Listagem de mensagens: padding nos lados, espaço extra no final
    list: { 
        padding: 12,
        paddingBottom: 70,
    },
    
    // Cada linha de mensagem: largura máxima 80%, espaçamento, cantos arredondados
    msgRow: { 
        maxWidth: "80%", 
        marginVertical: 6, 
        padding: 10, 
        borderRadius: 8 
    },
    
   
    userRow: { 
        alignSelf: "flex-end", 
        backgroundColor: "#0098A9"
     },
    
    // Mensagens do bot: alinhadas à esquerda com cor cinza
    botRow: { 
        alignSelf: "flex-start",
         backgroundColor: "#F3F3F3"
         },
    
    // Texto das mensagens: tamanho 14
    msgText: {
         fontSize: 14
         },
    
    // Texto do usuário: branco para contraste com verde
    userText: { 
        color: "white"

     },
    
    // Texto do bot: escuro para contraste com cinza
    botText: { 
        color: "#022B30" 

    },
    

    inputRow: {
        position: "absolute",
        left: 0,
        right: 0,
        flexDirection: "row",
        padding: 8,
        backgroundColor: "#022B30",
        paddingBottom: Platform.OS === 'ios' ? 0 : 8,
        alignItems: "center",
        borderTopWidth: 1,
        borderTopColor: "#0098A9",
        zIndex: 1000,
        height: "auto",
    },
    
    input: {
       flex: 1,
        backgroundColor: "#F3F3F3",
        borderRadius: 25,
        paddingHorizontal: 12,
        paddingVertical: 8,
        minHeight: 44,
        maxHeight: 120,
        marginRight: 8, // Espaço entre input e botão
        color: "#022B30",
        flexWrap: "wrap",
        textAlignVertical: "top",
    },
    
    // Botão Enviar: fundo ciano/turquesa
    sendBtn: {
        backgroundColor: "#0098A9", 
        paddingVertical: 10, 
        paddingHorizontal: 20, 
        borderRadius: 25 
    },
});
