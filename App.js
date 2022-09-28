import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useEffect, useState} from 'react';
import LottieView from 'lottie-react-native';
import Loader from './Loader'
import Finished from './finished'

export default function App() {
 /* const [show, setShow] = useState(false);

useEffect(() => {
  setTimeout(() => setShow(true), 4000);
}, []);*/

return (
  <View style={styles.container}>
    {show ?<Finished/> : <Loader /> }
    <StatusBar style="auto" />
  </View>
);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffba23',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
