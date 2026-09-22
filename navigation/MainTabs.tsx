import { createStaticNavigation } from '@react-navigation/native';
import { createBottomTabNavigator, createBottomTabScreen } from '@react-navigation/bottom-tabs';
import { Feather } from '@react-native-vector-icons/feather';
import { Home, Movies } from '../screens';

export const MainTabs = createBottomTabNavigator({
  screenOptions: {
    headerShown: false,
    tabBarStyle: {
      backgroundColor: '#fff',
      borderTopWidth: 0,
      tabBarActiveTintColor: '#0093a6',
      tabBarInactiveTintColor: '#6b6a6a',
    },
    
  },
  screens: {
    Home: createBottomTabScreen({
      screen: Home,
      options: {
        title: 'Home',
        tabBarIcon: ({color, size}) => (
          <Feather name="home" color={color} size={size} />
        ),
      },
    }),
    Movies: createBottomTabScreen({
      screen: Movies,
      options: {
        title: 'Movies',
        tabBarIcon: ({color, size}) => (
          <Feather name="film" color={color} size={size} />
        ),
      }, 
    }),
  },
});

export const Navigation = createStaticNavigation(MainTabs);