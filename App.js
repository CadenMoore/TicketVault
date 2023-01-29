import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Pressable, Image } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const concertImage = require('./assets/images/concert.png');

const App = () => {
  const [tickets, setTickets] = useState(0);
  const [price, setPrice] = useState('');

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Ticket Vault</Text>
          <TextInput style={styles.textBox}
            placeholder = "Number of Tickets"
            onChangeText={input => setTickets(input)}
            defaultValue={tickets}
          />
          <Pressable style={styles.button} 
            onPress={() => {
              setPrice("Ticket Cost: $" + (tickets * 99.99).toFixed(2));
            }}>
            <Text style={styles.buttonText}>Find The Cost</Text>
          </Pressable>
          <Text style={styles.priceDisplay}>{price}</Text>
          <View style={styles.imageContainer}>
            <Image source={concertImage} />
          </View>
        <StatusBar style="light" />
      </View>
    );
  };

  export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 65,
    padding: 30,
  },
  textBox: {
    height: 60,
    borderWidth: 1,
    fontSize: 35,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 35,
    backgroundColor: '#f98b88',
  },
  buttonText: {
    fontSize: 35,
  },
  priceDisplay: {
    fontSize: 35,
    padding: 10,
  },
  imageContainer: {
    padding: 50,
  }
});
