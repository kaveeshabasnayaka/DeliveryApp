//user-profile.js
import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView 
} from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function UserProfileScreen() {
  const route = useRoute();
  const { username } = route.params;

  // Mock user details (in real app, fetch from backend)
  const userDetails = {
    name: username,
    contactDetails: '+1 (555) 123-4567',
    address: '123 Delivery Street, City, Country',
    oldOrders: [
      { id: '1', date: '2025-03-15', quantity: 2, total: 300 },
      { id: '2', date: '2025-03-20', quantity: 3, total: 600 }
    ]
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Name</Text>
        <Text>{userDetails.name}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Details</Text>
        <Text>{userDetails.contactDetails}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Address</Text>
        <Text>{userDetails.address}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Old Orders</Text>
        {userDetails.oldOrders.map(order => (
          <View key={order.id} style={styles.orderItem}>
            <Text>Date: {order.date}</Text>
            <Text>Quantity: {order.quantity}</Text>
            <Text>Total: ${order.total}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5'
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333'
  },
  orderItem: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
    marginTop: 10
  }
});