import {Children} from 'react';
import {StyleSheet, Text} from 'react-native';


function Title({Children}) {
  return <Text style={styles.title}>{Children}</Text>;
}
export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'red',
  },
});
