import {View, FlatList, Text, Touchable, TouchableOpacity} from 'react-native';
import Input from '../../../../components/button/input/Input';
import styles from './CreateProgram.style';
import FetchData from '../../../../utils/FetchData';
import {useState, useEffect} from 'react';
import FoodCard from '../../../../components/cards/FoodCard';
import Button from '../../../../components/button/Button';
import DatePicker from 'react-native-date-picker';
import Modal from 'react-native-modal';
import {SelectList} from 'react-native-dropdown-select-list';
import {showMessage, hideMessage} from 'react-native-flash-message';
import FlashMessage from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import ParseContentData from '../../../../utils/ParseContentData';
const url = 'https://source.unsplash.com/400x300?';
export default function CreateProgram() {
  const [text, setText] = useState('');
  const [food, setFood] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const [buttonBool, setButtonBool] = useState(true);

  const repastList = [
    {key: '1', value: 'BreakFast'},
    {key: '2', value: 'Brunc'},
    {key: '3', value: 'Lunch'},
    {key: '4', value: 'Dinner'},
    {key: '5', value: 'Snack'},
  ];

  const handleFetchData = async () => {
    if (text.length > 3) {
      const data = await FetchData(text);
      setFood(data.items);
      console.log(food);
    }
  };

  function handleOpenTimer() {
    setOpen(true);
  }

  function onDateChange(date) {
    setDate(date);
    console.log(date);
  }

  function handleTimerConfirm() {
    console.log(date);
    saveUserFood();
    showMessage({
      message: 'Food saved successfully...',
      type: 'success',
    });
    setOpen(false);
    console.log(selected);
  }

  async function saveUserFood() {
    let userFoods = {
      foodInformation: food[0],
      repast: selected,
      foodDate: date.toISOString(),
      name: food[0].name,
      imageUrl: url + food[0].name,
    };
    let id = auth().currentUser.uid;
    await database()
      .ref('diet/users/' + id + '/foods')
      .push(userFoods);
  }

  const renderContentData = ({item}) => (
    <FoodCard food={item} onPress={handleOpenTimer} />
  );
console.log(food)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Input
          onChangeText={handleFetchData}
          placeholder="search..."
          iconName="search1"
          value={text}
          onType={setText}
          onPress={handleFetchData}
        />
      </View>

      <View style={styles.flatlist}>
        <FlatList data={food} renderItem={renderContentData} />
      </View>

      <Modal
        backdropOpacity={0.4}
        style={styles.modal}
        swipeDirection="down"
        isVisible={open}
        onSwipeComplete={handleTimerConfirm}
        onBackdropPress={handleTimerConfirm}
        onBackButtonPress={handleTimerConfirm}>
        <View style={styles.modalContainer}>
          <DatePicker
            style={styles.datetime}
            date={date}
            onDateChange={onDateChange}
            mode="datetime"
          />
          <View style={styles.modalFooter}>
            <SelectList
              search={false}
              boxStyles={{width: 300}}
              dropdownStyles={{
                backgroundColor: 'white',
                width: 300,
              }}
              dropdownTextStyles={{fontSize: 16, margin: 1}}
              placeholder="Select Repast"
              setSelected={val => setSelected(val)}
              data={repastList}
              save="value"
            />
            {buttonBool ? (
              <Button theme="first" text="Save" onPress={handleTimerConfirm} />
            ) : null}
          </View>
        </View>
      </Modal>
      <FlashMessage position="top" />
    </View>
  );
}
// wifi password  = NYXHA33NAHMT
