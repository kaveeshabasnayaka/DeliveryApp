//dashboard.js
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  FlatList, 
  StyleSheet, 
  Alert 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function DashboardScreen() {
  const navigation = useNavigation();
  const [orders, setOrders] = useState([
    { 
      id: '1', 
      username: 'kveresha', 
      quantity: 2, 
      payment: 300, 
      balance: 100, 
      delivered: 'Ok' 
    },
    { 
      id: '2', 
      username: 'thejani', 
      quantity: 3, 
      payment: 600, 
      balance: 0, 
      delivered: 'Ok' 
    }
  ]);

  const handleDeleteOrder = (id) => {
    Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to delete this order?',
      [
        { 
          text: 'Cancel', 
          style: 'cancel' 
        },
        { 
          text: 'Delete', 
          style: 'destructive',
          onPress: () => {
            setOrders(orders.filter(order => order.id !== id));
            // In a real app, you'd also delete from backend
          }
        }
      ]
    );
  };

  const renderOrderItem = ({ item }) => (
    <View style={styles.orderRow}>
      <TouchableOpacity 
        onPress={() => navigation.navigate('UserProfile', { username: item.username })}
      >
        <Text style={styles.username}>{item.username}</Text>
      </TouchableOpacity>
      <Text>{item.quantity}</Text>
      <Text>${item.payment}</Text>
      <Text>${item.balance}</Text>
      <Text>{item.delivered}</Text>
      <View style={styles.actionButtons}>
        <TouchableOpacity 
          onPress={() => navigation.navigate('AddOrder', { order: item })}
        >
          <Text style={styles.editButton}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDeleteOrder(item.id)}>
          <Text style={styles.deleteButton}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        renderItem={renderOrderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <View style={styles.headerRow}>
            <Text>Username</Text>
            <Text>Qty</Text>
            <Text>Payment</Text>
            <Text>Balance</Text>
            <Text>Status</Text>
            <Text>Actions</Text>
          </View>
        }
      />
      <TouchableOpacity 
        style={styles.addButton}
        onPress={() => navigation.navigate('AddOrder')}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5'
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#e0e0e0',
    padding: 10,
    marginBottom: 5
  },
  orderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 5,
    borderRadius: 5
  },
  username: {
    color: 'blue',
    textDecorationLine: 'underline'
  },
  actionButtons: {
    flexDirection: 'row'
  },
  editButton: {
    color: 'green',
    marginRight: 10
  },
  deleteButton: {
    color: 'red'
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'blue',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addButtonText: {
    color: 'white',
    fontSize: 30
  }
});