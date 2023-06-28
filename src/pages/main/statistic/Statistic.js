import {View, FlatList, Text} from 'react-native';
import styles from './Statistic.style';

import {BarChart} from 'react-native-chart-kit';

import Header from '../../../components/header/Header';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import ParseContentData from '../../../utils/ParseContentData';
import {useEffect, useState} from 'react';
import FoodHistoryCard from '../../../components/cards/FoodHistoryCard';

const Statistic = () => {
  const [foodList, setFoodList] = useState([]);
  const [totalValues, setTotalValues] = useState({});
  const [filteredList, setfilteredList] = useState([]);
  const [totalFilteredValues, setfilteredListValues] = useState({});

  const data = {
    labels: ['Fat', 'Carbohnydrate', 'Fiber', 'Protein'],
    datasets: [
      {
        data: [
          totalValues.fat,
          totalValues.carbohydrates / 4,
          totalValues.fiber,
          totalValues.protein,
        ],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ['Rainy Days'], // optional
  };
  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.9,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 1, // optional, default 3
    barPercentage: 1.2,
    useShadowColorFromDataset: false, // optional
  };

  useEffect(() => {
    getUserFoodList();
  }, []);

  async function getUserFoodList() {
    let id = auth().currentUser.uid;
    await database()
      .ref('diet/users/' + id + '/foods')
      .on('value', snapshot => {
        const data = snapshot.val();
        const parsedData = ParseContentData(data);
        setFoodList(parsedData);

        sumUserValues(parsedData);
      });
  }
  // sum  of all food information
  function sumUserValues(foodList) {
    const date = new Date();
    const day = date.toISOString().substring(8, 10);

    console.log(day);
    const filterList = foodList.filter(x => {
      return day == x.foodDate.substring(8, 10);
    });

    const totalSums = foodList.reduce(
      (accumulator, index) => {
        return {
          calories: accumulator.calories + index.foodInformation.calories,
          protein: accumulator.protein + index.foodInformation.protein_g,
          carbohydrates:
            accumulator.carbohydrates +
            index.foodInformation.carbohydrates_total_g,
          fat: accumulator.fat + index.foodInformation.fat_total_g,
          fiber: accumulator.fiber + index.foodInformation.fiber_g,
        };
      },
      {calories: 0, carbohydrates: 0, protein: 0, fat: 0, fiber: 0},
    );
    setTotalValues(totalSums);

    const filteredListSums = filterList.reduce(
      (accumulator, index) => {
        return {
          calories1: accumulator.calories1 + index.foodInformation.calories,
        };
      },
      {calories1: 0},
    );
    setfilteredListValues(filteredListSums);
  }

  const renderContentData = ({item}) => <FoodHistoryCard food={item} />;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerBody}>
          <Text style={styles.infoText}>Daily Calorie Need</Text>
          <Text style={styles.info}>2100/{totalFilteredValues.calories1}</Text>
        </View>
        <View style={styles.seperator}></View>
        <View style={styles.headerBody}>
          <Text style={styles.infoText}>Weekly Calorie Need</Text>
          <Text style={styles.info}>
            {2100 * 7}/{totalValues.calories}
          </Text>
        </View>
      </View>
      <Header text="Weekly Chart" theme="secondary" />
      <BarChart
        style={styles.barChart}
        data={data}
        width={350}
        height={220}
        chartConfig={chartConfig}
        verticalLabelRotation={0}
      />
      <View style={styles.history}>
        <Header text="Foods History" theme="secondary" />
        <FlatList
          style={styles.flatlist}
          data={foodList}
          renderItem={renderContentData}
        />
      </View>
    </View>
  );
};

export default Statistic;
