import {View, FlatList, Text} from 'react-native';
import styles from './Home.style';
import FetchData from '../../../../utils/FetchData';
import {useEffect, useState} from 'react';
import Header from '../../../../components/header/Header';
import Button from '../../../../components/button/Button';
import DietProgramsCard from '../../../../components/cards/DietProgramsCard';
import DietProgram from '../../../../consts/DietPrograms.json';
const Home = ({navigation}) => {
  const [food, setFood] = useState('');
  //const {data,error,loading} = FetchData('bread')

 
  function handleProgramDetail(item) {
   
    navigation.navigate('ProgramDetailPagee', item);
  }
  function handleCreateProgram() {
    navigation.navigate('CreateProgramPagee');
  }

  const renderProgramsData = ({item}) => (
    
    <DietProgramsCard
      program={item}
      onPress={() => handleProgramDetail(item)}
    />
  );
  return (
    <View style={styles.container}>
      <View style ={styles.header}>
      <Header text="Home" />
      
      <Button text="Create your personal diet program!" theme="primary"  onPress={handleCreateProgram} iconName='plus'/>
      <Header text="Diet Programs" theme="secondary" />
      </View>
      <View style={styles.dietListArea}>
        <FlatList data={DietProgram} renderItem={renderProgramsData} />
      </View>
      <View style={styles.recommendedArea}>
        <Header text="Recommended Diet" theme="secondary" />
      </View>
      <DietProgramsCard program={DietProgram[2]} />
    </View>
  );
};

export default Home;
