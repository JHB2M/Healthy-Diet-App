import {View,Text} from 'react-native'
import {StyleSheet} from 'react-native'
import Styles from '../../styles/styles'
export default function FoodDetailCard({item}){
  return(
    <View style={styles.textArea}>
        <View style={styles.context}>
          <Text style={styles.text}>{item.title}</Text>
          <Text style={styles.text}>{item.value}</Text>
        </View>
        <View style ={styles.seperator}></View>
      </View>
  )
}
const styles  = StyleSheet.create({
  textArea:{
    marginTop:7,
  },
  text: {
    color: Styles.black,
    fontSize: 17,
    fontWeight: 'bold',
  },
  context: {
    flexDirection: 'row',
  },
  seperator: {
    marginTop:5,
    height: 1,
    backgroundColor:Styles.darkGreen,
    borderRadius: 1.5,
    width: 300,
  },
})