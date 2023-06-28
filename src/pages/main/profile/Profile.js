import {View, Text, Image} from 'react-native';
import styles from './Profile.style';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from '../../../styles/styles';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import ParseContentData from '../../../utils/ParseContentData';
import {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import ProfileInfoCard from '../../../components/cards/ProfileInfoCard';
const Profile = ({navigation}) => {
  const url =
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png';

  const [data, setData] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    getUserData();
    
  }, []);

  function calculateDailyNeeds(data) {
    if (data) {
      if (data.gender == 'male') {
        const bmr = Math.round(
          (88.4 + 13.4 * data.weight + 4.8 * data.height - 5.7 * data.age) *
            1.4,
        );
        const bmi = Math.round(
          data.weight / ((data.height / 100) * (data.height / 100)),
        );
        const flc = bmr - 500;
        let userInfo = {
          bmr: bmr,
          bmi: bmi,
          flc: flc,
        };

        setUserInfo(userInfo);
        console.log(bmi, bmr, flc);
      } else {
        const bmr = Math.round(
          (447.6 + 9.2 * data.weight + 3.1 * data.height - 4.3 * data.age) *
            1.4,
        );
        const bmi = Math.round(
          data.weight / ((data.height / 100) * (data.height / 100)),
        );
        const flc = bmr - 500;
        console.log(bmi, bmr);

        let userInfo = {
          bmr: bmr,
          bmi: bmi,
          flc: flc,
        };
        setUserInfo(userInfo);
      }
    }
  }
  async function getUserData() {
    let id = auth().currentUser.uid;
    await database()
      .ref('diet/users/' + id + '/userinformation')
      .on('value', snapshot => {
        const data = snapshot.val();
        calculateDailyNeeds(data);
        setData(data);
      });
  }
 function onPressHomeIcon(){
  navigation.navigate('HomePage')
 }
 function onPressSignOutIcon(){
  auth().signOut()
  navigation.navigate('StartScreens')
 }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: url}} />
        </TouchableOpacity>
        {data ? (
          <View style={styles.textArea}>
            <Text style={styles.text}>Mahmut</Text>
            <Text style={styles.text1}># {data.gender}</Text>
          </View>
        ) : null}

        <View style={styles.iconArea}>
          <TouchableOpacity onPress={onPressHomeIcon}>
            <Icon name="home" size={30} color={Styles.black} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressSignOutIcon}> 
            <Icon name="exit" size={30} color={Styles.black} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        {data ? (
          <View style={styles.bodyHeader}>
            <View style={styles.infoCon}>
              <Text style={styles.infoText}>Height</Text>
              <Text style={styles.info}>{data.height}</Text>
            </View>
            <View style={styles.infoCon}>
              <Text style={styles.infoText}>Weight</Text>
              <Text style={styles.info}>{data.weight}</Text>
            </View>
            <View style={styles.infoCon}>
              <Text style={styles.infoText}>Age</Text>
              <Text style={styles.info}>{data.age}</Text>
            </View>
          </View>
        ) : null}
        <View style={styles.seperator}></View>
        {userInfo ? (
          <View style={styles.bodyFooter}>
            <View style={{flexDirection: 'row', marginVertical: 10}}>
              <ProfileInfoCard header="Body Mass Index" info={userInfo.bmi} />
              <ProfileInfoCard
                header="Daily Calorie Needs"
                info={userInfo.bmr}
              />
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <ProfileInfoCard header="Fat Loss Calorie" info={userInfo.flc} />
            </View>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default Profile;
