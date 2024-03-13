import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';

const therapists = [
  {
    name: 'Dr. Samrat Pal',
    speciality: 'Anxiety, Depression',
    rating: 4.8,
    distance: '1.2 miles',
    image: require('./therapist.png'), // Replace with your image path
  },
  {
    name: 'Dr. Alice Green',
    speciality: 'Trauma, Relationships',
    rating: 4.7,
    distance: '3.5 miles',
    image: require('./therapist.png'), // Replace with your image path
  },
  // Add more therapist data objects here
];

const TherapistScreen = () => {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Therapists Near You</Text>
      <FlatList
        data={therapists}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: '#f8f8f8', borderRadius: 10, padding: 15, marginBottom: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={item.image} style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }} />
              <View>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
                <Text style={{ color: '#999' }}>{item.speciality}</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require('./star.jpeg')} style={{ width: 15, height: 15, tintColor: '#f1c644' }} />
                <Text style={{ marginLeft: 5 }}>{item.rating}</Text>
              </View>
              <Text>{item.distance}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.name} // Unique key for each item
      />
    </View>
  );
};

export default TherapistScreen;
