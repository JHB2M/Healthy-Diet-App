import {StyleSheet} from 'react-native';
import styles from '../../../../styles/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
 
  },
  header: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    borderRadius:20,
    marginTop:150,
    backgroundColor: 'white',
    maxHeight: 360,
  },
  datetime:{
   
    alignSelf:'center',
  },
  modalContainer: {
    flex:1,
  },
  modalFooter:{
    padding:5,
 
    marginTop:20,
    alignItems:'center',
  }

 
});
