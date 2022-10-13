import {Text,View} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOverScreen({ onStartNewGame }) {
  return (
    <View>
      <Text>GameOverScreen</Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}
export default GameOverScreen;
