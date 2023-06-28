import {TextInput, View, TouchableOpacity} from 'react-native';
import styles from './Input.style';
import Styles from '../../../styles/styles';
import Icon from 'react-native-vector-icons/AntDesign';
export default function Input({
  placeholder,
  onType,
  value,
  onPress,
  iconName,
  onChangeText,
  theme = 'first',
}) {
  return (
    <View style={styles[theme].container}>
      <TextInput
    
        onChange={onChangeText}
        style={styles[theme].input}
        value={value}
        onChangeText={onType}
        placeholder={placeholder}
      />
      <TouchableOpacity style={styles[theme].icon} onPress={onPress}>
        <Icon name={iconName} size={25} color={Styles.black} />
      </TouchableOpacity>
    </View>
  );
}
