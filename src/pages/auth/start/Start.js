import {View, Text, Image} from 'react-native';
import styles from './Start.style';
import Button from '../../../components/button/Button';

export default function Start({navigation}) {
  function navigateToLogin() {
    navigation.navigate('LoginPage');
  }
  function navigateToRegister() {
    navigation.navigate('RegisterPage');
  }
  const url =
    'https://img.freepik.com/free-vector/hand-drawn-healthy-food-logo-template_23-2149641244.jpg';
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.image} source={{uri: url}} />
      </View>
      <View style={styles.buttonArea}>
        <Button text="Login" theme="primary" onPress={navigateToLogin} />
        <Button
          text="Register"
          theme="secondary"
          onPress={navigateToRegister}
        />
      </View>
    </View>
  );
}
