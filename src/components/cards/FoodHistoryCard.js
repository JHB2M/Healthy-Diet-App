import {View, Text} from 'react-native';
import Styles from '../../styles/styles';
import {StyleSheet} from 'react-native';
export default function FoodHistoryCard({food}) {
  const date  =food.foodDate.substring(0,10)
  return (
    <View style={styles.container}>
      <View style ={styles.textArea}>

      <Text style={styles.text1}>{food.name[0].toUpperCase()+food.name.substring(1)}</Text>
      <Text style={styles.text}>{food.foodInformation.calories} kcal</Text>
      <Text style={styles.text}>{food.repast}</Text>
      <Text style={styles.text}>{date}</Text>
      </View>
      <View style={styles.seperator}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop:10,
  },
  textArea: {
    marginHorizontal:5,
    flexDirection: 'row',
    
  },
  text1:{
    minWidth:105,
    fontSize:16,
    fontWeight:'bold',
  },
  text:{
    minWidth:105,
    fontSize:16,
  },
  seperator:{
    marginTop:15,
    height:1,
    width:410,
    alignSelf:'center',
    backgroundColor:Styles.black
  }
});
