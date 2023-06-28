import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';
import Styles from '../../styles/styles';
import ParseObjectToArray from '../../utils/ParseObjectToArray';
import {useState, useEffect} from 'react';
import DietProgramsCard from './DietProgramsCard';
import IngredientsCard from './IngredientsCard';
import axios from 'axios';
export default function FoodCard({food,onPress}) {
  const url = 'https://source.unsplash.com/400x300?';
  const [energy, setEnergy] = useState([]);
  const  foodName = food.name.toUpperCase()
  useEffect(() => {
    parseAllText();
  }, []);
  function parseAllText() {
    const arr = ParseObjectToArray(food);
    setEnergy(arr);
    
  }

 console.log(food)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
       
          <Image style={styles.image} source={{uri: url + food.name}} />
        
        <View style={styles.textArea}>
          <Text style={styles.name}>{foodName}</Text>
        </View>
        <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
          <Icon name="plus" size={35} color={Styles.lighGreen} />
        </TouchableOpacity>
      </View>
      <View style={styles.flatlist}>
        <IngredientsCard item={food}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    borderWidth: 1,
    margin: 10,
    borderColor: 'black',
    borderRadius: 10,
  },
  header: {
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  
  image:{
    borderRadius:10,
    marginLeft:40,
    width:100,
    height:100,
  },
  name:{
    fontSize:20,
    color:Styles.black,
  },
  flatlist: {
   
  
  },
  iconContainer:{
    marginRight:20,
  }
});
