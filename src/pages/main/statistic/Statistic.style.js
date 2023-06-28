import {StyleSheet} from 'react-native';
import styles from '../../../styles/styles';
export default StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    paddingVertical: 5,
    backgroundColor: styles.darkGreen,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderBottomRightRadius: 70,
    borderBottomLeftRadius: 70,
  },
  seperator: {
    height: 70,
    backgroundColor: styles.black,
    width: 2,
  },
  headerBody: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    color: 'white',
    fontSize: 16,
  },
  info: {
    marginTop: 5,
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  barChart: {
    borderRadius: 20,
    margin: 20,
    backgroundColor: styles.black,
  },
  history:{
    flex:1,
  }
});
