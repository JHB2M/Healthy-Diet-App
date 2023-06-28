import {View, Text, FlatList, ScrollView} from 'react-native';
import styles from './Calender.style';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {Calendar} from 'react-native-calendars';
import DatePicker from 'react-native-date-picker';
import {useEffect, useState} from 'react';
import ParseContentData from '../../../utils/ParseContentData';
import Button from '../../../components/button/Button';
import CalendarFoodCard from '../../../components/cards/CalendarFoodCard';
import FlashMessage, {showMessage} from 'react-native-flash-message';

const Calender = () => {
  const [foodList, setFoodList] = useState([]);
  const [date, setDate] = useState(new Date());
  const [filteredList, setfilteredList] = useState([]);
  useEffect(() => {
    getUserFoodList();
  }, []);

  async function getUserFoodList() {
    let id = auth().currentUser.uid;
    await database()
      .ref('diet/users/' + id + '/foods')
      .on('value', snapshot => {
        const data = snapshot.val();
        const parsedData = ParseContentData(data);
        setFoodList(parsedData);
      });
    setDate(date);
  }

  function handleDayPress(day) {
    setDate(day);

    if (foodList.length > 0) {
      const filteredList = foodList.filter(x => {
        return x.foodDate.substring(0, 10) == day.dateString;
      });
      setfilteredList(filteredList);
    }
  }
  async function deleteFood(food) {
    let id = auth().currentUser.uid;
    console.log(id);
    try {
      await database()
        .ref('diet/users/' + id + '/foods/' + food.id)
        .remove();
      showMessage({
        message: 'Food deleted successfully...',
        type: 'success',
      });
    } catch (error) {
      console.log(error);
    }
  }
  const renderContentData = ({item}) => (
    <CalendarFoodCard food={item} onPressDelete={() => deleteFood(item)} />
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Calendar style={styles.calendar} onDayPress={handleDayPress} />
      </View>

      <FlatList
        style={styles.flatlist}
        data={filteredList}
        renderItem={renderContentData}
      />

      <View style={{height: 10}}></View>
      <FlashMessage position="top" />
    </View>
  );
};

export default Calender;
