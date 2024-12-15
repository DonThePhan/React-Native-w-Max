/**
 * 1. npx create-expo-app --template blank <project name>
 *    - uses expo to create a react native project
 *    - --template blank makes sure it's BARE BONES (no TypeScript)
 * 2. PREVIEW app
 *    a)  Via terminal - npm run ios (will need to install EXPO on your mac first)
 *    OR
 *    b)  Via iPhone
 *        1. Install "Expo Go" on iPhone
 *        2. npm start
 *        3. scan QR w/ iPhone camera to automatically open the app on your iPhone in Expo Go
 *    
 *
 */

import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
