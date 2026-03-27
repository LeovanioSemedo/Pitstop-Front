
import React, { useState, useRef, useEffect } from "react";
import {
  Text, View, StatusBar, FlatList, TextInput, TouchableOpacity,
  KeyboardAvoidingView, Platform, ActivityIndicator
} from "react-native";
import { chatStyles } from "./chatStyles";
import { Ionicons } from '@expo/vector-icons';
import { callCroqAPI, isCarRelated } from "./services/croqService";

// Tipo de mensagem: cada mensagem tem um ID único, quem enviou (user ou bot) e o texto
type Msg = { id: string; from: "user" | "bot"; text: string };

export function Chat() {
  // Estado para armazenar todas as mensagens (user + bot)
  const [messages, setMessages] = useState<Msg[]>([
    {
      id: "1",
      from: "bot",
      text: "Bem-vindo à PitStop! Sou seu assistente de automóveis. Faça uma pergunta sobre relacionadas a automoveis!",
    }
  ]);

  // Estado para o texto que o usuário está digitando no input
  const [input, setInput] = useState("");
  
  // Estado para indicar se está esperando resposta
  const [isLoading, setIsLoading] = useState(false);

  // Estado simples: input está focado?
  const [isFocused, setIsFocused] = useState(false);
  
  // Referência para scroll automático
  const flatListRef = useRef<FlatList>(null);

  // Auto-scroll quando novas mensagens chegam
  useEffect(() => {
    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 100);
  }, [messages]);


  // Envia uma mensagem
  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Msg = {
      id: Date.now().toString(),
      from: "user",
      text: input.trim(),
    };

    // Adiciona a mensagem do usuário
    setMessages((p) => [...p, userMsg]);
    setInput("");

    // Validação de tema
    if (!isCarRelated(userMsg.text)) {
      const botMsg: Msg = {
        id: (Date.now() + 1).toString(),
        from: "bot",
        text: "Desculpe! Sou especialista em automóveis. Por favor, pergunte sobre carros, manutenção, pneus, combustível, etc.",
      };
      setMessages((p) => [...p, botMsg]);
      return;
    }

    // Ativa indicador de carregamento
    setIsLoading(true);

    try {
      // Prepara histórico de conversa (últimas 4 mensagens para contexto)
      const history = messages.slice(-4).map((msg) => ({
        role: msg.from === "user" ? ("user" as const) : ("assistant" as const),
        content: msg.text,
      }));

      // Chama a API do Croq
      const reply = await callCroqAPI(userMsg.text, history);

      const botMsg: Msg = {
        id: (Date.now() + 2).toString(),
        from: "bot",
        text: reply,
      };

      setMessages((p) => [...p, botMsg]);
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      const botMsg: Msg = {
        id: (Date.now() + 3).toString(),
        from: "bot",
        text: "Ocorreu um erro. Tente novamente!",
      };
      setMessages((p) => [...p, botMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  // Envia uma sugestão rápida
  const sendQuickSuggestion = (suggestion: string) => {
    setInput(suggestion);
    // Simula envio após um pequeno delay
    setTimeout(() => {
      setInput(suggestion);
    }, 100);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={chatStyles.container}
      keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 0}
    >
      <StatusBar barStyle="light-content" backgroundColor="#022B30" translucent={false} />

      <View style={{ flex: 1, flexDirection: "column" }}>
        {/* Lista de mensagens */}
        <FlatList
          ref={flatListRef}
          style={{ flex: 1 }}
          data={messages}
          keyExtractor={(item) => item.id}
          contentContainerStyle={chatStyles.list}
          renderItem={({ item }) => (
            <View
              style={[
                chatStyles.msgRow,
                item.from === "user" ? chatStyles.userRow : chatStyles.botRow,
              ]}
            >
              <Text
                style={[
                  chatStyles.msgText,
                  item.from === "user" ? chatStyles.userText : chatStyles.botText,
                ]}
              >
                {item.text}
              </Text>
            </View>
          )}
          ListFooterComponent={
            isLoading ? (
              <View
                style={[
                  chatStyles.msgRow,
                  chatStyles.botRow,
                  { alignItems: "center", justifyContent: "center", minHeight: 50 },
                ]}
              >
                <ActivityIndicator size="large" color="#0098A9" />
              </View>
            ) : null
          }
        />

        {/* Input e botão enviar */}
        <View style={[chatStyles.inputRow, { bottom: isFocused ? 0 : 94 }]}>
          <TextInput
            placeholder="Faça sua pergunta..."
            placeholderTextColor="#999"
            value={input}
            onChangeText={setInput}
            style={chatStyles.input}
            onSubmitEditing={sendMessage}
            returnKeyType="send"
            editable={!isLoading}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            multiline={true}
            numberOfLines={4}
          />

          <TouchableOpacity
            onPress={sendMessage}
            style={[chatStyles.sendBtn, isLoading && { opacity: 0.6 }]}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Ionicons name="send" size={21} color="#fff" />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

