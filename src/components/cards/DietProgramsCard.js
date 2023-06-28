import {TouchableOpacity, Text, Image, View} from 'react-native';
import {StyleSheet} from 'react-native';
export default function DietProgramsCard({program,onPress}) {
  console.log(program)
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.image} source={{uri: program.imageUrl}} />
      <Text style={styles.name}>{program.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignSelf: 'center',
    borderRadius: 20,
  },
  image: {
    borderRadius: 15,
    width: 360,
    height: 70,
    resizeMode: 'cover',
    opacity: 0.7,
  },
  name: {
    margin: 25,
    fontSize: 25,

    alignSelf: 'center',
    color: 'white',
    position: 'absolute',
  },
});
