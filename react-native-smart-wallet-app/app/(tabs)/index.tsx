import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useAuthenticate, useAccount } from '@account-kit/react-native';

export default function WalletTab() {
  const [email, setEmail] = useState('');
  const { authenticate, isPending } = useAuthenticate();
  
  const { address } = useAccount({ type: "LightAccount" });

  const handleLogin = async () => {
    await authenticate({ type: "email", email });
  };

  const handleSponsoredTransaction = async () => {
     console.log("Preparing to send a gasless transaction from:", address);
  };

  return (
    <View style={styles.container}>
      {address ? (
        <View>
          <Text style={styles.title}>Smart Account Active!</Text>
          <Text style={styles.address}>Address: {address}</Text>
          <Button title="Send Gasless TX" onPress={handleSponsoredTransaction} />
        </View>
      ) : (
        <View>
          <Text style={styles.title}>Sign In to Your Smart Wallet</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <Button
            title={isPending ? "Sending OTP..." : "Login with Email"}
            onPress={handleLogin}
            disabled={isPending}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  address: { fontSize: 12, marginBottom: 20, textAlign: 'center', color: '#666' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 12, marginBottom: 15, borderRadius: 8 }
});