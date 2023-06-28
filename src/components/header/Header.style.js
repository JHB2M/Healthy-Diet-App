import {StyleSheet} from 'react-native';
import Styles from '../../styles/styles';
const baseStyle = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  userInfo: {
    marginTop: 10,
    fontSize: 30,
    color: Styles.darkGreen,
  },
  seperator: {
    marginTop: 13,
    backgroundColor: Styles.darkGreen,
    height: 1.4,
    width: 330,
  },
});

export default {
  primary: StyleSheet.create({
    ...baseStyle,
    container: {
      ...baseStyle.container,
    },
    userInfo: {
      ...baseStyle.userInfo,
    },
    seperator: {
      ...baseStyle.seperator,
    },
  }),
  secondary: StyleSheet.create({
    ...baseStyle,
    container: {
      ...baseStyle.container,
    },
    userInfo: {
      ...baseStyle.userInfo,
      fontSize: 20,
      color: Styles.black,
    },
    seperator: {
      ...baseStyle.seperator,
      marginTop: 13,
      backgroundColor: Styles.black,
      height: 1.4,
      width: 230,
    },
  }),
};
