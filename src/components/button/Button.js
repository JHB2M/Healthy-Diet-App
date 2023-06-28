import {Text, TouchableOpacity, View} from 'react-native';
import styles from './Button.style';

import Icon from 'react-native-vector-icons/Foundation';
export default function Button({text, theme, onPress, iconName}) {
  return (
    <TouchableOpacity style={styles[theme].container} onPress={onPress}>
      <Text style={styles[theme].text}>{text}</Text>
      <View style={styles[theme].iconView}>
        <Icon name={iconName} size={30} color="white" />
      </View>
    </TouchableOpacity>
  );
}
