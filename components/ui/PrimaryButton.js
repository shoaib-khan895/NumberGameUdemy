import {View, Text, Touchable, Pressable, StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

function PrimaryButton({children, onPress}) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        style={styles.buttonInnerContanier}
        android_ripple={{color:Colors.primary500 }}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContanier: {
    backgroundColor: '#72063c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 10,
    margin: 4,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
