// journalscreen.js
import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';

const placeholderImage = require('./journal.jpeg');

const JournalScreen = () => {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Journal Entry</Text>
      <Text style={{ marginVertical: 10 }}>Date: {new Date().toLocaleDateString()}</Text>
      <Image source={placeholderImage} style={{ width: '100%', height: 200, resizeMode: 'contain' }} />
      <TextInput 
        style={{ height: 200, borderWidth: 1, padding: 10, marginVertical: 10 }}
        multiline={true}
        placeholder="Write your thoughts and feelings here..."
      />
    </View>
  );
};

export default JournalScreen;
