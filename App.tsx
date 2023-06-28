import {View,Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/pages/main/home/main/Home'
import Start from './src/pages/auth/start/Start'
import Login from './src/pages/auth/login/Login'
import Register from './src/pages/auth/register/Register'
import UserInfo from './src/pages/auth/userInfo/UserInfo'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Calender from './src/pages/main/calender/Calender'
import Statistic from './src/pages/main/statistic/Statistic'
import Profile from './src/pages/main/profile/Profile'
import ProgramDetail from './src/pages/main/home/programDetail/ProgramDetail'
import CreateProgram from './src/pages/main/home/createProgram/CreateProgram'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './src/styles/styles'
import { useEffect } from 'react'
import database from '@react-native-firebase/database'
import auth from'@react-native-firebase/auth'
// this is router.js page 
const  App = () => {
  const StartStack = createNativeStackNavigator()
  const Stack  =createNativeStackNavigator()
  const Tab = createBottomTabNavigator()
  const HomeStack = createNativeStackNavigator()

 
  function HomePages() {
   return(
    <HomeStack.Navigator screenOptions={{headerShown:false}}>
    <HomeStack.Screen name='HomePagee' component={Home}/>
    <HomeStack.Screen name='ProgramDetailPagee' component={ProgramDetail}/>
    <HomeStack.Screen name='CreateProgramPagee' component={CreateProgram}/>
    </HomeStack.Navigator>
   )
  }

  function StartPages (){
    return(
      <StartStack.Navigator>
        
        <StartStack.Screen name='StartPage' component={Start}/>
        <StartStack.Screen name='LoginPage' component={Login}/>
        <StartStack.Screen name='RegisterPage' component={Register}/>
        <StartStack.Screen name='UserInfoPage' component={UserInfo}/>
      </StartStack.Navigator>
    )
  }
  function MainPages(){
    return(
      <Tab.Navigator screenOptions={{
        tabBarShowLabel:false,
        headerShown:false,
        tabBarStyle:{marginBottom:20,marginHorizontal:20,borderRadius:20,height:55,}}}>
        <Tab.Screen name='HomePage' component={HomePages}
        
        options={{
          
          tabBarIcon: ({focused, color, size }) => (
            <Icon 
            
            name="home" 
            color={focused ? styles.black : styles.darkGreen}
            size={37} />
          ),
         
        }}
        
        />
        <Tab.Screen name='CalenderPage' component={Calender}
        options={{
      
          tabBarIcon: ({focused, color, size }) => (
            <Icon 
            name="calendar-month" 
            color={focused ? styles.black : styles.darkGreen} 
            size={37} />
          ),
         
        }}/>
        <Tab.Screen name='StatisticPage' component={Statistic}
         options={{
      
          tabBarIcon: ({ focused,color, size }) => (
            <Icon 
            name="chart-areaspline"
            color={focused ? styles.black : styles.darkGreen}
            size={37} />
          ),
         
        }}/>
        <Tab.Screen name='ProfilePage' component={Profile}
         options={{
      
          tabBarIcon: ({ focused,color, size }) => (
            <Icon 
            name="face-man-profile"
            color={focused ? styles.black : styles.darkGreen}
            size={37} />
          ),
         
        }}/>
      </Tab.Navigator>
    )
  }
  return(
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='StartScreens' component={StartPages}/>
      <Stack.Screen name='MainScreens' component={MainPages}/>

     


      
      </Stack.Navigator>
    
    </NavigationContainer>
    
  )
}

export default App