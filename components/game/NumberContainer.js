import {StyleSheet, View,Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function NumberContainer({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}
export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: 'red',
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: 'red',
    fontSize: 36,
    fontWeight: 'bold',
  },
});
