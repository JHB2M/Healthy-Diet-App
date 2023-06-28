import {View, Text, Image} from 'react-native';
import styles from './Login.style';
import Input from '../../../components/button/input/Input';
import Button from '../../../components/button/Button';
import {useState} from 'react';
import auth from '@react-native-firebase/auth';
export default function Login({navigation}) {
  const url =
    'https://img.freepik.com/free-vector/hand-drawn-healthy-food-logo-template_23-2149641244.jpg';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLoginButton() {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      console.log('Giris Basarılı');

      navigation.navigate('MainScreens')
    } catch (error) {
      console.log(error.code);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image style={styles.image} source={{uri: url}} />
      </View>
      <View style={styles.inputArea}>
        <Input
          placeholder="E-mail"
          iconName="mail"
          value={email}
          onType={setEmail}
        />
        <Input
          placeholder="Password"
          iconName="key"
          value={password}
          onType={setPassword}
        />
      </View>
      <View style={styles.buttonArea}>
        <Button text="Login" theme="primary" onPress={handleLoginButton} />
      </View>
    </View>
  );
}
