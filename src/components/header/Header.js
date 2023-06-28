import {View, Text} from 'react-native';

import styles from './Header.style';

export default function Header({text, theme = 'primary'}) {
  return (
    <View style={styles[theme].container}>
      <Text style={styles[theme].userInfo}>{text}</Text>
      <View style={styles[theme].seperator}></View>
    </View>
  );
}
