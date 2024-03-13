import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import JournalScreen from './screens/journalscreen.js'; 
import TherapistScreen from './screens/therapistscreen.js';
import ChatroomScreen from './screens/chatroomscreen.js'
const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 100, backgroundColor: 'lightblue', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 25 }}>Bloom</Text>
      </View>
      <View style={{ flex: 1, padding: 20 }}>
        <Button title="Journal" onPress={() => navigation.navigate('Journal')} />
        <Button title="Chat Room" onPress={() => navigation.navigate('Chatroom')} />
        <Button title="Therapists Near You" onPress={() => navigation.navigate('Therapists')} />
      </View>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Journal" component={JournalScreen} />
        <Stack.Screen name="Therapists" component={TherapistScreen} />
        <Stack.Screen name="Chatroom" component={ChatroomScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
