import {View, Text, Image} from 'react-native';
import styles from './UserInfo.style';
import CheckBox from '../../../components/checkbox/CheckBox';
import Styles from '../../../styles/styles';
import {useState, useEffect} from 'react';
import Input from '../../../components/button/input/Input';
import Button from '../../../components/button/Button';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import ParseContentData from '../../../utils/ParseContentData';
import Header from '../../../components/header/Header';
export default function UserInfo({navigation}) {
  const [gender, setGender] = useState('');
  const [users, setUsers] = useState([]);
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [currentId, setCurrentId] = useState('');
  const [isCheckedMale, setIscheckedMale] = useState(false);
  const [isCheckedFemale, setIscheckedFemale] = useState(false);

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    await database()
      .ref('diet/users')
      .on('value', snapshot => {
        const data = snapshot.val();
        const parsedData = ParseContentData(data);
        setUsers(parsedData);
        console.log(users);
      });
  }

  async function handleSaveButton() {
    let id = await auth().currentUser.uid;
    console.log(id);
    setCurrentId(id);

    if (isCheckedMale) {
      setGender('Male');
    } else {
      setGender('Female');
    }

    let userinformation = {
      gender: gender,
      age: age,
      height: height,
      weight: weight,
    };

    console.log(userinformation);

    await database()
      .ref('diet/users/' + currentId)
      .update({
        userinformation,
      });
    navigation.navigate('MainScreens');
  }

  function setGenderStateMale() {
    if (isCheckedFemale && !isCheckedMale) {
      setIscheckedMale(!isCheckedMale);
      setIscheckedFemale(!isCheckedFemale);
    } else if (isCheckedFemale == isCheckedMale) {
      setIscheckedMale(!isCheckedMale);
    }
  }
  function setGenderStateFemale() {
    if (isCheckedMale && !isCheckedFemale) {
      setIscheckedFemale(!isCheckedFemale);
      setIscheckedMale(!isCheckedMale);
    } else if (isCheckedFemale == isCheckedMale) {
      setIscheckedFemale(!isCheckedFemale);
    }
  }
  return (
    <View style={styles.container}>
      <Header text="User Info" />
      <View style={styles.informationArea}>
        <Text style={styles.informationText}>
          Please fill in your information! The information you give us will be
          used to calculate your Body Mass Index and Daily Calorie Needs and to
          recommend diet programs to you
        </Text>
      </View>
      <View style={styles.gender}>
        <CheckBox
          text="Male"
          isChecked={isCheckedMale}
          onPress={setGenderStateMale}
        />
        <CheckBox
          text="Female"
          isChecked={isCheckedFemale}
          onPress={setGenderStateFemale}
        />
      </View>
      <View style={styles.inputArea}>
        <Input placeholder="Age" value={age} onType={setAge} theme="second" />
        <Input
          placeholder="Heiht(cm)"
          value={height}
          onType={setHeight}
          theme="second"
        />
        <Input
          placeholder="Weight(kg)"
          value={weight}
          onType={setWeight}
          theme="second"
        />
      </View>
      <View style={styles.buttonArea}>
        <Button text="Save" onPress={handleSaveButton} theme="first" />
        <Button text="Clear" onPress={null} theme="second" />
      </View>
    </View>
  );
}

