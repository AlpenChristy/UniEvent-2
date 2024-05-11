import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrderStatus = ({ route }) => {
  const { status, paymentId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.statusText}>Order Status: {status}</Text>
      {status === 'success' ? (
        <Text style={styles.paymentId}>Payment ID: {paymentId}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paymentId: {
    fontSize: 18,
  },
});

export default OrderStatus;
