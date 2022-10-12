import {StyleSheet, Text, View} from 'react-native';
import Title from '../components/Title';

function GameScreen() {
  return (
    <View style={styles.screen}>
        <Title>opponent guess</Title>
      <View>
        <Text>Higher or lower</Text>
      </View>
      {/* <View>Log ROunds</View> */}
    </View>
  );
}
export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
 
});
