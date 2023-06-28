import {View, Text, Image} from 'react-native';
import styles from './Register.style';
import Styles from '../../../styles/styles';
import {useState} from 'react';
import Input from '../../../components/button/input/Input';
import Button from '../../../components/button/Button';
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'
export default function Register({navigation}) {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const url =
    'https://img.freepik.com/free-vector/hand-drawn-healthy-food-logo-template_23-2149641244.jpg';

  async function handleLoginButton(){
    if(password ==repassword){
      let user = {
        username :username,
        email:email,
        password:password
      }
      
      try {
        await auth().createUserWithEmailAndPassword(email,password)
      } catch (error) {
        console.log(error.code)  
      }
      try {
       const userId = auth().currentUser.uid
        await database()
        .ref('diet/users/'+userId)
        .set(user)
        } catch (error) {
        console.log(error.code)        
        }
        try {
            await auth().signInWithEmailAndPassword(email,password)
        } catch (error) {
            console.log(error.code)
        }
      navigation.navigate('UserInfoPage')
    }
    else{
      console.log('Sifreler Uyusmuyor')
    }

  }

  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image style={styles.image} source={{uri: url}} />
      </View>
      <View style={styles.inputArea}>
        <Input
          value={username}
          onType={setUsername}
          iconName="user"
          placeholder="Username"
        />
        <Input
          value={email}
          onType={setEmail}
          iconName="mail"
          placeholder="E-Mail"
        />
        <Input
          value={password}
          onType={setPassword}
          iconName="key"
          placeholder="Password"
        />
        <Input
          value={repassword}
          onType={setRepassword}
          iconName="key"
          placeholder="Repassword"
        />
      </View>
      <Button text='Register' theme='primary' onPress={handleLoginButton}/>
    </View>
  );
}
