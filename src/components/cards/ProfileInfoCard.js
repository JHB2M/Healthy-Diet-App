import {View,Text} from 'react-native'
import Styles from '../../styles/styles'
import {StyleSheet} from 'react-native'
export default function ProfileInfoCard({header,info}){
  return(
    <View style ={styles.container}>
        <Text style ={styles.header}>{header}</Text>
        <Text style ={styles.info}>{info}</Text>
      </View>
  )
}

const styles  = StyleSheet.create({
  container:{
    marginHorizontal:10,
    width:180,
    height:70,
    backgroundColor:Styles.lighGreen,
    alignItems:'center',
    justifyContent:'space-around',
    borderRadius:10,
  },
  header:{
    color:'white',
    fontSize:17,
    fontWeight:'bold',
  },
  info:{
    color:'white',
    fontSize:17,
    fontWeight:'bold',
  }

})