import {StyleSheet} from 'react-native';
import styles from '../../../styles/styles';
export default StyleSheet.create({
  container: {
    flex: 1,
  backgroundColor:styles.ultraSkyBlue
  },
  footer: {
    marginTop: 380,
  },
  body: {
    flexDirection: 'row',
    backgroundColor: styles.ultraSkyBlue,
  },
  dayContainer: {
    flex: 0.3,

    alignItems: 'center',
  },
  flatlist: {
    
    flex:0.6
  },
  day: {
    
    marginTop: 30,
    color: 'blue',
    fontSize: 25,
  },
});
