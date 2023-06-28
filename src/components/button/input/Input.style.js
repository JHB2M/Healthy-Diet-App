import {StyleSheet} from 'react-native';
import styles from '../../../styles/styles';

const baseStyle = StyleSheet.create({
  container: {
    height: 56,
    marginTop: 15,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: styles.black,
  },
  input: {
    marginLeft: 10,

    color: styles.black,
    fontSize: 15,
  },
  icon: {
    marginRight: 10,
  },
});

export default {
  first: StyleSheet.create({
    ...baseStyle,
    container: {
      ...baseStyle.container,
      height: 56,
      flexDirection: 'row',
      marginTop: 15,
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: styles.black,
    },
    input: {
      ...baseStyle.input,
      marginLeft: 10,
      width: 320,
      color: styles.black,
      fontSize: 15,
    },
  }),
  second: StyleSheet.create({
    ...baseStyle,
    container: {
      ...baseStyle.container,
    },
    input: {
      ...baseStyle.input,
      marginLeft: 10,
      width: 110,
      color: styles.black,
      fontSize: 15,
    },
  }),
};
