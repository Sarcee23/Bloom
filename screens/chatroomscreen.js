import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Image } from 'react-native';

// Replace with dummy data or integrate with your chat backend
const messages = [
  {
    sender: 'Alice',
    message: 'Hi everyone! How is your day going?',
    time: '10:00 AM',
  },
  {
    sender: 'Bob',
    message: 'Hey Alice, doing well! Just finished a productive morning.',
    time: '10:02 AM',
    avatar: require('./avatar.png'), 
  },
  // Add more message objects here
];

const ChatroomScreen = () => {
  const [newMessage, setNewMessage] = useState('');
  const [chatHistory, setChatHistory] = useState(messages);

  const sendMessage = () => {
    if (newMessage.trim() === '') return; // Don't send empty messages

    const newMessageObject = {
      sender: 'You',
      message: newMessage,
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    };

    setChatHistory([...chatHistory, newMessageObject]);
    setNewMessage(''); // Clear input field after sending
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        inverted // Display newest messages at the top
        data={chatHistory}
        renderItem={({ item }) => (
          <View style={{ alignItems: item.sender === 'You' ? 'flex-end' : 'flex-start', padding: 10, marginBottom: 10 }}>
            {item.sender !== 'You' && item.avatar && (
              <Image source={item.avatar} style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }} />
            )}
            <Text style={{ fontSize: 18, fontWeight: item.sender === 'You' ? 'bold' : 'normal' }}>{item.sender}</Text>
            <Text style={{ color: '#666', marginTop: 5 }}>{item.message}</Text>
            <Text style={{ color: '#999', fontSize: 12, marginTop: 5 }}>{item.time}</Text>
          </View>
        )}
        keyExtractor={(item) => item.time} // Unique key for each message
      />
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
        <TextInput
          style={{ flex: 1, backgroundColor: '#f2f2f2', padding: 10, borderRadius: 10 }}
          placeholder="Type your message..."
          onChangeText={(text) => setNewMessage(text)}
          value={newMessage}
        />
        <Image source={require('./send_msg.png')} style={{ width: 30, height: 30, marginLeft: 10 }} onPress={sendMessage} />
      </View>
    </View>
  );
};

export default ChatroomScreen;
