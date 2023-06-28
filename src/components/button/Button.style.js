import {StyleSheet} from 'react-native';
import styles from '../../styles/styles';

const baseStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 56,
    backgroundColor: styles.darkGreen,
    alignItems: 'center',
    borderRadius: 10,
    margin: 15,
    width: 370,
    justifyContent: 'center',
  },
  text: {
    alignSelf: 'center',

    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconView: {
    position: 'absolute',
    right: 10,
    alignItems: 'flex-end',
  },
});

export default {
  primary: StyleSheet.create({
    ...baseStyle,
    container: {
      ...baseStyle.container,
    },
    text: {
      ...baseStyle.text,
      color: 'white',
    },
  }),
  secondary: StyleSheet.create({
    ...baseStyle,
    container: {
      ...baseStyle.container,
      backgroundColor: 'white',
      borderWidth: 1.5,
      borderColor: styles.darkGreen,
    },
    text: {
      ...baseStyle.text,
      color: styles.darkGreen,
    },
  }),
  first: StyleSheet.create({
    ...baseStyle,
    container: {
      ...baseStyle.container,
      width: 180,
      margin: 0,
    },
    text: {
      ...baseStyle.text,
      color: 'white',
    },
  }),
  second: StyleSheet.create({
    ...baseStyle,
    container: {
      ...baseStyle.container,
      backgroundColor: 'white',
      borderWidth: 1.5,
      borderColor: styles.darkGreen,
      width: 180,
      margin: 0,
    },
    text: {
      ...baseStyle.text,
      color: styles.darkGreen,
    },
  }),
};
