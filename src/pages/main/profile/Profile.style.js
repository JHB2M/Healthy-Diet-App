import {StyleSheet} from 'react-native';
import styles from '../../../styles/styles';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: styles.darkGreen,
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 25,
  },
  header: {
    margin: 20,

    flexDirection: 'row',
    alignItems: 'center',
  },
  textArea: {
    flex: 1,
    height: 100,
    marginLeft: 20,
    justifyContent: 'space-evenly',
  },
  text:{
    color:styles.black,
    fontSize:17,
    fontWeight:'bold',
  },
  text1:{
    fontSize:17,
    color:styles.black
  },
  iconArea: {
    width: 75,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  body:{
    marginTop:30,
    borderTopLeftRadius:50,
    borderTopRightRadius:50,
    flex:1,
    backgroundColor:'#fff'
  },
  bodyHeader:{
    margin:20,
    flexDirection:'row',
    justifyContent:'space-around',
  },
  seperator:{
    height:1.4,
    backgroundColor:styles.black,
    alignSelf:'center',
    width:370,
  },
  infoCon:{
    alignItems:'center',
  },
  infoText:{
    fontSize:17,
  },
  info:{
    marginTop:5,
    color:styles.black,
    fontWeight:'bold',
    fontSize:19,
  }
});
