import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from '@react-native-community/blur';

const FavoritesScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.card}>
          <Image source={{ uri: 'https://your-image-url.com' }} style={styles.image} />
          <View style={styles.cardContent}>
            <View style={styles.cardHeader}>
              <Text style={styles.title}>Cappuccino</Text>
              <Ionicons name="heart" size={24} color="red" />
            </View>
            <Text style={styles.subtitle}>With Steamed Milk</Text>
            <View style={styles.details}>
              <Ionicons name="cafe" size={24} color="orange" />
              <Text style={styles.detailText}>Coffee</Text>
              <Ionicons name="water" size={24} color="orange" />
              <Text style={styles.detailText}>Milk</Text>
            </View>
            <View style={styles.rating}>
              <Ionicons name="star" size={24} color="gold" />
              <Text style={styles.ratingText}>4.5 (8,879)</Text>
              <Text style={styles.roast}>Medium Roasted</Text>
            </View>
            <Text style={styles.description}>
              Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top.
            </Text>
          </View>
        </View>
        {/* Add more cards here */}
      </ScrollView>
    </View>
  )
}

export default FavoritesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    padding: 10,
  },
  card: {
    backgroundColor: '#333',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 15,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 5,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  detailText: {
    color: '#fff',
    marginLeft: 5,
    marginRight: 15,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  ratingText: {
    color: '#fff',
    marginLeft: 5,
    marginRight: 15,
  },
  roast: {
    color: '#fff',
    marginLeft: 'auto',
  },
  description: {
    color: '#aaa',
    marginTop: 10,
  },
});