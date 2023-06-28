import {border} from 'native-base/lib/typescript/theme/styled-system';
import {View, Text,FlatList} from 'react-native';
import {StyleSheet} from 'react-native';
import Styles from '../../styles/styles';

import FoodDetailCard from '../foodDetailCard/FoodDetailCard';
export default function IngredientsCard({item}) {
  const DATAS = [
    {
      title:'Calories : ',
      value:item.calories,
    },
    {
      title:'Carbohydrates(g) : ',
      value:item.carbohydrates_total_g,
    },
    {
      title:'Cholesterol(mg) : ',
      value:item.cholesterol_mg,
    },
    {
      title:'Sodium(mg) : ',
      value:item.sodium_mg,
    },
    {
      title:'Fat(g) : ',
      value:item.fat_total_g,
    },
    {
      title:'Fiber(g) : ',
      value:item.fiber_g,
    },
    {
      title:'Potassium(mg) : ',
      value:item.potassium_mg,
    },
    {
      title:'Protein(g) : ',
      value:item.protein_g,
    },
    {
      title:'Serving Size(g) : ',
      value:item.serving_size_g,
    },
    {
      title:'Sugar(g) : ',
      value:item.sugar_g,
    },
   
  ]

  console.log(item);
  const renderContentData = ({item}) => <FoodDetailCard item  ={item}/>
  return (
    <View style={styles.container}>
      <FlatList
      data={DATAS}
      renderItem={renderContentData}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:20,
    borderRadius:10,
    alignItems:'center',
    margin:10,
    margin: 3,
  },
  
});
