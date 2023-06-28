import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import Styles from '../../styles/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ParseObjectToArrayCalendar from '../../utils/ParseObjectToArrayCalendar';
import IngredientsCard from './IngredientsCard';
export default function CalendarFoodCard({food, onPressDelete}) {
  const hour = food.foodDate.substring(11, 16);

  const data = ParseObjectToArrayCalendar(food.foodInformation);
  const renderContentData = ({item}) => <IngredientsCard item={item} />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={{uri: food.imageUrl}} />
        <View style={styles.textArea}>
          <Text style={styles.text}>{food.name}</Text>
          <Text style={styles.text1}>{food.repast}</Text>
          <Text style={styles.text1}>{hour}</Text>
        </View>
        
        <TouchableOpacity style={styles.iconContainer} onPress={onPressDelete}>
          <Icon name="cancel" size={27} color="red" />
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <IngredientsCard item={food.foodInformation}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 10,
  },
  header: {
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    marginLeft: 50,
    borderRadius: 13,
    height: 100,
    minWidth: 100,
  },
  textArea: {
    height: 100,
    justifyContent: 'space-around',
    marginLeft: 20,
    flex: 1,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 17,
    color: Styles.black,
  },
  text1: {
    fontSize: 16,
    color: Styles.black,
  },
  iconContainer: {
    marginRight: 20,
  },
  footer: {
    marginHorizontal: 10,
    marginTop: 10,
    padding: 2,
    borderRadius: 10,
    
  },
});
