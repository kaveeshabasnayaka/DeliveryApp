//add-order.js
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Alert,
  ScrollView 
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function AddOrderScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const existingOrder = route.params?.order;
  
  const [name, setName] = useState(existingOrder?.username || '');
  const [quantity, setQuantity] = useState(
    existingOrder ? existingOrder.quantity.toString() : ''
  );
  const [payment, setPayment] = useState(
    existingOrder ? existingOrder.payment.toString() : ''
  );
  const [balance, setBalance] = useState(
    existingOrder ? existingOrder.balance.toString() : ''
  );
  const [delivered, setDelivered] = useState(existingOrder?.delivered || 'Pending');

  const handleSaveOrder = () => {
    if (!name || !quantity || !payment) {
      Alert.alert('Error', 'Please fill all required fields');
      return;
    }

    const orderData = {
      username: name,
      quantity: parseInt(quantity),
      payment: parseInt(payment),
      balance: parseInt(balance),
      delivered
    };

    // In a real app, you'd save to backend here
    Alert.alert(
      'Success', 
      existingOrder ? 'Order Updated' : 'Order Added',
      [{ text: 'OK', onPress: () => navigation.goBack() }]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter username"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Quantity</Text>
        <TextInput
          style={styles.input}
          value={quantity}
          onChangeText={setQuantity}
          keyboardType="numeric"
          placeholder="Enter quantity"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Payment</Text>
        <TextInput
          style={styles.input}
          value={payment}
          onChangeText={setPayment}
          keyboardType="numeric"
          placeholder="Enter payment amount"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Balance</Text>
        <TextInput
          style={styles.input}
          value={balance}
          onChangeText={setBalance}
          keyboardType="numeric"
          placeholder="Enter balance"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Delivered Status</Text>
        <TouchableOpacity 
          style={styles.statusButton}
          onPress={() => setDelivered(delivered === 'Ok' ? 'Pending' : 'Ok')}
        >
          <Text style={styles.statusButtonText}>
            {delivered}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={styles.saveButton}
        onPress={handleSaveOrder}
      >
        <Text style={styles.saveButtonText}>
          {existingOrder ? 'Update Order' : 'Save Order'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5'
  },
  inputGroup: {
    marginBottom: 15
  },
  label: {
    marginBottom: 5,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10
  },
  statusButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center'
  },
  statusButtonText: {
    fontWeight: 'bold',
    color: 'green'
  },
  saveButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});