
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  SafeAreaView,
  FlatList,
  Platform,
  StatusBar,
} from "react-native";
import { Feather } from "@expo/vector-icons";

export default function ChatMessage() {
  const messages = [
    { id: "1", text: "Â¡Hola! Â¿Todo listo para el paseo?", type: "received" },
    { id: "2", text: "Â, salimos en 10 minutos!", type: "sent" },
  ];

  const renderMessage = ({ item }: any) => (
    <View
      style={[
        styles.messageBubble,
        item.type === "sent" ? styles.sent : styles.received,
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Feather name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.userInfo}>
          <Image
            source={require("@/assets/images/citas.jpg")} // AsegÃºrate que la imagen exista
            style={styles.avatar}
          />
          <View>
            <Text style={styles.username}>Juan PÃ©rez</Text>
            <Text style={styles.role}>Paseador</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Feather name="more-vertical" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.separator} />

      {/* Chat messages */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={styles.messagesContainer}
      />

      {/* Input area */}
      <View style={styles.inputContainer}>
        <TouchableOpacity>
          <Feather name="camera" size={24} color="#555" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Escribe un mensaje..."
          placeholderTextColor="#888"
        />
        <TouchableOpacity>
          <Feather name="send" size={24} color="#007AFF" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
  	paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical:8,
    justifyContent: "space-between",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
  },
  role: {
    fontSize: 13,
    color: "#666",
  },
  separator: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginHorizontal: 16,
    marginBottom: 8,
  },
  messagesContainer: {
    flexGrow: 1,
    padding: 16,
  },
  messageBubble: {
    maxWidth: "80%",
    padding: 12,
    borderRadius: 14,
    marginBottom: 12,
  },
  sent: {
    alignSelf: "flex-end",
    backgroundColor: "#DCF8C6",
  },
  received: {
    alignSelf: "flex-start",
    backgroundColor: "#F1F0F0",
  },
  messageText: {
    fontSize: 15,
    color: "#333",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderTopWidth: 1,
    borderColor: "#eee",
    gap: 12,
  },
  input: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 15,
  },
});