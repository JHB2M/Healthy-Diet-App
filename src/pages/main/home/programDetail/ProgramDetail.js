import {View, Text, FlatList, Image} from 'react-native';
import styles from './ProgramDetail.style';
import {ScrollView} from 'native-base';
import {useEffect, useState} from 'react';
import IngredientsCard from '../../../../components/cards/IngredientsCard';
import ParseText from '../../../../utils/ParseText';
import ParseContentData from '../../../../utils/ParseContentData';
import ParseObjectToArray from '../../../../utils/ParseObjectToArray';
import Button from '../../../../components/button/Button';
export default function ProgramDetail({route}) {
  const item = route.params;
  const energy  = item.energy
  const [ingredients, setIngredients] = useState([]);
  const [instructionss, setInstructions] = useState([]);
  const [energys, setEnergys] = useState([]);


 
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={{uri: item.imageUrl}} />
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <View style={styles.exp}>
        <View style={styles.categoryArea}>
        <IngredientsCard item={energy}/>

        </View>
        <View style={styles.categoryArea}>
         
        </View>
        <View style={styles.categoryArea}>
         
        </View>
        <Button text="Start" onPress={null} theme="primary" />
      </View>
    </View>
  );
}
