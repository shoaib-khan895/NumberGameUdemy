import {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import PrimaryButton from './components/PrimaryButton';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }
  let screen = (
    <StartGameScreen onPickNumber={pickedNumberHandler}></StartGameScreen>
  );
  if (userNumber) {
    screen = <GameScreen />;
  }

  return (<SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
    
  );
}
const styles = StyleSheet.create({
  rootScreen: {backgroundColor: '#ddb52f', flex: 1},
});
