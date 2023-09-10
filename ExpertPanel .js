import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import axios from 'axios';

const OPENAI_API_KEY = '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';

const ExpertPanel = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  useEffect(() => {
    // Welcome message from the expert when the component mounts
    addMessage('Hello, how can I assist you today?', 'expert');
  }, []);

  const sendMessageToExpert = async (message) => {
    try {
      const response = await axios.post(
        `https://api.openai.com/v1/engines/davinci-codex/completions`,
        {
          prompt: message,
          max_tokens: 50,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer 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`,
          },
        }
      );

      const expertResponse = response.data.choices[0].text.trim();
      addMessage(expertResponse, 'expert');
    } catch (error) {
      console.error('Failed to send message to expert:', error);
    }
  };
  const addMessage = (message, sender) => {
    const newMessage = {
      id: Date.now().toString(),
      sender,
      message,
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    addMessage(inputMessage, 'user');
    sendMessageToExpert(inputMessage);

    setInputMessage('');
  };

  const renderItem = ({ item }) => {
    return (
      <View style={item.sender === 'user' ? styles.userMessage : styles.expertMessage}>
        <Text style={styles.messageText}>{item.message}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messageList}
        inverted
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputMessage}
          onChangeText={(text) => setInputMessage(text)}
          placeholder="Type your message"
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 16,
  },
  messageList: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  userMessage: {
    backgroundColor: '#F2F2F2',
    alignSelf: 'flex-start',
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
  },
  expertMessage: {
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-end',
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#CCCCCC',
    paddingTop: 8,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  sendButton: {
    marginLeft: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
};

export default ExpertPanel;
