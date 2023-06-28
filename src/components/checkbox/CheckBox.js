import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import {StyleSheet} from 'react-native';
import Styles from '../../styles/styles';
export default function CheckBox({text, onPress, isChecked}) {
  return (
    <View style={styles.first.container}>
      {isChecked ? (
        <TouchableOpacity
          style={styles.second.circle}
          onPress={onPress}></TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.first.circle}
          onPress={onPress}></TouchableOpacity>
      )}

      <Text style={styles.first.text}>{text}</Text>
    </View>
  );
}

const baseStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    borderWidth: 2,

    borderColor: Styles.darkGreen,
    width: 25,
    height: 25,
    borderRadius: 15,
  },
  text: {
    marginLeft: 10,
    fontSize: 17,
    color: Styles.black,
  },
});

const styles = StyleSheet.create({
  first: StyleSheet.create({
    ...baseStyle,
    container: {
      ...baseStyle.container,
    },
    circle: {
      ...baseStyle.circle,
    },
    text: {
      ...baseStyle.text,
    },
  }),
  second: StyleSheet.create({
    ...baseStyle,
    container: {
      ...baseStyle.container,
    },
    circle: {
      ...baseStyle.circle,
      backgroundColor: Styles.black,
    },
    text: {
      ...baseStyle.text,
    },
  }),
});
