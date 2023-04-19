import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatsScreen from './src/screens/ChatsScreen';
import ChatScreen from './src/screens/ChatScreen';
import Navigation from './src/navigation/index'
import {Amplify} from 'aws-amplify'

import { withAuthenticator } from "aws-amplify-react-native";

import awsconfig from './src/aws-exports'

Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });

// const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
// console.log(authUser)

function App() {

  return (
    <View style={styles.container}>
    <StatusBar hidden={true} />
      <Navigation /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

export default withAuthenticator(App);